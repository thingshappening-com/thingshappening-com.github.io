---
  title: "Verify HTTP header signature in Rails"
  description: "How to use rails to verify a header signature"
  slug: 'how-to-use-rails-to-verify-a-header-signature'
  tags: ["rails", "http"]
  pubDate: "2022-03-24"
  layout: "../layouts/BlogPostLayout.astro"
---

What follows is an example of how to verify a header signature using `OpenSSL::Digest` and `OpenSSL::HMAC`.

If you would like more information on signing HTTP requests, here is a [link](https://tools.ietf.org/id/draft-cavage-http-signatures-07.html) to the IETF documentation.

In this scenario a client will be sending an HTTP request header, signature, to our application. This header contains a SHA key we will have previously generated and sent to our client/integration partner. 

To generate this key you will need three things:
1. The hashing algorithm you want to use, in this case we use sha256.
2. A key that will be used to sign the data. This should be something you can programatically access, probably a config value for the client that exists in the db. In this example we will use the hard coded string "some_identifying_key_like_org_password".
3. The data being authenticated.

Generating the key:
```ruby
digest = OpenSSL::Digest.new("sha256")
OpenSSL::HMAC.hexdigest(
  digest,
  "some_identifying_key_like_org_password",
  "the protected data"
)
=> 5a7976b21f6fe4d0e0ac7d9a95511d0e53fe41a36e5d60bd43a2784428764248
```

After you've generated the key and sent it to your client you will need to handle the key verification in your controller. In the controller below we created a `before_action` to verify the signature. It will return an `:unauthorized` status unless the key you distributed to your client matches what you are expecting. 

The `verify_signature` method handles the equality check, the `signed_request` method generates the key on the application side and the `header_signature` method gets the key from the request header.

```ruby
def ApiController < ApplicationController
  before_action :verify_signature
  
  def show
    # would be called if verify_signature passes
  end

  def verify_signature
    head :unauthorized unless signed_request == header_signature
  end

  def signed_request
    digest = OpenSSL::Digest.new("sha256")
    OpenSSL::HMAC.hexdigest(
      digest,
      "some_identifying_key_like_org_password",
      "the protected data"
    )
  end

  def header_signature  
    # the header would contain "sha256 5a7976b21f6fe4d0e0ac7d9a95511d0e53fe41a36e5d60bd43a2784428764248"
    request.headers[:signature].gsub("sha256 ", "")
  end
end
```

Further reading:
- [When to use polymorphic associations in Rails](https://tinytechtuts.com/2022-when-to-use-polymorphic-associations-rails/)
