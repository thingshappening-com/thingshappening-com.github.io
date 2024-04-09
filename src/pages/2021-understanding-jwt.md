---
  title: "Understanding JWT"
  description: "Understanding JWT through q&a"
  slug: 'understanding-jwt-through-q&a'
  tags: ["web-security"]
  pubDate: "2021-10-09"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>What is a JSON web token (JWT)?</h3>
It is an access / authorization token that can be used when making requests to application servers to grant or deny access to server resources using the contents of the token for this determination.


<h3>There are 3 components of a JWT what are they?</h3>
Header, Payload, and Signature.


<h3>What is the role of the payload in a JWT token?</h3>
The payload contains the data the systems are interested in. Often it will be data about a user but it could be anything like bank transfer information.


<h3>What are claims in a JWT?</h3>
Claims are essentially the payload but with different categories of types of payload data. There are registered claims which are predefined payload keys such as iss (issuer), exp (expiration). Claims exist as public or private, which are covered later in this deck.


<h3>What is the role of the header?</h3>
The header contains metadata about how the server signed the token, which algorithm it used. The server will use the header determine which algorithm to use to decode it.


<h3>What is the role of the signature?</h3>
The signature is what verifies the validity of the token. It is created using a secret key and is comprised of the contents of the token header and payload. The signature is used to verify that the contents of the token were not changed.


<h3>Is a JWT an access token?</h3>
Yes it is. It is what grants users access to different server resources.


<h3>List options for storing JWT in the browser.</h3>
The two most common options are to store it as a cookie or in localStorage.


<h3>If you store a JWT as localStorage in the browser how does it get sent back to the server as a part of a web request?</h3>
You will have to query for the token from localStorage and alter your request to include the token either as a header or parameter.


<h3>If you store a JWT as a cookie in the browser how does it get sent back to the server as a part of a web request?</h3>
Cookies are sent with every browser request, so this will be sent with each request the browser makes to the origin server (the server that rendered the html).


<h3>When it's said that the server signed the token, what does that mean?</h3>
This is the servers way of saying the data it is signing needs to be returned in its current form, otherwise when the server checks for the token for validity it will not pass inspection.


<h3>Describe the relationship between a browser client and application server that generated the JWT? </h3>
The client often store's the JWT in client side storage and passes the token back to the server on requests to verify that the user still has a valid session and has access to the resource they are requesting.


<h3>What is a refresh token and how can they be used with JWT's?</h3>
Since our JWT is an access token, the refresh token is an optional second token that can be used to issue a new access token when the current one expires. This can be useful to limit your exposure if an attacker is able to obtain a valid token.


<h3>What additional security benefit does JWE provide what JWT does not?</h3>
JWE adds encryption. This means that the data in the token cannot be read without a key that is only distributed to trusted systems to unlock it, allowing you to store more sensitive data than would be stored in a traditional JWT. Try decoding a JWT to see anyone can unlock it. Run atob("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9") in your developer tools. This is the header part of the example token on jwt.io.


<h3>If you are going to store private/sensitive data in a token what type of token would you use?</h3>
JWE because the data would be encrypted and unreadable by another party without your consent.


<h3>Why is it important to expire a JWT?</h3>
You want to expire a JWT so that a bad actor has a smaller time period to use a valid token as a means of authentication. An example could be one of your users is logged into your system and you store a JWT on their computer, then they step away from their computer and a few minutes later a bad actor sees the computer left alone and decides to perform unwanted actions without the users knowledge. If the token had expired then the user would not have been vulnerable to such an event.


<h3>How are refresh tokens used?</h3>
After a token has expired a client will send a post request to a different authorization server endpoint than they one that granted them the JWT, this endpoint might be called /renew. That post request will include the refresh token which the auth server will then make sure is valid and issue a new access token as a response.


<h3>When might you opt for session authorization over JWT when building an application?</h3>
If you are building a monolithic application where your application does not need to communicate with other servers in your system then it may make sense to use session storage mechanisms your backend technology provides for auth.


<h3>What is the difference between a public and private claim?</h3>
Consider the difference between a public API vs a private API. A public API is well documented and can be read by anyone, while a private API can only be read by the API team and those who are consuming it and that data is agreed upon in advance by the parties involved. The same can be said of claims, they differ in their level of exposure. Private claims can only be read by the parties that agree to them and public claims can be read by anyone.


<h3>What happens when a JWT is tampered with or altered?</h3>
It is invalidated. Since the tokens signature is generated from the contents of the header and payload any alterations made to either will cause the token to become corrupted.
