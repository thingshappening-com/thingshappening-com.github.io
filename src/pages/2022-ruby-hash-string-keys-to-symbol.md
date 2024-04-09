---
  title: "Convert ruby hash with string keys to symbol keys"
  description: "How to convert ruby hash with string keys to symbol keys"
  slug: 'how-to-convert-ruby-hash-with-string-keys-to-symbol-keys'
  tags: ["ruby"]
  pubDate: "2022-04-23"
  layout: "../layouts/BlogPostLayout.astro"
---

If you have a ruby hash with string / arrow keys like so:

```ruby
{
  "key1" => "val1",
  "key2" => "val2"
}
```

But you want the hash to have symbol keys, you can use the `transform_keys` method:

```ruby
{
  "key1" => "val1",
  "key2" => "val2"
}.transform_keys(&:to_sym)

=> {:key1=>"val1", :key2=>"val2"}
```


Further reading:
- [An example of when to expire a cache key](https://tinytechtuts.com/2021-example-of-when-to-expire-cache-key/)


