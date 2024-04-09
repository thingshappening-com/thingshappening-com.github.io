---
  title: "Get a random element from an Elixir List"
  description: "example of how to get a random element from a List"
  slug: "example-of-how-to-get-a-random-element-from-a-list"
  tags: ["elixir"]
  pubDate: "2022-10-05"
  layout: "../layouts/BlogPostLayout.astro"
---

In order to complete this mission we will reach for the `Enum` module which has a function defined in it `random/1`. This function expects its single argument to be the enum passed to it, in this case an elixr `List`. Below is an example usage:

```
iex(1)> list = ["cat", "dog", "turtle"]
["cat", "dog", "turtle"]
iex(2)> Enum.random(list)
"dog"
```