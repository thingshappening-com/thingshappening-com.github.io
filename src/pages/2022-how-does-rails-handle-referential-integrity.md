---
  title: "How does Rails handle referential integrity"
  description: "how does rails handle referential integrity"
  slug: 'how-does-rails-handle-referential-integrity'
  tags: ["rails", "databases"]
  pubDate: "2022-01-07"
  layout: "../layouts/BlogPostLayout.astro"
---

<h3>Primary Key / Foreign Key</h3>
To properly illustrate this concept lets first outline the primary key / foreign key relationship:
- Primary key: this is a column (sometimes multiple columns) in a table that uniquely identify a row in a database table. Relational databases enforce the uniqueness of primary keys, each row in a table must have a unique primary key and they are almost always auto generated.
- Foreign key: this is a column in a table whose value matches the primary key of a record in another table. If you are to add a database row with a foreign key column, the primary key record must already exist.

The primary key / foreign key relationship sets up the one to many relationship in rails where the primary key record can have many related foreign key records.

<h3>What is referential integrity</h3>
Referential integrity is a constraint that enforces a relationship between two records. It ensures that values in a foreign key column must either be exist in primary key that is referenced by the foreign key or they must be null. This is usually configured and handled at the database layer of an applications system.

<h3>How does Rails handle referntial integrity</h3>
The Rails way and specifically here, the Active Record way says that we should handle as much behavior and contraints as possible at the application level so rails suggests first adding application level validations in your Active Record models like so:

```ruby
class Product < ApplicationRecord
  validates :user_id, uniqueness: true
end
```
 
And we can also add the `dependent: :destroy` option to our models to destroy child objects when parent objects are destroyed. But Rails also gives you the option of adding the database level contraint to guarantee referential integrity and you can do that by `add_foreign_key :products, :users`.

Similar posts:
- [Rails integration testing cheatsheet](https://tinytechtuts.com/2022-rails-integration-testing-cheatsheet/)