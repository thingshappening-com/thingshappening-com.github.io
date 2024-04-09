---
  title: "Ecto: convert query to sql"
  description: "how to convert an ecto query to sql"
  slug: "how-to-convert-an-ecto-query-to-sql"
  tags: ["elixir", "ecto"]
  pubDate: "2022-08-22"
  layout: "../layouts/BlogPostLayout.astro"
---

There may come a time in your Ecto life where you want to know what the actual SQL statement is that the Repo module is generating for you. When that special time comes, you have a wonderful function you can leverage that exists on the `Ecto.Adapters.SQL` module, `to_sql/3`. To use this function you need to pass the Repo function (expressed as an atom) and the `Ecto.Query` as arguments. Example:

```
query = from s in "stores", select: s.name
Ecto.Adapters.SQL.to_sql(:all, query)
```

In a [previous post](http://localhost:4000/2022-ecto-direct-sql-query){:taget="_blank"} I detailed how if you're using one of these Ecto database adapters:
1. Postgres
2. MySQL
3. SQLServer

Then you don't need to use the `Ecto.Adapters.SQL` module because the `.to_sql` function will be imported into your Repo module.

If you found this post helpful you might also like [Ecto: example inner join query](https://tinytechtuts.com/2022-example-ecto-inner-join-query/).
