---
  title: "When early code optimization is okay, an example"
  description: "code optimization"
  slug: 'code-optimization'
  tags: ["rails", "oauth"]
  pubDate: "2021-05-02"
  layout: "../layouts/BlogPostLayout.astro"
---

An often mentioned issue within software development is premature code optimization, which happens when a developer makes too many assumptions about the future context of what they are currently developing. It can make a codebase confusing when someone else is trying to interpret functionality later on.

I had a situation where I opted to optimize Rails controller code before I had to, but I think it was the correct decision, but first the code snippets:

Code before the optimization:
```ruby
def accept_client_credentials_grant
  org_options = OrganizationOptions.find_by!(uuid: params[:uuid])

  response = OauthAccessGrant.create_and_update_client_credentials(org_options, grant_params)

  render json: response
end
```

Code after the optimization:
```ruby
def accept_grant
  org_options = OrganizationOptions.find_by!(uuid: params[:uuid])

  case params[:grant][:grant_type]
  when "client_credentials"
    response = OauthAccessGrant.create_and_update_client_credentials(org_options, grant_params)
  else
    StandardError.new("OAuth Grant Type Not Supported")
  end

  render json: response
end
```

In the code examples above I ended up switching the `accept_client_credentials_grant` controller method to `accept_grant` and then used a case statement as a proxy to determine what the app should do based on the `grant_type` that was sent to the app through `params`.

This controller was an OAuth controller, which has established workflows. I was only building this OAuth server to handle one workflow, but given that the app I built on has many different customers, many of which have unique auth needs, I felt it made sense to add this proxy now.

This early optimization prevents the situation of a different developer needing to update this method later on and not knowing what the value for `grant_type` would exactly look like. For all they know the param value could be "Client Credentials", "CLIENT_CREDENTIALS" or any number of other options. Given that I knew of future potential workflows in advance and could see a future issue for other developers, I chose to optimize this code early, but in my opinion not prematurely.
