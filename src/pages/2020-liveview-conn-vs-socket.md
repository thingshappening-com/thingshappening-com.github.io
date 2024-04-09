---
  title: "Route static paths across LiveView and App templates"
  description: "Learn how to route static paths across LiveView and App code"
  slug: 'learn-how-to-route-static-paths-across-liveview-and-app-code'
  tags: ["liveview", "elixir"]
  pubDate: "2020-12-05"
  layout: "../layouts/BlogPostLayout.astro"
---

*TLDR: Use your Endpoint module directly to route static paths in either eex or leex templates.*

When using Phoenix LiveView I needed to share navigation html across two layout files:
1) `app.html.eex`
2) `live.html.leex`

Phoenix provides a file to do this out of the box which will render markup for both app and live templates:
`root.html.leex`

The issue I had was static routing to images. This is due the Router module using either Plug `@conn` and LiveView's `@socket` for connections depending on the file.

<div>At first I had two nav's for each file:</div>

```html
<!-- app.html.eex -->

<nav id="nav">
  <a href="/"><img class="logo" src="<%= Routes.static_path(@conn, "/images/logo.svg")%>" /></a>

  <!-- rest of nav -->
</nav>
```

```html
<!-- live.html.leex -->

<nav id="nav">
  <a href="/"><img class="logo" src="<%= Routes.static_path(@socket, "/images/logo.svg")%>" /></a>

  <!-- rest of nav -->
</nav>
```

To update this I found that if you use the Phoenix Endpoint module instead of individual connection objects to route to static assets you only need one nav located in `root.html.leex`:

```html
<!-- root.html.leex -->

<nav id="nav">
  <a href="/"><img class="logo" src="<%= Routes.static_path(DevDecksWeb.Endpoint, "/images/logo.svg")%>" /></a>

  <!-- rest of nav -->
</nav>
```