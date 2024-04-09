---
  title: "Elixir file extensions for new developers"
  description: "Elixir file extensions for new developers"
  slug: 'elixir-file-extensions-for-new-developers'
  tags: ["elixir"]
  pubDate: "2021-09-06"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>When would you use the .ex extension for an Elixir file vs `.exs`?</h3>

You use `.ex` when you want to compile your code and `.ex` when writing a script.


<h3>How would you execute a .exs file script from the command line?</h3>

```
elixir my_exs_file.exs
``` 
Running the script above will execute the file without writing a compiled BEAM file to disk.


<h3>How would you execute a .ex file on the command line?</h3>

```
elixirc my_exs_file.ex
``` 
The above will write a compiled BEAM file to disk and you will be able to use the modules/functions you create in your Elixir environment.
