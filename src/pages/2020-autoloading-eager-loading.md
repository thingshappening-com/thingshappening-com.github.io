---
  title: "When does a Rails application load and read my code?"
  description: "Learn about auto loading and eager loading rails classes"
  slug: 'learn-about-auto-loading-and-eager-loading-rails-classes'
  tags: ["rails"]
  pubDate: "2020-12-12"
  layout: "../layouts/BlogPostLayout.astro"
---

<h3>Load</h3>
To begin executing our programs, Rails needs to have access to our ruby code. To accomplish this the application server loads the program code into it's memory for storage during execution. From there our server's processor (it's CPU) can access the code quickly and begin running our program to accomplish some end user goal.

When it loads this code into memory is different based on which environment the code is running in. In a Rails dev or test environment our code is autoloaded, which means it is loaded into memory when it is needed as the program is executing.

In a staging or production environment our code is eager loaded. This means when our server starts up it loads the code (the *.rb files and their classes, global variables, etc.) into memory right away. This way when someone uses our application in one of these environments they will have faster response times because the code is already accessible from memory.

<h3>Read</h3>
Our code is read at run-time, aka when our program is executing, not to be confused with a run-time which is a type of software programmers use. At runtime our code is read by the server and eventually responds to the user with either requested data or an error.

<br />
Resources I found useful when building this:
https://stackoverflow.com/questions/27833647/whats-the-impact-of-eager-load-true

