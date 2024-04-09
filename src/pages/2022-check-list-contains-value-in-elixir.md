---
  title: "Check if an Elixir List has specific value"
  description: "example of how to check an elixir list for a value"
  slug: "example-of-how-to-check-an-elixir-list-for-a-value"
  tags: ["elixir"]
  pubDate: "2022-10-07"
  layout: "../layouts/BlogPostLayout.astro"
---

To check if an elixir `List` contains a specific value we utilize the `Enum` module which defines a function `member/2`. The two arguments this function accepts as parameters are the enum itself, in this case a `List` and the value you want to check for. The function will return a boolean. Below is an example usage:

```
iex(3)> list = ["cat", "dog", "turtle"]
["cat", "dog", "turtle"]
iex(4)> Enum.member?(list, "cat")
true
```

