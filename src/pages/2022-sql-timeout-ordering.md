---
  title: "SQL timeout from ordering"
  description: "Solve SQL timeout from ordering issue"
  slug: 'solve-sql-timeout-from-ordering-issue'
  tags: ["sql"]
  pubDate: "2022-04-25"
  layout: "../layouts/BlogPostLayout.astro"
---

This example is in reference to the following technical problem:

An http request to your app requires querying the database and returning those records as JSON. I will be speaking to this issue with that reference in mind.

If you're querying for a set of records, say 1000 records in a single table and need to order them differently than asc/desc on ID or created_at, then you may encounter a gateway timeout in the query with a table with many records.

For example if you wanted to order a set of records on updated_at, and there are millions of rows in the table, then sql might need to look through millions of records for each time it places a next record in order. This can take a long time.

To help solve this issue it is best to add an index to the table on the column being queried.

Be wary of any additional querying / app processing occurring after your query is returned because if it's a long running query then any additional processing time can also lead to your http connection timing out.

Further reading:
- [Retroactively add timestamps to a Phoenix/Ecto project](https://tinytechtuts.com/2021-retroactively-add-timestamps-in-phoenix-ecto/)


