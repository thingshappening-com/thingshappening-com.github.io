---
  title: "How to set state from a URL using React"
  description: "react state from url"
  slug: 'react-state-from-url'
  tags: ["react"]
  pubDate: "2021-04-17"
  layout: "../layouts/BlogPostLayout.astro"
---

During the development of a view for an OAuth application I wanted to reuse an already existing login screen that had session create functionality I needed. I wanted to add some new logic based on if the login screen was for the OAuth workflow or original user login screen the functionality had previously been built for.

To accomplish this I chose to set state based on the url because the OAuth url contained the path `/oauth` and then I could base other checks around that state.

I needed to set this state before render so I added it to the constructor of a class based component. The result looked like this:
```
constructor(props) {
  super(props);

  this.state = {oauthApp: null, oauthProviderFlow: window.location.pathname.includes("oauth")};  
}
```

Above I check that the url path contains the substring "oauth" and update the state to true if that is the case. From there I will have that state available for the first render.
