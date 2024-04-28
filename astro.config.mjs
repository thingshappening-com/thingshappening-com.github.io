import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  site: "https://thingshappening-com.github.io",
  trailingSlash: "ignore",
  build: {
    format: "directory",
    trailingSlash: "never"
  }
});