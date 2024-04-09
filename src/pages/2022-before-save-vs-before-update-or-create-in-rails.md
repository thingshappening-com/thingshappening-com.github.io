---
  title: "Difference between before_save and before_update and before_create in Rails"
  description: "before_save vs before_update vs before_create in Ruby on Rails"
  slug: 'before_save-vs-before_update-vs-before_create-in-ruby-on-rails'
  tags: ["rails", "active-record"]
  pubDate: "2022-01-18"
  layout: "../layouts/BlogPostLayout.astro"
---

When defining ActiveRecord callbacks I've sometimes needed to ask myself "should I use `before_save` here or `before_create`" and when coming to the answer for this question there are also implications for when to use `before_update`. 

Ultimately if you only need the callback to be invoked when the record is first created, use `before_create`. If you need the callback to be invoked every time the record is updated you can use the `before_update` callback. And if you need the ballback invoked when the object is both created and updated you would use the `before_save` callback method.

As with all ActiveRecord public instance methods you will also have access to the object within the invoked callback method, it can be referenced explicitly through `self`. Or you can just call its attribute methods directly because `self` is the default object.

```ruby
class Account < ApplicationRecord
  before_save :clean_record

  def clean_record
    p "#{self.inspect}"
    p "#{name}"
  end
end

Accout.create(name: "blue bacon", email: "blue@bacon.istasty")
# Puts output from clean_record invocation:
# "#<Account id: nil, name: \"blue bacon\", email: \"blue@bacon.istasty\", admin: nil, created_at: nil, updated_at: nil>"
# "blue bacon"
```

If you enjoyed this post, you might also enjoy [Ruby on Rails integration testing cheatsheet](https://tinytechtuts.com/2022-rails-integration-testing-cheatsheet/)
