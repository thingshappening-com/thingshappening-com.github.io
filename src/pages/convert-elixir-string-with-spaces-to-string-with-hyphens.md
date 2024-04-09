---
  title: "Convert elixir string with spaces to string with hyphens"
  description: "convert elixir string with spaces to string with hyphens"
  tags: ["elixir"]
  pubDate: "2023-12-30"
  slug: "convert-elixir-string-with-spaces-to-string-with-hyphens"
  layout: "../layouts/BlogPostLayout.astro"
---

I needed help converting an Elixir string with spaces to a string with hyphens and lowercase. I eventually found a winning example using the String.replace/3 and String.downcase/1 functions. Here's an example:

```
=> converted_string = "Elixir string to hyphens" |> String.replace(~r/\s+/, "-") |> String.downcase()

"elixir-string-to-hyphens"
```

In this example:

`String.replace(~r/\s+/, "-")`: Replaces spaces with hyphens using a regular expression.
`String.downcase()`: Converts the string to lowercase.

The resulting converted_string will be:
```"elixir-string-to-hyphens"```


I hope this helped! Have a good one!

Check out another post:
[CREATE AND SET THE INNERTEXT FOR IN JAVASCRIPT FOR OPTION ELEMENT](https://tinytechtuts.com/create-and-set-inner-text-for-option-element-in-javascript/)
