---
  title: "Learn Elixir through Q&A: Structs"
  description: "learn Elixir Structs"
  slug: 'learn-elixir-structs'
  tags: ["elixir"]
  pubDate: "2021-09-14"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>What are Structs?</h3>
An Elixir key/value data structure. They are also extensions of the Map module and thus share similar functionality.

<h3>What are some differences between Structs and Maps?</h3>
<ul>
<li>Structs do not have access to Enum functions like Maps do</li> 
<li>The keys for a Struct must be included in its definition.</li> 
<li>If a key is provided to a Struct that the Struct is unaware of an error will be raised.</li> 
<li>Only atoms can be used as keys in a Struct.</li> 
</ul>

<h3>How is a Struct defined?</h3>
From inside a module using the defstruct macro. Ex: 
```
defmodule User do 
  defstruct email: "lisa@gmail.com", age: 29, name: "Lisa" 
end
```


<h3>How would you instantiate a new Struct using the previous cards User struct definition?</h3>
The examples below are two separate structs created from the User struct. 
```
lisa = %User{} => %User{age: 29, email: "lisa@gmail.com", name: "Lisa"} 
jim = %User{name: "Jim", email: "jim@gmail.com"} 
=> %User{age: 29, email: "jim@gmail.com", name: "Jim"}
```


<h3>How do you update a Struct?</h3>
The same way you would update a `Map`. Using the `|` operator: 
```
jim = %User{name: "Jim", email: "jim@gmail.com", age: 24} 
jim = %{jim | age: 30} 
=> %User{age: 30, email: "jim@gmail.com", name: "Jim"}
```


<h3>How do you access a value in a Struct?</h3>
The same way you would access a value in a Map: 
```
jim = %User{name: "Jim", email: "jim@gmail.com", age: 24} 
jim.email 
=> "jim@gmail.com"
```


<h3>How do you delete a key/value from a Struct?</h3>
You don't. `Struct` definitions are constant. If you need a more dynamic key/value store, a `Map` should be used.


<h3>Can you set a Struct key without a default value?</h3>
Yes, but it must come at the end of the beginning of the definition. Ex: 
```
defmodule User do 
  defstruct [:email, age: 29, name: "Lisa"]
end
```
