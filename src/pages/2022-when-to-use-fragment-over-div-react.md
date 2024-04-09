---
  title: "When to use <> vs <div> in React"
  description: "Using shorthand react fragments"
  slug: 'using-shorthand-react-fragments'
  tags: ["react"]
  pubDate: "2022-01-15"
  layout: "../layouts/BlogPostLayout.astro"
---

When building views for our applications we often need to group elements together and that means wrapping them in container elements. When writing HTML files you might be used to doing that using `<div>` as a defacto wrapper element, but in React there is the concept of a [Fragment](https://reactjs.org/docs/fragments.html#short-syntax). 

Fragments are JSX nodes that allow you to group JSX nodes together without actually adding more elements to the DOM itself. Use fragments when you need to logically group elements together but do not need a parent element containing them. Use a parent element (like a `<div>`) if you need the containing element to exist.
