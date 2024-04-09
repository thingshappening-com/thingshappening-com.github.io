---
  title: "Ecto: delete associated records"
  description: "how to delete associated records in ecto"
  slug: "how-to-delete-associated-records-in-ecto"
  tags: ["elixir", "database"]
  pubDate: "2022-08-26"
  layout: "../layouts/BlogPostLayout.astro"
---

If you have a one to many or many to many association in your Ecto schema and you need to handle deleting all associated records when the primary record is deleted `Ecto.Schema` includes a keyword option you can pass to your association `on_delete: :delete_all` that you can utilize. This will make sure that all child records are deleted before the operation is complete:

```
has_many :items, on_delete: :delete_all
```

Interest in more Ecto options? I wrote on post on [setting primary keys](https://tinytechtuts.com/2022-set-a-primary-key-ecto/).