---
  title: "BEAM/Elixir processes for web programmers"
  description: "overview of beam processes elixir"
  slug: 'overview-of-beam-processes-elixir'
  tags: ["elixir"]
  pubDate: "2021-05-14"
  layout: "../layouts/BlogPostLayout.astro"
---

To start I think it's useful to define a few concepts:

Elixir ecosystem concepts:
1) BEAM is a virtual machine that powers concurrent functional languages like Erlang and Elixir.
2) Erlang is a programming language that is supported by the BEAM VM.
3) Elixir is a programming language built on top of Erlang designed for developer efficiency.

Computer processing concepts:
4) CPU core is a smaller CPU/processor built into a larger CPU/processor. They were created to more efficiently handle processes and provide parallel execution (executing multiple functions at the same time).
5) An OS process is a running application/program, like the BEAM VM or a web browser running on your computer. OS processes are created when you start these applications.
6) An OS thread(s) can be used by an OS process to help it complete different tasks, it is lighter than an OS process in terms of resources and startup and cleanup. They are employed from OS processes.
7) BEAM processes are like OS threads in their purpose but are even lighter and more efficient. They are employed from OS threads.

The BEAM VM achieves concurrency by running many small BEAM processes to handle different system functions, many being in the millions. These processes are independent of each other in terms of memory, execution context, and garbage collection.

The BEAM VM is a running OS process and within the VM is a queue of BEAM processes waiting to be executed. BEAM defers the handling of the processes to schedulers, by default there is one scheduler employed for each core on the server. These schedulers pull processes from the queue and execute it for a short period of time and then puts the process back in the queue, pulls in a new process for execution and does this over and over again.

Each process gets executed for less than a millisecond before it is put back into the queue. The reason for this is so CPU intensive functions do not block the execution of other processes. The example given by [Sasa Juric](https://www.youtube.com/watch?v=-bCkha6U70o) is a function that calculates the sum of a large range of numbers like 1..1000000000000. This calculation would take a noticeable amount of time to return and we don't want it to block other processes from execution, hence the reason for constant context switching.

In a web based Elixir system different processes are used to handle various tasks like:
1) HTTP connections
2) Database connections
3) PubSub transactions

For each new HTTP connection a new process is issued and if that process fails due to a runtime execution error, or if a third party API is down, the rest of the processes will continue to function normally.

This provides fault tolerance and high availability to your application, because a single error will not propagate to other users of your system. With some VM's other than BEAM you need to handle more issues through written code because multiple requests are handled by the same execution context to achieve concurrency and if one of those requests error then all of the requests in that execution context will fail along with it.

More Elixir process posts:
[Let it crash explained](https://tinytechtuts.com/2021-let-it-crash-explained/),
[Process module cheatsheet](https://tinytechtuts.com/2021-elixir-process-module-cheatsheet/),
[Processes in phoenix](https://tinytechtuts.com/2021-introduction-to-elixir-processes-in-phoenix/),
[Processes and concurrency](https://tinytechtuts.com/2021-elixir-processes-concurrency-and-parallelism/)

Other useful resources:
- https://elixirforum.com/t/understanding-the-advantages-of-let-it-crash-term/9748
- https://www.youtube.com/watch?v=-bCkha6U70o