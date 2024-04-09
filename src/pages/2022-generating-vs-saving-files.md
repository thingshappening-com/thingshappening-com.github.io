---
  title: "Generating vs Saving files in software development"
  description: "how to decide whether to generate or save a file in software development"
  slug: 'how-to-decide-whether-to-generate-or-save-a-file-in-software-development'
  pubDate: "2022-09-21"
  layout: "../layouts/BlogPostLayout.astro"
---

This post discusses options for when you have to build files in your application. An example might be a user wants to download a csv report or you you need to send a PDF of a sales receipt. 

When I refer to processes I am talking about server processes and to clarify what I mean by generating vs saving a file:

Generating a file: Build a store the file in your application and when a user wants to retrieve it, you pull it from your database.

Saving a file: Write the file outside of your application to a separate storage provider. This could be Amazon's S3 service or Google Cloud Storage. In this scenario when the user wants to download the file it will be retrieved from the service provider.

When deciding whether you are going to generate a file or saving there are a few considerations to make:

1. If you were to generate the file, how long would it take? This is important because you don't want the main application process to be busy generating PDFs for a long time, in a single threaded application this would block other incoming requests while the PDF is building. With this in mind you will always want to handle file generation or saving in a separate process from your application to free up valuable server resources.
2. Would it be simpler to use a storage provider? In most cases there would be less custom development by saving a file to a storage provider, most languages / frameworks have libraries to handle it.
3. Do you have the budget for a storage provider? Perhaps you need to save on recurring costs, then it might make more sense to build it yourself.

These are the considerations I thought through before deciding that generating files was the route I was going to go. If it ends up being a server bottleneck though I will offload this work to a storage provider later on.
