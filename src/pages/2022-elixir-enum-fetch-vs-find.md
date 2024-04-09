---
  title: "Elixir Enum fetch vs find functions"
  description: "Differences between elixirs fetch and find"
  slug: 'differences-between-elixirs-fetch-and-find'
  tags: ["elixir"]
  pubDate: "2022-05-24"
  layout: "../layouts/BlogPostLayout.astro"
---

In Elixir the `Enum` modules `fetch/2` and `find/3` methods sound a little similar at first thought, this post will share what makes them similiar, different, and provide examples.

`fetch/2` and `find/3` are similarity in that their job is to locate a specific element inside of an enumerable object. However these functions handle this task quite differently. `fetch/2` will take in an enumerable and an index value as parameters and return a tuple with the matched element at the index value parameter provided. `find` on the other hand will accept three arguments, an enumberable, an optional default value, and a callback function and return the first matched element found in the callback function.

```elixir
Enum.find([2, 3, 4], fn int -> int == 2 end)
=> 2
```

```elixir
Enum.fetch([2, 3, 4], 0)
=> {:ok, 2}
```

I have also written another `Enum` post on [iterating a List with_index in elixir](https://tinytechtuts.com/2022-list-with-index-in-elixir-example/) if you're interested.