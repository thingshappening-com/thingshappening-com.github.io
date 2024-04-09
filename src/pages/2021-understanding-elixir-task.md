---
  title: "Understanding Elixir Task"
  description: "Understanding Elixir Task through explanation"
  slug: 'understanding-elixir-task-through-explanation'
  tags: ["elixir"]
  pubDate: "2021-09-29"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>What is an Elixir Task?</h3>
It is a means of spawning an Elixir Process but with asynchronous capabilities, which is its main use case.


<h3>When do you use a Task?</h3>
They are often used for interacting with external services. Using a `Task` in this way makes otherwise synchronous code asynchronous, so your code can do other work while the `Task` is working.


<h3>What does the code look like for spawning an asynchronous Task and reading its message upon completion?</h3>
```
=> task = Task.async(fn -> IO.puts("processing") end) 
=> Task.await(task)
``` 
In the above example the `Task` is executed using `async/1` and its message will be available as a result of `await/1`.


<h3>What Task function should be used when you have no interest in the result of its completion?</h3>
`start/1`, which accepts an anonymous function to be executed. The anonymous function must have no arguments.


<h3>Can you spawn multiple Tasks and await all of their completion?</h3>
Yes. You can map over a list of `Task`s and provide the `Task.await` function as the callback to each task in the list.

```
=> tasks = Enum.reduce(0..9, [], fn _, acc -> [Task.async(&any_job/0) | acc] end) 

=> Enum.map(tasks, &Task.await/1)
```

<h3>Do Tasks use message passing?</h3>
Not often. A `Task` is used for one specific action.

