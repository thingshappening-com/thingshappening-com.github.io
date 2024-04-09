---
  title: "Add view helpers to a Rails application, globally and locally"
  description: "rails view helpers local global"
  slug: 'rails-view-helpers-local-global'
  tags: ["rails"]
  pubDate: "2021-03-01"
  layout: "../layouts/BlogPostLayout.astro"
---

By the end of this post you will have a better idea of how to handle application data processing in Rails views.

For the first example, lets say you wanted to translate text in your footer like so:

```
<!-- _footer.html.erb -->

<footer>
  <div><%= translate("copyright") %></div>
  <div><%= translate("privacy-policy") %></div>
  <div><%= translate("faq") %></div>
</footer>
```

Since your footer will likely be a partial used across most if not all templates rendered by a controller you can add the `translate` view helper method used above to `application_controller.rb`. This will make the method accessible from any other controller and also if you invoke `helper_method` it will also be available across all view templates. This is what that would look like:

```ruby
# application_controller.rb

helper_method :translate
def translate(text)
  # handle translation behavior
end
```

If you only wanted the method available in a specific template, you can add the method to the controller that renders that template:

```ruby
# users_controller.rb

helper_method :translate_user_details
def translate_user_details(text)
  # handle translation behavior
end
```

After creating these functions and their helper methods they can be invoked in their respective views as shown in the `_footer.html.erb` example above.