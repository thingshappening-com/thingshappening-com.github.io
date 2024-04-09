---
  title: "API Design Notes"
  description: "api design notes from Guarav Sen tutorial"
  slug: 'api-design-notes-from-guarav-sen-tutorial'
  tags: ["apis"]
  pubDate: "2021-04-02"
  layout: "../layouts/BlogPostLayout.astro"
---

*These notes are not intended to be a summary of the tutorial, for deeper understanding of what I've written watch the tutorial linked below.

[Tutorial link](https://www.youtube.com/watch?v=_YlYuNMTCc8)

<h2>Documentation</h2>
- API documentation should show clients/consumers how to use your service, not how your code works.
- Documentation list: Define function/endpoint, define parameters, define possible errors.

<h2>Errors</h2>
- Caution: sometimes API's return a generic error for anything that goes wrong when calling their system. This is not a good practice but is worth knowing about as an API consumer.
- Caution: sometimes an API dev will build in too much error handling. This is also not recommended and can make an API overly complex for maintainers.
- Idea: when handling errors ask yourself if the client/consumer should be able to decipher this without your system telling them explicitly. An example might be the client passes in an integer to your API instead of a string, a client could figure that out instead of you adding additional code.

<h2>Side Effects</h2>
- A function/endpoint shouldn't do more than the name suggests, ex `setAdmins` should only set admins. If it needs to do more than just set the admins, like create a group, then either name it properly to `setAdminsAndGroups`. Or see if they can be broken into separate calls where first you create a group and then set the group as admins.

<h2>API Design Decision Scenario</h2>
- If an a client asks for new functionality to check that a resource collection on the client side is the same as the resource collection on the server, there are a few options
1) Accept a new parameter to an existing method that takes in the collection as a parameter that the client passes to your service.
2) An a new method that get's the collection based on some identifier. The downside here is more HTTP/IO requests.
3) Add a new method to that accepts the collection as a parameter. *This seems like the best option.

<h2>Large Responses</h2>
- Do not make an API response too large in hopes you will not need to make many changes to it later. It's confusing to the consumer deciphering your API and heavy on the network.
- If an API is requesting all records of a particular resource, break down using either pagination or fragmentation.

<h2>Data Consistency</h2>
- Scenario: one user makes a query for a list of records while another user is posting to that list of records at the same time, you need to decide if that matters for your system or not. If it does matter than the various calls to your API will be less efficient.
- If you cache resources you need to decide when/if that cache should expire based on new resources added. You may want to cache records if your DB load is heavy.


<h2>Other Notes</h2>
- Return an object instead of a list of objects as a response. This makes that API more extensible if additional data needs to be added later on. Instead of needing to update the list of objects, you can add a new key.
- Web API URLs can take the format of: myapi.com/model/function/v1 and when the function needs to change, you can publish a v2.
