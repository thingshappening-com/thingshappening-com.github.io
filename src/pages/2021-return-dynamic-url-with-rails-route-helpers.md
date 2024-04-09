---
  title: "Issue a dynamic url with Rails route helpers"
  description: "Issue a dynamic url with Rails route helpers"
  slug: 'issue-a-dynamic-url-with-rails-route-helpers'
  tags: ["ruby", "http"]
  pubDate: "2021-05-07"
  layout: "../layouts/BlogPostLayout.astro"
---

In Rails you can use routing helper methods to access a URL for a declared route.

As an example:

```ruby
=> users_path
"http://localhost:3000/users"
```

This helps with a few things:

1) You don't have to hard code the URL strings, which need to be updated everywhere anytime this route changed
2) You don't have to check which ENV the app is in in order to get an accurate URL. Example:

```ruby
if Rails.env == "development"
  url = "http://localhost:3000/users"
elsif Rails.env == "testing"
  url = "http://stagingapp.io/users"
else
  url = "http://productionapp.io/users"
end
```

But what if you need to access a dynamic URL path, where an ID is passed to the URL for identifying a specific user in your application? In this case you can pass an argument to the helper like so:

```ruby
=> user_path("123")
"http://localhost:3000/users/123"
```

This is all covered in the Rails routing guide, but I ran into a situation where:
1) I needed to send a dynamic route to a third party system so they could call with any with any ID they wanted.
2) It needed to still not be hard coded and be different based on environment.

The solution I came up with was to pass the route helper a string of `:id` like so:
```ruby
=> user_path(":id")
"http://localhost:3000/users/:id"
```

Now the third party system can call our url using whichever ID they need. Note that URL path variables should be prefixed with a colon `:` like in the example to indicate it is a variable.

If you need to find what url helpers are available to you in your app run the following command in your terminal/command line:
`rails routes`