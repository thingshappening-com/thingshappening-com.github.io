---
  title: "Rails controllers and nested resources"
  description: "Defining Rails controllers that are nested"
  slug: 'defining-rails-controllers-that-are-nested'
  tags: ["rails"]
  pubDate: "2021-11-05"
  layout: "../layouts/BlogPostLayout.astro"
---

The nested resource I am going to be referencing in this example is a `Form` nested within a `User`. The routes are defined like so:

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

In my forms controller methods I am gettings a form through a user, see the code below:
```
class FormsController < ApplicationController
  def update
    @user =  User.find(params[:user_id])
    @form = @user.forms.find(params[:id].to_i)
  end
end
```

This structure works fine, you just need to remember to handle routing/redirections appropriately, like I discuss [here](https://tinytechtuts.com/2021-redirect-to-nested-resource-url-rails/). However there is another way to structure this code that to me feels more accurate to it's function and that is to update the controller to be a `user_forms` controller that inherits from the `forms` controller.

With this new setup any routes that need to access forms outside of the user context can query the `FormsController` and any forms that need to be accessed through a user can be handled through a `UserFormsController`. The resulting code changes follow.

Update the routes to account for both methods of accessing form resources. For the nested forms you need to explicitly point to the new `UserFormsController`. 

```
~/config/routes.rb
```
```
Rails.application.routes.draw do
  resources :forms
  resources :users do
    resources :forms, controller: "user_forms"
  end
end
```

Now create a new `UserFormsController` that inherits from the `FormsController` to acquire general form behavior and migrate any actions in the `FormsController` that reference a form through a user to the `UserFormsController` like the below `#update` method.

```
~/app/controllers/user_forms_controller.rb
```
```
class UserFormsController < FormsController
  def update
    @user =  User.find(params[:user_id])
    @form = @user.forms.find(params[:id].to_i)
  end
end
```

Following the controller change your new code structure should function the same as before and now be understood a little more easily.