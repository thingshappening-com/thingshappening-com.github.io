---
  title: "How to break out of a block in Ruby"
  description: "How to break out of a block in Ruby"
  slug: 'how-to-break-out-of-a-block-in-ruby'
  tags: ["ruby"]
  pubDate: "2022-05-28"
  layout: "../layouts/BlogPostLayout.astro"
---

When first learning to program in Ruby it can be difficult to find an answer to the question; "I need to stop iterating this collection once I find the desired element". I think a lot of people try to `return` from the block as a first attempt, but that doesn't return from the block, it returns from the entire method, which in this case isn't the desired behavior. 

So when you need to exit a block early you can use `break` to handle this, it will exit the block and return control back the method the block was running in.

This is different from if you want to just skip the current iteration of the block, in that event you would want to use the [next](https://tinytechtuts.com/2022-adding-a-guard-to-a-block/) keyword.

```ruby
[1,2,3,4].each{|int| break if int == 3}
``` 

Or if you want to assign a value before breaking:
```ruby
[1,2,3,4].each do |int| 
  if int == 3
    @desired_number = int
    break
  end
end
```
