---
  title: "How to remove an element from a tuple"
  description: "How to remove an element from a tuple in elixir"
  slug: "how-to-remove-an-element-from-a-tuple-in-elixir"
  tags: ["elixir"]
  pubDate: "2022-09-29"
  layout: "../layouts/BlogPostLayout.astro"
---

In a [previous example](https://tinytechtuts.com/2022-add-element-to-tuple-at-an-index/) we worked to add an element to a tuple at an index position. In this post we will handle the case of needing to remove that same element. 

First lets define the tuple. In the tuple below there is an item that doesn't match the string format of the rest of the elements, we'll remove that one.
```
five_elem_tuple = {"one", "one.five", "two", "three", "four"}
```

To handle the delete mechanism we will utilize the `Tuple.delete_at/2` function. This function accepts a tuple and an index position as arguments and returns a new tuple.
```
five_elem_tuple = {"one", "one.five", "two", "three", "four"}
five_elem_tuple |> Tuple.delete_at(1)
=> {"one", "two", "three", "four"}
```

