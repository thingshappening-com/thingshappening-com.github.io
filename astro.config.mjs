import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap()],
  site: "https://thingshappening.com",
  trailingSlash: "ignore",
  build: {
    format: "directory",
    trailingSlash: "never"
  }
});