---
  title: "HTTP Status Code Range Meanings - 100, 200, 300, 400, 500"
  description: "http status code general meanings"
  slug: 'http-status-code-general-meanings'
  tags: ["http"]
  pubDate: "2021-04-15"
  layout: "../layouts/BlogPostLayout.astro"
---

I wanted to sure up that I knew what a general 100-500 status code's meant when I received them as response's from a server or browser so I went about exploring the internet and very generally derived:

- 100's - Informational codes used to relay information between client and server during a request. Example 100 code: The server received the request headers and determined the client is okay to continue sending the request body.
- 200's - success codes. These indicate that the request issued was successfully fulfilled.
- 300's - redirect codes. These codes are used to tell the browser or server that some other action needs to take place to complete the previous request.
- 400's - client errors. These indicates an error on the requesters behalf.
- 500's - server errors. These indicates an error on the servers behalf.

