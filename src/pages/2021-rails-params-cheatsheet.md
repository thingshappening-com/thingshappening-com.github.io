---
  title: "Rails params cheatsheet"
  description: "rails params overview explanation"
  slug: 'rails-params-overview-explanation'
  tags: ["rails"]
  pubDate: "2021-04-19"
  layout: "../layouts/BlogPostLayout.astro"
---

A few notes to refer to when not sure about how to handle rails parameters:

*This is not a comprehensive post. It is a brief reference for developers with some experience using Rails but haven't used it recently.

1) Use the `require` method on the `params` object when detecting the presence of a specific model, like author below:

```ruby
private

def author_params
  params.require(:author).permit(:name, :organization_id, :post_id)
end
```

2) Use the `permit` method, referenced above, when you want to save the params to the database using an ActiveRecord model.

3) You don't need to use the `require` method before calling `permit`. The `require` method does not change the object.

4) If you only need to reference one parameter key, you can just use the key/value accessor `[]` directly in the controller method:

```
org = Organization.find_by!(external_id: params[:external_id])
```

5) If you have a params object with complex data structures such as nested collections like the first below example you can permit those parameters by following the second code example below. Just make sure the collections are the last items to be permitted, for this example tags:

```
{"author" => {"post_title" => "first post", "tags" => [{"id" => 1, "name" => "Food"}]}
```

```
params.permit(author: [:post_title, tags: [:id, :name]])
```

More Ruby cheatsheets:
[Rails DB encryption](https://tinytechtuts.com/2021-rails-db-encryption-cheetsheet/)
