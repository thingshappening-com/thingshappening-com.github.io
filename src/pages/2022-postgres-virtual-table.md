---
  title: "Postgres: virtual table"
  description: "learn about virtual tables in postgres"
  slug: "learn-about-virtual-tables-in-postgres"
  tags: ["postgres"]
  pubDate: "2022-07-05"
  layout: "../layouts/BlogPostLayout.astro"
---

In Postgres and other SQL databases there is the concept of a virtual table, you will see this arise when referring to another concept in SQL, a [view](https://tinytechtuts.com/2022-create-and-execute-db-view-postgres/). 

The reason views are referred to as a virtual table is because they actually contain the rows and columns that the view created. So if a view returns a number of columns like first_name, last_name, email, etc. it will exist in basically the same form as an actual database table. 
