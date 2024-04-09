---
  title: "Convert nested array to hash in Ruby"
  description: "Learn how to convert nested array to hash in Ruby"
  slug: 'learn-how-to-convert-nested-array-to-hash-in-ruby'
  tags: ["ruby"]
  pubDate: "2022-06-23"
  layout: "../layouts/BlogPostLayout.astro"
---

Let's say you have a complex data structure containing nested arrays like this:

```ruby
arr = [
  [:id, 233],
  [:name, "ruby tuesday"],
  [:email, "ruby@tuesday.com"]
]
```

And you want to convert it to a hash where the keys of the hash are the first element of each subarray and the keys value is the second item in the subarray. you can accomplish using the `Hash` classes class method `[]`, like so:

```ruby
Hash[arr]
=> {:id=>233, :name=>"ruby tuesday", :email=>"ruby@tuesday.com"}
```

Looking for more red jewel programming insights? Why not head over to [Ruby [0..-2] explained](https://tinytechtuts.com/2022-ruby-0..-2-explained/)