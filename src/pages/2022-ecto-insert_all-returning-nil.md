---
  title: "Ecto: insert_all returning nil"
  description: "return vals from insert_all"
  slug: "return-vals-from-insert_all'"
  tags: ["elixir", "ecto"]
  pubDate: "2022-08-16"
  layout: "../layouts/BlogPostLayout.astro"
---

By default `Repo.insert_all` will return a tuple of the count of objects that were inserted and nil. If you want to return values for the inserted data, you need to explicitly do so by specifying a “returns” option. That looks like this in practice:

```
Repo.insert_all("store", [%{name: "Foot Locker"}, %{name: "Subway"}], returning: [:uuid, :name])
#=> {2, [%{uuid: “dsf45-fdf-1234”, name: "Foot Locker"}, %{uuid: “gggf45-ff-11233”, name: "Subway"}]}
````
