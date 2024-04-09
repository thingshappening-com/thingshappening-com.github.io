---
  title: "Force casing of mix/elixir project module"
  description: "create a project name in all caps in elixir"
  slug: "create-a-project-name-in-all-caps-in-elixir"
  tags: ["elixir", "mix"]
  pubDate: "2022-07-25"
  layout: "../layouts/BlogPostLayout.astro"
---

By default Elixir will create the new project module passed to the mix generate with the CamelCase format but if you want your project to have specific module casing (like uppercase) you can pass the --module flag to `mix.new`. That looks like this:

```
mix new dev_decks --module DEVDECKS
```

The resulting project module:
<image src="/images/blog/project-name-overrides-elixir.png" alt="name-overrides" />