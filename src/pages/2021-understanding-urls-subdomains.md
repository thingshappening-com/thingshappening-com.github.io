---
  title: "Understanding URLs: Subdomains"
  description: "Understanding URL Subdomain concepts"
  slug: 'understanding-url-subdomain-concepts'
  tags: ["urls"]
  pubDate: "2021-10-15"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>What is a subdomain?</h3>
It is a prepended string that is added before the domain of a URL example: blog(subdomain).devdecks.io(domain).


<h3>What might you use subdomains for in a web application?</h3>
Subdomains are used as identifiers within an application often to differentiate between separate functions of an application or organizations. Separating by organization will most often be done in a B2B application eg: fedex.procurementsaasapp.com or forum.procurementsaasapp.com. There can also be multiple if needed: fedex.forum.procurementsaasapp.com.


<h3>What is a wildcard subdomain?</h3>
This is a DNS CName record with your hosting provider that points all traffic coming in from a subdomain to the root domain for example if there were wildcard subdomains enabled for devdecks.io, then both blog.devdecks.io, and jobs.devdecks.io would point to devdecks.io.


<h3>When is it more appropriate to use a URL path instead of a subdomain?</h3>
You will want to use a URL path (domain.com/url/path) instead of a subdomain (subdomain.domain.com) when the resource is specific to the business function of your main application. Subdomains are used to identify very different functions from the core application or for different organizations accessing your application.


<h3>What is a non wildcard subdomain?</h3>
Here you would add a DNS CNAME record with your hosting provider for each subdomain you needed. In this case blog.devdecks and jobs.devdecks would have their own CNAME record, all other subdomains would not be recognized by the server.
