---
  title: "Understanding URLs: Query Parameters"
  description: "Understanding URL Query Parameter concepts"
  slug: 'understanding-url-query-parameter-concepts'
  tags: ["urls"]
  pubDate: "2021-10-13"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>What is a query parameter?</h3>
A query parameter is a key value pair or set of pairs appended to the end of a URL.


<h3>When would you use a path parameter vs query parameter?</h3>
Query parameters are most often used to filter for resources within a collection while URL Paths are used to locate a resource type. For example cars.co/toyota/camery is using a url path to find all cars of type Camry but cars.co/toyota/camery?color=red is using the URL path and a query param to filter the collection of Camry's to only give back results that include a color red.


<h3>What is a query parameter used for?</h3>
A query parameter is most often used to filter a collection of data by some attribute of that data. ex data.com/cars?color=red which filters a collection of cars for only those whose color is red.


<h3>What is the syntax for using a query parameter?</h3>
You first indicate you are using query parameter by using a ? followed by the key value pair, all query parameters after the first use an & to indicate there is another query param `someurl.com?firstQp=bah&secondQp=humbug`.
