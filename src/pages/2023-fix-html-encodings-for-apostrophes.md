---
  title: "Apostrophes showing as â€™ in html"
  description: "fix html encodings where apostrophes are not displaying correctly"
  tags: ["html", "utf"]
  pubDate: "2023-10-04"
  slug: 'fix-html-encodings-where-apostrophes-are-not-displaying-correctly'
  layout: "../layouts/BlogPostLayout.astro"
---

If you're building a webpage and you're seeing characters like `â€™` when you expect to see `'`, there is a good chance you are not using the correct charset for `'`. In this situation you likely want to be using `UTF-8`. 

In an expanded example lets say you have this sentence you're trying to render as HTML text:

```
It's the dog's day.
```

But after rendering you're seeing this on the page:

```
Itâ€™s the dogâ€™s day.
```

In this case try adding a `<meta>` tag with the `charset` property to your markup as a child node to the `<head>` tag.

```
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    .....
```


