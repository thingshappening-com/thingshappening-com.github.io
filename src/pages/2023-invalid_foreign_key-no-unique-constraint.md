---
  title: "invalid_foreign_key - no unique constraint matching given keys for referenced table"
  description: "learn to override default primary keys ecto"
  tags: ["ecto", "elixir"]
  pubDate: "2023-01-09"
  slug: "learn-to-override-default-primary-keys-ecto"
  layout: "../layouts/BlogPostLayout.astro"
---

I encountered this error when trying to set associations for two related schemas. The error turned out to be an issue with how I set the created the original tables.

My initial table configuration looked like the below. I had used the `primary_key` keyword option when defining the field that was going to take the place of the default primary key, but I had missed the fact that I also needed to use that same keyword option when defining the table (though with a different value).

This is what I had written before:
```
def change do
  create table("organizations") do
    add :name, :string
    add :logo, :string
    add :subdomain, :string
    add :uuid, :binary_id, primary_key: :true
  end
end
```

After rollback this migration with `mix ecto.rollback`, this is what fixed the error. Notice the `table` function now includes `primary_key: :false`.
```
  create table("organizations", primary_key: :false) do
    add :name, :string
    add :logo, :string
    add :subdomain, :string
    add :uuid, :binary_id, primary_key: :true
  end
```

Similar posts:
- [How to set a primary key using Ecto](https://tinytechtuts.com/2023-set-primary-key-ecto/)
