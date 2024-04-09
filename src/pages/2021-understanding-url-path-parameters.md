---
  title: "Understanding URLs: Path Parameters"
  description: "Understanding URL Path Parameter concepts"
  slug: 'understanding-url-path-parameter-concepts'
  tags: ["urls"]
  pubDate: "2021-10-14"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>What is a URL Path?</h3>
A URL path is the location of a resource within a domain, ex. domain.com/parent_resource/sub_resource.


<h3>When should you use a URL Path vs Query Parameter?</h3>
Query parameters are most often used to filter for resources within a collection while URL Paths are used to locate a resource type. For example cars.co/toyota/camry is using a url path to find all cars of type Camry but cars.co/toyota/camery?color=red is using the URL path and a query param to filter the collection of Camry's to only give back results that include a color red.


<h3>When would you use URL Path vs Subdomain?</h3>
You will want to use a URL path instead of a subdomain when the resource is specific to the business function of your main application. Subdomains are used to identify different functions from the core application or for different organizations accessing your application.
