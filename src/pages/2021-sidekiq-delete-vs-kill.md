---
  title: "The difference between Sidekiq's Kill and Delete functions"
  description: "The difference between Sidekiq's Kill and Delete functions"
  slug: "the-difference-between-sidekiqs-kill-and-delete-functions"
  tags: ["rails", "sidekiq"]
  pubDate: "2021-07-13"
  layout: "../layouts/BlogPostLayout.astro"
---

When using the Sidekiq UI, there are two buttons for removing jobs from the queue and those are `delete` and `kill`.

The `delete` option destroys the job entirely with no possibility of replaying in the future.

The `kill` option moves the job from the queue to the dead tab. From there you can re-enqueue the job anytime you want. This can be useful when testing jobs. If a job or jobs are failing over and over again it can get noisy and difficult to keep track of what is going on so having the `kill` option helps to alleviate this issue.

Similar post(s):
[Delete Sidekiq cache key](https://tinytechtuts.com/2021-delete-sidekiq-cache-key/)