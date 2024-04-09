---
  title: "Wrap third party librarys in your application code"
  description: "why wrap third party libraries"
  slug: 'why-wrap-third-party-libraries'
  pubDate: "2022-09-24"
  layout: "../layouts/BlogPostLayout.astro"
---

When building applications in 2021 we use a lot of third party libraries that have been built to handle common recurring development problems. 

Common client libraries you might reach for:
1. HTTP library for formatting and executing HTTP requests.
2. ORM or object relational mapper for simplified common database interactions.
3. Encryption libraries to make sure your data is safe.

When using these libraries in your application it is a good practice to wrap them as an interface to your application code (usually a class or module depending on the programming language or paradigm), that way when you need to add a new required header to an HTTP client (or some other unforseen update) all you need to do is change the code that the HTTP client is wrapped in and not add the new header to 100 different references to the third party HTTP client library.

Here's an example implementation in ruby:
```ruby
class HttpClient
  def http
    HTTP[
      "Authorization": "Bearer #{token}",
      accept: "application/json",
      content_type: "application/json"
    ]
  end

  def host_url
    "https://api.data.com"
  end

  def token
    # interfact to get access token
  end

  def get(path, params = nil)
    JSON.parse(http.get("#{host_url}#{path}", params: params))
  end

  def post(path, json)
    response = http.post("#{host_url}#{path}", json: json)

    results(response)
  end

  def put(path, json)
    response = http.put("#{host_url}#{path}", json: json)

    results(response)
  end

  def patch(path, json)
    response = http.patch("#{host_url}#{path}", json: json)

    results(response)
  end
end
```