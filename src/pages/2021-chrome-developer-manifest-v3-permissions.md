---
  title: "Chrome developer Manifest v3 permissions"
  description: "chrome extension development manifest v3"
  slug: 'chrome-extension-development-manifest-v3'
  tags: ["chrome-extensions"]
  pubDate: "2021-07-26"
  layout: "../layouts/BlogPostLayout.astro"
---

If you're using Chrome Manifest v3 there are now three types of permissions available as config values in your manifest file:
1. Permissions
2. Optional permissions
3. Host permissions

1) Permissions

These are permissions required for the chrome extension to function and a user must agree to grant those permissions if they are to use your extension. They are defined as an array:
```
{
  "manifest_version": 3,
  ...
  "permissions": ["webRequest", "tabs"]
}
```

2) Optional permissions

These are permissions that a user can opt into if they want to utilize the functionality required by that permission. The user should still be able to use other parts of the chrome extension without the optional permission enabled.

If a permission is already defined in the permissions setting, it should not be included in your optional permissions.
```
{
  "manifest_version": 3,
  ...
  "permissions": ["webRequestBlocking"]
}
```

3) Host permissions

These are permissions to define what websites (hosts) your chrome extension can run on. If you want it to run on all websites:
```
<!-- manifest.json -->

{
  "manifest_version": 3,
  ...
  "host_permissions": ["<all_urls>"],
}
```

If you want it to run on only certain websites:
```
{
  "manifest_version": 3,
  ...
  "host_permissions": ["https://*.youtube.com/*"],
}
```

Chrome extensions created by DevDecks:
- [Http Sheriff](https://chrome.google.com/webstore/detail/http-sheriff/lkahbbgcfdicehlpefblblfelahakjfp)
- [YouTube Control Tower](https://chrome.google.com/webstore/detail/youtube-control-tower/njfjdiighaejclkgnjgmblefmdklmoed)