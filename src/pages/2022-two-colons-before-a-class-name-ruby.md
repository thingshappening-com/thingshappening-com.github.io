---
  title: "Two colons before a class name in ruby"
  description: "Two colons before a class name ruby"
  slug: 'two-colons-before-a-class-name-ruby'
  tags: ["ruby"]
  pubDate: "2022-05-07"
  layout: "../layouts/BlogPostLayout.astro"
---

When you see two colons before a constant reference in Ruby, like `::User` that code is saying “look for this constant” defined without any namespace or nesting.

It will not look up Admin::User even if you make a reference to `::User` from within the admin namespace.

Further reading:
- [How to render a collection of turbo frames](https://tinytechtuts.com/2022-rendering-a-collection-of-turbo-frames/)


