---
  title: "Database server vs database"
  description: "Walk through the difference between a database server and a database"
  slug: 'walk-through-the-difference-between-a-database-server-and-a-database'
  tags: ["postgres"]
  pubDate: "2022-06-28"
  layout: "../layouts/BlogPostLayout.astro"
---

As a software engineer you'll often hear about and interact with databases, but then you will inevitably hear of a database server and it's easy to think that these two concepts are on in the same. That is not the case. In this post I will walk through a brief overview of what differentiates these two terms.

<h2>Database Server</h2>
A database server is the computer/server under which databases will exist. It is what knows how to create databases and manage their data. You can install multiple database servers on a single physical machine.

<h2>Database</h2>
Within a database server can exist many databases. These are the objects that contain your database tables, among other objects like database functions, indexes, and views.

The main takeaway here is that a database exists within the context of a database server and a database server exists as an application on physical or virtual hardware.

Ever seen a coyote share a meal with a barred owl? That would be a sight. While we wait for that day to come, you may enjoy a post on [Postgres backslash commands](http://www.devdecks.io/2022-postgres-backslash-commands).