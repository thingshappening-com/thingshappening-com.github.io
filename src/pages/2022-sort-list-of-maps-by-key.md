---
  title: "Sort a list of maps by key value"
  description: "sort elixir list of maps based on property"
  slug: "sort-list-of-maps-based-on-property"
  tags: ["elixir"]
  pubDate: "2022-08-08"
  layout: "../layouts/BlogPostLayout.astro"
---

Suppose you have a list of maps that you need to sort by a specific key in each of the maps, you can do so using elixir’s Enum module, `Enum.sort_by/3`. 

This function requires an enum and callback function and optionally accepts a third sorter argument, like `:asc` and `:desc`. The sorter will use :asc by default.

The callback function passed to the argument needs to return the value that is being sorted on and `sort_by` will do the rest.

To sort by one key in ascending order:
```
l = [%{payment: 34, tip: 5}, %{payment: 21, tip: 6}, %{payment: 10, tip: 5}]

Enum.sort_by(l, fn(li) -> li.payment end)
=> [%{payment: 10, tip: 5}, %{payment: 21, tip: 6}, %{payment: 34, tip: 5}]
```

To sort by one key in descending order:
```
l = [%{payment: 34, tip: 5}, %{payment: 34, tip: 4}, %{payment: 21, tip: 7}, %{payment: 21, tip: 6}, %{payment: 10, tip: 5}]

Enum.sort_by(l, fn(li) -> li.payment end, :desc)
=> [%{payment: 34, tip: 5}, %{payment: 21, tip: 6}, %{payment: 10, tip: 5}]
```

To sort by multiple keys, return a tuple from the callback function:
```
l = [
  %{payment: 34, tip: 5},
  %{payment: 34, tip: 4},
  %{payment: 21, tip: 7},
  %{payment: 21, tip: 6},
  %{payment: 10, tip: 5}
]

Enum.sort_by(l, fn(li) -> {li.payment, li.tip } end)
=> [
  %{payment: 10, tip: 5},
  %{payment: 21, tip: 6},
  %{payment: 21, tip: 7},
  %{payment: 34, tip: 4},
  %{payment: 34, tip: 5}
]
```

If you enjoyed this elixir post you might also enjoy [Reading pdf text using Elixir](http://www.devdecks.io/2022-reading-pdf-text-using-elixir)