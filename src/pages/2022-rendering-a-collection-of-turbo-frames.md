---
  title: "How to render a collection of turbo frames"
  description: "How to render a collection of turbo frames"
  slug: 'how-to-render-a-collection-of-turbo-frames'
  tags: ["rails", "turbo"]
  pubDate: "2022-04-09"
  layout: "../layouts/BlogPostLayout.astro"
---

This is a code example of how to render a collection of Turbo Frames for inline editing within each frame. This is going to be a continuation from a previous post on [redering Turbo Frames within a form](https://tinytechtuts.com/2022-rendering-a-turbo-frame-inside-a-form/). 

Turbo Frames work by first rendering the html content within the frame and then if you click an internal link within a turbo frame it will make a network request to get new html that will replace the current contents of the frame. For this to happen a Turbo Frame with the same Turbo Frame ID needs to exist on both sides of the frame, later in this example that will see that as `name_frame_id`.

To handle this we will need to add an index action to the `OrdersController` that retrieves the orders collection from the database and an `edit_from_step` action to get the html contents of the other side of the Turbo Frame.

orders_controller.rb
```ruby
class OrdersController < ApplicationController
  def index
    @orders = Order.all
  end

  def edit_from_step
    @order = @order
    @step = params[:step_id]

    render :edit
  end
end
```

And then in the html template we will iterate over the list of orders and render a Turbo Frame partial for each order. In the partial there is a link to the `edit_from_step` path, which when clicked will execute an async request to get the html returned from that request and replace our current from contents with the new frame contents. So in this example the contents of the frame in `_order.html.erb` will be replaced with matching turbo frame contents of `_step_(step_id).html.erb`. 

In this example the html at `_step_(step_id).html.erb` contains a form within the frame to edit the contents previously displayed by the frame before clicking the link, which can be used for inline editing.

index.html.erb
```ruby
<div id="orders">
  <% @orders.each_with_index do |order, index| %>
    <%= render partial: "order", locals: { index: index, order: order }  %>
  <% end %>
</div>
```

_order.html.erb
```ruby
<% name_frame_id = dom_id(order, "name") %>
<%= turbo_frame_tag name_frame_id, data: { turbo_frame: name_frame_id } do %>
  <h3>NAME</h3>
  <div><%= order.name %></div>
  <%= link_to "Edit Name", edit_from_step_path(order, 1) %>
  <br/>
<% end %>

<% toppings_frame_id = dom_id(order, "toppings") %>
<%= turbo_frame_tag toppings_frame_id, data: { turbo_frame: toppings_frame_id } do %>
  <h3>TOPPINGS</h3>
  <% order.toppings.each do |topping| %>
    <p><%= topping %></p>
  <% end %>
  <%= link_to "Edit Toppings", edit_from_step_path(order, 2) %>
  <br />
<% end %>
```

edit.html.erb
```ruby
<%= render partial: "orders/separate_form_partials/_step_#{@step ? @step : order.step}", locals: { order: @order } %>
```

orders/separate_form_partials/_step_1.html.erb
```ruby
<h1>Name</h1>
<% name_frame_id = dom_id(order, "name") %>
<%= turbo_frame_tag name_frame_id, data: { turbo_frame: name_frame_id } do %>
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

    <%= form.text_field :name %>
    <%= form.submit "Continue Order" %>
  <% end %>
<% end %>
```



