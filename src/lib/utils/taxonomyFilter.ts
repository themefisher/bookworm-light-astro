import { slugify } from "@lib/utils/textConverter";
import type { CollectionEntry } from "astro:content";

const taxonomyFilter = (posts: CollectionEntry<'posts'>[], name: 'categories' | 'tags', key: string) =>
  posts.filter((post) =>
    post.data[name].map((name: string) => slugify(name)).includes(key)
  );

export default taxonomyFilter;
