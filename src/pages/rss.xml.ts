// this file's basename should match to @/config/social.json's rss name
import rss from '@astrojs/rss';
import { getSinglePage } from "@/lib/contentParser.astro";
import config from "@/config/config.json";

export async function GET(context) {
    const posts = await getSinglePage("posts");
    return rss({
        title: config.site.title,
        description: config.metadata.meta_description,
        site: context.site,
        trailingSlash: false,
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.date,
            link: `/${post.slug}/`,
        })),
    });
}
