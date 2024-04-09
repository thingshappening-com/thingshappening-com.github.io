---
  title: "Elixir: keyword argument must be followed by space after:"
  description: "solve error keyword argument must be followed by space after:"
  slug: "solve-error-keyword-argument-must-be-followed-by-space-after"
  tags: ["elixir"]
  pubDate: "2022-09-15"
  layout: "../layouts/BlogPostLayout.astro"
---

The other day I received this error when writing an elixir program:
```
keyword argument must be followed by space after: key:
```

I ran into this Elixir issue trying to pass `key:` as a keyword argument in a tuple. This won’t work because tuple needs to be passed as `:key` inside a tuple (or anywhere that’s not using keywords) otherwise elixir thinks it’s a keyword argument for a map, struct or keyword list.

```
Cache.upsert(pid, {key:, "fff"})
```

In order to get my program to work I had to update the code to:
```
Cache.upsert(pid, {:key, "fff"})
```