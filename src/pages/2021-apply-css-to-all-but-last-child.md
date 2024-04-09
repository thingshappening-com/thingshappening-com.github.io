---
  title: "Apply CSS styling to all but last selected element"
  description: "styling all but last element using css"
  slug: 'styling-all-but-last-element-using-css'
  tags: ["css"]
  pubDate: "2021-03-05"
  layout: "../layouts/BlogPostLayout.astro"
---

To accomplish this first apply the styles to all of the elements in the selection. Laster we will remove the styles from the last element. In my example I am adding text after all links:
```
a::after {
  content: " | ";
}
```

From there we can get the last element in the selection using the `last-of-type` selector to update the previously applied styles like so:
```
a:last-of-type::after {
  content: "";
}
```

The markup looks like this in the browser:
`Link One | Link Two | Link Three | Link Four`

And you can see the last element did not get the `content: " | "` applied to it.
