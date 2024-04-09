---
  title: "How to get text from a URL string in Ruby"
  description: "url text from string ruby"
  slug: 'url-text-from-string-ruby'
  tags: ["ruby"]
  pubDate: "2021-03-31"
  layout: "../layouts/BlogPostLayout.astro"
---

I ran into the scenario where an api was sending over a url string as a configuration item to use later in a workflow. That string also contained a resource UUID I needed for the current part of the workflow so I needed to parse that string for the UUID.

I first thought to use a regular expression to match and capture the text I needed but then I had an idea to split the string into an array based on forward slashes in the URL.

The final result looked like this:

```
=> url = "https://bluecanoes.com/spring-2020/orders/23445erwtwer323"
=> url.split("/")[5]
=> 23445erwtwer323
```

In the above example the URL is parsed into an array containing the captured values using the `split` method:

```
=> url = "https://bluecanoes.com/spring-2020/orders/23445erwtwer323"
=> url.split("/")
=> ["https:", "", "bluecanoes.com", "spring-2020", "orders", "23445erwtwer323"]
```

From there you can access the value you need, in my case 23445erwtwer323.

The downside to this solution is if the number of forward slashes in the URL ever changes, this needs to be updated. Make sure there is a test that would fail if the number of forward slashes ever changed.

