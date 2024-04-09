---
  title: "How to generate uuids in a Ruby on Rails application"
  description: "How to generate uuids in a Ruby on Rails application"
  slug: 'how-to-generate-uuids-in-a-ruby-on-rails-application'
  tags: ["rails"]
  pubDate: "2022-01-08"
  layout: "../layouts/BlogPostLayout.astro"
---

Have you decided to use universally unique identifiers instead of auto incrementing integers for primary keys in your database table? 

You can generate those UUID's using `SecureRandom.uuid`

```
=> SecureRandom.uuid
"7c8fdaa5-830e-44e0-9a8c-d9785ed60802"
```

Tip: I cover creating a table with a non-id primary key in [this post](https://tinytechtuts.com/2021-creating-a-table-with-different-primary-key-rails/).

If you need to exchange a unique identifier with another system, there is another method to handle that, `SecureRandom.urlsafe_base64`.

```
=> SecureRandom.urlsafe_base64
"mEUXmeXenXUiCNI69xULbQ"
```