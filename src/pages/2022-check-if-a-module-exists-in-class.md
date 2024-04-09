---
  title: "Check if a module has been included in a class in ruby"
  description: "check if module included in class ruby"
  slug: "check-if-module-included-in-class-ruby"
  tags: ["ruby"]
  pubDate: "2022-07-13"
  layout: "../layouts/BlogPostLayout.astro"
---

When programming in ruby you may have to reach for a module that has encapsulated some helper functions that you want to use in your class. To tell if the module has been included in your class you can use the `Module` classes `include` method. Likewise, to tell if you choose to extend the module you can check that through the `extend` method.

Below is a working example. Notice we do not need to instantiate our classes to invoke these methods:

```
module SomeModule
  def self.included(base)
    p base.inspect
  end

  def self.extended(base)
    p base.inspect
  end
end

class IncludedClass
  include SomeModule
end

class ExtendedClass
  extend SomeModule
end
```

Running this script will print:
```
"IncludedClass"
"ExtendedClass"
```

To fill your hearts desire for more ruby programming blog posts check out [this one](https://tinytechtuts.com/2022-breaking-out-of-a-block/).