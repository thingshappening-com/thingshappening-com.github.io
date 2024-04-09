---
  title: "How to copy text from a collection of non input elements in JavaScript"
  description: "copy a non input elements in JavaScript"
  slug: 'copy-a-non-input-elements-in-javascript'
  tags: ["javascript"]
  pubDate: "2021-03-18"
  layout: "../layouts/BlogPostLayout.astro"
---

This was something I built for the [svg filter tool](https://tinytechtuts.com/tools/svg-color-changer/) on this site.

The steps to accomplish this:
- get the elements into a collection.
- add the desired event listener.
- copy the text to the users clipboard.

First, all of the elements need to share the same className so they can be queried for together. For this implementation I added the text that needed to be copied as a data attribute called `data-css-snippet`:
```html
<code class="filter-css-code" data-tooltip-id="10" data-css-snippet="filter: brightness(0.5) sepia(1) hue-rotate(-200deg) saturate(5);">
  filter: brightness(0.5) sepia(1) hue-rotate(-200deg) saturate(5);
</code>
```

Then in JavaScript the elements can be accessed and transformed into an iterable collection using `Array.from`.
```JavaScript
let filterSvgCodeSnippets = document.getElementsByClassName("filter-css-code");
filterSvgCodeSnippets = Array.from(filterSvgCodeSnippets);
```

Lastly add a click event to each element that copies the `data-css-snippet`. Start by iterating the collection using the `map` function, add the event using `addEventListener("click", () => {})` and copies the text to the clipboard through `navigator.clipboard.writeText(e.target.getAttribute("data-css-snippet"));`. Below is the full example:
```
filterSvgCodeSnippets.map((snippet) => {
  snippet.addEventListener("click", (e) => {
    navigator.clipboard.writeText(e.target.getAttribute("data-css-snippet"));
  });
});
```

Similar post
- [Differences between window assign, open, replace, and href= in JS](https://tinytechtuts.com/2021-windowlocation-open-replace-assign-differences/)