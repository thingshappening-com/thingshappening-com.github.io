---
  title: "Validating a string is a URL in Rails"
  description: "Learn how to validate that a string is a URL in Rails"
  slug: 'learn-how-to-validate-that-a-string-is-a-url-in-rails'
  tags: ["rails"]
  pubDate: "2022-04-21"
  layout: "../layouts/BlogPostLayout.astro"
---

Tried for a while to find a good example of this in Rails and ultimately came up with the following code:

```ruby
  validates :url,
    allow_nil: true,
    format: { :with => URI::regexp(%w(https)), :message => "URL must be HTTPS"}
```

This ActiveRecord validation will use the Kernels URI::regexp to check for a regex match on the URL string for https, if the check fails an error will be returned on the object along with the message provided. If you need to validate for for both http and https you can pass an array to the regex:

```ruby
URI::regexp(%w([http, https])
```

Further reading:
- [Create a custom Mix task by example](https://tinytechtuts.com/2021-create-a-custom-mix-task-by-example/)

