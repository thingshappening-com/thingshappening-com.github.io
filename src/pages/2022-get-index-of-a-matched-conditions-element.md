---
  title: "Get the index position from element in a matched condition"
  description: "Get the index position from element in a matched condition"
  slug: 'get-the-index-position-from-element-in-a-matched-condition'
  tags: ["elixir"]
  pubDate: "2022-05-21"
  layout: "../layouts/BlogPostLayout.astro"
---

To achieve the desired outcome of the post title, you can use the `Enum` modules `find_index/2` function. This function will accept two arguments, the enumberable itself and a callback function as parameters. If the callback function finds a matched condition it will return that items index position. If there are more than two of the same item it will return the first matches index position. If there are no matches found, it will return `nil`.

```Elixir
Enum.find_index(["football", "baseball", "hockey", "basketball"], fn sport -> sport == "hockey" end)
=> 2

Enum.find_index(["football", "baseball", "hockey", "hockey"], fn sport -> sport == "hockey" end)
=> 2

Enum.find_index(["football", "baseball", "hockey", "hockey"], fn sport -> sport == "soccer" end)
=> nil
```

Further reading:
- [Rendering a LiveView template outside of router](https://tinytechtuts.com/2022-rendering-liveview-template-outside-of-router/)
- [How to paginate an in memory array](https://tinytechtuts.com/2022-in-memory-pagination-by-example/)
