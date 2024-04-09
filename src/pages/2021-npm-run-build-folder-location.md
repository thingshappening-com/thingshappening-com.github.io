---
  title: "npm run build command explained"
  description: "building production code for a react app"
  slug: 'building-production-code-for-a-react-app'
  tags: ["javascript", "npm"]
  pubDate: "2021-03-26"
  layout: "../layouts/BlogPostLayout.astro"
---

When executing the command `npm run build` at the root directory of a React app you are preparing the application to push a testing or production environment.

What the command does is minify (strip the whitespace) and bundles all your JS and CSS code each into single file so your browser only has to load one JS and CSS file to render the React application.

These bundled files are located at the root of the applications directory under a `build` folder. Often that build folder is created using `mkdirp` which makes it a private directory so to view it on the command line run `ls -a` from your the root of your application.
