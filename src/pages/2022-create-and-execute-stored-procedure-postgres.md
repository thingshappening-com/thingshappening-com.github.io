---
  title: "Postgres: create and execute stored procedure"
  description: "learn about stored procedures how to execute them in postgres"
  slug: "learn-about-stored-procedures-how-to-execute-them-in-postgres"
  tags: ["postgres"]
  pubDate: "2022-07-17"
  layout: "../layouts/BlogPostLayout.astro"
---

Similar to the previous post on [database views](https://tinytechtuts.com/2022-create-and-execute-db-view-postgres/), stored procedures are something we don’t use quite as frequently in modern software development. They are essentially functions you can execute against a database and like functions they accept parameters to make them dynamic.  

Stored procedures are not used frequently in modern web development for a variety of reasons but a some of the bigger ones are: 
They are slow to write
Non trivial to change
Uncommon knowledge in today's dev environment, making maintenance more challenging.

They can be useful though if you and your team are open to using SQL for handling some business logic.

To illustrate this through example, let’s create a stored procedure called `update_status` that updates the status of a report:

First you need to define the procedure and declare any arguments that may be needed, as well as the language, then finally the actual procedure to take place. Also note if you’re not used to reading SQL the $$ is a string literal.
```
create or replace procedure report_status_update(
   new_status varchar(20),
   report_id int
)
language plpgsql    
as $$
begin
    update reports 
    set status = new_status
    where id = report_id
    commit;
end;$$;
```

You can execute this stored procedure using:
```
call report_status_update(‘COMPLETE’, 2)
```
