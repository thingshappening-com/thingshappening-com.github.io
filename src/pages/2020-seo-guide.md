---
  title: "Lessons learned about on-page SEO for developers from a developer in 2021"
  description: "Lessons learned about SEO for my elixir web app"
  slug: 'lessons-learned-about-seo-for-my-elixir-web-app'
  tags: ["seo", "phoenix"]
  pubDate: "2020-12-18"
  layout: "../layouts/BlogPostLayout.astro"
---

*I'm writing this at the end of December 2020 going into 2021, for anyone with a keen eye.

<h3>1) Have one H1 heading tag at the top of each page.</h3>

This is important is Google's eyes because it gives more detail about the content that will follow on the remainder of the page. There's advice on the web not to have more than one <h1> tag on each page and I follow that as well.

<h3>2) Add unique meta tags and page titles for each page.</h3>

I wrote a post about how to accomplish this in a Phoenix app here [here](https://tinytechtuts.com/2020-seo-in-elixir/).

<h3>3) More content, fewer pages.</h3>

Query parameters were a [bad choice](https://www.searchenginejournal.com/technical-seo/url-parameter-handling).

I made the decision to add the question text for each decks card as a query parameter, and update that query parameter each time you changed to a new card in the app. I thought there were two benefits here:
1.  If someone came to DevDecks from a link with the query parameter you could go right to that question in the deck. Here's a no-longer-working example:
```html
https://tinytechtuts.com/decks/52e4f834-a0a3-4c01-8ffb-c581d37de207/card?cardContent=How%20does%20a%20DOM/Client%20side%20XSS%20attack%20work?
```
2. I thought it might help with SEO. My thinking was that if the url content matched what a user was searching for that my content would get an edge over the same quality content without the query param. The problem is each question and answer is probably not enough content for Google to consider the page as quality content and Google identifies pages as unique if the URL is unique, including query params. I got rid of the query params for each card.

Adding to the negative impacts, each flashcard had the same meta tags as the rest of the flashcards in a deck, so Google likely was viewing this as duplicate content which is negative points on the Google scale. The change's I made here were:

1. Removed the query parameter entirely.
2. Added more content to the page by showing all cards in the deck on each page and now use CSS to hide and show cards.

The content change has the negative affect of slowing down page loads to get the extra data, thus making the page less responsive, which is another SEO metric. However it will not be so slow as to deem the page unresponsive.

<h3>4) Don't route to pages using query parameters</h3>

I did this as a solution for static page routing in LiveView, which looked like this:
`/pages?page=about`

This kept my code dry and I could keep all pages on my website in LiveView instead of using a mix of Websockets and REST.

The issue here was that these all had the same page title and meta tags. I could have written a proxy/conditional to update these values based on the parameter but ulimately I chose to move static pages back to MVC, the below are the controller actions with the dynamic SEO attributes for each view that will be rendered:

```elixir
defmodule DevDecksWeb.PageController do
  use DevDecksWeb, :controller

  def svg_tool(conn, _params) do
    meta_attrs = [
      %{name: "keywords", content: "svg tool, svg filter list, svg image filters"},
      %{name: "description", content: "A tool for helping you change the color of SVG images."}
    ]

    render(conn, "svg_tool.html", meta_attrs: meta_attrs, page_title: "DevDecks · SVG Color Changer")
  end

  def about(conn, _params) do
    meta_attrs = [
      %{name: "keywords", content: "About, DevDecks"},
      %{name: "description", content: "The about page for the DevDecks website."}
    ]

    render(conn, "about.html", meta_attrs: meta_attrs, page_title: "DevDecks · About")
  end

  def attributions(conn, _params) do
    meta_attrs = [
      %{name: "keywords", content: "attributions, DevDecks"},
      %{name: "description", content: "The attributions page for the DevDecks website."}
    ]

    render(conn, "attributions.html", meta_attrs: meta_attrs, page_title: "DevDecks · attributions")
  end
end
```

<h3>5) Add a sitemap.xml file</h3>

I also added a sitemap for Google to be able to craw my site more easily. I added a guide for that [here](https://tinytechtuts.com/2020-add-sitemap-to-phoenix-elixir-project/).

After creating the sitemap I followed the steps outlined [here](https://hdwebpros.com/blog/how-often-does-google-update-its-search-results.html#:~:text=How%20Long%20Will%20It%20Take,four%20days%20and%20four%20weeks) and added Google Analytics, created a new account with Google's Search Console, and submitted [my sitemap](https://tinytechtuts.com/sitemap.xml) for reindexing by providing a link to my `sitemap.xml` page in the search console. I will do this periodically as my site's content grows.

That is all I have for now. I will be updating the post for any other changes I make to DevDecks on this topic.

<br />
Resources I found useful when building this:
- https://www.searchenginejournal.com/technical-seo/url-parameter-handling/#close
- https://neilpatel.com/blog/the-on-page-seo-cheat-sheet/
- https://hdwebpros.com/blog/how-often-does-google-update-its-search-results.html