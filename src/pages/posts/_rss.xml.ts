import type { APIContext } from 'astro';
import { type CollectionEntry } from 'astro:content';
import rss from '@astrojs/rss';

import config from "@config/config.json";

import { getAllPosts, getAuthorsByPost } from "@lib/contentParser";

export async function GET(context: APIContext) {
  const posts = await getAllPosts();
  const postAuthorsMap = new Map<CollectionEntry<"posts">, CollectionEntry<"authors">[]>();
  for (const post of posts) {
    postAuthorsMap.set(post, await getAuthorsByPost(post));
  }

  return rss({
    title: config.site.title,
    description: config.metadata.meta_description,
    site: context.site!,
    items: posts.map(post => ({
      author: postAuthorsMap.get(post)!.map(author => author.data.title).join(),
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/posts/${post.slug}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
