---
  title: "Iterating a List with_index in Elixir"
  description: "How to get an index value when iterating list in Elixir"
  slug: 'how-to-get-an-index-value-when-iterating-list-in-elixir'
  tags: ["elixir"]
  pubDate: "2022-03-28"
  layout: "../layouts/BlogPostLayout.astro"
---

In Ruby you can get the index value when iterating over a list by calling the method `each_with_index` on the array object itself. This method makes the iterable object and its index available to you inside of a block, like so:

```ruby
arr = ["one", "two", "three"]
arr.each_with_index do |number, index|
  # handle logic here
end
```

The way to handle this in Elixir is to use the `Enum` module which works with any enumerable data type in the Elixir language, including List. The `Enum` module has a function `.with_index` that can be used to get the index value for each item in the list on iteration. In practice that could look like:

```elixir
    list = [Post.find(1), Post.find(2)]
    |> Enum.with_index
    |> Enum.filter(fn({post, index}) ->
      # handle logic here
    end)
```

Here we are piping the list to the `Enum.with_index/2` and then piping the result of that to the `Enum.filter/2` function. As demonstrated in the code above the iterable object and it's index are available in the callback function of the `filter` function.


