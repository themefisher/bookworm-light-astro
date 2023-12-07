import { defineCollection, z } from "astro:content";

// Post collection schema
const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: image().optional(),
    authors: z.array(z.string()).default(["admin"]),
    categories: z.array(z.string()).default(["other"]),
    tags: z.array(z.string()).default(["other"]),
    draft: z.boolean().optional(),
    featured: z.boolean().optional(),
  }),
});

// Author collection schema
const authorsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    image: image().optional(),
    description: z.string().optional(),
    social: z
      .object({
        facebook: z.string().url().optional(),
        twitter: z.string().url().optional(),
        instagram: z.string().url().optional(),
      })
      .optional(),
    draft: z.boolean().optional(),
  }),
});

const portfolioCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    image: image().optional(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  posts: postsCollection,
  authors: authorsCollection,
  portfolio: portfolioCollection,
};
