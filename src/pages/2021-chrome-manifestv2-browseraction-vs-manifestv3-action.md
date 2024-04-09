---
  title: "Chrome Manifest v2 browser action vs v3 service worker"
  description: "chrome extension development popup.html pages"
  slug: 'chrome-extension-development-popup.html-pages'
  tags: ["chrome-extensions"]
  pubDate: "2021-08-03"
  layout: "../layouts/BlogPostLayout.astro"
---

In Chrome's Manifest V2 if you wanted to have a `popup.html` that displayed when you clicked on your extension icon in the browser you would register that in your `manifest.js` file as an `browser_action` field using the `default_popup` key:
```
{
  "manifest_version": 2,
  ...
  "browser_action": {
   "default_popup": "popup.html"
 }
}
```

This changed in the release of Manifest V3 where now to have a `popup.html` page rendered you need to register that in your `manifest.js` file as an `action` field using the `default_popup` key:
```
{
  "manifest_version": 3,
  ...
  "action": {
   "default_popup": "popup.html"
  },
}
```

In both of implementations this script runs in a separate thread than the browser and can be used to make network requests, interact with data storage mechanisms, broadcast messages, etc. Service workers are non-blocking scripts, meaning they are completely asynchronous.

Chrome extensions created by DevDecks:
- [Http Sheriff](https://chrome.google.com/webstore/detail/http-sheriff/lkahbbgcfdicehlpefblblfelahakjfp)
- [YouTube Control Tower](https://chrome.google.com/webstore/detail/youtube-control-tower/njfjdiighaejclkgnjgmblefmdklmoed)
