---
  title: "Handling unavailable server data in Rails"
  description: "handling data resources that are not immediately available in Ruby on Rails"
  slug: 'handling-data-resources-that-are-not-immediately-available-in-ruby-on-rails'
  tags: ["rails", "sidekiq"]
  pubDate: "2022-09-26"
  layout: "../layouts/BlogPostLayout.astro"
---

If you need a resource to be present from another system, but you don’t know when it will be available, it would be nice if the system whose resource you needed would send a notification to let you know when the resource is there, but if that is not the case, then you might want to try polling for the resource in a background job. This has a few benefits:

1) By using a background job, you are not consuming valuable primary application processing resources to handle this task.
2) If the resource you need is not present at the time of polling, you can fail the job which will put it back in the queue to be tried again later.
3) When a failed job is put back in the queue it will be scheduled using an incremental backoff, so each time it fails it waits a longer before retrying the job. Background job processors like Sidekiq provide incremental backoff functionality with their default configuration.