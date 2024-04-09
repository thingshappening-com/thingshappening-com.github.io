---
  title: "Ruby on Rails integration testing cheatsheet"
  description: "rails integration testing"
  slug: "how-to-add-element-to-tuple-at-an-index-postion"
  tags: ["rails", "testing"]
  pubDate: "2022-01-01"
  layout: "../layouts/BlogPostLayout.astro"
---

This particular guide uses Mocha for mocks and stubs, Minitest for the test framework, and FactoryBot for the test data. It is a brief summary of tips and examples I put together to help with producing integration tests.


<h3>Mocks and Stubs using Mocha</h3>

You will notice other testing documentation online referring to various types of "Test doubles" you can use in your tests. These test doubles are replacement objects and behavior for actual objects defined in your application and many of the types build off of each other in terms of capability. Below is an overview of each type in increasing complexity:

1. Dummy - This is the simplest form of test double. Used in tests when you just need a generic object, often implemented using `Object.new`.
5. Fake - A fake object will largely mimic the applications implementation but will act as a replacement for something like an in-memory database.
2. Stub - Used when you only want to produce a specific return value for an objects method. 
3. Spy - Records the number of times an Objects method was called, which can be used in a test expectation. It can also act as a stub and produce explicit return value.
4. Mock - To use a mock object you need to declare how many times you expect a method to be invoked in advance and then verifies whether the expected number matches the actual number of invocations. It is the only type of double that enforces behavior verification. It can also act as a stub and produce explicit return value. 

The Mocha library is used to implement two types of test doubles, stubs and mocks.

Below is an example mock from the [Mocha documentation](https://github.com/freerange/mocha). You can tell that it is a mock because it sets up an expectation before the additional `assert_equal` assertion by calling `Product.expects(:find)`, now the test will fail unless the find method is called on an instance of Product. It also implements stub behavior because we are returning an explicit product from a call to the method.

```
def test_mocking_a_class_method
  product = Product.new
  Product.expects(:find).with(1).returns(product)
  assert_equal product, Product.find(1)
end
```

Below is an example stub from the [Mocha documentation](https://github.com/freerange/mocha). You can tell it is a stub because it is not setting up any expectation around the number of times the stubbed method (in this case `:prices`) is invoked and it is returning an explicit object from a call to the stub.

```
def test_stubbing_instance_methods_on_real_objects
  prices = [stub(:pence => 1000), stub(:pence => 2000)]
  product = Product.new
  product.stubs(:prices).returns(prices)
  assert_equal [1000, 2000], product.prices.collect {|p| p.pence}
end
```

Tip: If you are incurring the failure “expected to be called exactly once but was invoked 3 times” and you don't need to be explicit about the number of invocations for your tests accuracy try using the `.any_instance` method provided by mocha before setting the stub. In practice that looks like:

```
account = Account.new

Session.any_instance
.stubs(:account)
.returns(account)
``` 

Tip: If you are working with JavaScript and want an example on working with Jest [tests](https://tinytechtuts.com/2021-jest-testing-cheatsheet/) and [mocks](https://tinytechtuts.com/2021-mock-custom-react-hooks-with-jest/) I wrote previous on that [here](https://tinytechtuts.com/2021-jest-testing-cheatsheet/) and [here](https://tinytechtuts.com/2021-mock-custom-react-hooks-with-jest/)

<h3>Making async controller requests</h3>
Tip: You can indicate that an HTTP request should be made asynchronously using the option `xhr: true`

```
get "/application/integrations", xhr: true
```

<h3>Setting session data for integration tests</h3>

When I was first looking into integration testing I thought there might be a way for me to pass session data I needed as an argument to an HTTP GET request, like this:

```
get url, params: {}, session: {}
```

Unfortunately it is not that easy and simultaneously defeats the purpose of an integration test. Integration testing an endpoint in your Rails application means that whatever action sets that session data needs to take place within the test itself, so if the route requires a user to be logged into the application first, then the integration test should start off by logging in the user and then proceed to your specific endpoint.

```
it "gets reports" do
  post(
    "https://myapp.com/user/session",
    params: {token: user.tokens.create()}
  )
  get "https://myapp.com/user/reports", xhr: true

  assert_response 200
end
```

You may hear developers refer to bad tests that “aren’t really testing anything” even though the tests pass and the code coverage increases. This will happen when interactions that should be tested are bypassed, like I was looking to do with passing session data to the controller explicitly. This will often manifest itself in the form of excess stubs.

<h3>Working with database transactions</h3>

If you’re using FactoryBot in your test suite configuration you should be using it to persist the data you need for your integration tests before the test is run. What follows is an example of defining a factory and then using it within a test file. The Factories must exist as data models within your application.

This factory defines a report object and two data attributes with default values `job_type` and `active`. 

```ruby
FactoryBot.define do
 factory :report do
   job_type{ "recurring" }
   active{ true }
 end
end
```

In the test implementation call the `.create` method with the name of the factory you want to persist and optionally and data you want to override default values for. Another popular FactorBot method is `.build` which is called the same way as `.create` but instead of persisting the object it is just an object in memory.


```ruby
require "test_helper"

 class Api::ReportsControllerTest < ActionDispatch::IntegrationTest
 
 before do
   10.times{
     create(:report, active: false)
   }
 end

 it "gets reports" do
   post(
     "https://myapp.com/user/session",
     params: {token: user.tokens.create()}
   )
   get "https://myapp.com/user/reports", xhr: true
   assert_response 200
 end
end
```

<h3>Making requests external to your application</h3>

These can be microservices within your system or third party API’s that you interact with, in either event they should be stubbed and given an expected return value if relevant. The reason here is that your integration tests' success is independent of those external systems being up or down. You don’t want to try and push an urgent bug fix to production and then get stuck because your integration test is failing in your build pipeline at no fault of your own. There is also the danger of your test suite becoming too slow as your test suite gets larger or you unintentionally create bad data during the tests. 

To stub HTTP calls you can either stub the method that issues the HTTP request or you can use a ruby HTTP stubbing library like [WebMock](https://github.com/bblimke/webmock).

Stubbing HTTP calls behaves the same as stubbing Object methods only instead of stubbing a method on an object you stub the URL, http method, headers, and parameters and optionally can ask for a specific return:

From the webmock docs:
```ruby
stub_request(:post, "www.example.com").
  with(body: /world$/, headers: {"Content-Type" => /image\/.+/}).
  to_return(body: "abc")
```

Tip: For the stub to work the URL has to match exactly so make sure your query parameters and url path variables match exactly or the stub will not be set properly.


Similar posts:
- [Same Database table parent/child relationship using Rails](https://tinytechtuts.com/2021-same-db-table-parent-child-relationship-rails)
 - [Rails nested resources completed example](https://tinytechtuts.com/2021-rails-nested-resources-mvc-complete-example)
 