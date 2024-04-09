---
  title: "How to execute a task inside a Rails app"
  description: "execute a task inside a Rails app"
  slug: "execute-a-task-inside-a-rails-app"
  tags: ["rails"]
  pubDate: "2022-08-10"
  layout: "../layouts/BlogPostLayout.astro"
---

Sometimes we want to be able to execute a rails command inside our actual applications. In my instance I wanted to be able to create and run database migrations dynamically. 

For this all you need to do is call the task with backticks. In the example below any instance call to `build_form` will generate a migration using the form name.
```
class FormEngine
 attr_reader :form
 
 def initialize(form)
   @form = form
 end
 
 def build_form
   `rails g migration create_form_#{form.name}`
 end
end
```

You can execute the above using: 
```
FormEngine.new(Form.new(name: "signup")).build_form
```

He is an example of the generated file:

<image src="/images/migration-ss.png" alt="migration" />
