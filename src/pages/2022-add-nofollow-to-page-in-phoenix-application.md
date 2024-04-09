---
  title: "Add nofollow to pages in a Phoenix application"
  description: "How to add nofollow to pages in a Phoenix application"
  slug: 'how-to-add-nofollow-to-pages-in-a-phoenix-application'
  tags: ["phoenix", "seo"]
  pubDate: "2022-04-01"
  layout: "../layouts/BlogPostLayout.astro"
---

In a [previous post](https://tinytechtuts.com/2020-seo-in-elixir/) I outlined how you can add meta tags to a template in a phoenix application to help with SEO. In this post I will review the functionality that's needed to accomplish setting `<meta>` tags in the `<head>` of your html document. The tags will be used to tell Google and most other search engines that this page should not be included in their index.

`<meta>` tags are usually used to communicate with an outside service regarding something you'd like them to know, in the SEO example you want a search engine to understand more information about the content of the page. For this example we want search engines to know that we don't want this page to be included in their index.

To add meta tags to templates in your html documents first we will create functions in your Phoenix LayoutView that can be invoked by any other template in your application. By adding the functions here we can optionally choose to call them within any other template we create, so we don't have to have the tags on every page, just the ones that need it.

That code looks like:
```elixir
defmodule DevDecksWeb.LayoutView do
  use DevDecksWeb, :view

  def meta_tags(attrs_list) do
    Enum.map(attrs_list, &meta_tag/1)
  end

  def meta_tag(attrs) do
    tag(:meta, Enum.into(attrs, []))
  end
end
```

In the root layout file (root.html.leex) call the `meta_tags` function if `meta_tags` are provided to `assigns`. Call `assigns[:meta_attrs]` directly here instead of `@meta_attrs` so that if `@meta_attrs` is not provided the application does not error and stop execution.
```elixir
<%= if assigns[:meta_attrs], do: meta_tags(assigns[:meta_attrs]) %>
```

If you're using a LiveView template add the `meta_tags` to `assigns` in mount like the below:
```elixir
def mount(_params, _session, socket) do
    meta_attrs = [
      %{name: "robots", content: "noindex"},
      %{name: "googlebot", content: "noindex"}
    ]

  {:ok, assign(socket, meta_attrs: meta_attrs)}
end
```

If you're using an MVC approach you can add the `meta_attrs` to your controller that is generating the template:
```elixir
def index(conn, _params) do
  meta_attrs = [
    %{name: "robots", content: "noindex"},
    %{name: "googlebot", content: "noindex"}
  ]

  render(conn, "index.html", meta_attrs: meta_attrs)
end
```

The meta tags shown in this example are directions from [Google's documentation](https://developers.google.com/search/docs/advanced/crawling/block-indexing). It should be noted that these tags should prevent *most* web crawlers from indexing your page, but it's possible that other crawlers handle indexing differently.

Further reading:
- [How to paginate an in memory array](https://tinytechtuts.com/2022-in-memory-pagination-by-example/)
