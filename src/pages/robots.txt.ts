import type { APIRoute } from 'astro';
import config from "@/config/config.json";

const robotsTxt = `
User-agent: *
Allow: /
Disallow: /api/*

Sitemap: ${new URL(config.site.sitemap, import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
    return new Response(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
};