---
  title: "Understanding Elixir Functions for new developers part 1"
  description: "elixir functions explained for new devs"
  slug: 'elixir-functions-explained-for-new-devs'
  tags: ["elixir"]
  pubDate: "2021-08-31"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>What does it mean to say "Functions are first class citizens." in Elixir?</h3>

Functions are a foundational data type in Elixir and can be assigned to a variable. Which is not the case in other languages, for example, Ruby where functions exist as methods on objects.


<h3>What are some benefits of using a programming language with functions as first class citizens?</h3>

1. You can pass functions as arguments to other functions. 
2. You can return functions from other functions. 
3. Functions can be stored in other data structures like Maps and Lists.


<h3>How do modules relate to functions in Elixir?</h3>

Modules are used as the way to group functions to a business/entity context of our application. In the example below `Account` is our module/business context and the functions are defined inside of it: 
```
defmodule Account do 
  def get_details(id) do 
  end 

  def some_other_function_related_to_account do 
  end 
end 
```


<h3>Are functions always defined within a module?</h3>

Named functions are, but anonymous functions do not have to be.


<h3>What are the different ways to define a function in Elixir?</h3>

You can define them within a module as named functions: 
```
defmodule Account do 
  def get_details(id) do 
  end 
end
``` 
Or as an anonymous function, which there are two ways to define: 

```
subtract = fn (a, b) -> a - b end
``` 

```
subtract = &(&1 - &2)
```


<h3>Write the code for how you would invoke the functions mentioned in the previous question.</h3>

```
defmodule Account do 
  def get_details(id) do 
  end 
end
``` 
```
subtract = fn (a, b) -> a - b end
``` 
```
subtract = &(&1 - &2)
``` 

```
subtract.(2,1)
``` 

```
Account.get_details("agf23EDf4weDre5r")
```


<h3>Why must named functions be defined within a module?</h3>

By grouping functions within a module we keep the global namespace of our programs cleaner and make our programs easier to reason about. If we didn't have named functions scoped in modules we could quickly run into an issue where we defined the same named function later on in our project which change s the behavior of the initial implementation entirely.


<h3>When are anonymous functions most used?</h3>

As callback functions aka arguments to other functions. `Enum.map` is a good example: 
```
Enum.map(fn(num) -> num * 3 end)
```


<h3>What is the difference between the def and the defp statements when defining named functions?</h3>

`defp` indicates that the function is private to the module it is defined in and can only be invoked by the other functions in that module. `def` functions can be invoked from other modules and the module it is defined in.


<h3>What is the syntax for setting a default parameter to a function?</h3>

`\\`. In the function below if params are not provided, the params variable will be set to an empty Map. 
```
def create(params \\ %{}) do 
  %DevDecks.User{} |> cast(params, [:email, :name]) |> Repo.insert() 
end
```
