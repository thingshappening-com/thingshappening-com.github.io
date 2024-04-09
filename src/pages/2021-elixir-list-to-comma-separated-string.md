---
  title: "Convert an Elixir List into a comma separated String"
  description: "Convert an elixir list into a comma separated string"
  slug: 'convert-an-elixir-list-into-a-comma-separated-string'
  tags: ["elixir"]
  pubDate: "2021-08-30"
  layout: "../layouts/BlogPostLayout.astro"
---

Sometimes when working with an Elixir List you may need to utilize that list in a different format, such as a comma separated string. In this event you can reach for the `Enum` module and its `join/2` function, for example:

```
=> list = ["snow shoes", "biscuits", "turtles"]
=> string = Enum.join(list, ", ")
"snow shoes, biscuits, turtles"
```
