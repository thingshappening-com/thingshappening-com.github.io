---
  title: "Apply CSS styling to only first two elements"
  description: "styling first two elements using css"
  slug: 'styling-first-two-elements-using-css'
  tags: ["css"]
  pubDate: "2021-03-04"
  layout: "../layouts/BlogPostLayout.astro"
---

This requires the use of the `:nth-child` selector, which needs to be passed an argument of `-n+2`:
```
a:nth-child(-n+2)::after {
  content: " | ";
}
```

In my example I am applying text after the first two links in the selector, which looks like this when rendered:
`Link One | Link Two | Link Three`

The problem is when you add a fourth link there exists a style bug because the | is only applied to the first two elements:
`Link One | Link Two | Link Three Link Four`

I added my solution for this [here](https://tinytechtuts.com/2021-apply-css-to-all-but-last-child/).
