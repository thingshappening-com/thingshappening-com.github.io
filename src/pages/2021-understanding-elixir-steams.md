---
  title: "Understanding Elixir Streams"
  description: "Understanding Elixir Streams through explanation"
  slug: 'understanding-elixir-streams-through-explanation'
  tags: ["elixir"]
  pubDate: "2021-09-27"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>What is an Elixir Stream and what is its purpose?</h3>
They are a collection of data elements with a distinct difference from other collections; the data is available and processed in specified chunks when it becomes available. This is opposed to bringing the entire collection into application memory and processing the collection all at once.

<h3>Streams are most often used when there are memory usage concerns with a large amount of data. How does a Stream mitigate this concern?</h3>
Instead of bringing the large dataset into memory and operating against it at once, which could result in an Out of Memory error, a stream brings data into memory one chunk at a time and operates on each data element individually.


<h3>When would you want to use a Stream?</h3>
1) When processing large amounts of data in a file, for example translating a large text file into a different language or generating reports against large amounts of data. 
2) When processing an unknown amount of data coming over a network at any time.


<h3>Does every Enum function exist on the Stream module?</h3>
No, but you can find a reference of Stream functions at https://hexdocs.pm/elixir/Stream.html#functions.


<h3>Annotate the processing steps the below range goes through:</h3>
```
1..3 |> Stream.map(&(IO.inspect &1)) |> Stream.map(&(&1 + 2)) |> Stream.map(&(IO.inspect &1)) |> Enum.to_list
```
1) The range is piped one element at a time into a Stream containing the functions that will process the stream. 
2) Once the stream is piped into `Enum.to_list` the first element of the enumerable is run against all of the functions in the order they occurred. 
3) After the three stream functions are executed against the first element in the range the second element is run through the stream functions. 
4) This occurs until the range is completed. 

```
1
3
2
4
3
5
=> [3, 4, 5]
```


<h3>How do the processing steps the previous range differ from the same range piped to Enum?</h3>

```
1..3 |> Enum.map(&(IO.inspect &1)) |> Enum.map(&(&1 + 2)) |> Enum.map(&(IO.inspect &1)) |> Enum.to_list
```

1) The range is immediately operated on by the first Enum.map call. 
2) The entire range is operated on in each step before being piped into the next Enum.map call. 

```
1
2
3
3
4
5
[3, 4, 5]
```

