---
  title: "Can you call map/filter/reduce on an HTMLCollection?"
  description: "How do you iterate an HTMLCollection"
  slug: 'how-do-you-iterate-an-htmlcollection'
  tags: ["javascript", "html"]
  pubDate: "2022-01-09"
  layout: "../layouts/BlogPostLayout.astro"
---

To iterate over a HTMLCollection object you will first need to transform the object into an Array.

You can accomplish this by passing the collection to the `Array.from` function.

```
parent = document.querySelectorAll(".blog")[0]
collection = Array.from(parent.children)
```

Now you have a collection that works with standard Array prototype functions.

```javascript
parent = document.querySelectorAll(".blog")[0]
collection = Array.from(parent.children)

// these will all work now
collection.filter()
collection.find()
collection.reduce()
collection.map()
```

For more filtering joy, I wrote a post on retrieving and filtering previously executed [mac commands](https://tinytechtuts.com/2021-how-to-get-and-filter-previously-executed-commands-macos/).