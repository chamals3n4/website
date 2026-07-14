// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://chamalsena.me',
	integrations: [mdx(), sitemap()],
	markdown: {
		syntaxHighlight: {
			type: 'shiki',
			excludeLangs: ['math'],
		},
		shikiConfig: {
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
			langAlias: {
				bash: 'shellscript',
				shell: 'shellscript',
				sh: 'shellscript',
				zsh: 'shellscript',
				yml: 'yaml',
			},
			transformers: [
				{
					name: 'code-language-attribute',
					pre(node) {
						node.properties ??= {};
						node.properties['data-language'] = this.options.lang;
					},
				},
			],
		},
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
