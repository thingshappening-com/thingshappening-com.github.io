---
  title: "A pocket reference for React Hooks"
  description: "a reference guide to Hooks for React developers"
  slug: 'a-reference-guide-to-hooks-for-react-developers'
  tags: ["react"]
  pubDate: "2022-09-22"
  layout: "../layouts/BlogPostLayout.astro"
---

This post aims to help those who have worked with and studied React Hooks previously and want a quick brush up on key topics.

<h4>What type of component can make use of Hooks?</h4>
Function components

<h4>Where can you use a hook inside of a component?</h4>
Hooks must always be used at the top level of a component and outside of any control structures.

<h4>What to do if you need a useEffect hook to handle logic conditionally?</h4>
Put the condition inside the hook and pass a callback function to the hook.

<h4>Why do hooks need to be called in the same order each time?</h4>
Because this is how React keeps track of which state belongs to each useState hook. By keeping the order the same on each render React is able to associate some local state with each hook.

<h4>When are useEffect hooks called?</h4>
By default they are called after every render, both the first render and on every DOM update.

<h4>How do you handle side effect cleanup when using useEffect?</h4>
Some side effects need to be cleaned up before a component is unmounted. To do this with useEffect, return a function from your useEffect hook, that function will be executed before the component is destroyed and you can handle any cleanup inside of it.

<h4>What are a few examples of side effects you would want to handle inside a useEffect hook?</h4>
- Making any network request.
- Updating browser api attribute like document.title, which is [imperative](https://reactjs.org/docs/hooks-effect.html#example-using-hooks){:target="_blank}.
- Handling any imperative updates, like the afore mentioned or file inputs.
- Using setInterval and clearing the interval on unmount.
