---
  title: "Elixir ternary operator"
  description: "elixir-ternary-operator-equivalent"
  slug: "setup-vscode-to-trim-spaces"
  tags: ["elixir"]
  pubDate: "2022-07-29"
  layout: "../layouts/BlogPostLayout.astro"
---

If you’re coming into elixir from a language like Javascript or Ruby you are familiar with ternary expressions and how to use them to simplify conditionals. In practice they look something like this:

```
const val = condition ? truthy_handler : falsy_handler
```

In elixir it is handled differently, the most common and frequently used way being:

```
if(condition, do: truthy_handler, else: falsy_handler)
```

If you like conditions, you might also enjoy the post [Get the index position from element in a matched condition](https://tinytechtuts.com/2022-get-index-of-a-matched-conditions-element/).
