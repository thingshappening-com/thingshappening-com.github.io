---
  title: "How to get column names and their types using Postgres"
  description: "Learn how to get column names and their types using Postgres"
  slug: 'learn-how-to-get-column-names-and-their-types-using-postgres'
  tags: ["postgres"]
  pubDate: "2022-06-17"
  layout: "../layouts/BlogPostLayout.astro"
---

There may come a time when you're working with a postgres db that contains many tables and you want some meta data about a specific table, in this instance that tables column names and its types. 

To accomplish this you will first need to access your postgres database through either a library provided by the programming language you are using to interact with the database or accessing the database directly on the command line. 

If you have privileged access to the database you can login to it on the command line using:

```
psql name_of_database
```

After you're in the database, to get the list of column names and types from a table you can use this query:

```sql
SELECT column_name, data_type FROM information_schema.columns WHERE table_name='users';
```

This query accesses a special table in postgres called information_schema and queries for the column_name and data_type on the users table.

If you thought that article was awesome, wait until you read [Postgres pg_ctl vs psql](https://tinytechtuts.com/2022-pg_ctl-vs-psql/) it'll knock your socks off. If you're not wearing any socks then don't even bother reading it.