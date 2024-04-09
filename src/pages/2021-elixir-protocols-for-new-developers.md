---
  title: "Elixir Protocols for new developers"
  description: "Elixir Protocols for new developers"
  slug: 'elixir-protocols-for-new-developers'
  tags: ["elixir"]
  pubDate: "2021-09-15"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>Protocols enable polymorphism in Elixir, what is polymorphism?</h3>
It is the ability to implement the same function with different behavior based on the data-type provided to the method.

<h3>How do Protocols enable polymorphism?</h3>
By providing an interface to group implementations of the same method on different data types.

<h3>How are protocols defined?</h3>
First you need to define the protocol with `defprotcol`: 

```
defprotocol First do 
 def first(data) 
end
``` 

And then individual implementations for each type. The below implementations are for `Tuple` and `Map`: 

```
defimpl First, for: Tuple do 
 def first(tuple), do: elem(tuple, 0) 
end 

defimpl First, for: Map do 
  def first_key_and_value(map) do 
   keys = Map.keys(map) 
   key = List.first(keys) 
   value = map[key] 
   "#{key}: #{value}" 
  end 
  
  def first(map), do: first_key_and_value(map)
end
```


<h3>How do you invoke a Protocol after it is defined and implemented?</h3>
For the previous example we would reference the protocol and invoke the method using dot notation and pass a data type to the method that has an implementation for the protocol: 
```
First.first({4, 6, 12}) 
=> 4
``` 

```
First.first(%{name: "bob", email: "bobo@email.com"}) 
=> "name: bob"
```


<h3>Where are protocols used in the Elixir ecosystem?</h3>
One example is the `Enum` module. The `Enum` modules functions can operate successfully on a `List`, `Map`, or `Range`.


<h3>Which data types can implement a Protocol?</h3>
`Atom`, `BitString`, `Float`, `Function`, `Integer`, `List`, `Map`, `PID`, `Port`, `Reference`, `Struct`, `Tuple`.


<h3>How do protocols allow for cleaner code?</h3>
They provide another means of code organization. Any time you need the same method with different behavior, you have the option to either look for an existing protocol to add a new implementation for or to create a new protocol and extract any existing behavior into the implementations.


<h3>Do Structs require their own Protocol implementation?</h3>
Yes. Structs share a lot of behavior with maps, but each struct requires its own protocol implementation.


<h3>When implementing a protocol inside a struct, do you need to pass the for: option?</h3>
No. See the example below: 
```
defmodule User do 
 defstruct [:email, :name] 

 defimpl Size do 
  def size(%User{}), do: 2 
 end 
end
```


<h3>How do you fallback to a default implementation if a protocol is invoked that doesn't have an implementation for that type?</h3>
Use the `@fallback_to_any` attribute, ex: 
```
defprotocol First do 
  @doc "GET the first value from collections" 
  @fallback_to_any true 
  def first(data) 
end
``` 
  
And then implement `first` for `Any` 
```
defimpl First, for: Any do 
  def first(_), do: nil 
end
```
