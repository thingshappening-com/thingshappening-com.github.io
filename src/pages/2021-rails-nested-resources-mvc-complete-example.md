---
  title: "Rails nested resources MVC complete example"
  description: "how to setup models views and controllers for nested resources"
  slug: 'how-to-setup-models-views-and-controllers-for-nested-resources'
  tags: ["rails"]
  pubDate: "2021-11-01"
  layout: "../layouts/BlogPostLayout.astro"
---


This post provides references to the code changes that need to be made to a scaffolded rails app in order to render a form for the resources. In the application I am providing the example from those resources are User and Form, where a form is rendered for a user. This is a survey rendering application, similar to TypeForm or SurveyMonkey.

This post will use the `form#edit` action as an example but this can be applied to any of the resources.


<h3>Generating the scaffold</h3>
For those that want to code along with the post, you can start by creating a new rails application and generating the following two scaffolds:

```
rails g scaffold Form
rails g scaffold User
```

This will create all of the resources needed to create and render forms and users, but we will make changes to the generated files to account for forms being nested within users.

<h3>Creating the tables and ActiveRecord relationships</h3>

To establish the relationships between the Form and User I added a reference to the users table in the form `create_table`. Adding the reference requires the users table to exist before running the migration:

```
~/db/migrate/20211111221212_create_forms.rb
```
```
class CreateForms < ActiveRecord::Migration[6.1]
  def change
    create_table :forms do |t|
      t.references :user, index: true, null: false
      t.string :name

      t.timestamps
    end
  end
end
```

In the `Form` and `User` models add the `belongs_to` and `has_many` associations appropriately:
```
~/app/models/form.rb
```
```
class Form < ApplicationRecord
  belongs_to :user
end
```

```
~/app/models/user.rb
```
```
class User < ApplicationRecord
  has_many :forms
end
```

<h3>Update routes to be nested</h3>

Update the routes file so `:forms` are scoped under `:users` because in this system a `Form` will only exist under the context of a `User`. This will also update the url helpers rails providers, which we will need to update references to later in the post.

```
~/config/routes.rb
```
```
resources :users do
  resources :forms
end
```

Run the `rails routes` command to see the changes to the routes definitions. For our edit example the new url is:

```
/users/:user_id/forms/:id/edit
```



<h3>Updating FormsController#edit</h3>

In the `FormsController` an update needs to be made to get form for a specific user. Since the route to access the `edit` action is `/users/:user_id/forms/:id/edit` we now have the `user_id` and `id` (from_id) available to us as parameters to query for data.

In the `edit` example below we query for the user first and then filter the forms to find the correct resource. Setting the `@form` and `@user` variables will give us access to them in the view template:

```
class FormsController < ApplicationController
  before_action :set_user, only: %i[ edit ]

  def edit
    @form = @user.forms.find(params[:id].to_i)
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end
end
```

<h3>Updating views for FormsController#edit</h3>

When generating the scaffold for `Form` you an edit template was created for you that looks similar to this:

```
~/app/views/forms/edit.html.erb
```
```
<h1>Editing Form</h1>

<%= render 'form', form: @form %>

<%= link_to 'Show', @form %> |
<%= link_to 'Back', forms_path %>
```

Since the forms were updated to be nested, we will need to account for two changes:
1. The new url path helpers
2. The added data needed for the form to render

After the updates the new `edit.html.erb` will look like the below code example. The links were updated with the correct url paths and the data we provide to the form partial is accounted for.

```
<h1>Editing Form</h1>

<%= render 'form', form_and_user: [@user, @form] %>

<%= link_to 'Show', user_form_path(@form) %> |
<%= link_to 'Back', user_forms_path %>
```

Finally update the references in the form partially to account for the changed parameter name as the example below illustrates:

Orginal form partial:
```
~/app/views/forms/_form.html.erb
```
```
<%= form_with(model: form) do |form| %>
# form elements
<% end %>
```

Updated form partial:
```
<%= form_with(model: form_and_user) do |form| %>
# form elements
<% end %>
```

After making these updates you should be able to navigate to `http://localhost:3000/users/1/forms/1/edit` successfully.

Thanks for tuning in! I hope you found this post helpful today.