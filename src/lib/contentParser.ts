import { getCollection } from "astro:content";

import { slugify } from "./utils/textConverter";

//TODO allow drafts in DEV mode
//     https://docs.astro.build/en/guides/content-collections/#filtering-collection-queries

export async function getAllAuthors() {
  return getCollection('authors', ({ data }) => !data.draft);
};

export async function getAllPosts() {
  return getCollection('posts', ({ data }) => !data.draft);
};

export async function getAllPostCategories() {
  const taxonomyPages = (await getAllPosts()).map(({ data }) => data.categories);

  const taxonomies = taxonomyPages.reduce((acc, currentValue) => {
    return acc.concat(currentValue.map(category => slugify(category)!));
  }, []);

  return [...new Set(taxonomies)];
};

export async function getAllPostTags() {
  const taxonomyPages = (await getAllPosts()).map(({ data }) => data.tags);

  const taxonomies = taxonomyPages.reduce((acc, currentValue) => {
    return acc.concat(currentValue.map(category => slugify(category)!));
  }, []);

  return [...new Set(taxonomies)];
};
