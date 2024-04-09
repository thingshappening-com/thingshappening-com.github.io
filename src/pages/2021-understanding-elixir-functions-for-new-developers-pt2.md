---
  title: "Understanding Elixir Functions for new developers part 2"
  description: "elixir functions explained for new devs"
  slug: 'understanding-elixir-functions-for-new-developers-part-2'
  tags: ["web-security"]
  pubDate: "2021-09-03"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>What is the another way of saying a function accepts 4 arguments in Elixir?</h3>

The function has an arity of 4.


<h3>Can named functions have multiple definitions in Elixir?</h3>

Named functions can have multiple definitions inside a module, but they should have a different arity otherwise the last definition will always match.


<h3>How do function clauses work with Elixir named functions?</h3>

When calling a function with multiple definitions Elixir will invoke the one that matches the argument(s) passed to it, aka the clause that matches it. This is another example of pattern matching where the function invoked is that which matches the pattern of the argument(s).


<h3>How do function clauses work in Elixir anonymous functions?</h3>

When defining an anonymous function you can have it pattern match against expected results. This is often seen with response tuples like in the example below: 
```
response = fn 
  {:ok, response} -> IO.puts("successful operation")  
  {:error, error} -> IO.puts("unsuccessful operation") 
end
```


<h3>What are function guard clauses?</h3>

These are checks, often in the beginning of a function definition, that determine if a function should continue execution or return early. As an example guards are often used in web applications by checking for authorization and returning early if the request is unauthorized.


<h3>How can you define guard clauses in Elixir?</h3>

You can use the `when` statement to only execute a function if a condition is met. 
```
defmodule Account do 
  def is_admin?(id) do 
    # admin check to return boolean 
  end 
    
  def get_admin_details?(id) when is_admin(id) do 
    # only get admin details if admin 
  end 
end
```


<h3>What happens if a there is no clause defined for an argument passed to a function?</h3>

Elixir will error with a `FunctionClauseError`.


<h3>How do you indicate that a function will return a boolean value?</h3>

End the function name with a ?. For example: 
```
def is_admin?(user = %{}) 
  user.admin? 
end
```


<h3>How do you bind a named function to a variable?</h3>

Using the capture operator. In the example below Elixir uses the capture operator to store the Map.put function, with an arity of 3. 
```
update_map = &Map.put/3 
update_map.(
  %{name: "Humphry Dobs", email: "thedobinator@emailsalot.com"}, 
  :age,  
  25
)
```


<h3>Can the capture operator be used for creating shorter anonymous functions?</h3>

Yes. The examples below accomplish the same thing. The &1, &2, &3 refer to the first second and third arguments of the shorthand capture function. 
```
add_three_without_capture = fn (a, b, c) -> a + b + c end 
add_three_without_capture.(2, 4, 3) 

add_three_with_capture = &(&1 + &2 + &3) 
add_three_with_capture.(2, 4, 3)
```
