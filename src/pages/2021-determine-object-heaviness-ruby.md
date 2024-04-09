---
  title: "How to determine the rough size (heaviness) of an object in Ruby"
  description: "determine size of an object in Ruby"
  slug: 'determine-size-of-an-object-in-ruby'
  tags: ["ruby"]
  pubDate: "2021-10-19"
  layout: "../layouts/BlogPostLayout.astro"
---


Let's say you are trying to find ways to reduce application memory and want to do a rough audit of object sizes in your application to see if there are any bloated objects that can be divided into smaller objects for a more performant application. How do you go about this?

The means I've found is through the use of the `objspace` library. An example use of this library:

```
require 'objspace'

ObjectSpace::trace_object_allocations{ 
  org = Organization.last
  puts ObjectSpace::memsize_of(org) 
}
```

The example above first requires the library and then prints the size of the Ruby object in bytes.

Note that this is an approximation and the ObjectSpace documentation recommends you be familiar with your MRI implementation before using this library.
