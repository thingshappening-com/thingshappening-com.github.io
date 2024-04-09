---
  title: "Redirect to nested resource url in Rails"
  description: "Route Rails app to nested resource url"
  slug: 'route-rails-app-to-nested-resource-url'
  tags: ["rails"]
  pubDate: "2021-11-04"
  layout: "../layouts/BlogPostLayout.astro"
---

Sometimes in our developer lives we have to nest our resources. In my case I was nesting a `Form` within a `User`, the resulting routes file and url are:

```
~/config/routes.rb
```
```
Rails.application.routes.draw do
  resources :users do
    resources :forms
  end
end
```

And the resulting route structure:
```
/users/:user_id/forms/:id
```

I ran into an issue when updating a form, I was getting the error `Undefined method or varaible form_path` when trying to redirect to just the form, like the below example shows:
```
if @form.update(form_params)
  format.html { redirect_to @form, notice: "Form was successfully updated." }
end
```

What I had to do was update the redirect_to method to accept an array of resources, in this case both a user and form. The resulting working code is below:
```
if @form.update(form_params)
  format.html { redirect_to [@user, @form], notice: "Form was successfully updated." }
end
```

Just like the url this form was rendered from has both a user and a form, the redirect_to also needs a user and form to navigate successfully.

When you need to use the url path helper you can pass the objects in without the array brackets, like so:

```
redirect_to edit_user_form_path(@user, @form)
```
