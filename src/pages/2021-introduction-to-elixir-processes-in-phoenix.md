---
  title: "An introduction to BEAM/Elixir processes in Phoenix"
  description: "elixir processes in phoenix"
  slug: 'elixir-processes-in-phoenix'
  tags: ["elixir"]
  pubDate: "2021-05-28"
  layout: "../layouts/BlogPostLayout.astro"
---

I will introduce this through a two example web interaction

1) A web request that runs some application code.
2) A web request that runs some application code and that application code reaches out to a database.

Each step of this interaction is a separate Elixir Process.

The Phoenix web framework sets up an HTTP server using the libraries Cowboy and Ranch. When a request is sent to your application over HTTP a Cowboy process is spawned to handle it, once the request is received and validated another Elixir Process is spawned and therefore supervised by the Cowboy process. This newly spawned Process is for the application code to handle any business logic required before the HTTP server responds. Once the application process has finished executing a message is sent back to the Cowboy/HTTP process that generated it and the connection is closed.

Now let's say the application code called an `Ecto.Repo` database for a query, this scenario is a slightly different.

When your Phoenix application was started, assuming you are using Ecto for database interactions, a pool of (usually 10) long running processes are started immediately and waiting to be used for code execution. These are started immediately instead of being spawned each time the Repo is called because connecting to the database is a "heavy" task, meaning it takes more time and computer resources to execute than other processes that are not pooled. The Erlang and Elixir process pooling technology is Poolboy.

When your application code makes a query using Repo, it uses one of the established pooled process connections to do so. Once the query completes then a message is sent to the application process. At that point the application process continues any additional code execution before sending the final response to the HTTP process.

There are many more processes running in any Phoenix application. My hope is after reading this it will give you confidence to explore more of the ecosystem.

<h2>Aside: Observer</h2>

To get a visualization of Elixir processes in your Phoenix application run the following command:

```elixir
iex -S mix phx.server
```

This starts your server in interactive mode. From there you start Observer, Elixirs process introspection tool through this command:

```elixir
:observer.start
```

Once opened navigate to the applications tab to get a diagram of all running processes, you can try restarting processes to get more hands on experience with their behavior.

More Elixir process posts:
[Processes for web programmers](https://tinytechtuts.com/2021-beam-elixir-processes-explained/),
[Let it crash explained](https://tinytechtuts.com/2021-let-it-crash-explained/),
[Processes and concurrency](https://tinytechtuts.com/2021-elixir-processes-concurrency-and-parallelism/),
[Process module cheatsheet](https://tinytechtuts.com/2021-elixir-process-module-cheatsheet/)