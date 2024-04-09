---
  title: "Elixir List count of each unique element"
  description: "Get a count of elements occurance in Elixir List"
  slug: 'get-a-count-of-elements-occurance-in-elixir-list'
  tags: ["elixir"]
  pubDate: "2022-05-18"
  layout: "../layouts/BlogPostLayout.astro"
---

There may come a time where you need to get a count of how many times a specific element occurs in a List. It might be needed for reporting, or to show to a user in an admin dashboard.

To accomplish this in Elixir you can use the `Enum.frequencies/1` function. This function will take one argument, the enumerator, and return map with each unique element and it's occurence count.

```elixir
Enum.frequencies(["football", "baseball", "baseball", "hockey", "baseball"])
=> %{"baseball" => 3, "football" => 1, "hockey" => 1}
```

Further reading:
- [Rendering a LiveView template outside of router](https://tinytechtuts.com/2022-rendering-liveview-template-outside-of-router/)