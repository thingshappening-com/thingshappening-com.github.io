---
  title: "Understanding Elixir Supervisor"
  description: "Understanding Elixir Supervisor through explanation"
  slug: 'understanding-elixir-supervisor-through-explanation'
  tags: ["elixir"]
  pubDate: "2021-09-30"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>What is the function of an Elixir Supervisor?</h3>
It is a process that monitors other processes and restarts them based on a specified supervision strategy.


<h3>How are supervisors related to the Elixir axiom "let it crash"?</h3>
Supervisors will spin up new processes in the event of a failure. If a process errors/fails a new one will be started without the developer having to step in and restart anything. Aka they can "let it crash".


<h3>How are processes under supervision related to the Supervising process?</h3>
They are considered child processes of the supervisor.


<h3>How do you start a supervisor that monitors child processes?</h3>
You pass a list of child processes to the supervisor. Each child process is a `Map` that contains keys of `id` and `start`. The `id` is the process and `start` is a `Tuple` containing information on how to run the process. Example below: 

```
children = [ %{ id: ChildProcess, start: {ChildProcess, :start_link, [[:initial_state]]} } ] 
{:ok, pid} = Supervisor.start_link(children, strategy: :one_for_one)
```


<h3>What supervision strategy should be used if you want only the specific child process that terminates to be restarted?</h3>
`one_for_one`


<h3>What supervision strategy should be used if you want all child processes to be restarted if any of them terminate?</h3>
`one_for_all`


<h3>What supervision strategy should be used if you want all processes started after the terminated one to also be terminated and restarted?</h3>
`rest_for_one`


<h3>What is a supervision tree?</h3>
It is a hierarchy of process supervisors. This means that a process that is under supervision can also have its own child processes that it supervises.

