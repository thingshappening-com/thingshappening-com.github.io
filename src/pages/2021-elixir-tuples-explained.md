---
  title: "Elixir Tuples explained through q&a"
  description: "elixir tuples explained"
  slug: 'elixir-tuples-explained-through'
  tags: ["elixir"]
  pubDate: "2021-08-04"
  layout: "../layouts/BlogPostLayout.astro"
---

This post works best when paired with the [Elixir docs](https://hexdocs.pm/elixir/1.12/Tuple.html) for a general overview of Tuples.

<h3>What is an Elixir Tuple?</h3>
It is a collection data type in Elixir defined using curly brackets `{}`

<h3>When should you use a Tuple?</h3>
As response objects. The most often take the form of `{:ok, response_data_1, response_data_2}` or `{:error, message}`.

<h3>Should you use a Tuple to store a collection of application data you want to iterate over?</h3>
No you should use a `List`. Writing and performing operations on a collection in Elixir was designed to be handled using lists.

<h3>How do you add an element to an existing Tuple?</h3>
One way is to use the `Kernel` `put_elem/3` function. The example below takes a `Tuple`, an index in that `Tuple`, and a new value for that index and creates a new `Tuple`.
```
=> put_elem({:ok, "fish", "penguin"}, 1, "lobster")
{:ok, "lobster", "penguin"}
```

<h3>What happens when you try to use put_elem/3 with a non-existing index?</h3>
An `ArgumentError` is raised.
```
=> put_elem({:ok, "fish", "penguin"}, 3, "lobster")
** (ArgumentError) argument error
```

<h3>How do you retrieve an element from a Tuple without pattern matching?</h3>
Using the `Kernel` `elem/2` function and passing it the tuple and the index of the value you want to get.
```
=> aqua_friends = {:ok, "fish", "penguin"}
=> elem(aqua_friends, 1)
"fish"
```

<h3>How do you retrieve an element from a Tuple through pattern matching?</h3>
By using Elixirs match operator `=` to destructure the tuple. See the example below:
```
=> {:ok, diet, animal} = {:ok, "fish", "penguin"}
=> diet
"fish"
=> animal
"penguin"
```

<h3>How do you remove an element from a Tuple?</h3>
Using the `Tuple` `delete_at/2` function and passing it the tuple and the index of the value you want to remove.
```
=> Tuple.delete_at({:ok, "lobster", "penguin"}, 2)
{:ok, "lobster"}
```

More Elixir Decks:
1. [Atoms and Integers](https://tinytechtuts.com/2021-elixir-atoms-and-integers-explained/)
2. [List](https://tinytechtuts.com/2021-elixir-lists-explained/)
