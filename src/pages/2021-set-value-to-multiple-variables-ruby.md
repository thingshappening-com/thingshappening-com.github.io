---
  title: "Set multiple variables to a single value using Ruby or Elixir"
  description: "multiple variables single value Ruby/Elixir"
  slug: 'multiple-variables-single-value-ruby/elixir'
  tags: ["elixir", "ruby"]
  pubDate: "2021-07-15"
  layout: "../layouts/BlogPostLayout.astro"
---

To accomplish this you set each variable you need to have the same value on the same line like so:

```
variable3 = variable2 = variable1 = "the famous cats"
```

Now each of the variables above will be equal to "the famous cats"

```
=> variable3
"the famous cats"
=> variable2
"the famous cats"
=> variable1
"the famous cats"
```

From there you can overwrite each variable when/if needed.
