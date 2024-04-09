---
  title: "Ruby keep_if and delete_if methods"
  description: "Remove item from array if condition is met, ruby"
  slug: 'remove-item-from-array-if-condition-is-met-ruby'
  tags: ["ruby"]
  pubDate: "2022-07-01"
  layout: "../layouts/BlogPostLayout.astro"
---

In the situation where you need to remove an item from a collection based on a condition, you can use the `Array#delete_if` or `Hash#delete_if` methods.

```ruby
hash = {title: "Awesome Possum", count: 43}
hash.delete_if {|key, value| key == :count }
=> {:title=>"Awesome Possum"}

array = [2, 3 ,4, 6, 7]
array.delete_if {|int| int.even? }
=> [3, 7]
```

Another situation you are likely to encounter on your journey as a Ruby Programmer is the need to only keep items in a collection if a condition is met. For this you can use the `Array#keep_if` or `Hash##keep_if` methods.

```ruby
hash = {title: "Awesome Possum", count: 43}
hash.keep_if {|key, value| key == :count }
=> {:count=>43}

array = [2, 3 ,4, 6, 7]
array.keep_if {|int| int.even? }
=> [2, 4, 6]
```

...

Since you seem like keeping things, why not keep on reading with this ruby post on [
How to add a guard to a block in Ruby](https://tinytechtuts.com/2022-adding-a-guard-to-a-block/)?

