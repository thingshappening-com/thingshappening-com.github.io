---
  title: "Ruby http gem cheatsheet"
  description: "cheatsheet for Ruby http gem"
  slug: 'cheatsheet-for-ruby-http-gem'
  tags: ["ruby", "http"]
  pubDate: "2021-05-08"
  layout: "../layouts/BlogPostLayout.astro"
---

A few notes to refer to when needing to use the ruby http gem.

*This is not a comprehensive post. It is a quick reference if you have some experience with ruby/http but haven't used it recently.

1) Updating headers

Say you have your http client defined within a method like this:

```Ruby
def http
  HTTP[
    authorization: "Bearer sometoken",
    accept: "application/json",
    content_type: "application/json"
  ]
end
```

While building new functionality you realize you want to use this method, but need different headers, you can accomplish this through the `headers` method on the HTTP object like so:

```ruby
def update_config
  http
  .headers(accept: "application/x-www-form-urlencoded", content_type: "application/x-www-form-urlencoded")
  .put("https://somebaseurl/configuration", form: config)
end
```

2) Post JSON vs Form vs Body

Depending on the `Content-Type` the server you are calling to is expecting you will need to send different post body options:

When the expected `Content-Type` is `application/json` use `json:`:

```ruby
http.put("https://somebaseurl/configuration", json: config)
```

When the expected `Content-Type` is `application/x-www-form-urlencoded` use `form:`:
```ruby
http.post("https://somebaseurl/configuration", form: config)
```

When the expected `Content-Type` is `application/xml` use `body:`:
```ruby
http.post("https://somebaseurl/configuration", body: config)
```

3) If some endpoints are expecting an `Authorization` header and others are not, you can just add the authorization header to the http client as exampled in the first note and if the server does not need authorization it will just ignore it.