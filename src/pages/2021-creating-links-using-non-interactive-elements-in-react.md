---
  title: "Creating links using non-interactive elements in React"
  description: "building noninteractive element links in react"
  slug: 'building-noninteractive-element-links-in-react'
  tags: ["react"]
  pubDate: "2021-11-22"
  layout: "../layouts/BlogPostLayout.astro"
---

When building a React view I came across the scenario where I wanted a JSX element to be a link when a user was viewing from a laptop or other larger screen and a `div` when they were viewing on mobile. 

The reason for this difference is on mobile there is no concept of a hover state. When you hover the link in mention on a large screen it will show a dropdown nav and when you click the link it will take you to a profile page. On mobile when you click the `div` it should show the dropdown and include a link to that profile page.

```react
<a id="lg-dropdown" href="/profile">
  <ul>
    <li><a href="/darkmode">Darkmode</a></li>
    <li><a href="/settings">Settings</a></li>
    <li><a href="/logout">Logout</a></li>
  </ul>
</a>

<div id="sm-dropdown" role="button" tabIndex="0" onClick={() => setShow(!show)}onKeyUp={(e) => e.key == "Enter" && setShow(!show)} >
  <ul>
    <li><a href="/profile">Profile</a></li>
    <li><a href="/darkmode">Darkmode</a></li>
    <li><a href="/settings">Settings</a></li>
    <li><a href="/logout">Logout</a></li>
  </ul>
</div>
```

```scss
#sm-dropdown {
  display: none;
}

@media (max-width: 480px) {
  #sm-dropdown {
    display: block;
  }

  #lg-dropdown {
    display: none;
  }
}  
```

The `div` contains a few attributes worth noting:
- `role` - the role attribute tells the browser that this element will trigger a response when activated by the user. In this case we are setting the attribute to "button" which identifies the element as a clickable button to the browser.
- `tabIndex` - this attribute is required to make the element focusable by users and screen readers, it also makes the element a part of the page's tab order when using tab navigation.
- `onClick`, `onKeyUp` - I originally only had an `onClick` handler for this element but if you are going to have a click handler it is a best practice to have a keyboard event that can accomodate the interaction as well for accessibility purposes, so I also included the `onKeyUp` event.

More React posts for you enjoyment:
- [Jest Testing Cheatsheet](https://tinytechtuts.com/2021-jest-testing-cheatsheet/)
 - [Mock React Custom Hooks](https://tinytechtuts.com/2021-mock-custom-react-hooks-with-jest/)