---
  title: "Understanding Elixir Mix"
  description: "Understanding Elixir Mix through explanation"
  slug: 'understanding-elixir-mix-through-explanation'
  tags: ["elixir"]
  pubDate: "2021-10-03"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>What do Elixir developers use Mix for?</h3>
Many different things. Mix is used for creating Elixir apps, for compiling Elixir apps after code changes, to run an apps test suite, to resolve third party dependency compatibility, and for executing custom tasks.

<h3>What does it mean to say Mix is an Elixir executable?</h3>
Executable files are files that can be run by a computer's operating system, they are not data files like your projects source code. Elixir has its own executable and Mix is another executable built on top of Elixir's.

<h3>How does Mix help with dependency management?</h3>
Through an integration with Hex package mananger Mix applications can use third party dependencies. Hex is the tool doing the package compatibility resolution. Mix provides a way to declare dependencies and command line tasks for installing, removing, or updating dependencies, these tasks use Hex to accomplish this.

<h3>How can you tell Mix that you are using third party dependencies in your project?</h3>
In your applications `mix.exs` file you can declare a private `deps` function which includes a list of your dependencies and then execute `mix deps.get` to install them. 

```
defmodule MyApp.MixProject do 
  use Mix.Project 

  def project do 
    [ deps: deps() ] 
  end 
  
  defp deps do 
    [ {:ecto, "~> 2.0"} ] 
  end 
end
```


<h3>How to you find the PATH that the Mix executable exists on macOS?</h3>
You can do this through the command line by executing `which mix`.


<h3>Below is an example of a custom Mix task, how would you invoke this task?</h3>

```
defmodule Mix.Tasks.Hello do 
  use Mix.Task 
  
  def run(_) do 
    Mix.shell().info("Hello world") 
  end 
end
```

On the command line execute `mix hello`.


<h3>If using Ecto for database interactions what are some Mix tasks you might use?</h3>
- `mix ecto.create` - creates the Ecto db. 
- `mix ecto.dump` - creates a file showing the db structure. 
- `mix ecto.gen.migration create_accounts` - creates a migration file that will be used to alter the db structure, in this case create the accounts table. 
- `mix ecto.migrate` - runs migrations that have not been previously run.


<h3>What tasks does Mix provide that are specific to Phoenix applications?</h3>
- `mix phx.new app_name` - creates a new Phoenix project 
- `mix phx.routes` - shows a list of routes 
- `mix phx.server` - starts the application and all servers

