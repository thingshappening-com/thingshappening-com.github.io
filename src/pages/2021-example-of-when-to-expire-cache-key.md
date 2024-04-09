---
  title: "An example of when to expire a cache key"
  description: "when to expire a cache key"
  slug: 'when-to-expire-a-cache-key'
  tags: ["rails", "caching"]
  pubDate: "2021-04-10"
  layout: "../layouts/BlogPostLayout.astro"
---

If you are using a cache key to keep track of queue processing status, said another way, to check if the queue is busy, then it will likely be a good idea to expire those keys. If the queue processing were to error and as a result that key never was deleted, the queue would never be free for additional processing. The only consideration is the maximum amount of processing time that would occur and then add buffer time to it to make sure the cache does not expire prematurely.

To add an expiration to a cache key in Rails use the `expires_in` option when writing to the cache:

```
Rails.cache.write("queue_status_key_id", true, expires_in: 10.minutes)
```

You could also handle this by catching any error thrown during processing and deleting the key, whichever way is more reusable in your specific circumstance.
