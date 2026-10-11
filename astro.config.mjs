// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://substrate.win',
	integrations: [
		starlight({
			title: 'Substrate',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/s-k-y-h-i-g-h/Substrate-Website' },
			],
			sidebar: [
				{
					label: 'Manifesto',
					items: [{ label: 'Why Substrate exists', slug: 'manifesto' }],
				},
				{
					label: 'Local-First LLMs',
					items: [
						{ label: 'Overview', slug: 'llms/overview' },
						{ label: 'Hardware Guide', slug: 'llms/hardware' },
						{ label: 'FreeLLMAPI', slug: 'llms/freellmapi' },
					],
				},
				{
					label: 'Biohacking',
					items: [
						{ label: 'Evidence Grading', slug: 'biohacking/evidence-grading' },
						{ label: 'Supplement Protocols', slug: 'biohacking/protocols' },
						{ label: 'Tracking Stack', slug: 'biohacking/tracking' },
					],
				},
				{
					label: 'Self-Hosted',
					items: [
						{ label: 'Architecture', slug: 'self-hosted/architecture' },
						{ label: 'Reverse Proxies', slug: 'self-hosted/proxies' },
						{ label: 'Monitoring', slug: 'self-hosted/monitoring' },
					],
				},
			],
		}),
	],
});
