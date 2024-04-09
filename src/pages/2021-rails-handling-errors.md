---
  title: "Rails error handling cheatsheet"
  description: "rails error handling explanation"
  slug: 'rails-error-handling-explanation'
  tags: ["rails"]
  pubDate: "2021-04-20"
  layout: "../layouts/BlogPostLayout.astro"
---

A few notes to refer to for Rails JSON api error handling in controller actions:

*This is not a comprehensive post. Reference for developers with some experience using Rails but haven't had to handle errors recently.

1) To raise an error on a query that does not find a record use the bang operator (`!`) on the end of the query method:
```ruby
# if this query returns empty no error is raised
Store.from_external_id(params["external_id"])
```

```ruby
# if this query returns empty an error is raised
Store.from_external_id!(params["external_id"])
```

2) The create and update methods will throw DB errors without having to use the `!` operator, like a SQL NOT NULL constraint violation. However it will not throw app validation errors. The errors will still be available as data on the object but the app will not crash. If you include the `!` while using the `create` or `update` methods an app error will be raised should a validation error occur.

```ruby
# does not raise app validation errors
store = Store.create(store_params)

if store.errors
  render json: {errors: app.errors.full_messages}
end
```

```ruby
# does raise app validation errors
Store.create!(store_params)

rescue => e
  render json: {errors: [e.message]}
```

3) If you want to render a JSON error message instead of a default Rails error page, two options are to 1) explicitly return the error you want or raise 2) rescue the error and handle the JSON formatting for the error:

```ruby
store = Store.from_external_id(params["external_id"])

if store
  render json: {success: store}
else
  render json: {error: {message: "Store not found"}}
end
```

Or

```ruby
store = Store.from_org_external_id!(params["external_id"])

rescue => ActiveRecord::RecordNotFound
  render json: {error: {message: "Store not found"}}
```

4) ActiveRecords `.find` method will throw an error if a record is not found, but `.find_by` will return nil during the same event.

```Ruby
# If record doesn't exist raise NotFound.
Account.find(1234)

# If not found returns nil.
Account.find_by(id: 1234)
```

More Ruby cheatsheets:
[Ruby HTTP gem](https://tinytechtuts.com/2021-ruby-http-gem-cheatsheet/)