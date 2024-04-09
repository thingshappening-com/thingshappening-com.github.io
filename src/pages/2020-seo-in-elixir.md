---
  title: "On-page SEO meta-tags and page-title for Phoenix applications"
  description: "Learn how to make SEO more dynamic in a Phoenix App"
  slug: 'learn-how-to-make-seo-more-dynamic-in-a-phoenix-app'
  tags: ["elixir"]
  pubDate: "2020-12-11"
  layout: "../layouts/BlogPostLayout.astro"
---

*This post assumes you are using server generated HTML templates in your Elixir application.

Two important elements of on-page SEO are the title and meta tags used on your each of your pages. This data describes what the content on your page pertains to and allows a search engine to more accurately index your website. This post shows you how to dynamically add these tags to your application.

Add this data to pages you want Google to be aware of. For DevDecks as of Dec 2020 those are Posts and Decks. In your layout view add `meta_tags` and `meta_tag` methods that will iterate over a list of meta_tags and will output the content for each tag.

```elixir
layout_view.ex

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

In the root layout file (`root.html.leex`) call the meta_tags function if meta_tags are provided to assigns. Call `assigns[:meta_attrs]` directly here instead of `@meta_attrs` so that if `@meta_attrs` is not provided the application does not error and stop execution. Also check for a page_title the same way right below or display a default title:
```elixir
<%= if assigns[:meta_attrs], do: meta_tags(assigns[:meta_attrs]) %>
<%= live_title_tag assigns[:page_title] || "DevDecks · Software Development Flashcards" %>
```

And then if the template is generated from LiveView add page_title and meta_tags to assigns in mount like so:
```elixir
def mount(_params, _session, socket) do
  meta_attrs = [
    %{name: "keywords", content: "tech study flashcards, full list study cards"},
    %{name: "description", content: "Software Development Study Flashcards"}
  ]

  {:ok, assign(socket, meta_attrs: meta_attrs, page_title: "DevDecks · Software Development Study Flashcards")}
end
```

And if you're using an MVC approach add it to your controller that is generating the template:
```elixir
def index(conn, _params) do
  meta_attrs = [
    %{name: "keywords", content: "tech blog, tech writing"},
    %{name: "description", content: "A tech blog by DevDecks"}
  ]

  render(conn, "index.html", meta_attrs: meta_attrs, page_title: "DevDecks · The tech blog by DevDecks")
end
```

One more thing to note is that when you are adding these tags you want to keep them in the `<head>` of the HTML doc because if they are in the body some technologies won't notice them, for example social media OpenGraph tags won't be read if they are not in the head of the document.

<br />
Resources I found useful when building this:
- https://elixirforum.com/t/how-to-create-dynamic-meta-tag-in-phoenix/15286
- https://stackoverflow.com/questions/1447842/what-happens-if-the-meta-tags-are-present-in-the-document-body
