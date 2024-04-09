---
  title: "Same database table parent/child relationship using Rails"
  description: "rails parent/child relationships same db table"
  slug: 'rails-parent/child-relationships-same-db-table'
  tags: ["rails"]
  pubDate: "2021-12-25"
  layout: "../layouts/BlogPostLayout.astro"
---

When developing an application you may come across the need for a context in your application to contain a sub-component like a sub-organization or sub-group. Said differently you may want an organization to be able to create many other organizations or a group to be able to create many other groups. 

Using Rails you can handle this by first creating a migration to add a `parent_id` to the context, in this example Groups.

```ruby
class CreateGroups < ActiveRecord::Migration[5.3]
  def change
    create_table :groups do |t|
      t.integer :parent_group_id, index: true
    end
  end
end
```

```ruby
class Group < ApplicationRecord
  belongs_to :parent_group, class_name: :Group, optional: true
  has_many :groups, foreign_key: :parent_group_id
end
```

From there you can establish the relationship in the ActiveRecord model by declaring a Group can belong to another instance of a group through the use of the `parent_group_id` as its connection. Through this connection you can query for a Groups.

```ruby
=> group = Group.first
#<Group:0x00000 id: 17, parent_group_id: 1>

# get a groups parent group
=> group.parent_group
#<Group:0x00000 id: 1, parent_group_id: nil>
```

A Group will also have many groups through the `has_many`. Now for an instance of group you can call `.groups` to get all of the child groups associated with it.

```ruby
=> group = Group.first
#<Group:0x00000 id: 17, parent_group_id: 1>

# get all child groups for a parent group
=> group.groups
[
  #<Group:0x00000 id: 34, parent_group_id: 17>,
  #<Group:0x00000 id: 35, parent_group_id: 17>,
]
```

Similar posts:
 - [Creating a table with non id primary key in Rails](https://tinytechtuts.com/2021-creating-a-table-with-different-primary-key-rails/)

