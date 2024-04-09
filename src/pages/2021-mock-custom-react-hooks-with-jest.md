---
  title: "How to mock custom React Hooks with Jest"
  description: "mocking react hooks"
  slug: 'mocking-react-hooks-custom'
  tags: ["react", "jest"]
  pubDate: "2021-03-16"
  layout: "../layouts/BlogPostLayout.astro"
---

*This post assumes you already have Jest configured in your application.

I was using a custom hook in a component that needed to be mocked out in order to properly produce a snapshot test. I chose to mock the this particular function because it was dependent on a part of the DOM that was not available for the hook to be operational.

From the below component I will show you how to mock only the `useClassNameWrapper` hook and leave the `useParams` hook unmocked.
```
<!-- presentation.js -->

import {useClassNameWrapper, useParams} from "lib/hooks";


function Presentation(props) {
  const [classNameWrapper, setClassNameWrapper] = useState(null);
  if(!classNameWrapper) {
    setClassNameWrapper("presentation-wrapper");
  }
  useClassNameWrapper(classNameWrapper);
}
```

In the test file I had to mock the import from `lib/hooks`, in this case the custom hooks from my `/lib` folder.

In order to mock an import you need to call on the `mock` function from the `jest` object and then return an object that matches the exports. In the below example an object is returned containing the exported `usePageClass` as a mock function:
```
<!-- test.js -->

jest.mock("lib/hooks", () => ({
  usePageClass: jest.fn()
}));
```

You will notice that this does not quite match the exports from the example code because this is not returning `useParams` from the mock and that is because we want the actual function to be called. In order to accomplish this we will use the `jest` function `requireActual`, ex:
```
<!-- test.js -->

jest.mock("lib/hooks", () => ({
  ...jest.requireActual("lib/hooks"),
  usePageClass: jest.fn()
}));
```

Now any additional hook(s) that needs to be mocked out can be added to the `jest.mock` and any that do not will be handled by the `requireActual` function.

Note: I wrote a Jest cheatsheet for React developers that you may also find useful [here](https://tinytechtuts.com/2021-jest-testing-cheatsheet/). 


