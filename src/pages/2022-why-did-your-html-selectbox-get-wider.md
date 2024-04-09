---
  title: "Why did your HTML select get wider"
  description: "html select wider with more text"
  slug: 'why-did-your-html-select-get-wider'
  tags: ["html"]
  pubDate: "2022-01-14"
  layout: "../layouts/BlogPostLayout.astro"
---

Let's imagine you have a select box with a few options in it built from this JSON document. The text for the select is the city, in this case Tulsa or Reno.

```
{
  "Oklahoma": "Tulsa",
  "Nevada": "Reno"
}
```

Unless you hard coded the width of your select, the HTMl would never be wider than the width of the text "Tulsa". But if you added another option to the JSON document, eg:

```
{
  "Oklahoma": "Tulsa",
  "Nevada": "Reno",
  "California": "Bonadelle Ranchos-Madera Ranchos"
}
```

Now the select would be a lot wider, as wide as "Bonadelle Ranchos-Madera Ranchos". This is something to keep in mind as you're working on building out the HTML for your webpages. 

I haven't had to deal with preventing this from happening but if you're in that scenario one suggestion would be to try hard coding the width of the select and adding the css property `overflow: hidden` to prevent the long text from making the box wider than its default.

