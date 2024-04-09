---
  title: "How to set default values in Graphql Schemas"
  description: "default values in graphql"
  slug: 'default-values-in-graphql'
  tags: ["graphql"]
  pubDate: "2021-10-08"
  layout: "../layouts/BlogPostLayout.astro"
---

I think setting default GQL values is best illustrated through two annotated examples:

<h3>1) Setting a default for a non-nested type:</h3>

In the below example the CoffeeOrder type has a field of size which sets a default value for the CupSize type of SMALL.

```
type CoffeeOrder {
  name: String!
  size: CupSize = SMALL
}
```

Annotated spec:
```
field: FieldType = defaultValue
```


<h3>2) Setting a default for a nested type:</h3>

The below example is a different implementation of the CoffeeOrder type. This time there is a field cup that contains a field size, which has a default value of SMALL:

```
type CoffeeOrder {
  name: String!
  cup(size: CupSize = SMALL): Cup
}
```

Annotated spec:
```
field(subfield: SubFieldType = defaultValue: FieldType
```

For your continued enjoyment:
- [How to tell if an argument is required in Graphql?](https://tinytechtuts.com/2021-graphql-required-arguments/)
