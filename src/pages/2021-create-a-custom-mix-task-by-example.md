---
  title: "Create a custom Mix task by example"
  description: "Create a custom Mix task by example"
  slug: 'create-a-custom-mix-task-by-example'
  tags: ["elixir"]
  pubDate: "2021-09-13"
  layout: "../layouts/BlogPostLayout.astro"
---

I am working on a task to migratie the DevDecks flashcard decks I created for this website to markdown files that will be rendering using NimblePublisher.

These were the sub tasks I outlined for completing this task given I have no prior experience writing a custom mix tasks:
1. Determine where to place the file for the task within my application
2. Figure out the syntax for the task, is there a module definition format? What function will the task voke? Are there other modules I need to import?
3. How do I run the custom mix task from the command line?
4. How do I create, write, and close a file in Elixir?
5. How do I include Ecto modules that will be needed for querying the database for the flashcard decks?
6. Put it all together

<h3>1) Determine where to place the file for the task within my application</h3>
I created a new directory and task file within devdecks/lib/dev_decks/tasks/migrate_db_posts_to_md.ex that would be used to define the task

<h3>2) Figure out the syntax for the task, is there a module definition format? What function will the task voke? Are there other modules I need to import?</h3>

This is probably best illustrated with an annotated code example:
```
# define the module under mix.tasks namespace
defmodule Mix.Tasks.MigrateDbPostsToMd do
 @moduledoc “convert db posts to markdown posts"
 # include the Mix.Task code
 use Mix.Task
 
 # define a run/1 function that will be invoked when your task is executed
 def run(_) do
   IO.puts("RUNNING!")
 end
end
```

<h3>3) How do I run the custom mix task from the command line?</h3>
The command for the task is going to be the snake case version of the module you created for the task. So in this example from the root directory of the application I execute `mix migrate_db_posts_to_md`. 

<h3>4) How do I create and write to a file in Elixir?</h3>
Through the use of Elixir’s `File` module there is a `write!/3` function that will create a file if one doesn’t exist at the specified path and write the contents provided to it as the second argument, ex:
```
File.write!(“/path/to/new_or_existing_file.md”, contents)
```

<h3>5) How do I include Ecto modules that will be needed for querying the database for the flashcard decks?</h3>

You just include them as you would inside any other Elixir module inside your Phoenix application, but now your task must start the application in order to have access to those modules through `Mix.Task.run("app.start")`, the result of all the changes looked like this in my case:

```
defmodule Mix.Tasks.MigrateDbPostsToMd do
 @moduledoc "convert db posts to markdown posts"
 use Mix.Task
 import Ecto.Query
 alias DevDecks.Repo
 alias DevDecks.Deck
 
 
 def run(_) do
   # Need this to get repo
   Mix.Task.run("app.start")
 
   IO.puts("BLURP")
 end
end

```


<h3>Put it all together</h3>
```
defmodule Mix.Tasks.MigrateDbPostsToMd do
 @moduledoc "convert db posts to markdown posts"
 use Mix.Task
 import Ecto.Query
 alias DevDecks.Repo
 alias DevDecks.Deck
 
 def run(_) do
   Mix.Task.run("app.start")
 
   Deck |> Ecto.Query.select([:title]) |> Repo.all |> Enum.with_index |> Enum.each(fn({deck, i}) ->
       File.write("priv/posts/scheduled/post#{i}", deck.title)
   end)
 end
end
```

And the newly built files:
<image src="/images/blog/custom-mix-ouput.gpng" alt="my_picture" />