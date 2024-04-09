---
  title: "Mixins and mixin variables in SCSS, a brief example"
  description: "mixins and variables scss"
  slug: 'mixins-and-variables-scss'
  tags: ["scss"]
  pubDate: "2021-03-06"
  layout: "../layouts/BlogPostLayout.astro"
---

Using SCSS Mixins allows you to reuse more styles in your codebase. They work like this:

First declare the Mixin:

```
/* mixins.scss */

@mixin flex-space-between {
  display: flex;
  justify-content: space-between;
}
```

Then use it by including it in other style declarations. The file below adds the flex-space-between
styles from the Mixin to the footer.
```
/* footer.scss */

#footer {
  include flex-space-between;
}
```

Mixins can also be passed arguments like this:
```
/* mixins.scss */

@mixin flex-space($spacing) {
  display: flex;

  @if $spacing == space-between {
    justify-content: space-between;
  }
  @if $spacing == space-around {
    justify-content: space-around;
  }
}
```

Which is invoked like so:
```
/* footer.scss */

#footer {

  include flex-space(space-between);
}
```

Lastly, you can also pass case specific styles to a Mixin, which is often used in the wild to set different styles based on screen size like the example below. There is also the `@content` directive, which is what references the case specific styles:
```
/* mixins.scss */

@mixin max-width($screen-size) {
  @if $screen-size == m {
    @media (max-width: 50em) { @content ; }
  }
}
```

The case specific styles are passed through the `{}`. In this example the `@content` directive above will include the style of `font-size: 12px;` as seen below:
```
/* footer.scss */

#footer {
  include max-width(m) {
    font-size: 12px;
  };
}
```
