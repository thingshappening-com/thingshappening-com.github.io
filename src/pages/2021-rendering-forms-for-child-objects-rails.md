---
  title: "Rendering forms for parent and child ActiveRecord objects in Rails"
  description: "Rendering form for child objects in Rails"
  slug: 'rendering-form-for-child-objects-in-rails'
  tags: ["rails"]
  pubDate: "2021-11-03"
  layout: "../layouts/BlogPostLayout.astro"
---

To understand the form rendering example that follows I posted the classes that are referenced and their associations below where a `User` has many `Form`'s and a `Form` has many `FormFields`.

```
class User < ApplicationRecord
  has_many :forms
end
```
```
class Form < ApplicationRecord
  belongs_to :user
  has_many :form_fields
end
```
```
class FormField < ApplicationRecord
  belongs_to :form
end
```

What I needed to do here was get one form rendered for the `Form` object and a collection of forms rendered form the `FormFields` object. The route the forms are rendered at are nested under `User` at the `Form#edit` controller action:
```
/users/:user_id/forms/:id/edit
```

The edit action sets instance variables for `@user` and `@form`.

```
def edit
  @user =  User.joins(forms: :form_fields).find(params[:user_id])
  @form = @user.forms.find(params[:id].to_i)
end
```

After the controller is called the edit template is rendered which renders two partials, one for forms form and a partial for the form fields form.

In the code example below the key thing to point out is the rendering of the form partial in the same directory, we pass that rendered partial a form and user which will be accessible within the template.


```
~/app/views/forms/edit.html.erb
```
```
<h1>Edit: <%= @form.name %></h1>

<%= render 'form', form: @form, user: @user %>
```

The below snippet is actual form file that was rendered in the previous example. We do two things here:
1. Render a form for the actual form. To do this we need to pass both the `@user` and `@form` to account for the nested route.
2. Render a collection of forms for the form fields. From the form object we get the collection `FormFields` data associated, which is another ActiveRecord object. During the iteration of those objects, we render the form partial for each form field and pass it the form_field object to build the form from.

```
~/app/views/forms/_form.html.erb
```
```
<%= form_with(model: [@user, @form]) do |f| %>
  <%= f.label :name %>
  <%= f.text_field :name, value: @form.name %>  
  <div class="actions">
    <%= f.submit %>
  </div>
<% end %>

<% @form.form_fields.each do |form_field| %>
  <%= render 'form_fields/form', form_field: form_field %>
  <br />
<% end %>
```

This is the final rendered form_field partial, which utilizes the data passed into the form_field partial shown in the previous code snippet.
```
~/app/views/form_fields/_form.html.erb
```
```
<%= form_with(model: form_field) do |form| %>
  <%= form.label :html_input_type %>
  <%= form.text_field :html_input_type, value: form_field.html_input_type %>
  <%= form.label :html_element_type %>
  <%= form.text_field :html_element_type, value: form_field.html_element_type %>
  <%= form.label :name %>
  <%= form.text_field :name, value: form_field.name %>
  <%= form.label :options %>
  <%= form.text_field :options, value: JSON.pretty_generate(form_field.options) %>
  <div class="actions">
    <%= form.submit %>
  </div>
<% end %>
```

If you followed along to the end you should now be able to view your forms at `http://localhost:3000/users/1/forms/1/edit`.
