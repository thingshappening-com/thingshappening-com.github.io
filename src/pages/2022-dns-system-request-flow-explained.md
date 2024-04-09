---
  title: "DNS system request flow explained"
  description: "Explain how a DNS system handles requests"
  slug: 'explain-how-a-dns-system-handles-requests'
  tags: ["dns"]
  pubDate: "2022-03-31"
  layout: "../layouts/BlogPostLayout.astro"
---

A DNS system takes a *fully qualified domain name and translates it into your web server's IP address. There are a few steps a DNS system takes to handle this translation. This translation is also referred to as resolving a domain name.

The DNS resolution will occur before your actual web server is accessed because your web server can only be accessed using its IP address.

To resolve a DNS request:

1) A browser or other HTTP client sends a request to www.devdecks.io.
2) Your browser will first reach out to a DNS server known as a resolver. This is the server that is responsible for making all of the requests needed to handle the domain name translation and will ultimately send your resolved IP address back to your client. It is typically run by your local internet service provider (ISP).
3) The Resolver first talks to a **Root Name Server** (behind the scenes this is a grouping of name server's, but it will only reach out to one). This server is responsible for interpreting the top level domain, eg .com, .io, .org, etc. Once it has deciphered the top level domain, it will return a pointer to the resolver. That pointer is the address of the appropriate top level domain name server, each top level domain will have a set of servers responsible for the next step in the request chain.
4) Using that pointer the resolver then reaches out to the **Name Server** for .io domains. This will check the requests domain (devdecks) and respond to the resolver with a pointer to the **DNS Provider Server**. The name server knows where to look for this because when you registered your domain name, your dns provider made an entry into the .io name server with a pointer back to their system.
5) Using this pointer the resolver reaches out to the DNS server for devdecks, which responds with the IP address. It knows about this domain entry because when you registered the domain name you created a hosted zone in the registrars system. The hosted zone contains the details of your domain name, including your IP address.
6) The resolver returns the IP address to the http client.

This IP address is then used by your browser client to issue the request to your web server.

TL/DR:
1) HTTP request made to www.devdecks.io.
2) This request first hits a resolver.
3) The resolver reaches out to the root name server for the IP of the name server.
4) The resolver reaches out the name server for the DNS server IP.
5) The resolver reaches out the the DNS server for the IP of your web server.
6) HTTP client makes a request to the IP for www.devdecks.io.

*Fully qualified domain name: the complete domain name a web server can be reached at. For example www(subdomain).devdecks(domain).com(root domain). This does not include the http(s) protocol.

Continued reading:
- [How subdomains work with dns](https://tinytechtuts.com/2022-how-do-subdomains-work-with-dns/)
