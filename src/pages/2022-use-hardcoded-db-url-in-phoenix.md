---
  title: "Using a hardcoded DB url in Phoenix"
  description: "how to use a db url in phoenix"
  slug: "how-to-use-a-db-url-in-phoenix"
  tags: ["elixir", "phoenix"]
  pubDate: "2022-08-12"
  layout: "../layouts/BlogPostLayout.astro"
---

When configuring a database connection, we usually supply values to the various keyword list elements in our config file like so:

```
config :store_db, Store.Repo, 
database: "store_db", 
username: "postgres", 
password: "postgres", 
hostname: "localhost" 
```
These values are used to generate the url string we will use to authenticate and connect to the database. Alternatively if you want to explicitly set a hardcoded database url string you can do that as well. The example below uses the keywords to show which part of the url string maps to which keyword.

"postgres://username:password@hostname/db_name"

Using our example above this would evaluate to:

"postgres://postgres:postgres@localhost/store_db"

And we can use that string in our config file like this:
```
config :music_db, MusicDB.Repo,
url: "postgres://postgres:postgres@localhost/store_db"
```

If you enjoyed this post you may also enjoy [Postgres: create and execute database view](https://tinytechtuts.com/2022-create-and-execute-db-view-postgres/)