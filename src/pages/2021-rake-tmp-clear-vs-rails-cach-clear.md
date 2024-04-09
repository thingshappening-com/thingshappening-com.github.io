---
  title: "Difference between rake tmp:clear and Rails.cache.clear"
  description: "Difference between rake tmp:clear and Rails.cache.clear"
  slug: 'difference-between-rake-tmp:clear-and-rails.cache.clear'
  tags: ["rails", "caching"]
  pubDate: "2021-08-29"
  layout: "../layouts/BlogPostLayout.astro"
---

Sometimes I forget the difference between the functionality of this rake task and Rails method. This is a reference post I wanted to have that I hope you find helpful.

<h3>rake tmp:clear</h3>
This task only removes files from the Rails file system.

<h3>Rails.cache.clear</h3>
This will clear objects stored in the application cache, unless the value for `config.cache_store` for your application is set to `:file_store`. In the latter case `Rails.cache.clear` will be functionally the same as `rake tmp:clear`.

Post details [source](https://stackoverflow.com/questions/19017983/what-is-the-difference-between-rails-cache-clear-and-rake-tmpcacheclear).


