---
  title: "Capitalize the first letter of each word in an Elixir string"
  description: "Capitalize the first letter of each word in an Elixir string"
  tags: ["elixir"]
  slug: "capitalize-first-letter-of-each-word-in-a-string-elixir"
  pubDate: "2024-01-02"
  layout: "../layouts/BlogPostLayout.astro"
---

Looking to capitalize the first letter of each word in an Elixir string? Let's take a look at an example using Elixir's String module.

elixir
Copy code
original_string = "capitalize the first letter"
capitalized_string = original_string |> String.split(~r/\s+/) |> Enum.map(&String.capitalize/1) |> Enum.join(" ")

This is how it works:

`String.split(~r/\s+/)`: Splits the original string into words using a regular expression to identify spaces.
`Enum.map(&String.capitalize/1)`: Applies String.capitalize/1 to each word, ensuring the first letter is capitalized.
`Enum.join(" ")`: Combines the capitalized words into a final string with spaces.

By using these functions, you can transform "capitalize the first letter" into "Capitalize The First Letter" pretty easily.