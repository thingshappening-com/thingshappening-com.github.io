---
  title: "Elixir: alias __MODULE__ explained"
  description: "What does alias __MODULE__ do in elixir"
  slug: "what-does-alias-__module__-do-in-elixir"
  tags: ["elixir"]
  pubDate: "2022-09-17"
  layout: "../layouts/BlogPostLayout.astro"
---

When you come across the code below in Elixir it is fairly reasonable to assume you are aliasing the module in which it is used. But what does it allow you to do?

```
defmodule Engine.Middelware do 
	alias __MODULE__
end 
```

After using `alias __MODULE__` like code above does, we can more simply create or reference the struct for `Engine.Middelware` throught this modules code. Since we’ve aliased the `Middleware` module, we can now refer to Middleware structs as `%Middleware{}` instead of `%Engine.Middelware{}`. 