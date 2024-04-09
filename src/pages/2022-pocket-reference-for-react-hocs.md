---
  title: "A pocket reference for React HOCs (Higher Order Components)"
  description: "a reference guide to HOCs for React developers"
  slug: 'a-reference-guide-to-hocs-for-react-developers'
  tags: ["react"]
  pubDate: "2022-09-23"
  layout: "../layouts/BlogPostLayout.astro"
---

This post aims to help those who have worked with and studied React Higher Order Components previously and want a quick brush up on key topics.

<h4>At its most basic, what is a react HOC?</h4>
A function that accepts a component as an argument and returns a new component 

<h4>What are you trying to accomplish by using a HOC?</h4>
Sharing state and behavior across like components.

<h4>What is the name of the component being passing as a function parameter to the HOC?</h4>
WrappedComponent. It’s called this because it’s literally wrapped in the HOC.

<h4>HOC’s are a means of code reuse in react, what are some other forms of code reuse:</h4>
- Components themselves
- React Hooks