---
  title: "Postgres: role vs user vs privilege"
  description: "learn about roles, users, and privileges in postgres"
  slug: "learn-about-roles-users-and-privileges-in-postgres"
  tags: ["postgres"]
  pubDate: "2022-07-11"
  layout: "../layouts/BlogPostLayout.astro"
---

In relational databases like postgres you will see the term “role” mentioned frequently and you might think “that sounds an awful lot like what I know to be a user”. That’s because in SQL a role acts exactly how a user of a web application would act. One notable difference is that a role can apply to either a single user or a group of users, depending on the context it is used. Roles have certain access rights, just like a user within a web application would have certain access rights. To learn more about altering a roles access level, check out [this post](https://tinytechtuts.com/2022-create-and-execute-stored-procedure-postgres/) on the topic.

In a database system like postgres a role is considered an entity that has ownership rights of certain database objects, such as a table or database itself. Privileges are access rights given to a particular role. You can query for a given roles privileges by using the `\du` command inside of postgres which will display a table of roles and their associated privileges.


