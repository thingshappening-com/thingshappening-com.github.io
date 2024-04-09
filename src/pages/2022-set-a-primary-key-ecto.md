---
  title: "How to set a DB primary key using Ecto"
  description: "set a DB primary key using Ecto"
  slug: "set-a-db-primary-key-using-ecto"
  tags: ["elixir", "ecto"]
  pubDate: "2022-08-14"
  layout: "../layouts/BlogPostLayout.astro"
---

When you use Ecto to manage your database(s) by default it will assume you want to use a primary key of `:id` for each of the tables you create.
Sometimes you will want to use a different primary key. Maybe you want to use a :uuid scheme instead. Whichever the reason, you can override this behavior by passing a keyword option of `primary_key: true` to your migration file. Example:

```
field :store_uuid, :uuid, primary_key: true 
```

I also wrote another post on DB [primary keys in Rails](https://tinytechtuts.com/2021-creating-a-table-with-different-primary-key-rails/) if it helps clear things up you're still uncertain about.
