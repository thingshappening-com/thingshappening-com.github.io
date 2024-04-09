---
  title: "How to get unique values for a database column in Rails"
  description: "rails unique db values"
  slug: 'rails-unique-db-values'
  tags: ["rails", "databases"]
  pubDate: "2021-03-17"
  layout: "../layouts/BlogPostLayout.astro"
---

The below database call through `ActiveRecord` will return all the unique/distinct values for a single column.

```ruby
ActiveRecordTable.distinct.pluck(:column)
```

The distinct method called on an `ActiveRecord` model tells `ActiveRecord` whether the values should be unique or not. If you didn't care about unique values you could use a method like `select`.

Pluck is then used to query the column or columns you want the values for. An example from an application:

```ruby
User.distinct.pluck(:email)
```


