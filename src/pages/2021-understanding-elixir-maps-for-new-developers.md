---
  title: "Understanding Elixir Maps for new developers"
  description: "elixir maps explained for new devs"
  slug: 'elixir-maps-explained-for-new-devs'
  tags: ["elixir"]
  pubDate: "2021-08-31"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. Google was not showing love to this content as a set of flashcards and I didn't want to delete them entirely, I hope you find it useful.

<h3>What is an Elixir Map?</h3>

They are the most often used key/value store data type in Elixir.


<h3>What is a Map used for?</h3>

Maps are used to associate data elements with meaningful keys and the data associated with that key can be retrieved or updated using its key.


<h3>What are different ways to add a new value to a Map?</h3>

Using the Map module: 
```
Map.put(%{name: "Humphry Dobs", email: "thedobinator@emailsalot.com"}, :age, 24)
``` 
Or Using the Kernel module: 
```
put_in %{name: "Humphry Dobs", email: "thedobinator@emailsalot.com"}[:age], 24
```


<h3>Does Elixir contain an operator for updating a keys value?</h3>

Yes, the operator is `|`, but key has to exist, otherwise the code will error. The first example below updates the value for key `one:`, the second example tries to update the value for key `three:`, which doesn't exist so a `KeyError` is thrown. 
```
=>map = %{one: 1, two: 2} 
=> %{map | one: "one"} 
%{one: "one", two: 2}
``` 
```
=> map = %{one: 1, two: 2}
=> %{map | three: 3} 
(KeyError)
```


<h3>How can you read a value from a Map without pattern matching?</h3>

Through access syntax, `[]`. 
```
=> %{:key => "value"}[:key] 
"value"
``` 
If the key is an atom you can also use the static lookup syntax. 
```
=> %{:key => "value"}.key 
"value"
```
Or through the Map module. 
```
=> Map.get(%{a: 1}, :a) 
1
```


<h3>How can you read a value from a Map using pattern matching?</h3>

```
=> %{:a => a} = %{:a => 12, :b => 14} 
=> a 
12
``` 
The variable `a` above is set using pattern matching. It will return the value of the key `:a`. In this case that is 12.


<h3>What happens when you try to pattern match on a key that doesn't exist?</h3>

An error is thrown. The below will return a `MatchError`. 
```
%{:c => c} = %{:a => 12, :b => 14} 
=> (MatchError)
```


<h3>Can you use a variable for defining a key?</h3>

Yes. In the example below the variable `t` is a variable used as a key for the value "dog". 
```
=> t = :type
=> %{t => "dog", :name => "Abby"}[:type] 
"dog"
```
