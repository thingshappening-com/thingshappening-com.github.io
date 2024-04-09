---
  title: "Postgres: users, owners, privileges"
  description: "learn about postgres users and privileges"
  slug: "learn-about-postgres-users-and-privileges"
  tags: ["postgres"]
  pubDate: "2022-07-09"
  layout: "../layouts/BlogPostLayout.astro"
---

In Postgres and similarly in other SQL databases users of a database have a certain level of access depending on the privileges set for the particular user. The reason you would want to have multiple users in a postgres table is to create different levels of access for each particular user. 

To get a list of all users of a postgres database you will first need to access the database server using [psql](https://tinytechtuts.com/2022-pg_ctl-vs-psql/) and then you can run the command `\du`, which will give you a list of users and the roles / privileges.

The different privileges that exist in postgres include:
SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER, CREATE, CONNECT, TEMPORARY, EXECUTE, and USAGE.

To add a role for a user you can use the GRANT keyword:
```
GRANT UPDATE ON reports TO ted.lasso;
```

To remove a role from a user you can use the REVOKE keyword:
```
REVOKE UPDATE ON reports FROM ted.lasso;
```

Adding all privileges to a user defeats the purpose of creating a new user since the table owner aka Superuser will have the ability to do so. To change the owner of the table, you can use the following command:
```
ALTER DATABASE dev_decks_dev OWNER TO ted.lasso;
```

To create a new user for an existing database in postgres use the CREATE USER command like so:
```
CREATE USER new_user;
```

Do databases make you dancey? Maybe you'd enjoy dancing to the beat of [postgres stored procedures](https://tinytechtuts.com/2022-create-and-execute-stored-procedure-postgres/).