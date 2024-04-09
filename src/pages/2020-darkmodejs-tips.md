---
  title: "3 tips for using Darkmode.js in your application"
  description: "Learn some tips on how to more effectively use Darkmode.js"
  slug: 'learn-some-tips-on-how-to-more-effectively-use-darkmode.js'
  tags: ["javascript"]
  pubDate: "2020-12-14"
  layout: "../layouts/BlogPostLayout.astro"
---

This post assumes you are using [Darkmode.js](https://darkmodejs.learn.uno/) as an npm package. It is also only a list of quick tips I wish I had when first getting started with the library and not a full tutorial.

<h3>1) How to override a default Darkmode style</h3>
I needed this specifically for elements that exist outside of the normal DOM because Darkmode.js does not apply styles to them. These are elements positioned absolute or fixed, which for my example was the footer. To apply styles to the footer for darkmode you have to specify the css within the `.darkmode--activated` class.

```css
.darkmode--activated footer {
  div {
    color: white;
  }
}
```

<h3>2) How to ignore an element when Darkmode is activated</h3>
Add a class of `darkmode-ignore` to the element you'd like to avoid being affected by the package. For DevDecks that was the color palette on the settings page. I wanted those colors to be constant and not affected by the package.
```html
<div class="darkmode-ignore color-item <%= if @settings["color"] == "#020887" do "selected" end %>" id="020887" style="--color: #020887">
  <div class="setting-color" style="--color: #020887"></div><span>Blue</span>
</div>
```

<h3>3) How to toggle between a light and dark image</h3>
If changing the color of your image is not feasible through CSS you might need to change the image entirely for a lighter one when darkmode is enabled. The CSS below assumes `#logo` is an image tag and it changes the url to point to the source of the white image when darkmode is enabled:
```css
.darkmode--activated #logo {
  content: url("/images/logo_white.svg");
}
```
And then have another CSS declaration for when darkmode is not enabled which sets the image source back to the default value:
```css
#logo {
  content: url("/images/logo.svg");
}
```


