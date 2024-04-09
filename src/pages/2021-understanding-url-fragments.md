---
  title: "Understanding URLs: Fragments"
  description: "Understanding URL Fragments"
  slug: 'understanding-url-fragments'
  tags: ["urls"]
  pubDate: "2021-10-12"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>What is a URL fragment?</h3>
It is a hash containing a single value appended to a url.


<h3>What is a URL fragment used for?</h3>
A fragment is used to identify locations on a page. It can be used to direct users further down on a page where the information they are looking for resides.


<h3>Is a URL fragment sent to the server?</h3>
No, a fragment is understood and used by the browser only.


<h3>When would you use a fragment vs query parameter?</h3>
You would use a fragment when you need to scroll the page to a certain section of content, you would use a query parameter to filter specific elements in a collection of data.


<h3>What is the syntax for using a URL fragment?</h3>
The fragment begins at the # and contains a single value. devdecks.io/about#founding-team or devdecks.io/about#contact-details (these are non functioning examples).
