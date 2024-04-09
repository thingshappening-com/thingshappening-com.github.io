---
  title: "Abstract class vs regular class in ruby"
  description: "learn about abstract classes"
  slug: "learn-about-abstract-classes"
  tags: ["ruby"]
  pubDate: "2022-07-15"
  layout: "../layouts/BlogPostLayout.astro"
---

In Ruby programming we use classes to represent real world objects and encapsulate behavior relevant to each object, respectively. We then create instances of those classes and call methods on them to make our programs run:

```ruby
class Dog
 def bark
   "woof"
 end
end
 
puts Dog.new.bark

```

Classes can also inherit from other classes, creating an inheritance chain. When we inherit from a class we get access to all of the behavior that exists on the class we inherit from, as well as any classes that that class inherits from:

```
class Animal
 def eats?
  true
 end
end
 
class Dog < Animal
 def bark
   "woof"
 end
end
 
puts Dog.new.eats?
puts Animal.new.eats?

```

Notice in the above example that we are able to create instances of both `Animal` and `Dog` and call the method Animal.

Now the difference between these types of classes and an abstract class is that an abstract class can only be inherited from, you never create instances of the inheriting class directly. A good example of this in the ruby ecosystem is the Rails framework's ActiveRecord library. You will notice you never see `ActiveRecord::Base.new` called in a project, it is always only inherited from, thus making it “abstract”.

If you need more ruby posts to keep you happy then I'm happy to oblige, check out [this one](http://localhost:4000/2022-convert-nested-array-to-hash).