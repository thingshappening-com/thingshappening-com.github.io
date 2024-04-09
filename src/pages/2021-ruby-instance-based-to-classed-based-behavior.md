---
  title: "Migrating behavior from instance based to class based"
  description: "ruby instance to class based"
  slug: 'ruby-instance-to-class-based'
  tags: ["ruby"]
  pubDate: "2021-11-20"
  layout: "../layouts/BlogPostLayout.astro"
---

I recently had to build a new Ruby class in an application I work on to group like behavior. I originally chose to implement the behavior within the class using instance methods because I wanted some initial state to work with. This was the original implementation:

```ruby
class Recommendation
  attr_accessor :recommendations

  def initialize
    @recommendations = []
  end

  def recommendations(options = {})
    options[:first] ? options[:first] : options[:first] = 10

    query = <<-GRAPHQL
      query {
        recommendations(#{options}) {
          page_info {
            end_cursor
            has_next_page
          }
          edges {
            node {
              id
              name
            }
          }
        }
      }
    GRAPHQL

    response = Api.post("/recommendations/graphql", query: query).data
    recs = response.data.recommendations
    recommendations << recs.edges.map(&:node)

    if recs.page_info.has_next_page
      recommendations({after: recs.page_info.end_cursor})
    end

    recommendations.flatten
  end
end
```

In the example above the class is initialized with an empty list of recommendations and when the `#recommendations` method is called it updates that state with all of the recommendations from the server by calling the method recursively until the server does not have any more records.

The issue here is this really is not an object that needs to be instantiated multipled times with a lot of different public interfaces, it is more like a helper method with a very specific function, return all the recommendations. In this case a class method makes more sense.

The part of this I had to think about was how to handle the recommendations state since I would no longer me initializing a class with shared state. Because this class only has one method I was able to just set an array object at the top of the new class method to hold the recommendations, which would be the new state. If other methods needed this data though I would have to figure out a new option, likely passing data as parameters between methods or returning the state from method calls. These would be more functional approaches to the problem.

Here is the output of the conversion to class based behavior:

```ruby
class Recommendation
  def self.recommendations(options = {})
    recommendations = []
    options[:first] ? options[:first] : options[:first] = 10

    query = <<-GRAPHQL
      query {
        recommendations(#{options}) {
          page_info {
            end_cursor
            has_next_page
          }
          edges {
            node {
              id
              name
            }
          }
        }
      }
    GRAPHQL

    response = Api.post("/recommendations/graphql", query: query).data
    recs = response.data.recommendations
    recommendations << recs.edges.map(&:node)

    if recs.page_info.has_next_page
      recommendations({after: recs.page_info.end_cursor})
    end

    recommendations.flatten
  end
end
```

More Ruby posts for you enjoyment:
- [Redirect to nested resource url in Rails](https://tinytechtuts.com/2021-redirect-to-nested-resource-url-rails/)