---
  title: "Iterate a collection with indexes in Phoenix template"
  description: "How to iterate a collection with indexes in Phoenix template"
  slug: 'how-to-iterate-a-collection-with-indexes-in-phoenix-template'
  tags: ["elixir", "phoenix"]
  pubDate: "2020-12-25"
  layout: "../layouts/BlogPostLayout.astro"
---

When I started looking into this I was already iterating over a collection with an Elixir comprehension like this:

```elixir
<%= for card <- @cards do %>
  <div>
    # card markup without indexes
  </div>
<% end %>
```

I thought I might just be able to add an index to the comprehension but that's not how [comprehensions work](https://elixir-lang.org/getting-started/comprehensions.html).

Instead I needed to pipe the collection into the `Enum.with_index` function and then pipe the result of that into the `Enum.map` function like so:

```elixir
<%= @cards |> Enum.with_index |> Enum.map(fn({card, index}) ->  %>
  <div>
    <div id="card" style="--color: <%= @settings["color"] %>; ; display: <%= if index == @card_index do "flex" else "none" end %>">
    </div>
  </div>
<% end) %>
```

The result of the map call the entire collection of generated markup, you can see where I use the index value to determine the display property for each card.

<br />
Resources I found useful when building this:
- https://programming-idioms.org/idiom/7/iterate-over-list-indexes-and-values/920/elixir