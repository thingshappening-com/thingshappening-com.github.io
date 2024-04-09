---
  title: "BEAM/Elixir 'let it crash': what it does and does not mean"
  description: "overview of beam processes"
  slug: 'overview-of-beam-processes'
  tags: ["elixir"]
  pubDate: "2021-05-15"
  layout: "../layouts/BlogPostLayout.astro"
---

What it does not mean:
- Let application runtime errors fail repeatedly without acknowledging/handling/fixing them.

When writing an application, you build it based off of what you know about the domain and consider the needed functionality to accomplish the programs task. As a part of that you also have to think about what could go wrong and handle those cases through mechanisms such as data validation.

Inevitably a scenario or two of what can go wrong will be missed and that will result in a system runtime error. These are not the types of scenarios to avoid addressing and just 'let it crash', instead you need to debug and fix the overlooked scenario as you would if you were building the application in any other programming language.

What it means:
- If one process fails, others do not need to fail along with it.
- If an external system dependency is offline for a few seconds, it will not impact future processes from trying to access that system.

In other VM's like the Java VM, a single thread can be used to handle multiple HTTP requests and if one of those requests errors, the rest will crash along with it. This is not the case with the BEAM VM where if one process crashes, other processes are unaffected.

When building applications we often have external systems that we rely on to handle tasks for us, for example a third party CDN that contains our applications images. If that third party system goes down for a short while, the rest of our application can continue to function without having to recover from the error.

More Elixir process posts:
[Processes for web programmers](https://tinytechtuts.com/2021-beam-elixir-processes-explained/),
