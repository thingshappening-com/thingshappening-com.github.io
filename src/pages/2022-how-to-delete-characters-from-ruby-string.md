---
  title: "How to delete characters from a string in Ruby"
  description: "How to delete characters from a string in Ruby"
  slug: 'how-to-delete-characters-from-a-string-in-ruby'
  tags: ["ruby"]
  pubDate: "2022-04-07"
  layout: "../layouts/BlogPostLayout.astro"
---

If you need to delete characters from a string in Ruby you can do so using the `#delete` method on the `String` object.

You can pass it any number of arguments you would like, for each argument passed to the method ruby will look for a substring or substrings that matches the arguments contents and remove them from the string, the returned value being the string minus any matched patterns passed to the `delete` method.

```ruby
=> "I like pie".delete("e")
"I lik pi"
```

Be careful with this though, it can sometimes have unexpected behavior. In the event you wanted to delete the word "like" you might try this:
```ruby
=> "I like pie".delete("like")
"I  p"
```

But since "like" contains an "i" and "e", it method also deleted those characters from the word "pie".

To delete a full word, I would use [gsub](https://tinytechtuts.com/2022-how-to-replace-string-content-in-ruby) like so:

```ruby
=> "I like pie".gsub("like", "")
"I  pie"
```


Further reading:
- [How to iterate a string containing newlines in Ruby](https://tinytechtuts.com/2022-how-to-iterate-string-with-newlines-in-ruby/)
