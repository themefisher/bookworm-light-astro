# Bookworm Light Astro (v4)

Bookworm Light is a feature-rich, minimal, highly customizable, easy-to-use free Astro 4.x blog theme.

This theme is based on [this one](https://github.com/themefisher/bookworm-light-astro) by [Themefisher](https://themefisher.com). A number of improvements and other changes have been made:

* Astro upgraded to v4, following these guides:
  * [v2 -> v3](https://docs.astro.build/en/guides/upgrade-to/v3/)
  * [v3 -> v4](https://docs.astro.build/en/guides/upgrade-to/v4/)

* **Pages as content were removed**
  * The Themefisher template allowed pages to be created as content, i.e. you could create a `.md` file under `content/pages/` and it would automatically be made routable and presented like a page through its slug (i.e. `/page-slug`).

    There was nothing really wrong with this idea, except that it slightly complicated the routing scheme by allowing the possibility of route conflicts. I guess the original intent was to allow draft pages but drafting seems to not be necessary when you have a full version control system available to you as well as built-in support using the underscore (`_`) prefix convention for [pages](https://docs.astro.build/en/core-concepts/routing/#excluding-pages) and [content](https://docs.astro.build/en/guides/content-collections/#what-are-content-collections).

* Blog post routes were moved to `/posts/`
  * The Themefisher template created routes for posts directly under the base path (i.e. `/post-slug`).

* Images are optimized with the [`<Image />` Astro component](https://docs.astro.build/en/guides/images/#image--astroassets)
  * This component was released as a built-in in [Astro 3.0](https://astro.build/blog/astro-3/).

* View Transitions support added
  * This was also released in [Astro 3.0](https://astro.build/blog/astro-3/) but improved in [Astro 4.0](https://astro.build/blog/astro-4/#new-view-transition-apis).

* Better use of TypeScript
  * Content types are more transparently handled in this project and typings were added to all component props.

* Reduced usage of TailwindCSS's `@apply` rule
  * It is considered a code smell to use this too much. TailwindCSS provides a [guide on reusability](https://tailwindcss.com/docs/reusing-styles) which suggests using framework components for reusable styles rather than CSS classes.

* **Significant style changes**
  * These were made in anticipation for use on a production site and interspersed with the other changes, so they can't easily be undone. However, you are encouraged to make changes to the theme anyway, and the TailwindCSS improvements should make that easier.

## [👀Demo](https://bookworm-light-astro-v4.pages.dev/) | [99-100 Lighthouse score🚀](https://pagespeed.web.dev/analysis/https-bookworm-light-astro-v4-pages-dev/2qsbt54hn5?form_factor=desktop)

Bookworm Light is a minimal multi-author free Astro blog theme which is perfect for any kind of blog website. Whether you're interested in food, beauty, travel, photography, lifestyle, fitness, health, or other topics, this theme is a great fit. The theme is super fast and SEO friendly which makes it easier for your content to be discovered by search engines.

## 🔑Key Features

- 🎨 Highly Customizable (Color, Font, Menu, Social Links, SEO Meta Tags, etc.)
- 👥 Multi-Author Support
- 📚 Authors Page
- 👤 Author Single Page
- 🔍 Search Functionality with FuseJS
- 🏷️ Tags and Categories Support
- 📲 Post Social Share Option
- 🔗 Similar Post Suggestions
- ⚡ Fast by Default (95+ Google PageSpeed Score)
- ⚙️ Netlify Settings Pre-configured
- 📬 Contact Form Support
- 🌅 Support OG Image
- ✍️ Write and Update Content in Markdown / MDX
- 📚 MDX Components Auto Import
- 📝 Includes Draft Posts
- 🚀 Built with Tailwind CSS Framework
- 📱 Fully Responsive on Desktops, Tablets, and Smartphones
- 🔍 SEO Friendly


<!-- installation -->
## 🔧Installation

After downloading the template, you have some prerequisites to install. Then you can run it on your localhost. You can view the package.json file to see which scripts are included.

### ⚙️Install prerequisites (once for a machine)

- **Node Installation:** [Install node js](https://nodejs.org/en/download/) [Recommended LTS version; Minimum 18.1.4]

### 🖥️Local setup

After successfully installing those dependencies, open this template with any IDE [[VS Code](https://code.visualstudio.com/) recommended], and then open the internal terminal of IDM [vs code shortcut <code>ctrl/cmd+\`</code>]

- Install dependencies

```
npm install
```

- Run locally

```
npm run dev
```

After that, it will open up a preview of the template in your default browser, watch for changes to source files, and live-reload the browser when changes are saved.

## 🔨Production Build

After finishing all the customization, you can create a production build by running this command.

```
npm run build
```

<!-- reporting issue -->
## 🐞Reporting Issues

We use GitHub Issues as the official bug tracker for this Template. Please Search [existing issues](https://github.com/krazkidd/bookworm-light-astro-v4/issues). It’s possible someone has already reported the same problem.
If your problem or idea has not been addressed yet, feel free to [open a new issue](https://github.com/krazkidd/bookworm-light-astro-v4/issues).


<!-- licence -->
## 📄License

Copyright (c) 2016 - Present, Designed & Developed by [Themefisher](https://themefisher.com)

Copyright (c) 2023, Mark Ross (Xericode)

**Code License:** Released under the [MIT](https://github.com/krazkidd/bookworm-light-astro-v4/blob/main/LICENSE) license.

**Image license:** The images are only for demonstration purposes. They have their license, we don't have permission to share those images.
