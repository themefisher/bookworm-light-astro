import { defineCollection, reference, z } from "astro:content";

// Post collection schema
const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date(),
    image: image().optional(),
    authors: z.array(reference('authors')),
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
        mastodon: z.string().url().optional(),
        instagram: z.string().url().optional(),
        youtube: z.string().url().optional(),
        linkedin: z.string().url().optional(),
        github: z.string().url().optional(),
        gitlab: z.string().url().optional(),
        discord: z.string().url().optional(),
        slack: z.string().url().optional(),
        medium: z.string().url().optional(),
        codepen: z.string().url().optional(),
        bitbucket: z.string().url().optional(),
        dribbble: z.string().url().optional(),
        behance: z.string().url().optional(),
        pinterest: z.string().url().optional(),
        soundcloud: z.string().url().optional(),
        tumblr: z.string().url().optional(),
        reddit: z.string().url().optional(),
        vk: z.string().url().optional(),
        whatsapp: z.string().url().optional(),
        snapchat: z.string().url().optional(),
        vimeo: z.string().url().optional(),
        tiktok: z.string().url().optional(),
        foursquare: z.string().url().optional(),
        rss: z.string().url().optional(),
        email: z.string().url().optional(),
        phone: z.string().url().optional(),
        address: z.string().url().optional(),
        skype: z.string().url().optional(),
        website: z.string().url().optional(),
      })
      .optional(),
    draft: z.boolean().optional(),
  }),
});

const servicesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    image: image().optional(),
    description: z.string().optional(),
    topics: z.array(z.string()).default([]),
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
    url: z.string().url().optional(),
    topics: z.array(z.string()).default([]),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  posts: postsCollection,
  authors: authorsCollection,
  services: servicesCollection,
  portfolio: portfolioCollection,
};
