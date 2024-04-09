---
  title: "Postgres pg_ctl vs psql"
  description: "Learn the difference between pg_ctl vs psql"
  slug: 'learn-the-difference-between-pg_ctl-vs-psql'
  tags: ["postgres"]
  pubDate: "2022-06-20"
  layout: "../layouts/BlogPostLayout.astro"
---

This article is based on my experience using these commands and my general understanding, there undoubtedly is more that can be accomplished with each, so please keep that in mind as you proceed through this wildly fun postgres post.

<h2>pg_ctl</h2>
Any time I reach for the `pg_ctl` command it is for administrating my postgres server. An example would be starting and stopping the server. The most common commands I've used:

Start postgres server:
```
pg_ctl start
```

Stop postgres server:
```
pg_ctl stop
```

Check the status of the postgres server:
```
pg_ctl status
```

Restart the postgres server:
```
pg_ctl restart
```



<h2>psql</h2>

The `psql` command is used for accessing a database server. The documentation describes it as "terminal based front-end to PostgreSQL". There are different options you can use with this command to specify things like user and hostname. Below we cover some of the different options:

Connect to a database under root access:
```
psql database_name
```

You can also specify a specific user to connect to the database with:
```
psql -d database_name -U user_name -W
```

Or connect to a server on a different host:
```
psql -h host -d database_name -U user_name -W	
```

Did this post make your day a little brighter? Why not take a swim in this other postgres article about [postgres with Homebrew](https://tinytechtuts.com/2022-start-stop-restart-postgres-redis-homebrew/) or learn how to access [table metadata](https://tinytechtuts.com/2022-get-column-names-and-types-postgres/) if that's more your cup of liquid iv.
