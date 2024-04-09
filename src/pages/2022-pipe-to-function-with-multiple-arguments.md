---
  title: "Pipe to function with multiple arguments"
  description: "How to pipe to a function with multiple arguments"
  slug: "'how-to-pipe-to-a-function-with-multiple-arguments'"
  tags: ["elixir"]
  pubDate: "2022-10-01"
  layout: "../layouts/BlogPostLayout.astro"
---

In Elixir it is a common practice to use the pipe operator `|>` to express a series of steps needed to complete an operation. This allows us to define very readable workflows and makes for a cleaner codebase.

When using this operator the data from each step will be included automatically as the first argument in the next step. 
In the event you're only pipeing data to a function with one argument, that would look like this:
```
pinteresting = %{
  pumpkin: true,
  snowfall: false,
  apple: true,
  pine_tree: false
}

pinteresting |> Map.keys

=> [:apple, :pine_tree, :pumpkin, :snowfall]
```

In the above example `pinteresting` is passed as the first argument to `Map.keys/1` which only takes one argument. But what if we piped the data to a function that accepts multiple arguments? In this scenario it is already implied that the first argument will be the piped data, so when we pass our second argument to the function, it will read like it is the first argument. In the example below `%{coffee: true}` is actually the second argument being passed to `Map.merge/2` and `pinteresting` is the implied first argument:
```
pinteresting |> Map.merge(%{coffee: true})
=> %{apple: true, coffee: true, pine_tree: false, pumpkin: true, snowfall: false}
```

