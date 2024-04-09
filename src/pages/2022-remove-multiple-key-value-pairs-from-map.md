---
  title: "Elixir: remove multiple k/v pairs from a map"
  description: "How to remove multiple key value pairs from an elixir map"
  slug: "how-to-remove-multiple-key-value-pairs-from-an-elixir-map"
  tags: ["elixir"]
  pubDate: "2022-09-19"
  layout: "../layouts/BlogPostLayout.astro"
---

If you need to delete multiple entries in a map when using Elixir you can look at the `Map` module. On the `Map` module exists a function `drop/2`. The two arguments it takes are:
1. A map to delete the entry from
2. A list of keys to remove from the map
 
In practice that looks like this:
```
iex(7)> map = %{k1: :v1, k2: :v2, k3: :v3}
%{k1: :v1, k2: :v2, k3: :v3}
iex(8)> Map.drop(map, [:k2, :k1])
%{k3: :v3}
```

In the event you need to remove a single k/v pair there is a `delete` function on the `Map` module that can be utilized. I review that [here](https://tinytechtuts.com/2022-remove-multiple-key-value-pairs-from-map/).