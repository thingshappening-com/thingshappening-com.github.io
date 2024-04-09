---
  title: "Create a new DB record using Ecto"
  description: "elixirs ecto library for db record inserts"
  slug: "elixirs-ecto-library-for-db-record-inserts"
  tags: ["elixir", "ecto"]
  pubDate: "2023-01-05"
  layout: "../layouts/BlogPostLayout.astro"
---

When using Ecto modules for your database adapter one of the first things you will want to learn how to do is insert records into your database. Typically if you're going to be inserting records from user input you will want to run those fields through an `Ecto.Changeset` but if you're just trying to test out insert functionality you can create an `Ecto.Schema` struct and then commit the insert using `Ecto.Repo` like so:
```
iex(3)> o = Barks.Repo.get(Barks.Organization, "733a7583-1a79-4c8d-b800-6a9a1513f80f")
iex(4)> t = %Barks.Team{name: "ddd", organization: o}
iex(5)> Barks.Repo.insert(t)
```

Similar posts:
- [Retroactively add timestamps to an Ecto project](https://tinytechtuts.com/2021-retroactively-add-timestamps-in-phoenix-ecto/)
