---
  title: "How to call a Rails method before a validations occur"
  description: "rails before_validation callback"
  slug: 'rails-before_validation-callback'
  tags: ["rails", "active-record"]
  pubDate: "2022-01-17"
  layout: "../layouts/BlogPostLayout.astro"
---

If you need some behavior to occur before validations take place on an ActiveRecord object, you can add the `before_validation` callback to your ActiveRecord model. This method accepts a method name as an argument which will be automatically invoked before validations are run.

You will also have access to the ActiveRecord within the invoked callback method, it can be referenced explicitly through `self`. Or you can just call its attribute methods directly because `self` is the default object.

```ruby
class Account < ApplicationRecord
  # is called second
  validates_presence_of :name, :email
  # is called first
  before_validation :clean_record

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

If you enjoyed this post, you might also enjoy [How does Rails handle referential integrity](https://tinytechtuts.com/2022-how-does-rails-handle-referential-integrity/)
