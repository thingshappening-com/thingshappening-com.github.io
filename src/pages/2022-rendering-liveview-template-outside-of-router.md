---
  title: "Rendering a LiveView template outside of router"
  description: "How to conditionally render a LiveView template outside of application router"
  slug: 'how-to-conditionally-render-a-liveview-template-outside-of-application-router'
  tags: ["liveview", "elixir"]
  pubDate: "2022-03-30"
  layout: "../layouts/BlogPostLayout.astro"
---

This post assumes you have already developed your LiveView code and need a way to render the markup from your template in a different view. In this example that functionality ended up being for a modal that I wanted to render on different pages. 

In your applications Web module, in my case `DevDecksWeb` you need to include an import for LiveView helpers, to get access to the function we will need, `live_render`:
```
import Phoenix.LiveView.Helpers
```

If you're using the Phoenix application development framework this will be imported when you generate your application.

Once this is imported you can call `live_render` in your template like so and pass it the `@socket` and your LiveView module `DevDecksWeb.EmailModalLive`:

```
<%= live_render(@socket, DevDecksWeb.EmailModalLive) %>
```

And if you need to conditionally render the template based off of some state you can do so with a single line conditional:
```
<%= if @show_modal do live_render(@socket, DevDecksWeb.EmailModalLive) end %>
```
