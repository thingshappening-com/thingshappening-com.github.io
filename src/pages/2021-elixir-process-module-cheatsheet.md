---
  title: "Elixir process module cheatsheet"
  description: "process module cheatsheet"
  slug: 'process-module-cheatsheet'
  tags: ["elixir"]
  pubDate: "2021-05-16"
  layout: "../layouts/BlogPostLayout.astro"
---

The Process module defines functions for working with processes to handle things like introspection, starting/stopping, linking, etc.. These are a few that I find to be particularly useful:

- `Process.list/0` - gets a list of all running processes on the BEAM VM.
- `Process.info/1` - accepts a pid as an argument a returns metadata about the process.
- `Process.alive?/1` - accepts a pid as an argument and returns a boolean based on if the process is alive or dead.
- `Process.exit/2` - accepts a pid and an instruction atom (often :kill) and terminates the process

For other process behavior like creating new processes, linking processes and sending messages I find it more useful to use the `Kernel` functions `spawn`, `spawn_link` and `send`.

More Elixir process posts:
[Processes for web programmers](https://tinytechtuts.com/2021-beam-elixir-processes-explained/),
[Let it crash explained](https://tinytechtuts.com/2021-let-it-crash-explained/),
[Processes in phoenix](https://tinytechtuts.com/2021-introduction-to-elixir-processes-in-phoenix/),
[Processes and concurrency](https://tinytechtuts.com/2021-elixir-processes-concurrency-and-parallelism/)
