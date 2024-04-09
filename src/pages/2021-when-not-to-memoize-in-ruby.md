---
  title: "How not to memoize in Ruby"
  description: "memoization in ruby not to"
  slug: 'memoization-in-ruby-not-to'
  tags: ["ruby"]
  pubDate: "2021-03-10"
  layout: "../layouts/BlogPostLayout.astro"
---

If you are not familiar with memoization, [this](https://www.justinweiss.com/articles/4-simple-memoization-patterns-in-ruby-and-one-gem/) is a good post about the topic.

First I will show an example of where I was using memoization correctly and why that was the case. After that I will show the example where I reworked the code and the memoization introduced a bug into my codebase.

```ruby
def create
  {
    details: account.profile,
    login_url: account.create_url_with_token
  }
end

def account
  @account ||= Account.new(
    params["email"],
    params["name"]
  ).find_or_create
end
```

In the above example the `create` method references account twice and account in this method should never change so it would make sense to memoize the account so the application does not need to make a second call to `find_or_create`.

A problem occurred when I needed to create a handful of accounts from one request and process them. In the below example you cannot memoize the account because then the same account would be used for each of the accounts requested. But in my codebase, I had, which introduced a not so fun bug I had to fix and write a script to clean the bad data.

```ruby
def create
  accounts_processed = 0
  return if !params["accounts_requested_count"].to_i == accounts_processed
  {
    details: account(accounts_processed).profile,
    login_url: account(accounts_processed).create_url_with_token
  }
  accounts_processed++
  create
end

def account(index)
  Account.new(
    params[index]["email"],
    params[index]["name"]
  ).find_or_create
end
```

Lesson learned the hard way, but should have known better.

Similar post(s):
[How to memoize a conditional using Ruby](https://tinytechtuts.com/2021-memoizing-conditionals-in-ruby/)
