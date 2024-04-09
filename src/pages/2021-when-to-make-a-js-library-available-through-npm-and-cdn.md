---
  title: "When to make your JavaScript library available through a CDN and NPM package"
  description: "JavaScript library publishing options"
  slug: 'javascript-library-publishing-options'
  tags: ["javascript", "npm"]
  pubDate: "2021-03-25"
  layout: "../layouts/BlogPostLayout.astro"
---

When building a JavaScript library one of the things you need to think about is "How will users consume this?".

If the library is going to be used through a system that is bundling modules through NPM you can publish your library through the default NPM public registry and that will make it available to the entire NPM ecosystem of users.

Another option is to also publish your app through a CDN and expose the library through a JS script. This makes your library accessible to any application using JS through the browser through a `<script>` tag.

The downfalls of the CDN though are it introduces added build complexity and a third party CDN will charge for hosting so if you want to limit costs and complexity you may want to limit your libraries exposure to just NPM but if you are looking for maximum reach publishing to both a CDN and NPM would be a better idea.
