# Substrate-Website: build the static site, serve it with nginx.
#
# Astro output is pure static files, so the runtime image is just nginx.
# Node exists only in the build stage and never ships.
#
# Pinned by digest-able tag. `latest` on a docs site whose whole pitch is
# reproducibility is not acceptable.

# --- build stage -----------------------------------------------------------
FROM node:26-alpine AS build
WORKDIR /build

# Deps first: this layer is cached until package.json/lockfile change.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# --- runtime stage ---------------------------------------------------------
FROM nginx:1.29-alpine AS runtime

# Replace the stock site config with ours (see nginx.conf).
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Astro's static output.
COPY --from=build /build/dist /usr/share/nginx/html

EXPOSE 80
