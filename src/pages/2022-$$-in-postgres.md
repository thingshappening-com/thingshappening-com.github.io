---
  title: "$$ in postgres"
  description: "learn about $$ in postgres"
  slug: "learn-about-$$-in-postgres"
  tags: ["postgres"]
  pubDate: "2022-07-03"
  layout: "../layouts/BlogPostLayout.astro"
---

`$$` in postgres is a string literal. Function bodies in postgres (and sql) as plain text strings. Check out this example from a [previous post](https://tinytechtuts.com/2022-create-and-execute-stored-procedure-postgres/) on stored procedures:

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

You will notice we capture the actual function body (starts with the `begin` keyword) in `$$` and after we have finished defining the function body (ends with `end` keyword) then we close the string literal with another `$$`.
