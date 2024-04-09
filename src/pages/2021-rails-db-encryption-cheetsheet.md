---
  title: "Rails db encryption cheatsheet"
  description: "rails db encryption walkthrough"
  slug: 'rails-db-encryption-walkthrough'
  tags: ["rails", "encryption"]
  pubDate: "2021-04-29"
  layout: "../layouts/BlogPostLayout.astro"
---

<h4>!Important. The lastest versions of Rails now ship with this functionality without needing the attr_encrypted gem.</h4>
<br />
A few notes to refer to when needing to add database encryption to a Rails app that uses ActiveRecord:

*This is not a comprehensive post. It is a brief reference for developers with some experience using Rails but haven't used it recently.

1) Install a third party gem, `attr_encrypted`

```ruby
gem install attr_encrypted
```

2) Generate a migration to add the encrypted column name. You must prefix the column name with "encrypted".

```ruby
rails g migration add_secret_to_users encrypted_secret
```

3) Add the method `attr_encrypted` to your ActiveRecord model, the first argument is your column name without the encrypted prefix. They key option below will be the key used to handle the actual encryption and decryption. A few other keyword options to the `attr_encrypted` method are available are `algorithm`, `insecure_mode`, and `mode`.

```ruby
class User < ApplicationRecord
  attr_encrypted :secret, key: "the secret key"
end
```

4) When accessing the new columns data, you can leave off the encrypted prefix to get the actual value, or keep the encrypted prefix to get the encrypted value.

```ruby
# returns plain text
User.last.secret

# returns encrypted
User.last.encrypted_secret
```

5) When saving the new columns data you will save it with the encrypted prefix. There is also a method defined on the ActiveRecord model for encrypting the columns data, in this case `User.encrypt_secret`.

```ruby
User.create(
  encrypted_secret: User.encrypt_secret(SecureRandom.urlsafe_base64)
)
```

More Ruby cheatsheets:
[Ruby HTTP gem](https://tinytechtuts.com/2021-ruby-http-gem-cheatsheet/)