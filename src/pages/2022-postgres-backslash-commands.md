---
  title: "Postgres backslash commands"
  description: "List of postgres backslash commands"
  slug: 'list-of-postgres-backslash-commands'
  tags: ["postgres"]
  pubDate: "2022-06-26"
  layout: "../layouts/BlogPostLayout.astro"
---

When using PostgreSQL or any SQL database for that matter there are a number of useful commands you can use inside of the PostgreSQL terminal that begin with a backslash and are followed with one or two characters. This post is a non-exhaustive list explaining some of those commands.

List all available databases:
```
\l
```

Quit from terminal:
```
\q
```

List all available tables in a database:
```
\dt
```

Run the previously executed command:
```
\g
```

List previously executed commands:
```
\s
```

List of helpful postgres commands:
```
\?
```

List all of the schemas of a database:
```
\dn
```

List all functions:
```
\df
```

List all of the tables views:
```
\dv
```

Love databases more than your dog loves cheese? You might want to check out [this post](https://tinytechtuts.com/2022-pg_ctl-vs-psql/).