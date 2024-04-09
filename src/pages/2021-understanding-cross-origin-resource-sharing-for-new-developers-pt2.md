---
  title: "Understanding Cross Origin Resource Sharing (cors) for new developers"
  description: "Cross Origin Resource Sharing (cors) for new developers"
  slug: 'cross-origin-resource-sharing-(cors)-for-new-developers'
  tags: ["web-security"]
  pubDate: "2021-09-04"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>What is CORS?</h3>

It can be thought of as a configuration item for backend applications. This configuration item decides what origins/hosts the server will accept requests from, so if you want another application to be able to talk to your server you can enable this through CORS.


<h3>What does CORS stand for?</h3>

Cross-origin Resource Sharing.


<h3>What security policy prevented cross origin sharing before CORS was implemented?</h3>

The Same Origin Policy.


<h3>What does a server check for in a request from a client to ensure that the client is one of the hosts that it can communicate with?</h3>

It checks that the origin header contains a value of one of the domain's it has allowed. If the origin value is permitted, the server will respond with a header of its own called Access-Control-Allow-Origin containing the permitted domain policy.


<h3>Describe the relationship between the SOP and CORS.</h3>

SOP's intent is to prevent malicious third parties from acting on behalf of logged in users by checking the origin of the request. The CORS mechanism was implemented after it was realized there was a significant need for better system to system communication. CORS enabled servers check that requests come in from one of the allowed domains that the server is aware of. The check is made using HTTP headers.


<h3>Why was CORS developed?</h3>

To understand this it is helpful to have an idea of what prevented cross origin sharing in the first place, which was the Same Origin Policy. This policy prevented servers from accepting requests from hosts/domains/origins other than its own, it was developed to enhance security. Some years later the tech community decided there should be a secure means of allowing the communication between systems that want to integrate with one another to enhance their product or systems capabilities. The mechanism that came to allow this is what is known as CORS.