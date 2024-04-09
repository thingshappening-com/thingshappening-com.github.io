---
  title: "SQL inner join not returning records"
  description: "SQL inner join not returning records"
  slug: 'sql-inner-join-not-returning-records'
  tags: ["sql"]
  pubDate: "2022-04-25"
  layout: "../layouts/BlogPostLayout.astro"
---

An inner join query is not returning any records for a table but you know there are records for the query in at least one of the tables and you want those records with null values being used for columns without data.

In this scenario you need to use an outer join, either a left outer join or a right outer join. It will accomplish exactly that, it will get all the data from the table running the join and it will provide null values for all of the columns that don't have data on the table being joined.


Further reading:
- [Retroactively add timestamps to a Phoenix/Ecto project](https://tinytechtuts.com/2021-retroactively-add-timestamps-in-phoenix-ecto/)


