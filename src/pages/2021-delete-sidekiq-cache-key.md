---
  title: "Delete a cache key from Sidekiq using Rails"
  description: "Delete a cache key from Sidekiq using Rails"
  slug: 'delete-a-cache-key-from-sidekiq-using-rails'
  tags: ["rails", "caching", "sidekiq"]
  pubDate: "2021-04-05"
  layout: "../layouts/BlogPostLayout.astro"
---

To handle a situation where a cache key needs to be deleted and you don't have admin access to the system itself, you can handle the remove through the application by defining a new Rails controller method that calls a Sidekiq job to delete the cache key.

The steps are:
1) Define the new route and controller action
2) Create the new Sidekiq job to delete the key
3) Invoke the controller action in whichever environment the key needs to be cleared from

Route and Controller
```
get "/sidekiq/delete_key/:key", to: "sidekiq#delete_key"
```

```
class SidekiqController < ApplicationController
  def delete_key
    DeleteSidekiqKeyJob.perform_later(params[:key])
  end
end
```

Job
```
class DeleteSidekiqKeyJob < ApplicationJob
  def perform(key)
    Rails.cache.delete(key)
  end
end
```

Now you can hit the route you defined and pass in the key as a path parameter to delete the cached record.

