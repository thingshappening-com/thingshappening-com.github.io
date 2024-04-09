---
  title: "Ecto: trigger update without changeset"
  description: "ecto db trigger update without changeset"
  tags: ["elixir", "ecto"]
  pubDate: "2023-10-08"
  slug: "ecto-trigger-update-without-changeset"
  layout: "../layouts/BlogPostLayout.astro"
---

If you need to trigger a database update for a specific table without committing an update to any of the other columns you can do so with

```
    Repo.update(my_ecto_schema_context, force: true)
```

The `force: true` option in the above code snippet tells Ecto to trigger the write to update the tables `updated_at` column in my circumstance. It does this without needing to update any of the other columns.

One reason you might need to do this is to handle wanting an update to the table in question when another table completes a successful transaction.

