---
  title: "Ecto: using SQL for a query"
  description: "using sql with ecto"
  slug: "using-sql-with-ecto"
  tags: ["elixir", "ecto"]
  pubDate: "2022-08-20"
  layout: "../layouts/BlogPostLayout.astro"
---

The Ecto library has a large number functions we can leverage to query the database without writing SQL. These are mostly found on the `Ecto.Repo` module, for example `Repo.get/3`, `Repo.all/2`, `Repo.aggregrate/3`, etc.

But what if you need to write a more complicated SELECT or INSERT? For this circumstance you can leverage the `Repo.query/3` as long as your application is using the Postgres, MySQL, or SQLServer database adapter. The `query` function along with [additional sql functions](https://hexdocs.pm/ecto_sql/Ecto.Adapters.SQL.html) are injected into the `Repo` module if you are using one of those adapters. A screenshot of available functions:

<image src="/images/ecto-sql-query-adapter-functions.png" alt="ecto: query adapter functions" />

If you're not using one of the previously mentioned database adapters you can still get access to these helper functions by importing the `Ecto.Adapters.SQL` module into your project.

An example use of `Repo.query`:
```
Repo.query("select id, name from stores where id >= 10") 
```

If you found this post helpful you might also like [Ecto: example inner join query](https://tinytechtuts.com/2022-example-ecto-inner-join-query/).
