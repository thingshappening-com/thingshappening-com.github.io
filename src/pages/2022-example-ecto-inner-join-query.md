---
  title: "Ecto: example inner join query"
  description: "example of how to write a join query in ecto"
  slug: "example-of-how-to-write-a-join-query-in-ecto"
  tags: ["ecto", "elixir"]
  pubDate: "2022-08-24"
  layout: "../layouts/BlogPostLayout.astro"
---

To write an inner join query using Ecto we will need to reach for the `Ecto.Query` module. This will give us access to a keyword-based approach to writing queries. This module was designed to be expressive and closely mimic SQL queries using keywords.

Below is an example using a single inner join. In this query we join the `employees` and `stores` tables using the `join:` keyword and return the store and employee names as a map. You'll notice we create two variables we can reference in our queres `e` and `s` respectively, these are known as query bindings:
```
import Ecto.Query

query = from s in "stores",
          join: e in "employees", on: s.id == e.store_id,
          where: s.id > 10,
          select: %{store: store.name, employee: e.name}
Repo.all(query)
```

Below is an example using multiple inner joins. In this query we join the `employees` and `stores` tables again but then also join the `schedules` table using an additional `join:` keyword and then return a value for scheduled in our select:
```
import Ecto.Query

query = from s in "stores",
          join: e in "employees", on: s.id == e.store_id,
          join: sc in "schedules", on: sc.employee_id == e.id,
          where: s.id > 10,
          select: %{store: store.name, employee: e.name, scheduled: sc.scheduled}
Repo.all(query)
```

If you found this post helpful you might also like [Ecto: using SQL for a query](https://tinytechtuts.com/2022-ecto-direct-sql-query/).