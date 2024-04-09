---
  title: "Dynamically add methods in ruby with method_missing"
  description: "Dynamically add methods in ruby with method_missing"
  slug: 'dynamically-add-methods-in-ruby-with-method_missing'
  tags: ["ruby", "metaprogramming"]
  pubDate: "2022-05-03"
  layout: "../layouts/BlogPostLayout.astro"
---

*Note if you need to define methods dynamicallly I found a better way to do so with the [define_method](https://tinytechtuts.com/2022-dynamically-add-methods-with-def-method/), but if you're interested in learning about overriding `method_missing` or another way of dynamically adding methods in ruby, please read on.

When you call a method that doesn’t exist in ruby, internally ruby will call it’s own `method_missing` method, which will raise the undefined method error:

```
hello_world
=> `<main>': undefined local variable or method `hello_world' for main:Object (NameError)
```

But if needed you can override the default `method_missing` implementation with behavior to suite your applications needs.

For example you could use `method_missing` to catch unknown methods and define them dynamically. In the implementation below `ActiveRecordImplementation` initializes an empty hash of attributes which `method_missing` will reference and add to if the attribute does not currently exist on the object.

```
class ActiveRecordImplementation
  attr_reader :attributes

  def initialize
    @attributes = {}
  end

  def method_missing(name, *args, &block)
    if name.end_with?("=")
      @attributes[name.to_s[0..-2].to_sym] = args.first
    else
      @attributes[name]
    end
  end
end

ActiveRecordImplementation.name = "Jimmy Bones"
```

If it's not clear, what makes this dynamic is our code is defining the attribute methods for us inside of `method_missing` as it runs rather than us declaring them within our code.

A note of caution in using this, if you’re not careful overriding method_missing can cause other issues with ruby behavior, a noted example is with `respond_to?`. It may be helpful to include a default conditional that just calls the ruby implementation by calling `super` in this case.

Further reading:
- [Handling system authentication in software engineering](https://tinytechtuts.com/2022-system-auth-in-software-engineering/)