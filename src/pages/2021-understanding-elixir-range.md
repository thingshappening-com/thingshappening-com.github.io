---
  title: "Learn Elixir through Q&A: Ranges"
  description: "Understanding Elixir Range through explanation"
  slug: 'understanding-elixir-range-through-explanation'
  tags: ["elixir"]
  pubDate: "2021-09-24"
  layout: "../layouts/BlogPostLayout.astro"
---

This and the other "Deck" posts are a repurposing of flashcard study decks to Q&A blog posts. 

<h3>What is an Elixir Range?</h3>
It is way to work with a sequence of integers more effectively without having to explicitly define each integer in the sequence. It also helps with more efficiently checking if a values falls within a sequence of integers. Instead of having to write `[1,2,3,4,5, ...]` you can instead write `1..5`.


<h3>Can a Range be either ascending or descending?</h3>
Yes the following two examples are both valid ranges: 

ASC
```
2..20
``` 

DESC
```
20..2
```


<h3>How can pattern matching be used to set a variables to contain the values of the start and end integers of a range?</h3>
Using left hand assignment where the range variables are declared left of the equals sign (match operator) like so: 

```
score_range = 2..20 
start..finish = score_range 
=> start
2
=> finish 20
20
```


<h3>Do Enum module functions work with Ranges?</h3>
Yes. `Enum` module functionality is implemented for Ranges. Two example functions: 

```
Enum.member?/2
``` 

```
Enum.count/1
```
