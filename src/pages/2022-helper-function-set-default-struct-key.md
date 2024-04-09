---
  title: "Helper function for setting default Struct key"
  description: "Helper function for setting default Struct key in elixir programming."
  slug: "helper-function-for-setting-default-struct-key-in-elixir-programming."
  tags: ["elixir"]
  pubDate: "2022-09-09"
  layout: "../layouts/BlogPostLayout.astro"
---

Setting a default key for an Elixir Struct was something I had searched Google for and had a hard time finding a solution for. I hope this quick post is able to be the solution needed for some of you beautiful devs out there just trying your best.

The `set_struct_default` function below has an arity of three, accepting a struct, a key to set a default for and a default value. The function body checks if the struct already has a value for the key being checked, if it does it will just return the struct, otherwise it will set the default value.

```
def set_struct_default(struct, key, default) do
  if Map.has_key?(struct, key) do
    struct
  else
    Map.put(struct, key, default)
  end
end
```

Note if you're trying to set a default for a schema based struct like with Ecto or Absinthe then those types libraries typically allow you to define a default for a "field" in the struct as a keyword list option `default: "some default string"`.

If you enjoyed this post you may also enjoy [Update what Ecto considers nil / empty](https://tinytechtuts.com/2022-update-what-ecto-considers-empty/).
