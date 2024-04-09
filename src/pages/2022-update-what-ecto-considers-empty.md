---
  title: "Update what Ecto considers nil / empty"
  description: "use changesets to update empty values"
  slug: "use-changesets-to-update-empty-values"
  tags: ["elixir", "ecto"]
  pubDate: "2022-08-30"
  layout: "../layouts/BlogPostLayout.astro"
---

The Ecto library ships with a Changeset module to assist with make changes to our database safely. Out of the box the `cast/4` will consider blank strings and `nil` to be empty values. You can add to the list of values the changeset will consider empty using the `empty_values:` option. In practice that looks like:

```
params = %{"title" => "Movie Review", "author" => "NULL"}

changeset = cast(%Post{}, params, [:title, :author], empty_values: ["", "NULL"]) 

changeset.changes
#=> %{title: "Movie Review"} 
```

In this example we added "NULL" to the empty values list and when we casted params the "author" key matched the "NULL" value so it was filtered out.
