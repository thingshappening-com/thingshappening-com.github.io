---
  title: "Create sidebar ad using Google Adsense"
  description: "create a sidebar ad adsense"
  tags: ["adsense"]
  pubDate: "2023-10-06"
  slug: "create a sidebar ad adsense"
  layout: "../layouts/BlogPostLayout.astro"
---

This post is a tutorial on creating a sidebar/siderail ad for a content website where you manage the code. I am using Astro as a SSG, for context, but the tutorial should apply to all static websites that want to run sidebar ads.

To accomplish this take the following actions:
1. Create an ad unit in adsense management console
2. Copy the script code 
3. Create the html element your ad will exist within

## Create an ad unit in adsense management console

 After logging in to Google Adsense click on Ads in the left side nav.

In the navigation bar click By ad unit.

Click Display ads.

Create a name for the ad unit, make sure responsive is selected. I found that "Square, Horizontal, Vertical" selections don't indicate which type of format the ad will be, but rather show what the ad unit will look like depending on how it is rendered, so no selection is needed there.

Click create.

<img src="/images/posts/adsense-by-ad-unit.png" alt="adsense">

## Copy the script code
After clicking create the ad code should pop up. Copy that and store if for later use.

## Create the html element your ad will exist within

In the code below note the `style` attribute on the `ins` element, it contains the styling I used for this ad. Sidebar ads are longer than they are tall. Be sure to make the dimensions large enough so the ad has a place to render, otherwise you will receive an error.

If you receive the error `adsbygoogle is not defined` that means the Google Syndication script (the first script in the code) never loaded.

```
  <div>
    <!-- sidebar vertical -->
    <script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1123456789"
    crossorigin="anonymous"></script>
    <ins class="adsbygoogle"
        style="position: absolute; right: 50px; top: 200px; width: 300px; height: 1000px;"
        data-ad-client="ca-pub-1123456789"
        data-ad-slot="198347239"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
  </div>
```

