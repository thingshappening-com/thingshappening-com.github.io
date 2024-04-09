---
  title: "Creating a table with non id primary key in Rails"
  description: "rails database with primary key other than id"
  slug: 'rails-database-with-primary-key-other-than-id'
  tags: ["rails"]
  pubDate: "2022-12-26"
  layout: "../layouts/BlogPostLayout.astro"
---

In order two change a database tables primary key from `id` to another desired attribute when on create you must first pass an option of `id: false` as a second argument to the `create_table` method. Then when declaring columns for your table, indicate which should become the primary key by passing it an option of `primary_key: true`.

```ruby
  def change
    create_table :applications, id: false do |t|
      t.string  :uid,     null: false, primary_key: true
    end
  end
```

Then within your applications ActiveRecord model you will need to add a delcaration at the top of the model indicating the new primary key. This helps keep things clear for others working on your application. 

```ruby
class Application
  self.primary_key = "uid"
end
```

Similar posts:
- [Same Database table parent/child relationship using Rails](https://tinytechtuts.com/2021-same-db-table-parent-child-relationship-rails/)
 - [Rails nested resources completed example](https://tinytechtuts.com/2021-rails-nested-resources-mvc-complete-example/)

