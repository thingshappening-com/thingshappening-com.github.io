---
  title: "Understanding Elixir Enum Module"
  description: "Understanding Elixir Enum"
  slug: 'understanding-elixir-enum'
  tags: ["elixir"]
  pubDate: "2021-09-25"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts.

<h3>What is an Elixir Enum?</h3>
It's a Protocol that defines a set of functions to operate on enumerable data types.


<h3>When should you use the Enum module?</h3>
When you need to perform an operation against a collection and the collection's type does not implement the function you are looking for, the `Enum` module likely implements it.


<h3>What data types is the Enum module implemented for?</h3>
`List`, `Map`, `Range`, `MapSet`.


<h3>What does it mean to say "functions on the Enum module run in linear time"?</h3>
When performing operations Elixir's `Enum` always begings with the first element and ends with the last, the larger the enum is the less efficient the operation will be.


<h3>What does the Enum.concat/2 function do?</h3>
It combines the first enum argument with the second enum argument. 

```
=> Enum.concat(%{user: "kevs_burgers"}, %{name: "Kevin"})
[user: "kevs_burgers", name: "Kevin"]
```

<h3>What does the Enum.find/2 function do?</h3>
It accepts an enumerable and a callback function as arguments. It returns the first element that the function passed to it returns a truthy value for. 

```
=> colors = ["blue", "yellow", "red"] 
=> Enum.find(colors, fn (color) -> color == "red" end) 
"red"
```


<h3>What does the Enum.map/2 function do?</h3>
It accepts an enumerable and a function as arguments. It returns a new Enum containing the result of the callback function for each element in the Enum. 

```
=> colors = ["blue", "yellow", "red"] 
=> Enum.map(colors, fn (color) -> "#{color}ish" end) 
["blueish", "yellowish", "redish"]
```

