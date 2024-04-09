---
  title: "Add a sitemap to a Phoenix project"
  description: "A review of writing my first integration and what I wish I'd known"
  slug: 'a-review-of-writing-my-first-integration-and-what-i-wish-id-known'
  tags: ["sitemap", "phoenix"]
  pubDate: "2020-12-24"
  layout: "../layouts/BlogPostLayout.astro"
---

This explains what I had to do in my own Phoenix project to render a `/sitemap.xml` file for Google to more effectively crawl my website.

First I had to make sure all of the content I wanted crawled existed under the URLs I expected and then used a [sitemap generator](https://www.mysitemapgenerator.com/) to create the sitemap.xml file. I just had to enter the live URL of my project and it produced the downloadable file.

After that, in my app, I added a `root.xml.eex` template in `templates/layouts` so my app has a place to find root xml rendering. File contents:
`/lib/dev_decks_web/templates/layout/root.xml.eex`
```elixir
<%= @inner_content %>
```

From there I used the code I had written in my app for handling static pages to add the route, controller action and sitemap template. The contents of the sitemap template are a copy and paste from the sitemap generator file:

<h3>Route</h3>
`/lib/dev_decks_web/router.ex`
```elixir
scope "/", DevDecksWeb do
  pipe_through :browser

  get "/sitemap.xml", PageController, :sitemap
end
```

<h3>Controller</h3>
`/lib/dev_decks_web/controllers/page_controller.ex`
```elixir
defmodule DevDecksWeb.PageController do
  use DevDecksWeb, :controller

  def sitemap(conn, _params) do
    conn
    |> put_resp_content_type("text/xml")
    |> render("sitemap.xml")
  end
end
```

<h3>Template</h3>
`/lib/dev_decks_web/templates/page/sitemap.xml.eex`
```elixir
<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
	<loc>https://tinytechtuts.com/</loc>
	<lastmod>2020-12-22T18:58:52+01:00</lastmod>
	<priority>1.0</priority>
</url>

....
```

After that I was able to route to `/sitemap.xml` in the browser and see the contents of my XML file and Google has since been able to do the same.
