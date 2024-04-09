---
  title: "Access property off object through destructuring"
  description: "javascript destructuring and object access"
  slug: "javascript-destructuring-and-object-access"
  tags: ["javascript"]
  pubDate: "2022-08-06"
  layout: "../layouts/BlogPostLayout.astro"
---

Pattern matching is a super useful way to cleanup our code. Instead of heaving to access keys directly off of objects in callback functions, we can use destructuring to get access to the key as its own variable from within a closure.

```
event.locations.filter(({localtionId}) => console.log(locationId)
```

In the above, instead of having to write `location.locationId` everywhere in the callback function, we are able to access the `locationId` directly.

