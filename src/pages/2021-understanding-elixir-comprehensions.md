---
  title: "Understanding Elixir Comprehensions"
  description: "Understanding Elixir Comprehensions through explanation"
  slug: 'understanding-elixir-comprehensions'
  tags: ["elixir"]
  pubDate: "2021-09-26"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>What is an Elixir Comprehension?</h3>
It is another way to loop over an Enumerable, just like the Enum module, only with a different syntax.


<h3>What Elixir data types are Enumerable?</h3>
`List`, `Map`, `Range`, `MapSet`.


<h3>How does an Elixir Comprehension differ from an Enum?</h3>
There is no difference in terms of performance and what you can accomplish functionally. The difference is in developer preference.


<h3>What is the generator in a Comprehension?</h3>
It is the Enumerable being passed into the comprehension. In the below example `<- [1, 3, 5]` is the generator being passed into the comprehension. 
```
for n <- [1, 3, 5], do: n * 2
```


<h3>Can multiple generator's be used within a Comprehension?</h3>
Yes. If you need to perform a set of operations on an Enumerable, you can use multiple generators.


<h3>Can you use pattern matching with Comprehensions?</h3>
Yes. The below example pattern matches a keyword list of http responses for user requests and returns only the successes. 

```
=> responses = [ok: %{name: "Joe", email: "joe@friendo.com"}, error: "invalid request", error: "invalid request", ok: %{name: "Jen", email: "jen@friendo.com"}] 
=> for {:ok, msg} <- responses, do: msg 
[
  %{email: "joe@friendo.com", name: "Joe"},
  %{email: "jen@friendo.com", name: "Jen"}
]
```


<h3>Write the equivalent Comprehension and Enum code for accepting a List and multiplying it by two.</h3>

```
=> for n <- [1, 3, 5], do: n * 2
[2, 6, 10]
``` 

```
Enum.map([1,3,5], &(&1 * 2))
```
[2, 6, 10]

