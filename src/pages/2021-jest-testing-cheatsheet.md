---
  title: "Jest testing with React cheatsheet"
  description: "Jest testing with react tips"
  slug: 'jest-testing-with-react-tips'
  tags: ["jest"]
  pubDate: "2021-04-28"
  layout: "../layouts/BlogPostLayout.astro"
---

A few notes to refer to when needing to write JavaScript tests using Jest and React:

*This is not a comprehensive post. It is a brief reference for developers with some experience using Jest but haven't used it recently.

1) Two types of frequently used test expectations are:
- Expecting the DOM tree to match that of a snapshot
- A functional test where you execute an event and match an updated value against an expected state.

<div></div>

2) A few frequently used Jest expectations are:
- `toHaveBeenCalled` - Use to expect a certain function to have been invoked.
- `toHaveBeenCalledWith` - Use to expect a certain function to have been invoked with a specific argument(s).
- `toMatchSnapshot` - Use to expect a DOM tree to match your expected HTML document.
- `toHaveProperty` - Use to check if an object has a specific property.

<div></div>

3) To mock a JavaScript import you can use `jest.mock` that will be used in place of the typically imported file:

```
jest.mock("components/results", () => (() => (<div className="mock">User Results</div>)));
```

4) Use `beforeEach` to perform any setup needed for a group of tests. You can use this to set shared variables/state or execute any functions that should be run before each test.

<div></div>

5) Use `jest.fn()` function to execute a mock function. You can also give the mock function a name using `jest.fn().mockName("myFunctionName")`.

<div></div>

6) Some expectations also have an inverse using the `not` function. Example:

```
expect({name: "joe"}).not.toHaveProperty("email")
```

7) When mocking an import and you want to use some of the actual behavior of the module but not all, you can use `jest.requireActual`

```
jest.mock("react-router-dom", () => ({
  __esModule: true,
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn().mockName("useParams")
}));
```
