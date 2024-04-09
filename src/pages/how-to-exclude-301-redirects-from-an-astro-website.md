---
  title: "How to exclude astro redirects from sitemap.xml build"
  description: "How to exclude astro redirects from sitemap.xml build"
  tags: ["astro", "builds"]
  slug: "how-to-exclude-301-redirects-from-an-astro-website"
  pubDate: "2023-12-27"
  layout: "../layouts/BlogPostLayout.astro"
---

I am working on migrating a project to a different web domain, this one you're on in fact.

To do that I needed to setup redirects from URLs that point to the old domain to urls that pointed to the new domain. 

I'm using Astro for my website, setting up my redirects was done inside a file called `astro.config.mjs`, which is your astro configuration file.

The contents of that file in my instance included the use of the `defineConfig` function and `sitemap` function, which is used as an `integration` config list item. The `sitemap` function will run by default every time you use the command line `npx astro build`. If you define `redirects` like I did in my below config they will be included in your sitemap that is generated.

```
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  site: "https://devdecks.io",
  redirects: {
    '/2021-elixir-list-to-comma-separated-string': {
      status: 301,
      destination: 'https://tinytechtuts.com/2021-elixir-list-to-comma-separated-string'
    },
    '/2021-same-db-table-parent-child-relationship-rails': {
      status: 301,
      destination: 'https://tinytechtuts.com/2021-same-db-table-parent-child-relationship-rails'
    }
  }
})
```

I didn't want those included in my sitemap, so I found a way to filter for only the urls I want included in the Astro sitemap. In the below you'll see the call to `sitemap` now filters for only the two specified urls in the condition. The filter option will run for every url in both your redirects and pages. 


```
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap({
    filter: (page) => page == 'https://tinytechtuts.com/tiny-tech-tuts/' || page == 'https://tinytechtuts.com/', 
  })],
  site: "https://devdecks.io",
  redirects: {
    '/2021-elixir-list-to-comma-separated-string': {
      status: 301,
      destination: 'https://tinytechtuts.com/2021-elixir-list-to-comma-separated-string/'
    },
    '/2021-same-db-table-parent-child-relationship-rails': {
      status: 301,
      destination: 'https://tinytechtuts.com/2021-same-db-table-parent-child-relationship-rails/'
    }
  }
})
```

I hope this helped! Have a good one!