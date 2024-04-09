---
  title: "Elixir Lists explained through q&a"
  description: "elixir lists explained"
  slug: 'elixir-lists-explained-through-q&a'
  tags: ["elixir"]
  pubDate: "2021-08-09"
  layout: "../layouts/BlogPostLayout.astro"
---

This post works best when paired with the [Elixir docs](https://hexdocs.pm/elixir/1.12/List.html) for a general overview of Lists.

<h3>What is an Elixir List?</h3>
A data type for storing a collection of values.

<h3>Are Lists in Elixir considered Linked Lists? What does that imply?</h3>
Yes. This means that when performing operations Elixir always begins with the first element in a List and ends with the last, another way of saying this is operations will run in linear time.

<h3>Is it faster to prepend or append a value to an Elixir List?</h3>
Prepend.

<h3>How do you add a value(s) to a List?</h3>
One way is by using the `|` operator to create a new List where the left hand side are the new values and the right hand side is the previous List.
```
=> wise_words = ["battlestar galactical"]
=> ["bears", "beets" | wise_words]
["bears", "beets", "battlestar galactical"]
```

<h3>How do you merge one or more Lists into a single List?</h3>
Using the `++` operator.
```
=> ["bears", "beets"] ++ ["battlestar galactical"]
["bears", "beets", "battlestar galactical"]
=> ["bears", "beets"] ++ ["battlestar galactical"] ++ ["boiled biscuits"]
["bears", "beets", "battlestar galactical", "boiled biscuits"]
```

<h3>How do you remove the first occurrence of a value from a List?</h3>
Using the `--` operator. See the example below:
```
=> wise_words = ["bears", "beets", "beets", "battlestar galactical", "bears"]
=> wise_words -- ["beets", "bears"]
["beets", "battlestar galactical", "bears"]
```

<h3>How do you remove an element using its index?</h3>
Using the `List` modules `delete_at` method and providing an index as the second argument. The below removes the second element of the List:
```
=> wise_words = ["bears", "beets", "battlestar galactical"]
=> List.delete_at(wise_words, 1)
["bears", "battlestar galactical"]
```

<h3>How do you remove the last Item from a List?</h3>
The below example uses the `Kernel` length function to get the index of the last element and then deletes that element using the `List.delete_at/2` function.
```
=> wise_words = ["bears", "beets", "battlestar galactical"]
=> last_element_index = length(wise_words) - 1
=> List.delete_at(wise_words, last_element_index)
["bears", "beets"]
```

<h3>What is the head of a List, what is the tail?</h3>
The head is the first element of a List and the tail is the rest of the Lists elements that follow.

<h3>How do you remove all elements with the same value from a List?</h3>
You can use the `Enum` module and the `filter` or `reject` functions. The following example removes all occurrences of "bears" and "beets" from the wise_words List.
```
wise_words = ["bears", "beets", "beets", "battlestar galactical", "bears"]
Enum.filter(wise_words, fn (word) -> (word !== "bears") && (word !== "beets") end)
```

<h3>How do you retrieve the value of the head of a List? How do you retrieve the tail?</h3>
1. Using the `Kernel` modules `hd` and `tl` functions respectively:
```
=> hd ["bears", "beets", "battlestar galactical"]
"bears"
=> tl ["bears", "beets", "battlestar galactical"]
["beets", "battlestar galactical"]
```
2. Using pattern matching:
```
=> [head | tail] = ["bears", "beets", "battlestar galactical"]
=> head
"bears"
=> tail
["beets", "battlestar galactical"]
```

More Elixir Decks:
1. [Atoms and Integers](https://tinytechtuts.com/2021-elixir-atoms-and-integers-explained/)
2. [Tuples](https://tinytechtuts.com/2021-elixir-tuples-explained/)
