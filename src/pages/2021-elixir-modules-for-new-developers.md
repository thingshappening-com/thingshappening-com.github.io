---
  title: "Elixir Modules for new developers"
  description: "Elixir Modules for new developers"
  slug: 'elixir-modules-for-new-developers'
  tags: ["elixir"]
  pubDate: "2021-09-07"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>What do Elixir developers use Modules for?</h3>

Grouping functions with like behavior under a namespace.


<h3>How can Modules be nested?</h3>

Through a `.` in the Module definition. In the below example `Profile` is nested under `User`: 
```
defmodule User.Profile do 
  def get_details 
  end 
end
```


<h3>What are Module attributes?</h3>

They are most often used as constants within a Module but can also be used for documentation of the Module and its functions. In advanced use cases they can used as temporary storage to be referenced in compilation. Below is an example of the constants use case: 
```
defmodule Server do 
  @initial_state %{host: localhost, port: 3000} 
end
```


<h3>Does Elixir have any reserved Module attributes?</h3>

Yes. Some of the more common ones are `@moduledoc`, `@doc`, `@behaviour`. More detailed information on these and other attributes can be found [here](https://hexdocs.pm/elixir/Module.html#module-module-attributes).


<h3>In functional programming languages like Elixir how are we able to reuse code? How do modules help with this?</h3>

Through a technique called composition. Composition allows us to reuse behavior between Modules. The next few questions will walk through ways Elixir accomplishes this.


<h3>If you want to use and reference a module inside another module, what Elixir directive would you use?</h3>

The `alias` directive. 
```
defmodule ProfileHelpers do 
  def from_rds 
  end 
end
``` 
```
defmodule User.Profile do 
  alias ProfileHelpers 

  def get_details ProfileHelpers.from_rds
  end 
end
```


<h3>If you want to use functions defined in one module inside another module without referencing the module directly, what Elixir directive would you use?</h3>

The `import` directive. 
```
defmodule ProfileHelpers do 
  def from_rds 
  end 
end
```
```
defmodule User.Profile do
  import ProfileHelpers
   
  def get_details_from_rds 
  end 
end
```


<h3>Is it possible to change the name of a module being aliased?</h3>

Yes, by using the `as:` option when issuing the `alias` 
```
defmodule ProfileHelpers do
  def from_rds 
  end 
end
``` 
```
defmodule User.Profile do 
  alias ProfileHelpers, as: Helpers 

  def get_details Helpers.from_rds 
  end 
end
```