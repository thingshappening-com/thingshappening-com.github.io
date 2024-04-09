---
  title: "class_eval with execution lines"
  description: "learn how to get the execution line when using class_eval"
  slug: 'learn-how-to-get-the-execution-line-when-using-class_eval'
  tags: ["ruby"]
  pubDate: "2022-06-30"
  layout: "../layouts/BlogPostLayout.astro"
---

If you find yourself using Ruby's `class_eval` method to define some functions within a multi-line string, you may have difficult troubleshooting should an error occur in one of the functions you define.

```ruby
class SomeObject
  %w(method_name_1 method_name_2).each do |method|
    class_eval <<-RUBY
      def #{method}
        raise
      end
    RUBY
  end
end
```

In the code above I define two methods (`method_name_1`, `method_name_2`) on the `SomeObject` class using `class_eval`. Each method will raise an error. Now when that error is raised, it will be hard to debug because there will be no coherent backtrace, since we are metaprogramming in this way ruby doesn't know where the error occurred.

In order to get details of where the error occurred when using `class_eval` in this manor, you will need to pass two arguments to the ruby multiline string, `__FILE__` and `__LINE__ + 1`. Now when you that error is raised you will have an accurate account of where it occurred within your program.

```ruby
class SomeObject
  %w(method_name_1 method_name_2).each do |method|
    class_eval <<-RUBY, __FILE__, __LINE__ + 1
      def #{method}
        raise
      end
    RUBY
  end
end
```

Ruby dooby doo, says Scooby at a ruby conference. If you want to make Scoob happy, check out this post [Convert nested array to hash in Ruby](https://tinytechtuts.com/2022-convert-nested-array-to-hash/).

