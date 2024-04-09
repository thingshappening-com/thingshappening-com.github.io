---
  title: "How to handle token auth in Rails"
  description: "how to handle token auth in rails"
  slug: 'how-to-handle-token-auth-in-rails'
  tags: ["rails", "auth"]
  pubDate: "2022-01-02"
  layout: "../layouts/BlogPostLayout.astro"
---

This post is going to demonstrate how to set up a central tokens table for your Rails application, with the goal to better organize access to resources in your application.

If you did not have a centralized tokens table in your Rails application then each entity that needed different token auth would have to have its own token column on the model and if that entity needed multiple types of tokens, it would have multiple columns on the model. In practice that looks like:

```
User.last.admin_auth_token
User.last.report_view_token
```

```
Report.last.auth_token
```

Instead of having these tokens spread across various domains, let's create a new tokens database table to house all of these different kinds of tokens and associate them with the application entities they belong to.

The migration file:
```
class CreateTokens < ActiveRecord::Migration[5.4]
 def change
   create_table :tokens do |t|
     t.string :kind
     t.datetime :expires_at
     t.string :token
     t.integer :tokenable_id
     t.string :tokenable_type
     t.timestamps null: false
 
     t.index :token
     t.index [:tokenable_id]
   end
 end
end
 

```

The new table columns above briefly defined:

- tokenable_id - id of the user or account that the token is associated with
- tokenable_type - was the token created for a user or an account. 
- token - The actual token string
- expires_at - When to revoke the token
- kind - Synonym for token type (eg :ADMIN_AUTH_TOKEN)

Now we need to set up our application to work with this new tokens table. Let’s first define the Token model. The model does two things: 
1) Defines two callbacks to set the token and expiry.
2) Enables the polymorphic relationships using the `tokenable_id` and `tokenable_type` in the `belongs_to :tokenable` method.

```
class Token < ApplicationRecord
 belongs_to :tokenable, polymorphic: true
 before_create :set_token, :set_expires_in
 
 private
 
 def set_token
   self.token = SecureRandom.urlsafe_base64
 end
 
 def set_expires_in
   expires_in = case kind.to_sym
   when :INVITE_TOKEN then nil
   when :AUTH_TOKEN then 30.days
   when :LOGIN_REDIRECT then 1.day
   else
     raise StandardError
   end
 
   self.expires_at ||= DateTime.now + expires_in
 end
end

```


And for the models that are we are going to be able to create tokens for we will need to define the other side of the relationship. I’ll use Account as an example:

```
class Account < ApplicationRecord
 has_many :tokens, as: :tokenable, dependent: :destroy
end
```

Now that we have both sides of the relationship setup to test, load the Rails console and try it out. Let’s create a Token for an Account and then try to look it up.

```
=> Token.create(tokenable_type: Account, tokenable_id: 1, kind: :LOGIN_REDIRECT)
#<Token:0x0018 id: 1 ….>
```

```
=> Account.find(1).tokens.find_by(kind: :LOGIN_REDIRECT)
#<Token:0x0018 id: 1 ….>
```

This is a good example of a refactoring opportunity. If your application has different tokens spread across various domains consider consolidating into a central database table and using the power of Rails polymorphism to make your code cleaner.


Similar posts:
 - [Rails nested resources MVC complete example](https://tinytechtuts.com/2021-rails-nested-resources-mvc-complete-example/)
 