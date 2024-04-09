---
  title: "Understanding Preflight Requests"
  description: "Understanding Preflight Requests security concepts"
  slug: 'understanding-preflight-requests'
  tags: ["web-security"]
  pubDate: "2021-10-11"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>What is a preflight request?</h3>
Before certain HTTP requests are made to a server a preflight HTTP request is first sent to that server using the OPTIONS method to make sure the request that follows is safe. A request will be preflighted if: - Any custom request headers are included. Custom request headers are any outside of the following: Accept, Accept-Language, Content-Language, Content-Type, DPR, Width, Downloadlink, Save-Data, Viewport-Width. - If any values are set for the Content-Type header that are not: application/x-www-form-urlencoded, multipart/form-data, text/plain - Preflight is automatically issued when using the following HTTP methods: PUT, PATCH, DELETE, CONNECT, TRACE.


<h3>What does the preflight request do to make sure the request that follows is safe?</h3>
It makes sure that the server that is receiving the request is a CORS enabled server. Older servers built before the time of or without implementing CORS and the Same-origin Policy could be susceptible to an attack from a malicious 3rd party sending requests on behalf of an unsuspecting user.


<h3>What is a simple request?</h3>
A simple request is any HTTP request that is not preflighted these requests must satisfy the following conditions: - Do not include custom headers. - Do not include values set for the Content-Type header outside of: application/x-www-form-urlencoded, multipart/form-data, text/plain. - Use either the GET, POST, or HEAD methods.


<h3>If a request is preflighted, when is the actual request sent?</h3>
After the preflight request has completed and your request is determined to be safe the request that was intended will be automatically sent.


<h3>What request headers can be included in an HTTP request that will not trigger a pre-flight request? </h3>
Accept, Accept-Language, Content-Language, Content-Type are the four most often noted headers, but also DPR, Width, Downloadlink, Save-Data and Viewport-Width.


<h3>What are the HTTP methods that by default will not trigger a preflight request?</h3>
GET, POST, or HEAD.
