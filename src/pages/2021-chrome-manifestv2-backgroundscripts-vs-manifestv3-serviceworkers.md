---
  title: "Chrome Manifest v2 background script vs v3 service worker"
  description: "chrome extension development background scripts"
  slug: 'chrome-manifest-v2-background-script-vs-v3-service-worker'
  tags: ["chrome-extensions"]
  pubDate: "2021-08-07"
  layout: "../layouts/BlogPostLayout.astro"
---

In Chrome's Manifest V2 if you wanted to have a script that ran in the background of the Chrome browser you would register it in the `background` field with the `scripts` key in the `manifest.js` file:
```
{
  "manifest_version": 2,
  ...
  "background": {
    "scripts": ["background.js"]
  }
}
```

This changed in the release of Manifest V3 where now background scripts are to be registered in the `background` field with the `service_worker` key in the `manifest.js` file:
```
{
  "manifest_version": 3,
  ...
  "background": {
    "service_worker": "background.js"
  }
}
```

In both of implementations this script runs in a separate thread than the browser and can be used to make network requests, interact with data storage mechanisms, broadcast messages, etc. Service workers are non-blocking scripts, meaning they are completely asynchronous.

Chrome extensions created by DevDecks:
- [Http Sheriff](https://chrome.google.com/webstore/detail/http-sheriff/lkahbbgcfdicehlpefblblfelahakjfp)
- [YouTube Control Tower](https://chrome.google.com/webstore/detail/youtube-control-tower/njfjdiighaejclkgnjgmblefmdklmoed)
