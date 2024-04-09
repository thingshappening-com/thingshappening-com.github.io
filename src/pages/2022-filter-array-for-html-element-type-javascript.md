---
  title: "Filter a JavaScript array for HTML element type"
  description: "filter javascript array for specific html element type"
  slug: 'filter-javascript-array-for-specific-html-element-type'
  tags: ["javascript"]
  pubDate: "2022-01-10"
  layout: "../layouts/BlogPostLayout.astro"
---

To accomplish this task you will first need to [convert the HTMLCollection](https://tinytechtuts.com/2022-can-you-call-map-filter-reduce-on-an-html-collection-object/) into an Array it is not already.

From there you can call the `.filter` function on the array and check to see if the `nodeName` property of each element in the collection matches the condition you are expecting.

In practice that looks like the below example where the last line in the code example filters for and returns all elements in the collection that are `<div>`.

```javascript
parent = document.querySelectorAll(".blog")[0]
collection = Array.from(parent.children)

collection.filter(node => node.nodeName == "DIV")
```

