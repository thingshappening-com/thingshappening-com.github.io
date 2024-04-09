---
  title: "How to iterate a string containing newlines in Ruby"
  description: "How to iterate a string containing newlines in Ruby"
  slug: 'how-to-iterate-a-string-containing-newlines-in-ruby'
  tags: ["ruby"]
  pubDate: "2022-04-04"
  layout: "../layouts/BlogPostLayout.astro"
---

Let's say you have a string that resembles `"a string that \n is really multiple paragraphs \n"` and you want to work with each section of the string with a newline, Ruby has a method to handle that called `each_line`.

```ruby
paragraph = []
example_paragraph = "a string that \n is really multiple paragraphs \n"
example_paragraph.each_line do |line|
  paragraph << line
end

=> paragraph
["a string that \n", " is really multiple paragraphs \n"]
```

It can also iterate over the string any time it encounters a substring passed to it:

```ruby
paragraph = []
example_paragraph = "a string that \n is really multiple paragraphs \n"
example_paragraph.each_line("really") do |line|
  paragraph << line
end

=> paragraph
["a string that \n is really", " multiple paragraphs \n"]
```

Further reading:
- [How to read Ruby open source code locally](https://tinytechtuts.com/2022-how-to-read-ruby-open-source-code-locally/)