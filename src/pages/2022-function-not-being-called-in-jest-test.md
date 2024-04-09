---
  title: "Tip: function not being called during Jest test"
  description: "mock function not triggering actual function"
  slug: "mock-function-not-triggering-actual-function"
  tags: ["jest", "javascript"]
  pubDate: "2022-09-11"
  layout: "../layouts/BlogPostLayout.astro"
---

I found myself in a situation where I knew a function was being invoked I couldn’t see the `console.log` I added to the function being printed to the terminal when I ran my test.


The issue I was facing wasn’t an issue with the code, but an issue with my understanding of the test implementation. It turned out that the function I was trying to invoke was being overwritten by a mock function in the test suite. When a mock function is declared, the original function definition is never called, but rather it is intercepted by the mock.
