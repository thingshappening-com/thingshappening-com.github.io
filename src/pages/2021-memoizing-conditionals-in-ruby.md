---
  title: "How to memoize a conditional in Ruby"
  description: "memoize a conditional in Ruby"
  slug: 'memoize-a-conditional-in-ruby'
  tags: ["ruby"]
  pubDate: "2021-08-12"
  layout: "../layouts/BlogPostLayout.astro"
---

In Ruby memoization is a performance optimization. It allows you to execute some code, save it in a variable and not have execute that code again if the method is invoked, instead just return the value of a variable.

In the below code `some_method` will only execute the `Account.find` call the first time the method is invoked in on the object.

```Ruby
class MyClass
  def some_method
    @account ||= Account.find(3)  
  end
end
```

I learned recently that you can memoize the return value of a conditional expression as well. To do this wrap the expression in a `begin` block and if `some_method` is invoked more than once the condition will not be run after the first invocation. During the first invocation the conditions return value was saved to `@account` and will be returned on each subsequent call to the method.

```Ruby
class MyClass
  def some_method
    @account ||= begin
      if @organization.has_accounts?
        Account.find(3)
      else
        Account.create(name: "lisa")
      end
    end      
  end
end
```

Similar post:
[How not to memoize in Ruby](https://tinytechtuts.com/2021-when-not-to-memoize-in-ruby/)