---
  title: "Elixir: merge nested Lists"
  description: "How to merge nested Lists in elixir"
  slug: "how-to-merge-nested-lists-in-elixir"
  tags: ["elixir"]
  pubDate: "2022-09-23"
  layout: "../layouts/BlogPostLayout.astro"
---

Any time you build an application there will almost inevitably come a time when you need to combine multiple complex data structures into a single data structure. In the event you need to handle such an operation with a List of Lists or “nested Lists”, you can reach for a function on the List module `List.flatten/2`
 
```
=> list = [
  [1, {:ok, "The Cat Goes to Brazil"}],
  [2, {:ok, "The Dog Barks at the Mailman"}]
]
 
=> List.flatten(list)
[1, {:ok, "The Cat Goes to Brazil"}, 2, {:ok, "The Dog Barks at the Mailman"}]
```
 
Illustrated above, the two nested Lists are combined into a single List with the elements in the first nested list being accounted for first and the items in the second nested list being accounted for second.

I wrote another List post covering sorting a list of maps [here](https://tinytechtuts.com/2022-sort-list-of-maps-by-key/), if you indulge I hope you enjoy.

