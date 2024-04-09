---
  title: "Handling system authentication in software engineering"
  description: "different types of system authentication in software engineering"
  slug: 'different-types-of-system-authentication-in-software-engineering'
  tags: ["auth"]
  pubDate: "2022-04-06"
  layout: "../layouts/BlogPostLayout.astro"
---

In this post I hope to shed some light on authentication in software engineering. This post is starting out as a system to system authentication post, but I may revisit this to add end user authentication notes as well.

<h2>System to system authentication:</h2>
Any time you're trying to understand an authentication mechanism, it is fundamental to identify which interactions need to take place and on behalf of who. In the case of system to system auth I like to think of this as either "a system acting on behalf of itself" or "a system acting on behalf of its client". An example of the second type might be a SAAS system that has multiple organizations and the system is sending a request on behalf of that organization, usually as part of an integration.

<h2>System acting on behalf of itself</h2>
You can think of this type of authentication as the root of authentication. This level won't give you access to individual client information, but rather let you do things like set configuration data for an integration that will be relevant to *all* clients. In this scenario the system we are communicating with only needs to know that we are the application we say we are.

These credentials are usually stored as environment variables within your application. Possibly as a token or a username/password combination:

```
ENV["INTEGRATION_PARTNER_1_TOKEN"]

ENV["INTEGRATION_PARTNER_2_USERNAME"]
ENV["INTEGRATION_PARTNER_2_PASSWORD"]
```

<h2>System acting on behalf of a client</h2>
Let's say we create an integration with another company's system and now have multiple clients utilizing that system, we need to know how to identify which clients to send data back to or retrieve data from. There are a few different ways of handling this but one might be to store a config option for each client called `partner_username` and `partner_password` as columns in your database. These would be values you obtain from the client prior to kicking off the integration and can either be used to directly authenticate the client, or in exchange for a short lived token that you would then use when making requests. 

Likewise if a system needs to authenticate against your application for a specific client you will need a way to store and validate that data, `partner_incoming_username` and `partner_incoming_password` could be additional columns in your database to handle this information.

It should be noted that you won't always need both a `username` and `password` for this, sometimes you will only be provided one or the other.


Further reading:
- [Ruby on Rails integration testing cheatsheet](https://tinytechtuts.com/2022-rails-integration-testing-cheatsheet/)