---
  title: "Export SQL records to CSV or STDOUT"
  description: "Export SQL records to CSV or STDOUT"
  slug: 'export-sql-records-to-csv-or-stdout'
  tags: ["sql"]
  pubDate: "2022-05-13"
  layout: "../layouts/BlogPostLayout.astro"
---

If you need to export SQL to a file, particularly a CSV you can do so using the `COPY` command. The `COPY` command has a few different options we will use to achieve this goal, namely `TO`, `DELIMITER`, `CSV` and `header`.

`TO` will specifiy where to dump the results. `CSV` specifies what type of file to create, while `HEADER` will make sure the first row of the file is allocated to column headers. `DELIMITER` denotes the character to separate the columns from within the file.

Below is an example of the command I tried to use to handle this:
```sql
COPY (SELECT * FROM users where users.organization_id='123') TO '/path/to/newfile' WITH DELIMITER ',' CSV HEADER;
```

I mentioned I "tried to" use this command, as often happens in tech it was not so straightforward much like solving the [sql ordering timeout](https://tinytechtuts.com/2022-sql-timeout-ordering/). This time I received an error because I didn't have root access to the sql server and was met with the error:

ERROR:  must be superuser or a member of the pg_write_server_files role to COPY to a file

HINT:  Anyone can COPY to stdout or from stdin. psql's \copy command also works for anyone.

So I listened to the HINT and printed my results to STDOUT in my terminal. This is what the resulting command looked like:

```sql
COPY (SELECT * FROM users where users.organization_id='123') TO STDOUT;
```

Printing to STDOUT is more helpful if you have unlimited scroll back set in your terminal. If you’re using iterm on a Mac you can enable this through:
preferences -> profiles -> unlimited scroll back. 

Without that you would only see the last 1000 rows printed.

Further reading:
- [SQL inner join not returning records](https://tinytechtuts.com/2022-sql-inner-join-not-returning-records/)
