---
  title: "Do BEAM/Elixir processes provide concurrency or enable parallelism?"
  description: "elixir parallelism and concurrency"
  slug: 'elixir-parallelism-and-concurrency'
  tags: ["elixir"]
  pubDate: "2021-05-17"
  layout: "../layouts/BlogPostLayout.astro"
---

For a refresher on [Elixir processes](https://tinytechtuts.com/2021-beam-elixir-processes-explained/)

If you have a concurrent application that means it has the ability to make progress on more than one task at the same time.

If an application provides parallelism that means it can execute/process multiple things at the same time.

Before multi-core processes were created the BEAM VM enabled concurrency but not parallelism. The reason here is because you could not employ multiple schedulers to process tasks in the queue at the same time, but the single scheduler was able to make progress on more than one task at a time due to its concurrent nature. The scheduler takes one process from the queue, works on it for less than a millisecond, and then puts that process back in the queue and works on another process. This queue mechanism enables concurrency.

Once multi-core processors were created you could deploy multiple schedulers, one per core. Now each scheduler can operator on different processes at the same time, thus enabling parallelism.

More Elixir process posts:
[Processes for web programmers](https://tinytechtuts.com/2021-beam-elixir-processes-explained/),
[Let it crash explained](https://tinytechtuts.com/2021-let-it-crash-explained/),
[Processes in phoenix](https://tinytechtuts.com/2021-introduction-to-elixir-processes-in-phoenix/),
[Process module cheatsheet](https://tinytechtuts.com/2021-elixir-process-module-cheatsheet/)

Other useful resources:
- https://medium.com/@itIsMadhavan/concurrency-vs-parallelism-a-brief-review-b337c8dac350