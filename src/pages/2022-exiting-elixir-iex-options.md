---
  title: "Options for exiting Elixirs IEx.pry debugger"
  description: "How to an IEx debugger in Elixir"
  slug: 'how-to-an-iex-debugger-in-elixir'
  tags: ["elixir", "iex"]
  pubDate: "2022-03-27"
  layout: "../layouts/BlogPostLayout.astro"
---

I've found myself getting stuck on this a few times and wanted to have a list of options for handling this but couldn't find exactly what I was looking for. I hope this helps you!

After you require the IEx module invoking the `IEx.pry` function it in your codebase like so:
```elixir
require IEx

defmodule SomeModule do
  def my_function 
    some_var_1 = "data"
    some_var_2 = ["data2", "data3"]
    IEx.pry
  end
end

SomeModule.my_function
```

When the `IEx.pry` function is called your application will pause and allow you to inspect the current runtime environment. Once you are done with your inspection you can break out of the debugger with the following options:
1. `respawn` 
2. CTRL + c 

Calling `respawn` allows you to resume code execution by starting a new IEx shell and releasing the current one.

CTRL + C will kill your running process(es).
