---
  title: "Method returning memoized object is called with different arguments"
  description: "what happens when you call a method that returns memoized object with new parameters"
  slug: 'what-happens-when-you-call-a-method-that-returns-memoized-object-with-new-parameters'
  tags: ["ruby"]
  pubDate: "2021-10-06"
  layout: "../layouts/BlogPostLayout.astro"
---

I wasn't sure what would happen if I called a method that returned a memoized object but that object that was memoized also used data passed into the method via a method argument so I created this test:

```ruby
class NewClass
  def updater
    update1
    update2
  end

  def update1
    p "test1: #{update_data("Admin review")}"
  end

  def update2
    p "test2: #{update_data("Completed")}"
  end

  def update_data(status=nil)
    @body ||= {status: status}
  end
end

NewClass.new.updater
=> "test1: {:status=>\"Admin review\"}"
=> "test2: {:status=>\"Admin review\"}"
```

In the example above the `NewClass` object makes two calls to `update_data` which returns the object in question. Each of those calls passes a different parameter to the method, but the object does not get updated with the different data after it is memoized during the first method call.

For your continued enjoyment:
- [How not to memoize in Ruby](https://tinytechtuts.com/2021-when-not-to-memoize-in-ruby/)
