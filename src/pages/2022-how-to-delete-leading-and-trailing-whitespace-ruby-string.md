---
  title: "How to delete the leading and trailing whitespace of a string in Ruby"
  description: "How to delete the leading and trailing whitespace of a string in Ruby"
  slug: 'how-to-delete-the-leading-and-trailing-whitespace-of-a-string-in-ruby'
  tags: ["rails", "turbo"]
  pubDate: "2022-04-08"
  layout: "../layouts/BlogPostLayout.astro"
---


When programming, from time to time you will encounter strings in the format of `"  some leading whitespace"` or `"some trailing whitespace  "`. You can remove these spaces through the use of methods on the `String` object, `lstrip` and `rstrip`.

`lstrip` will delete all the whitespace characters that are present before the first non whitespace character in a string. 

```ruby
=> "  some leading whitespace".lstrip
"some leading whitespace"
```

`rstrip` will delete all the whitespace characters that are present after the last non whitespace character in a string. 

```ruby
=> "some trailing whitespace  ".rstrip
"some trailing whitespace"
```

To delete both the leading and trailing whitespace you can use the `strip` method.

```ruby
=> "    some leading trailing whitespace  ".strip
"some leading trailing whitespace"
```

Further reading:
- [How to replace the contents of a string in Ruby](https://tinytechtuts.com/2022-how-to-replace-string-content-in-ruby/)
