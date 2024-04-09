---
  title: "Elixir Enum.map/2 vs Ruby Array#map"
  description: "Elixir Enum.map/2 vs Ruby Array#map"
  tags: ["elixir", "ruby"]
  pubDate: "2023-12-29"
  slug: "elixir-enum-map-vs-ruby-array-map"
  layout: "../layouts/BlogPostLayout.astro"
---

Elixir's Enum.map and Ruby's Array#map are methods that help you transform each element in a collection. In Elixir, the Enum.map function, exists within the Enum module. It is designed for working with enumerable data structures. To use it provide an enumerable, such as a `List`, and a function to be applied to each element. For example:

```
numbers = [1, 2, 3, 4, 5]
result = Enum.map(numbers, &(&1 * 2))
IO.inspect(result)  # Output: [2, 4, 6, 8, 10]
In this Elixir example, Enum.map doubles each element in the numbers list, showcasing its simplicity and expressiveness.
```

On the Ruby side, the Array#map method offers a similar functionality. Operating directly on the array itselfs, it transforms each element based on the provided block or proc. Here's a Ruby example:

```
numbers = [1, 2, 3, 4, 5]
result = numbers.map { |n| n * 2 }
puts result  # Output: [2, 4, 6, 8, 10]
```

In this Ruby snippet, Array#map achieves the same doubling operation on each element of the numbers array. 

I hope this helped! Have a good one!

Check out another post:
- [GET A COUNT OF ALL .MD FILES IN A DIRECTORY ON THE COMMAND LINE](https://tinytechtuts.com/get-page-count-on-command-line-md/)

