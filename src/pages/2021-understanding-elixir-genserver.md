---
  title: "Understanding Elixir GenServer"
  description: "Understanding Elixir GenServer through explanation"
  slug: 'understanding-elixir-genserver-through-explanation'
  tags: ["elixir"]
  pubDate: "2021-10-04"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>What is an Elixir GenServer?</h3>
It is a means of spawning an Elixir Process but with the added intention of keeping track of state. GenServer comes with a set of predefined callback functions to help with this.


<h3>What are the advantages of GenServer vs other process management tools?</h3>
1) `GenServer`s callback functions are standardized. Once you understand them, you understand how to work with any `GenServer`. 
2) `GenServer`s provide a mechanism for keeping track of state. 
3) `GenServer`s provide the ability to execute asynchronously or synchronously. 
4) `GenServer`s provide functionality for tracing and error reporting.


<h3>Are GenServer processes supervised by a parent process?</h3>
They can be, but it's not required.


<h3>Do all GenServer callback functions need to be implemented in each GenServer?</h3>
No. Each `GenServer` only needs to implement the callback functions it needs. The only required callback function is `init`.


<h3>What is the init callback function used for?</h3>
This is invoked whenever the server is started. It can be used to pass initial state to the GenServer.


<h3>What is the handle_call callback function used for?</h3>
This callback is used whenever you want to handle synchronous messages to the server. It is invoked through `GenServer.call`.


<h3>What is the handle_cast callback function used for?</h3>
This callback is used whenever you want to handle asynchronous messages to the server. It is invoked through `GenServer.cast`.


<h3>What is the handle_info callback function used for?</h3>
This is used for all other messages to the server, for example process crash messages. It is invoked in different ways including the `Kernel.send` function or `Process.monitor`.


<h3>How many GenServer callback functions exist and what are they?</h3>
8. `init`, `handle_call`, `handle_cast`, `handle_info`, `code_change`, `format_status`, `handle_continue`, `terminate`.


<h3>Are GenServers used for code organization, for handling mutable state, or for providing concurrency?</h3>
GenServers are used to for handling of mutable state and for providing concurrency. GenServer's are not used for code organization.

