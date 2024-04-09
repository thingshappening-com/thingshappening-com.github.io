---
  title: "Postgres: create and execute database view"
  description: "learn about views and how to execute them in postgres"
  slug: "learn-about-views-and-how-to-execute-them-in-postgres"
  tags: ["ruby"]
  pubDate: "2022-07-05"
  layout: "../layouts/BlogPostLayout.astro"
---

There is a lot that happens behind the scenes in modern SQL databases. I say this because so many of our interactions with databases happen through libraries and ORM’s in the web frameworks we use. The danger there is it can be easy to not learn as much about database’s as developers of the past have had to, so when a cryptic issue arises, it can take much longer to bring to a resolution. The title topic, postgres views, can be one of those easily areas. 

There are a few different types of views (read-only, materialized, updatable), but here we will focus on read only views. Two of the use cases for using view:
Hide the complexity of a complex query. If you create a view that encapsulates a complex query, it can be well named for simpler understanding as to the queries purpose and also reused to make even more complex queries more readable:

```
CREATE VIEW all_decks AS complex_multi_level_join_query;

SELECT * FROM all_decks INNER_JOIN other_query;
```

Limit exposure to tables for non administrators. In this case you would create a view containing only columns / tables you want to expose and give those users access only to that view.

Creating and executing a view:
This was covered above, but for explicitness you can create a view through the `CREATE VIEW` SQL keywords. Example:
```
CREATE VIEW all_decks AS SELECT * FROM decks;
```
And then to use that view:
```
select * from all_decks;
```

I think it’s worth noting if you create a view using the asterisk wildcard, only the columns existing at the time of view creation will be captured within that view. Said differently, if you add columns to the table the view was created for, the new columns will not be accessible in that view.

If you enjoyed that post on views, you might also enjoy a trip to the Great Smoky Mountains, or [this post](https://tinytechtuts.com/2022-pg_ctl-vs-psql/) on `psql` vs `pg_ctl`.
