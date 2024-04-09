---
  title: "Check if an HTTP status falls within a range using Ruby"
  description: "http status condition handling"
  slug: 'http-status-condition-handling'
  tags: ["rails", "http"]
  pubDate: "2021-05-06"
  layout: "../layouts/BlogPostLayout.astro"
---

Sometimes you want to handle a group of HTTP responses with the same response, but only in the status falls within a certain range.

The situation where I needed this was to handle the case that the status code was in the range of 200-204, so I could handle different success status' the same way.

If you want to check if an HTTP status returned to your application falls within a range you can do so with the following snippet.

```Ruby
(200..204).member?(response.status)
```

In the above code the range is defined using `(200...204)` and there is a member method on the range object that returns `true` or `false` depending on if the value exists in that range, in this case `response.status`.