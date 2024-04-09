---
  title: "How to replace the contents of a string in Ruby"
  description: "How to replace the contents of a string in Ruby"
  slug: 'how-to-replace-the-contents-of-a-string-in-ruby'
  tags: ["ruby"]
  pubDate: "2022-04-03"
  layout: "../layouts/BlogPostLayout.astro"
---

For this example we will take the string `"bacon, eggs"` and using that string create a new string, `"bacon, orange juice"`, while leaving the original string intact.

To accomplish this task we will use the `String` class method `gsub`. In the most basic use case we will pass two arguments `gsub`:
1. The contents of the string we want to replace.
2. The replacement text.

The result will return a new string with the contents replaced:
```
bacon_and_eggs = "bacon, eggs"
bacon_and_oj = bacon_and_eggs.gsub("eggs", "orange juice")

=> bacon_and_eggs
"bacon, eggs"
=> bacon_and_oj
"bacon, orange juice"
```

In more advanced use cases you can pass a pattern you want to match as the first argument to `gsub`.

Further reading:
- [How to handle token auth in Rails](https://tinytechtuts.com/2022-how-to-handle-token-auth-in-rails/)
