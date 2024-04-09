---
  title: "Understanding the Same Origin Polcy"
  description: "Understanding the Same Origin Polcy"
  slug: 'understanding-the-same-origin-polcy'
  tags: ["web-security"]
  pubDate: "2021-10-11"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>What attacks/vulerabilities does the Same Origin policy help prevent?</h3>
User impersonation. Often websites store auth credentials in a cookie on your browser. Without SOP another website could read your credentials and act as you. This might not so bad if they're posting nonsense to your social media account. It would be very bad if they're stealing your banking information.


<h3>Is there any relation between the SOP and CORS?</h3>
SOP's intent is to prevent malicious third parties from acting on behalf of logged in users by checking the origin of the request. The CORS mechanism was implemented after it was realized that some cross origin requests may be necessary for certain systems and instead of ensuring all checks originate from the same domain, it checks that the request comes from one of the allowed domains that the server is aware of using HTTP headers. It may be helpful to think of CORS as a more flexibile SOP.


<h3>Why doesn't SOP prevent external images, scripts and css stylesheets from being loaded from other hosts?</h3>
Browsers don't enforce SOP restraints when handling the embedded content including HTML image tags, script tags, or CSS links.


<h3>Does your web browser or application server enforce the SOP?</h3>
Your web browser.


<h3>What attributes of the origin are verified as a part of SOP?</h3>
The protocol, hostname, port. The port expected by default is 80. Below is an attempt to illustrate this: https:// (protocol) devdecks.io (hostname) :80 (port)


<h3>What does the Origin in the Same Origin policy refer to?</h3>
It refers to the domain of the server that rendered a page in your browser (ex: google.com).


<h3>Why do browsers not apply SOP to Posts requests?</h3>
SOP was implemented to protect the identity of a user by preventing the of reading of client side storage/cookies across domains. So reading client side data is restricted to each domain. Protecting against malicious POST/write requests requires a different security technique usually involving authenticity tokens hidden in the form that are validated on post requests learn more about this in the CORS deck.


<h3>How does SOP apply to subdomains of a website? Can one subdomain read cookies from another?</h3>
A domain/origin acts as it's own independent domain so one subdomain will not pass a Same Origin Policy of another, ex: store.company.com will get an SOP error if it tries to make a request to blog.company.com. Separately, each of these subdomains can set the document.domain to company.com (the top level domain) and pass SOP checks in the origin server.


<h3>What is the responsibility of the Same-origin Policy?</h3>
It prevents webpages rendered from one server from accepting read/get requests from any other server, ex. https://stackoverflow.com's server can't make a request to https://hankerrank.com. If you are on a webpage then you can also make additional read requests to the server that issued the webpage unless there is a CORS mechanism in place. Write/post requests do not have SOP restrictions.
