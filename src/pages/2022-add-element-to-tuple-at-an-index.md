---
  title: "Add element to tuple at an index postion"
  description: "How to add element to tuple at an index postion"
  slug: "how-to-add-element-to-tuple-at-an-index-postion"
  tags: ["elixir"]
  pubDate: "2022-09-27"
  layout: "../layouts/BlogPostLayout.astro"
---

For example's sake, let's say you were working with an Elixir tuple that has four elements:
```
four_elem_tuple = {"one", "two", "three", "four"}
```

In this made up scenario you want to add an element after in the second position of the tuple, or index position 1. You can do that using the `Tuple` modules `insert_at/3` function. 
```
four_elem_tuple = {"one", "two", "three", "four"}
Tuple.insert_at(four_elem_tuple, 1, "one.five")
=> {"one", "one.five", "two", "three", "four"}
```

If you just want to add an element to the tuple as the last element in the collection, you can use the `Tuple.append/2` function.

```
four_elem_tuple = {"one", "two", "three", "four"}
Tuple.append(four_elem_tuple, "five")

=> {"one", "two", "three", "four", "five"}
```

In [another post](https://tinytechtuts.com/2022-remove-element-from-tuple-at-an-index/) I review how to delete an element from a tuple at a given index position.
