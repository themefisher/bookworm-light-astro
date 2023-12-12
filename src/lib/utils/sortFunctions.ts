import type { CollectionEntry } from 'astro:content';

// sort by date
export const sortByDate = (array: CollectionEntry<'posts'>[]) => {
  return array.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
};

export const sortByName = (array: CollectionEntry<'authors'>[]) => {
  return array.sort((a, b) => b.data.title.localeCompare(a.data.title));
};

// sort product by weight
export const sortByWeight = (array: any[]) => {
  const withWeight = array.filter(
    (item: { data: { weight: any } }) => item.data.weight
  );
  const withoutWeight = array.filter(
    (item: { data: { weight: any } }) => !item.data.weight
  );
  const sortedWeightedArray = withWeight.sort(
    (a: { data: { weight: number } }, b: { data: { weight: number } }) =>
      a.data.weight - b.data.weight
  );
  const sortedArray = [...new Set([...sortedWeightedArray, ...withoutWeight])];
  return sortedArray;
};
