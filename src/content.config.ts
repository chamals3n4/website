import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

const optionalUrl = z.preprocess(
	(val) => (val === '' || val === null || val === undefined ? undefined : val),
	z.string().url().optional(),
);

/** Absolute http(s) URL or site-relative path (e.g. `/`, `/blog`) */
const optionalHref = z.preprocess(
	(val) => (val === '' || val === null || val === undefined ? undefined : val),
	z
		.string()
		.refine(
			(s) => {
				if (s.startsWith('/')) return true;
				try {
					const u = new URL(s);
					return u.protocol === 'http:' || u.protocol === 'https:';
				} catch {
					return false;
				}
			},
			{ message: 'Must be an http(s) URL or a path starting with /' },
		)
		.optional(),
);

const projects = defineCollection({
	loader: glob({ base: 'src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		/** Lower sorts first within the same featured group */
		order: z.coerce.number().default(0),
		/** Shown in the top “spotlight” block (first three after sort) */
		featured: z.coerce.boolean().default(false),
		url: optionalHref,
		repo: optionalUrl,
	}),
});

export const collections = { blog, projects };
