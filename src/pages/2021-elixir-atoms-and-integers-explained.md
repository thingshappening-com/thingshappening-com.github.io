---
  title: "Elixir Atoms and Integers explained through q&a"
  description: "elixir atoms and integers explained"
  slug: 'elixir-atoms-and-integers-explained'
  tags: ["elixir"]
  pubDate: "2021-08-01"
  layout: "../layouts/BlogPostLayout.astro"
---

This post works best when paired with the [Elixir docs](https://elixir-lang.org/getting-started/basic-types.html) for a general overview of Atoms and Integers.

<h3>What is an Elixir Atom?</h3>
It is an Elixir data type thats value is its own name.

<h3>What is an Elixir Atom used for?</h3>
They are often used to indicate the result of an operation either as the first value of a tuple or as a standalone response. `:ok` is often used to indicate a successful operation and `:error` is used if something goes wrong.
```
{:ok, result} = some_function()

:ok = some_other_function()
```

<h3>What is special about the values true, false and nil as they relate to atoms?</h3>
Each of those data types are atoms. Elixir allows you to skip typing the colon (:) for these atoms. Ex:
```
true == :true
=> true

nil == :nil
=> true

false == :false
=> true
```

<h3>Which data type represents whole numbers in Elixir Integer or Float?</h3>
`Integer`. `Float` is used for fractional numbers.

<h3>The Kernel and Integer module each define integer functions. What integer functions does the Kernel define?</h3>
`abs/1`, `div/2`, `min/2`, `max/2`, `rem/2`. These are all arithmetic based functions.

<h3>What functions does the Integer module define?</h3>
`is_env` and `is_odd`. These are most often used as Guards in Elixir.
```
Integer.is_even(12)
=> true

Integer.is_odd(12)
=> false
```

More Elixir Decks:
1. [Tuples](https://tinytechtuts.com/2021-elixir-tuples-explained/)
2. [List](https://tinytechtuts.com/2021-elixir-lists-explained/)
