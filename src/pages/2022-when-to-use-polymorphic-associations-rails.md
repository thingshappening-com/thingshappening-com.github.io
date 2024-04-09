---
  title: "When to use polymorphic associations in Rails"
  description: "Rails polymorphic associations, when to use them"
  slug: 'rails-polymorphic-associations,-when-to-use-them'
  tags: ["rails", "active-record"]
  pubDate: "2022-01-20"
  layout: "../layouts/BlogPostLayout.astro"
---

Declaring a polymorphic association in your Rails application allows you to setup a single `belongs_to` association and then have as many models as needed resuse this interface. 

If you did not setup a polymorphic relationship then each of the models would need to declare a separate `has_many` and `belongs_to` association and a new migration would need to be run each time you wanted to add a newly associated model.

With a polymorphic association setup you do not need to alter the database, you only have to provie the new model name as the `_type` and the records `_id` to the polymorphic model and then declare the `has_many` association on the new model and your new model will be working as expected.

To see an example of a polmoyphic association check out [How to handle token auth in Rails](https://tinytechtuts.com/2022-how-to-handle-token-auth-in-rails/).
