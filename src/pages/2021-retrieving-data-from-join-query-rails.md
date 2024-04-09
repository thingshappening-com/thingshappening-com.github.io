---
  title: "Accessing data from a join query in Rails"
  description: "retrieving data from join query"
  slug: 'retrieving data from join query'
  tags: ["rails"]
  pubDate: "2021-11-02"
  layout: "../layouts/BlogPostLayout.astro"
---

To understand the join example that follows I posted the classes that are referenced and their associations below where a `User` has many `Form`'s and a `Form` has many `FormFields`.

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

When querying your database while using rails, if there exists a foreign key relationship on the model you're working on you can run the join query you can perform an inner join by calling the `.join` method on the model in the following way:

```
@user =  User.joins(forms: :form_fields).find(params[:user_id])
```

The below query results in the following SQL statement where there are two joins performed, the first on the form and then another query for the forms fields:

```
SELECT "users".* FROM "users" 
INNER JOIN "forms" ON "forms"."user_id" = "users"."id" 
INNER JOIN "form_fields" ON "form_fields"."form_id" = "forms"."id" WHERE "users"."id" = $1
```

To access the data you can use the accessors provided by rails and no new query will be called when you ask for `form` on the `@user` object or `form_fields` on the `@form` object

```
@user.form
=> #<Form:0x000000013e579240
```
```
@form = @user.form[1]
@form.form_fields
=> #<FormField:0x000000013e5793a8
```