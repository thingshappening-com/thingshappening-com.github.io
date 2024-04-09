---
  title: "How to start, stop, and restart Redis or Postgres using Homebrew"
  description: "Learn how to start, stop, and restart Redis or Postgres using Homebrew"
  slug: 'learn-how-to-start,-stop,-and-restart-redis-or-postgres-using-homebrew'
  tags: ["homebrew", "postgres", "redis"]
  pubDate: "2022-06-05"
  layout: "../layouts/BlogPostLayout.astro"
---

In the past I've had to look this up a couple of times and it took me longer than I would have liked to find the answer, so I hope this post can cut down on that time for you now and future me.

After you’ve installed Homebrew you will have access to a `brew services` command for relevant packages. This command is for background services like in this case, database applications. 

To start either of the titled services you can use the following commands:

Start Postgres or Redis:
```
brew services start redis

brew services start postgresql
```

If you need to restart these services for any reason you can do so using these commands:

Restart Postgres or Redis:
```
brew services restart redis

brew services restart postgresql
```

And may you need to stop any of these background processes you can through these commands:

Stop Postgres or Redis:
```
brew services kill redis

brew services kill postgresql
```

If you're looking for more Postgres configuration fun, I've got the article of your desires: [How to use a ConfigMap file for postgres environment variables in Kubernetes](https://tinytechtuts.com/2021-how-to-use-a-configmap-file-for-postgres-url-kubernetes/).

