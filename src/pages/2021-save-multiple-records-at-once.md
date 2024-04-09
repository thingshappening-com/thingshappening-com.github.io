---
  title: "Persist multiple records in one database transaction using Rails"
  description: "Persist multiple records in one database transaction using Rails"
  slug: 'persist-multiple-records-in-one-database-transaction-using-rails'
  tags: ["rails", "databases"]
  pubDate: "2021-04-03"
  layout: "../layouts/BlogPostLayout.astro"
---

Maybe you need to update your users and profiles table at the same time and if either call fails, they both fail, and if both succeed the transaction completes, or maybe you need to update an admins table and users table with the same use case.

In this event, if you are using Rails, you can reach for `ApplicationRecord.transaction` or one of its child classes and pass the call to it a block. Within the code block you can call the SQL statements you need to take place.

The below example finds an admin authentication and its organization, then deletes each. For this to succeed all calls must succeed.

```
ApplicationRecord.transaction do
  admin_auth = AdminUserAuth.find_by(token: token)
  organization = admin_auth.organization

  admin_auth.destroy!
  organization.destroy!
end
```
