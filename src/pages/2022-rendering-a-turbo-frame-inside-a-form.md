---
  title: "How to render turbo frames within a multi-part form"
  description: "How to render turbo frames within a multi-part form"
  slug: 'how-to-render-turbo-frames-within-a-multi-part-form'
  tags: ["rails", "turbo"]
  pubDate: "2022-04-08"
  layout: "../layouts/BlogPostLayout.astro"
---

This is a code example of how to render a Turbo Frame within an html form. This is going to be an application that handles orders. You will need to generate an application and create the orders controller and order model. This was the command I used to generate this application, it uses esbuild for javascript and tailwind for the css. This is an example application I built to get exposure to Turbo.

```ruby
rails new kitchen -j esbuild --css tailwind
```

The application functionality this examples is a multi-part form, which will show a new turbo frame for each step of the order the user has progressed to.

This is what my migration change method looked like for the orders model:
```ruby
def change
  create_table :orders do |t|
    t.string :name
    t.json :toppings, array: true, default: []
    t.integer :step, default: 1

    t.timestamps
  end
end
```

Then add a standard rails route and controller action to handle the incoming request that will render the html with the turbo frame(s).

routes.rb
```ruby
Rails.application.routes.draw do
  resources :orders
end
```

One thing to call out in the controller is on every update we redirect to the edit route so that the user can continue to fill out the multi-part form, until they hit the end of the steps in the form.

orders_controller.rb
```ruby
class OrdersController < ApplicationController
  before_action :set_order, only: %i[ edit ]

  def edit
  end

  def update
    order = @order.update(order_params)

    if @order.step == 2
      return head :ok
    end

    respond_to do |format|
      if order
        format.html { redirect_to edit_order_path(@order), notice: "Order was successfully updated." }
        format.json { render :show, status: :ok, location: @order }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  def set_order
      @order = Order.find(params[:id])
  end
end
```

Below is the orders model, which contains some hard coded data we will use in our template to render html options for checkboxes. Remember this is an example application, the data for TOPPINGS and EXTRAS should really be stored in a database.

This model also contains a callback to increment each step on update. The `order#step` will be used to dyamically render the correct partial for the mutlti-step form.

order.rb
```ruby
class Order < ApplicationRecord
  TOPPINGS = ["perpperoni", "sausage", "red onion", "banana peppers", "anchovies"]
  EXTRAS = ["extra cheese", "brownie", "breadsticks"]

  before_update :increment_step

  private

  def increment_step
    return if step == 2

    self.step = step + 1
  end
end
```

Then in the edit template render the form partial for order while passing in a local order variable:

```ruby
<%= render partial: "form", locals: { order: @order } %>
```

This is the standard scaffolded form for the orders views, but within it there is rendered, step. Based off of the step of the process the order is in, we will render a differ turbo frame within the form.

```ruby
<%= form_with(model: order) do |form| %>
  <% if order.errors.any? %>
    <div style="color: red">
      <h2><%= pluralize(order.errors.count, "error") %> prohibited this order from being saved:</h2>

      <ul>
        <% order.errors.each do |error| %>
          <li><%= error.full_message %></li>
        <% end %>
      </ul>
    </div>
  <% end %>

  <%= render partial: "orders/steps/step_#{@step ? @step : order.step}", locals: { order: order, form: form } %>
<% end %>
```

What follows are examples of two the step partials. In each of the individual partials we do a few things:
1. Create a turbo frame using the `turbo_frame_tag` method.
2. Create a unique id for the tag using the `dom_id` method and passing it arguments of `order` and the attribute on the order this specific tag is associate with, `"name"`. Pass the resulting value as the first argument to `turbo_frame_tag`. 
3. The html input for the part of the order the frame is associated with and a submit button (this could also be a partial).

It will be used by rails to make sure it is both grabbing the correct html on the other side of the turbo frame and then again use it to populate the html reponse within the correct frame.

/views/orders/partials/steps/step_1.rb

Step 1
```ruby
<h1>Name</h1>
<% name_frame_id = dom_id(order, "name") %>
<%= turbo_frame_tag name_frame_id, data: { turbo_frame: name_frame_id } do %>
  <%= form.text_field :name %>
  <%= form.submit "Continue Order" %>
<% end %>
```

/views/orders/partials/steps/step_2.rb

Step 2
```ruby
<h1>Toppings</h1>
<% toppings_frame_id = dom_id(order, "toppings") %>
<%= turbo_frame_tag toppings_frame_id, data: { turbo_frame: toppings_frame_id } do %>
  <% Order::TOPPINGS.each do |topping| %>
    <br />
    <%= form.check_box :toppings, {multiple: true}, topping, false %>
    <%= form.label topping %>
  <% end %>
  <%= form.submit "Continue Order" %>
<% end %>
```

Now when you submit each form it will hit the update action in the controller async using Turbo Drive and redirect you to the edit path as long as the order still has steps to complete (in this example we stop the steps at 2). 

Further reading:
- [How to replace the contents of a string in Ruby](https://tinytechtuts.com/2022-how-to-replace-string-content-in-ruby/)
