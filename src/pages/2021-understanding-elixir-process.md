---
  title: "Understanding Elixir Process"
  description: "Understanding Elixir Process through explanation"
  slug: 'understanding-elixir-process-through-explanation'
  tags: ["elixir"]
  pubDate: "2021-09-28"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>What are BEAM Processes?</h3>
They are lightweight execution contexts that run Elixir code in their own memory space. Processes can communicate with one another through message passing.


<h3>How are BEAM Processes created?</h3>
There are multiple modules and mechanisms for creating processes but they use `spawn/1` function under the hood.


<h3>What is a PID in relation to BEAM processes?</h3>
It is the process identifier. Anytime a process is spawned it will return a PID you can use to inspect the process and send messages to it.


<h3>How can you check if a specific BEAM Process still exists?</h3>
There is an `is_alive?` function in the `Process` module that accepts a pid and returns a `true` or `false` boolean.


<h3>How does Elixir's `receive` block relate to processes?</h3>
A `receive` block is waiting for a message to be sent to the process that defines it. When a `receive` block is encountered further processing is paused until a message is sent to the process and executed by the `receive` block.


<h3>Is there a function to send a message to another BEAM Process?</h3>
Yes, the Kernels `send/1` function.


<h3>What are BEAM Supervisor's used for?</h3>
They help manage processes. Another way to think about it is they are linked to the child processes they supervise. Supervisors are frequently used to spawn new processes if one fails, but other strategies exist as well.


<h3>What is a supervision tree?</h3>
There can be Supervisors for other Supervisors. This creates a network/tree of supervisor processes known as a supervision tree.


<h3>Is it possible to get a graphical view of an Elixir applications supervision tree?</h3>
Yes. When you start an Elixir application in interactive mode using `iex` you can call `:observer.start` in the terminal and a GUI will appear. If you navigate to the applications tab it will show you the supervision tree of your application.


<h3>What are process pools?</h3>
Process pools are a group of long running processes that are waiting to be used. A good example is the Ecto database management library. It will spawn a pool of ten connections at startup time to be used by your application. It does this instead of spawning a new process for each connection because establishing a database connection can be a heavy task in terms of resource utilization.


<h3>What are some examples of processes in a Phoenix application?</h3>
1. Each HTTP request spawns a new process using the Cowboy and Ranch libraries. 
2. Ecto uses a process pool to handle database connections.

