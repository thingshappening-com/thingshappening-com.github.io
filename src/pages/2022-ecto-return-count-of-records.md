---
  title: "Ecto: return a count of records"
  description: "ecto records count"
  slug: "ecto-records-count"
  tags: ["elixir", "ecto"]
  pubDate: "2022-08-18"
  layout: "../layouts/BlogPostLayout.astro"
---

To handle aggregates in Ecto there is a utility function we can leverage on `Repo` called `aggregate/3`. This function takes three arguments but the third is optional:
1. The database table name
2. The desired aggregate operation (in this case count)
3. A field to count

Below is an example of executing the function:
```
Repo.aggregate(“stores”, :count, :uuid)
=> 4
```
