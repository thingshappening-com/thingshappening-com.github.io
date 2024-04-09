---
  title: "Understanding Elixir MapSet"
  description: "Understanding Elixir MapSet through explanation"
  slug: 'understanding-elixir-mapset-through-explanation'
  tags: ["elixir"]
  pubDate: "2021-10-01"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>What is a MapSet?</h3>
A `MapSet` is a `Set`. Sets are data structures that can contain unique elements of any kind.

<h3>How does a MapSet differ from a Map?</h3>
A `Map` is an associative data structure where a `MapSet` is not.

<h3>Can a MapSet contain duplicate values?</h3>
No. If a duplicate value is provided to a `MapSet` it will result in a no-op.

<h3>When do you use a MapSet?</h3>
`MapSet`s are really fast data structures and are often used when in need of optimum search performance.

<h3>How do you create a MapSet?</h3>
Using `MapSet.new/0`. All data must be added to the `MapSet` after it is constructed.

<h3>How do you add a value to a MapSet?</h3>
Using `Mapset.put/2`
``` 
=> ms = MapSet.new() #MapSet<[]> 
=> MapSet.put(ms, "new_value") 
#MapSet<["new_value"]> 
```


<h3>How do you remove a value in a MapSet?</h3>
Using `Mapset.delete/2`
```
=> ms = MapSet.new() 
=> MapSet.put(ms, "new_value") 
=> MapSet.delete(ms, "new_value") 
```

<h3>How do you iterate a MapSet?</h3>
A `MapSet` is an Elixir Enumerable. Like other Enumerables you can use the `Enum` module to iterate the collection ex `Enum.map/2`

