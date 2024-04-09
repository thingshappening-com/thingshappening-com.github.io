---
  title: "Dynamically add methods in ruby with define_method"
  description: "Dynamically add methods in ruby with define_method"
  slug: 'dynamically-add-methods-in-ruby-with-define_method'
  tags: ["ruby", "metaprogramming"]
  pubDate: "2022-05-12"
  layout: "../layouts/BlogPostLayout.astro"
---

In a recent post I went over adding methods dynamically with [method_missing](https://tinytechtuts.com/2022-dynamically-add-methods-with-method-missing/). I also issued a word of caution when overriding `method_missing` in that manor.

It turns out there is a better way to handle an event where you need to define methods at runtime in ruby, through the use of `define_method`. The benefit to using `define_method` in this case is it will have any unintended side effects like `method_missing` does with impacting [respond_to?](https://tinytechtuts.com/2022-dynamically-add-methods-with-method-missing/).

In the code below I use `define_method` to add attribute methods to the `Account` class. When this file is first read by the ruby interpreter it will iterate the `@@attributes` array and create the setter methods. Then we can use them later on in our code, like where the example below illustrates when we set a value for email.

```
class Account
  @@attributes = [:email, :first_name, :last_name]

  @@attributes.each do |name|
    define_method(:"#{name}=") do |value|
      @attributes[name] = value
    end
  end

  def initialize
    @attributes = {}
  end
end

Account.new.email = "wizbang@buck.com"
```

If it's not clear, what makes this dynamic is our code is defining the attribute methods for us inside of `define_method` as it runs rather than us declaring them within our code.

I've seen this used in production where a remote API contains data you want to attach to a class in a different ruby/rails app. The data is fetched from the API and `define_method` is used to attach that data to the model.

