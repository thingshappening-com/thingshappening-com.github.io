---
  title: "Elixir: remove a single k/v pair from a map"
  description: "How to remove a single key value pair from an elixir map"
  slug: "how-to-remove-a-single-key-value-pair-from-an-elixir-map"
  tags: ["elixir"]
  pubDate: "2022-09-21"
  layout: "../layouts/BlogPostLayout.astro"
---

When you need to delete a map entry in Elixir you can reach for the `Map` module. There is a function defined on the `Map` module called `delete/2`. The two arguments it takes are:

1. A map to delete the entry from
2. A key to remove from the map

In practice that looks like this:
```
iex(3)> map = %{k1: :v1, k2: :v2}
%{k1: :v1, k2: :v2}
iex(4)> Map.delete(map, :k2)
%{k1: :v1}
```

Now if you need to remove multiple k/v pairs there is a `drop` function on the `Map` module that can be utilized. I review that [here](https://tinytechtuts.com/2022-remove-single-key-value-pair-from-map/).

