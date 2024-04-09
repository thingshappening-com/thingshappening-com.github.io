---
  title: "Handle controller responses using Rails before_action"
  description: "How to handle controller responses using Rails before_action"
  slug: 'how-to-handle-controller-responses-using-rails-before_action'
  tags: ["rails"]
  pubDate: "2022-03-25"
  layout: "../layouts/BlogPostLayout.astro"
---

Using Rails `before_action` you can return an HTTP response *before* the actual controller action is invoked, in the example below, the create action. This allows you to clean up your controller code, so instead of having the create action running the code defined in `setup_request` and `verify_request` you can have a before action handle it for you.

The `head` method used below is an alias for responding only with the status given (as a symbol), headers, and an empty body.

```ruby
class ExampleController < ApplicationController
  before_action :verify_request, :setup_request

  def create
    # handle action if before_action's have not rendered head
  end

  private
  def setup_request
    head :ok unless application_exists
  end

  def verify_request
    head :unauthorized unless auth_token.present?
  end
end
```
