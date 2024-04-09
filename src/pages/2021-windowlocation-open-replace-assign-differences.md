---
  title: "Differences between window assign, open, replace, and href= in JS"
  description: "Javascript differences between window.location assign, open, replace, and href="
  slug: 'javascript-differences-between-window.location-assign-open-replace-and-href'
  tags: ["javascript"]
  pubDate: "2021-08-28"
  layout: "../layouts/BlogPostLayout.astro"
---

When using JavaScript there are a number of ways to load new documents in the browser. In this post I attempt to shed some light on differences between some/most of the options frequently reached for.

<h3>window.location.assign("some_url") vs window.location.href = "some_url"</h3>
Functionally there is no difference between these two methods for loading a new document ([source](https://stackoverflow.com/questions/10302905/location-href-property-vs-location-assign-method)).

It has been mentioned that using `window.location.href = "some_url"` may be slightly more performant because setting a property value uses fewer resources than invoking a function, eg `window.location.assign("some_url")`.

In both of these cases a new document will be loaded and the browser history will be preserved so clicking the back button in the browser will take the user back the the previous page they came from. The document will be opened in the same browser window the user came from.

<h3>window.location.replace("some_url")</h3>
This function will open a new document. The document will be opened in the same browser window the user came from. The difference here is the history will be reset so clicking the back button in the browser will not take the user back to the previous page.

<h3>window.open("some_url")</h3>
This function will open the new document in a new browser window.

Similar post
- [How to copy text from a collection of non input elements in JavaScript](https://tinytechtuts.com/2021-copy-collection-text-to-clipboard-js/)