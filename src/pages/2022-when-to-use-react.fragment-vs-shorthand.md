---
  title: "When to use <React.fragment /> vs <>"
  description: "Using <React.fragment /> vs <></>"
  slug: 'using-<react.fragment-/>-vs-<></>'
  tags: ["react"]
  pubDate: "2022-01-27"
  layout: "../layouts/BlogPostLayout.astro"
---

In a [previous post](https://tinytechtuts.com/2022-when-to-use-fragment-over-div-react/) I reviewed when you should use a fragment instead of a standard HTML element when building React applications. In this post I want to review when you should use the longhand `<React.Fragment>` instead of the shorthand version `<>`.

1. Use `<React.Fragment>` for when you need to map over a collection of fragments.

```react
function Listicle(props) {
  const {items} = props

  return (
    <dl>
      {items.map(item => (
        <React.Fragment key={item.id}>
          <dt>{item.name}</dt>
          <dt>{item.content}</dt>
        </React.Fragment>
      ))}
    </dl>
  );
}
```

2. Use the shorthand `<>` any other time.

