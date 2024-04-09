---
  title: "How to add a guard to a block in Ruby"
  description: "Learn how to add a guard to a block in Ruby"
  slug: 'learn-how-to-add-a-guard-to-a-block-in-ruby'
  tags: ["ruby"]
  pubDate: "2022-05-31"
  layout: "../layouts/BlogPostLayout.astro"
---

"I don't want specific items in this array to be processed by this ruby block" is [another](https://tinytechtuts.com/2022-breaking-out-of-a-block/) scenario often faced when programming in Ruby. Like the post on [extiting from a block](https://tinytechtuts.com/2022-breaking-out-of-a-block/), I think a lot of people try to `return` from the block as a first attempt, but that doesn't return from the block, it returns from the entire method, which in this case isn't the desired behavior. So when you need to exit the current iteration of a block you can use the `next` keyword. 

```ruby
[1,2,3,4].each{|int| next if int == 3}
``` 
