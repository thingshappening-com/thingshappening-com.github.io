---
  title: "How subdomains work with DNS"
  description: "Explain how a DNS system handles subdomains"
  slug: "explain-how-a-dns-system-handles-subdomains"
  tags: ["dns"]
  pubDate: "2022-03-31"
  layout: "../layouts/BlogPostLayout.astro"
---

To gain an understanding of DNS systems in general refer to this [previous post](https://tinytechtuts.com/2022-dns-system-request-flow-explained/) on the DNS system request flow.

This post is a grouping of main takeaways I came up with with after researching subdomains:

- In the URL www.devdecks.io the www is the website's subdomain. 
- A subdomain can point to an entirely separate server or all of your subdomains can point to the same server, it is up to the engineer to decide what works best for their system.
  - Example 1: www.devdecks.io might point to a webserver but mail.devdecks.io might point to a separate mail server.
  - Example 2: org1.mysaasapp.com might point to the same server as org2.mysaasapp.com. In this scenario the subdomains would be used in your application to decipher which organization the request is being made on behalf of.
- You can point subdomains to a different IP address using an ARECORD that you register with your DNS provider.
- You can point subdomains to a different domain name using a CNAME that you register with your DNS provider.
- A wildcard DNS record allows you to point all existing and non-existing subdomains to a specific area. For example, www.example.com and test.example.com would both direct to www.example.com when a wildcard subdomain is enabled. A wildcard subdomain would be used for our previous example of org1.mysaasapp.com and org2.mysaasapp.com.
