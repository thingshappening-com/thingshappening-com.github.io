---
  title: "Understanding Elixir Agent"
  description: "Understanding Elixir Agent through explanation"
  slug: 'understanding-elixir-agent-through-explanation'
  tags: ["elixir"]
  pubDate: "2021-10-02"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>What is an Elixir Agent?</h3>
They are a means of spawning an Elixir Process but with added the intention of keeping track of state.

<h3>When should you used an Agent vs GenServer?</h3>
This is a matter of the developers personal preference. `Agent` requires less code to write, but is slightly less efficient than a GenServer.

<h3>Agents are said to separate the client and server API's, explain this through an example Server: </h3>

```elixir
# Compute in the agent/server 
def get_something(agent) do 
  Agent.get(agent, fn state -> do_something_expensive(state) end)
end 

# Compute in the agent/client 
def get_something(agent) do 
  Agent.get(agent, & &1) |> do_something_expensive() 
end
```

In the first `get_something` function above the agent process is calling the `do_something_expensive/1` function. In the second `get_something` function it is client process (the process that called `get_something/1`) that computes `do_something_expensive/1`. In the case of a long running process it is generally preferred to handle the expensive function in the client so the `Agent` is not blocked. If the function were `do_something_inexpensive` where the process would not be blocked by heavy compute, then it could make more sense to handle it within the agent process. Code example from https://hexdocs.pm/elixir/1.12/Agent.html


<h3>Why do we not want clients to be able to pass callback functions to the Agent?</h3>
If the client were to pass in a function that does a lot of processing the `Agent` would be blocked until the request is completed. Keeping the client and server API's separate alleviates this concern.

<h3>Are Agents usually supervised or unsupervised?</h3>
Supervised. An `Agent` is usually started under a `Supervisor`.

