---
  title: "Convert elixir string with spaces to string with hyphens"
  description: "convert elixir string with spaces to string with hyphens"
  tags: ["elixir"]
  pubDate: "2023-12-30"
  slug: "convert-elixir-string-with-hyphens-to-string-with-spaces"
  layout: "../layouts/BlogPostLayout.astro"
---

In a [previous tutorial](https://tinytechtuts.com/convert-elixir-string-with-spaces-to-string-with-hyphens/) I needed help converting an Elixir string with spaces to a string with hyphens and then downcasing the string. I figured I make another brief tut doing the opposite, converting a string with hyphens back to a string with spaces as a handy utility.

```
=> "elixir-string-with-hyphens" |> String.replace("-", " ")

"elixir string with hyphens"
```

If you need to downcase it for uniformity you can pipe it to `String.downcase/1` as well:

```
=> "Elixir-String-with-Hyphens" |> String.replace("-", " ") |> String.downcase()

"elixir string with hyphens"
```

I hope this helped! Have a good one!

Check out another post:
[ELIXIR ENUM.MAP/2 VS RUBY ARRAY#MAP](https://tinytechtuts.com/elixir-enum-map-vs-ruby-array-map/)
