import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, d as addAttribute, m as maybeRenderHead, e as renderHead, f as renderSlot, u as unescapeHTML } from './astro_WOcrr5Aa.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
/* empty css                                            */
import rss from '@astrojs/rss';
/* empty css                                            */
import dayjs from 'dayjs';
/* empty css                          */

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(raw || cooked.slice()) }));
var _a$4;
const $$Astro$h = createAstro("https://thingshappening.com");
const $$GoogleAnalytics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$GoogleAnalytics;
  return renderTemplate(_a$4 || (_a$4 = __template$4(['<!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-2K6JP8M5XE"><\/script> '])));
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/Head/GoogleAnalytics.astro", void 0);

const $$Astro$g = createAstro("https://thingshappening.com");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description } = Astro2.props;
  let permalink = "https://thingshappening.com";
  return renderTemplate`${renderComponent($$result, "GoogleAnalytics", $$GoogleAnalytics, {})} <meta charset="utf-8"> <meta name="viewport" content="width=device-width"> <link rel="sitemap" href="/sitemap.xml"> <link rel="icon" type="image/x-icon" href="/images/favicon.ico"> ${console.log(title)} <meta name="description"${addAttribute(description, "content")}> <meta property="og:type" content="website"> <meta property="og:url"${addAttribute(permalink, "content")}> <meta property="og:title"${addAttribute(title, "content")}> <meta property="og:description"${addAttribute(description, "content")}> <meta property="og:image" content="/images/social.jpg"> <meta property="twitter:card" content="summary_large_image"> <meta property="twitter:url"${addAttribute(permalink, "content")}> <meta property="twitter:title"${addAttribute(title, "content")}> <meta property="twitter:description"${addAttribute(description, "content")}> <meta property="twitter:image" content="/images/social.jpg"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism-tomorrow.min.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/toolbar/prism-toolbar.min.css"> <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@900&family=Poppins:ital,wght@0,400;0,600;1,400;1,700&display=swap" rel="stylesheet"> <title>${title}</title>`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/Head/BaseHead.astro", void 0);

const $$Astro$f = createAstro("https://thingshappening.com");
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<nav> <div class="max-w-5xl mx-auto px-3 py-3 flex items-center justify-between h-16"> <a href="/" class="font-bold text-xl hover:text-hot-pink">thingshappening</a> <a href="/search" class=""> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </a> </div> <div class="w-full border-b-2 border-black squiggle"></div> </nav>`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/Nav.astro", void 0);

const $$Astro$e = createAstro("https://thingshappening.com");
const $$Squiggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Squiggle;
  return renderTemplate`<!--This SVG filter is used to "squigglify" HTML elements with the .squiggle class -->${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="0" width="0"> <defs> <filter id="squiggle"> <feTurbulence type="fractalNoise" id="turbulence" baseFrequency=".05" numOctaves="4"></feTurbulence> <feDisplacementMap id="displacement" in="SourceGraphic" scale="4"></feDisplacementMap> </filter> </defs> </svg>`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/Footer/Squiggle.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$d = createAstro("https://thingshappening.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<footer class="py-6 lg:py-12 text-center"> <div class="text-sm" data-test="footer-text">&copy;<script type="text/javascript"> document.write(new Date().getFullYear()); <\/script> thingshappening</div> <!-- <Social /> --> </footer> ', " <!-- Prism JS -->    "])), maybeRenderHead(), renderComponent($$result, "Squiggle", $$Squiggle, {}));
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/Footer/Footer.astro", void 0);

const $$Astro$c = createAstro("https://thingshappening.com");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$404;
  let title = "How To Code";
  let description = "";
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="bg-white text-black font-body leading-normal personality-casual"> ${renderComponent($$result, "Nav", $$Nav, {})} <main class="py-12 lg:py-20"> <article class="max-w-6xl mx-auto px-3"> <header class="mx-auto max-w-3xl text-center content"> <h1 class="mb-4">You're up 404 creek</h1> <p>If you know the post you're looking for try searching for it above.</p> </header> </article> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/404.astro", void 0);

const $$file$6 = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/404.astro";
const $$url$6 = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$b = createAstro("https://thingshappening.com");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, date, hero, youtube } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<article class="max-w-5xl mx-auto px-3" data-astro-cid-xj2uyz6m> <header style="margin: 0 !important" class="mx-auto max-w-3xl text-center content" data-astro-cid-xj2uyz6m> <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2976969447542443" crossorigin="anonymous"><\/script> <meta name="google-adsense-account" content="ca-pub-2976969447542443"> <h1 data-astro-cid-xj2uyz6m>', "</h1> </header> <!-- Image --> ", " <!-- YouTube Video --> ", ' <!-- Content --> <section style="margin: 0 !important" class="max-w-3xl mx-auto py-6 lg:py-12 content" data-astro-cid-xj2uyz6m> ', ' </section> <div data-astro-cid-xj2uyz6m> <!-- sidebar vertical --> <script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2976969447542443" crossorigin="anonymous"><\/script> <ins class="adsbygoogle" style="position: absolute; right: 50px; top: 200px; width: 300px; height: 1000px;" data-ad-client="ca-pub-2976969447542443" data-ad-slot="1095168865" data-ad-format="auto" data-full-width-responsive="true" data-astro-cid-xj2uyz6m></ins>  </div> </article> '])), maybeRenderHead(), title, hero && renderTemplate`<img class="rounded-xl mx-auto" style="min-width: 80%;" loading="lazy"${addAttribute(hero, "src")}${addAttribute(title, "alt")} data-astro-cid-xj2uyz6m>`, youtube && renderTemplate`<div class="embed-responsive aspect-ratio-16/9 mt-6 lg:mt-12" data-astro-cid-xj2uyz6m> <iframe width="700" height="500" class="embed-responsive-item"${addAttribute(`https://www.youtube.com/embed/${youtube}`, "src")} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen data-astro-cid-xj2uyz6m></iframe> </div>`, renderSlot($$result, $$slots["default"]));
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/BlogPost.astro", void 0);

const $$Astro$a = createAstro("https://thingshappening.com");
const $$BlogPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$BlogPostLayout;
  const { content } = Astro2.props;
  let { title, description, date, hero, youtube } = content;
  title = title ? title : "";
  return renderTemplate`<html${addAttribute(content.lang || "en", "lang")}> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body> ${renderComponent($$result, "Nav", $$Nav, {})} <main class="py-12 lg:py-20"> ${renderComponent($$result, "BlogPost", $$BlogPost, { "title": title, "hero": hero, "date": date, "youtube": youtube }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </main> </body></html>`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/layouts/BlogPostLayout.astro", void 0);

const html$2 = "<p>Chattanooga, Tennessee, offers a variety of hiking trails that are perfect for a quick and rewarding outdoor adventure. Here are five hikes under five miles each that you can enjoy in the Chattanooga area:</p>\n<p>Lookout Mountain Trail: This popular trail offers scenic views and a moderate hike. The famous Sunset Rock provides a stunning panorama of the Tennessee River and downtown Chattanooga, making it a great spot for photos. The trail is about 3 miles round trip.</p>\n<p>Glen Falls Trail: This is a short, 2-mile round trip hike on Lookout Mountain. It features a beautiful waterfall and a small wooden bridge, offering a serene setting ideal for families.</p>\n<p>Stringers Ridge Park Trails: Located close to downtown Chattanooga, this park offers several trails ranging from 1 to 5 miles in length. It’s a great spot for mountain biking as well, with excellent views of the city from various points.</p>\n<p>Reflection Riding Arboretum and Nature Center: Explore various trails that meander through meadows, forest, and alongside Lookout Creek. The trails here are generally easy and well-suited for all ages, with the total trail length available under 5 miles.</p>\n<p>Edward’s Point Trail: Starting from Signal Point, this trail is part of a larger network but offers a manageable 4.2-mile round trip to Edward’s Point, providing breathtaking views of the Tennessee River Gorge.</p>\n<p>Each of these trails offers a unique way to experience the natural beauty of the Chattanooga area without requiring a full day’s commitment. Whether you’re looking for panoramic views, waterfalls, or forested paths, these hikes are sure to delight.</p>";

				const frontmatter$2 = {"title":"5 Great Hikes Less Than 5 Miles in the Chattanooga Area","description":"5 Hikes less than 5 miles long in the Chattanooga Area","tags":["outdoors"],"pubDate":"2024-04-13","slug":"5-mile-hikes-chattanooga","layout":"../../layouts/BlogPostLayout.astro"};
				const file$2 = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/5-mile-hikes-chattanooga.md";
				const url$2 = "/chattanooga/5-mile-hikes-chattanooga";
				function rawContent$2() {
					return "\nChattanooga, Tennessee, offers a variety of hiking trails that are perfect for a quick and rewarding outdoor adventure. Here are five hikes under five miles each that you can enjoy in the Chattanooga area:\n\nLookout Mountain Trail: This popular trail offers scenic views and a moderate hike. The famous Sunset Rock provides a stunning panorama of the Tennessee River and downtown Chattanooga, making it a great spot for photos. The trail is about 3 miles round trip.\n\nGlen Falls Trail: This is a short, 2-mile round trip hike on Lookout Mountain. It features a beautiful waterfall and a small wooden bridge, offering a serene setting ideal for families.\n\nStringers Ridge Park Trails: Located close to downtown Chattanooga, this park offers several trails ranging from 1 to 5 miles in length. It's a great spot for mountain biking as well, with excellent views of the city from various points.\n\nReflection Riding Arboretum and Nature Center: Explore various trails that meander through meadows, forest, and alongside Lookout Creek. The trails here are generally easy and well-suited for all ages, with the total trail length available under 5 miles.\n\nEdward's Point Trail: Starting from Signal Point, this trail is part of a larger network but offers a manageable 4.2-mile round trip to Edward's Point, providing breathtaking views of the Tennessee River Gorge.\n\nEach of these trails offers a unique way to experience the natural beauty of the Chattanooga area without requiring a full day's commitment. Whether you're looking for panoramic views, waterfalls, or forested paths, these hikes are sure to delight.\n";
				}
				function compiledContent$2() {
					return html$2;
				}
				function getHeadings$2() {
					return [];
				}

				const Content$2 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2;
					content.file = file$2;
					content.url = url$2;

					return renderTemplate`${renderComponent(result, 'Layout', $$BlogPostLayout, {
								file: file$2,
								url: url$2,
								content,
								frontmatter: content,
								headings: getHeadings$2(),
								rawContent: rawContent$2,
								compiledContent: compiledContent$2,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html$2)}`
							})}`;
				});

const _5MileHikesChattanooga = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$2,
  compiledContent: compiledContent$2,
  default: Content$2,
  file: file$2,
  frontmatter: frontmatter$2,
  getHeadings: getHeadings$2,
  rawContent: rawContent$2,
  url: url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro("https://thingshappening.com");
const $$HomeHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$HomeHeader;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="mx-auto max-w-xl text-center content"> <h1 class="mb-4" data-test="header-title">${title}</h1> <p data-test="header-description">${description}</p> </header>`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/HomeHeader.astro", void 0);

const $$Astro$8 = createAstro("https://thingshappening.com");
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Card;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="transition-all duration-75 ease-in-out h-full block relative top-0 hover:-top-2 shadow-lg hover:shadow-xl bg-white rounded-xl overflow-hidden" data-test="article-card" data-astro-cid-dohjnao5> <a${addAttribute(post.url, "href")} class="transition-all duration-75 ease-in-out h-full top-0 hover:-top-2 shadow-lg hover:shadow-xl bg-white rounded-xl" data-astro-cid-dohjnao5> <div class="py-6 px-8" data-astro-cid-dohjnao5> <h2 class="font-bold text-2xl leading-tight" data-astro-cid-dohjnao5> ${post.frontmatter.title} </h2> <p class="text-xs text-gray-600 mt-4 flex items-center" data-astro-cid-dohjnao5> ${dayjs(post.frontmatter.pubDate).format("MM-DD-YYYY")} </p> </div> </a> <div class="flex items-center pl-8 pb-3" data-astro-cid-dohjnao5> ${post.frontmatter.tags && renderTemplate`<div data-astro-cid-dohjnao5> ${Array.isArray(post.frontmatter.tags) ? post.frontmatter.tags.map((t) => renderTemplate`<a${addAttribute(`/tag/${t}`, "href")} class="transition-all duration-75 h-fit inline pr-2" data-astro-cid-dohjnao5>${`#${t}`}</a>`) : renderTemplate`<span data-astro-cid-dohjnao5>Tags are not an array.</span>`} </div>`} </div> </div> <!-- <p class="transition-all duration-75 ease-in-out hover:-top-2 text-xs text-gray-600 mt-4 flex items-center"></p> --> `;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/Card.astro", void 0);

const $$Astro$7 = createAstro("https://thingshappening.com");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$2;
  const title = "thingshappening";
  const description = "The simplest way to find out about things happening in greater Chattanooga";
  const seoDescription = "The simplest way to find out about things happening";
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./ruby-falls.md": () => Promise.resolve().then(() => rubyFalls)}), () => "./*.md");
  const sortedPosts = allPosts.sort((a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf());
  console.log("prob here");
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": seoDescription })}${renderHead()}</head> <body class="bg-white text-black font-body leading-normal personality-casual"> ${renderComponent($$result, "Nav", $$Nav, {})} <main class="py-12 lg:py-20"> <article class="max-w-6xl mx-auto px-3"> ${renderComponent($$result, "HomeHeader", $$HomeHeader, { "title": title, "description": description })} <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8" data-test="articles-section"> ${sortedPosts.map((p) => renderTemplate`<div class="col-span-1"> ${renderComponent($$result, "Card", $$Card, { "post": p })} </div>`)} </section> </article> </main> <!-- <section class="flex space-x-8 justify-center text-xl pt-8 font-bold">
    <a href="/posts" class="mr-8" data-test="see-all-link">
      See All<span class="squiggle">&rarr;</span>
    </a>
  </section> --> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/attractions/index.astro", void 0);

const $$file$5 = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/attractions/index.astro";
const $$url$5 = "/chattanooga/attractions";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const html$1 = "<p>Nestled deep within the heart of Lookout Mountain in Chattanooga, Tennessee, Ruby Falls stands as a majestic underground spectacle. This remarkable waterfall is not only one of the tallest and deepest underground waterfalls accessible to the public in the United States, but it also offers a unique adventure for visitors of all ages.</p>\n<p>Discovered in 1928 by Leo Lambert, who named the falls after his wife Ruby, the site has since captivated the imaginations of millions. The journey to the falls begins with an elevator ride that plunges visitors over 260 feet below the surface, where the temperature is a constant, cool 60 degrees Fahrenheit, providing a welcome respite from the Southern heat.</p>\n<p>The path to the waterfall winds through a series of caverns filled with rich geological wonders. Stalactites and stalagmites line the route, and dramatic rock formations create eerie shadows and shapes, illuminated by strategically placed lighting that enhances their natural beauty. The tour guides provide insights into the cave’s geology, history, and the various formations, such as “The Steak,” “The Totem Pole,” and “The Elephant’s Foot,” making each turn and discovery a learning opportunity.</p>\n<p>The climax of the tour is the stunning view of Ruby Falls itself. Plunging 145 feet, the waterfall cascades down into a small pool, illuminated by a colorful light show that highlights the waterfall’s natural features and the surrounding rock faces. The sight is breathtaking and offers a surreal experience as the sound of the water echoes through the cavern.</p>\n<p>Ruby Falls also offers various other attractions, including the Lookout Mountain Tower, which provides panoramic views of the Tennessee River Valley, and the ZIPstream aerial adventure, which adds a thrilling aerial perspective of the area’s natural beauty.</p>\n<p>The conservation efforts at Ruby Falls are notable. The site uses LED lighting to minimize environmental impact and operates with a focus on sustainability. These efforts ensure the preservation of the cave’s natural state, allowing visitors to enjoy its beauty for generations to come.</p>\n<p>Visiting Ruby Falls is a journey not just to a destination but through time and nature. It’s an exploration that offers more than just a view, but an experience of the awe-inspiring power and serene beauty of nature, hidden deep beneath the Tennessee mountains. Whether you are an adventurer, a nature lover, or just looking for a unique experience, Ruby Falls provides an unforgettable adventure that resonates long after the journey ends.</p>";

				const frontmatter$1 = {"title":"Ruby Falls: an underground waterfall cave experience","description":"An underwater waterfall cave experience","tags":["outdoors"],"pubDate":"2024-04-13","slug":"ruby-falls","layout":"../../../layouts/BlogPostLayout.astro"};
				const file$1 = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/attractions/ruby-falls.md";
				const url$1 = "/chattanooga/attractions/ruby-falls";
				function rawContent$1() {
					return "\nNestled deep within the heart of Lookout Mountain in Chattanooga, Tennessee, Ruby Falls stands as a majestic underground spectacle. This remarkable waterfall is not only one of the tallest and deepest underground waterfalls accessible to the public in the United States, but it also offers a unique adventure for visitors of all ages.\n\nDiscovered in 1928 by Leo Lambert, who named the falls after his wife Ruby, the site has since captivated the imaginations of millions. The journey to the falls begins with an elevator ride that plunges visitors over 260 feet below the surface, where the temperature is a constant, cool 60 degrees Fahrenheit, providing a welcome respite from the Southern heat.\n\nThe path to the waterfall winds through a series of caverns filled with rich geological wonders. Stalactites and stalagmites line the route, and dramatic rock formations create eerie shadows and shapes, illuminated by strategically placed lighting that enhances their natural beauty. The tour guides provide insights into the cave's geology, history, and the various formations, such as \"The Steak,\" \"The Totem Pole,\" and \"The Elephant's Foot,\" making each turn and discovery a learning opportunity.\n\nThe climax of the tour is the stunning view of Ruby Falls itself. Plunging 145 feet, the waterfall cascades down into a small pool, illuminated by a colorful light show that highlights the waterfall’s natural features and the surrounding rock faces. The sight is breathtaking and offers a surreal experience as the sound of the water echoes through the cavern.\n\nRuby Falls also offers various other attractions, including the Lookout Mountain Tower, which provides panoramic views of the Tennessee River Valley, and the ZIPstream aerial adventure, which adds a thrilling aerial perspective of the area's natural beauty.\n\nThe conservation efforts at Ruby Falls are notable. The site uses LED lighting to minimize environmental impact and operates with a focus on sustainability. These efforts ensure the preservation of the cave’s natural state, allowing visitors to enjoy its beauty for generations to come.\n\nVisiting Ruby Falls is a journey not just to a destination but through time and nature. It's an exploration that offers more than just a view, but an experience of the awe-inspiring power and serene beauty of nature, hidden deep beneath the Tennessee mountains. Whether you are an adventurer, a nature lover, or just looking for a unique experience, Ruby Falls provides an unforgettable adventure that resonates long after the journey ends.\n\n";
				}
				function compiledContent$1() {
					return html$1;
				}
				function getHeadings$1() {
					return [];
				}

				const Content$1 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1;
					content.file = file$1;
					content.url = url$1;

					return renderTemplate`${renderComponent(result, 'Layout', $$BlogPostLayout, {
								file: file$1,
								url: url$1,
								content,
								frontmatter: content,
								headings: getHeadings$1(),
								rawContent: rawContent$1,
								compiledContent: compiledContent$1,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html$1)}`
							})}`;
				});

const rubyFalls = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$1,
  compiledContent: compiledContent$1,
  default: Content$1,
  file: file$1,
  frontmatter: frontmatter$1,
  getHeadings: getHeadings$1,
  rawContent: rawContent$1,
  url: url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro("https://thingshappening.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$1;
  const title = "thingshappening";
  const description = "The simplest way to find out about things happening in greater Chattanooga";
  const seoDescription = "The simplest way to find out about things happening";
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./today.md": () => Promise.resolve().then(() => today)}), () => "./*.md");
  const sortedPosts = allPosts.sort((a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf());
  console.log("prob here");
  console.log(Astro2.props);
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": seoDescription })}${renderHead()}</head> <body class="bg-white text-black font-body leading-normal personality-casual"> ${renderComponent($$result, "Nav", $$Nav, {})} <main class="py-12 lg:py-20"> <article class="max-w-6xl mx-auto px-3"> ${renderComponent($$result, "HomeHeader", $$HomeHeader, { "title": title, "description": description })} <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8" data-test="articles-section"> ${sortedPosts.map((p) => renderTemplate`<div class="col-span-1"> ${renderComponent($$result, "Card", $$Card, { "post": p })} </div>`)} </section> </article> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/index.astro", void 0);

const $$file$4 = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/index.astro";
const $$url$4 = "/chattanooga/events";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const html = "";

				const frontmatter = {};
				const file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/today.md";
				const url = "/chattanooga/events/today";
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

const today = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro("https://thingshappening.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "thingshappening";
  const description = "The simplest way to find out about things happening in greater Chattanooga";
  const seoDescription = "The simplest way to find out about things happening";
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./chattanooga/5-mile-hikes-chattanooga.md": () => Promise.resolve().then(() => _5MileHikesChattanooga)}), () => "./chattanooga/*.md");
  const sortedPosts = allPosts.sort((a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf());
  console.log("prob here");
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": seoDescription })}${renderHead()}</head> <body class="bg-white text-black font-body leading-normal personality-casual"> ${renderComponent($$result, "Nav", $$Nav, {})} <main class="py-12 lg:py-20"> <article class="max-w-6xl mx-auto px-3"> ${renderComponent($$result, "HomeHeader", $$HomeHeader, { "title": title, "description": description })} <div class="flex items-center justify-evenly"> <a href="/chattanooga/attractions">Attractions</a> <a href="/chattanooga/events">Events</a> </div> <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8" data-test="articles-section"> ${sortedPosts.map((p) => renderTemplate`<div class="col-span-1"> ${renderComponent($$result, "Card", $$Card, { "post": p })} </div>`)} </section> </article> </main> <!-- <section class="flex space-x-8 justify-center text-xl pt-8 font-bold">
    <a href="/posts" class="mr-8" data-test="see-all-link">
      See All<span class="squiggle">&rarr;</span>
    </a>
  </section> --> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/index.astro", void 0);

const $$file$3 = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/index.astro";
const $$url$3 = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const get = () => rss({
  title: "Astro Theme Creek",
  description: "A Theme for Astro",
  site: "https://thingshappening.com",
  items: /* #__PURE__ */ Object.assign({"./chattanooga/5-mile-hikes-chattanooga.md": () => Promise.resolve().then(() => _5MileHikesChattanooga),"./chattanooga/attractions/ruby-falls.md": () => Promise.resolve().then(() => rubyFalls),"./chattanooga/events/today.md": () => Promise.resolve().then(() => today)})
});

const rss_xml = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://thingshappening.com");
const $$SearchInput = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SearchInput;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script src="https://cdnjs.cloudflare.com/ajax/libs/mark.js/8.11.1/mark.min.js" integrity="sha512-5CYOlHXGh6QpOFA/TeTylKLWfB3ftPsde7AnmhuitiTX4K5SqCLBeKro6sPS8ilsz1Q4NRx3v8Ko2IBiszzdww==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.9/lunr.min.js" integrity="sha512-4xUl/d6D6THrAnXAwGajXkoWaeMNwEKK4iNfq5DotEbLPAfk6FSxSP3ydNxqDgCw1c/0Z1Jg6L8h2j+++9BZmg==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script> ', `<section class="max-w-3xl mx-auto px-3"> <div class="searchBoxContainer"> <input type="text" id="searchBox" class="searchBox w-full px-2 py-1" placeholder="Search..." data-test="search-input"> </div> <!-- Search Results --> <div id="searchResults" class="searchResults lg:pl-8"></div> <!-- Search JS -->  <script client:load>
    document.getElementById('searchBox').focus()
  <\/script> </section>`])), maybeRenderHead());
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/SearchInput.astro", void 0);

const $$Astro$3 = createAstro("https://thingshappening.com");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Search;
  let pageTitle = "Search";
  let pageDescription = "Search all Articles";
  let seoTitle = "Search | thingshappening";
  let seoDescription = "";
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": seoTitle, "description": seoDescription })}${renderHead()}</head> <body class="bg-white text-black font-body leading-normal personality-casual"> ${renderComponent($$result, "Nav", $$Nav, {})} <main class="py-12 lg:py-20"> <article class="max-w-6xl mx-auto px-3" content> ${renderComponent($$result, "HomeHeader", $$HomeHeader, { "title": pageTitle, "description": pageDescription })} ${renderComponent($$result, "SearchInput", $$SearchInput, {})} </article> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/search.astro", void 0);

const $$file$2 = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/search.astro";
const $$url$2 = "/search";

const search = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://thingshappening.com");
const Astro$1 = $$Astro$2;
async function getStaticPaths$1() {
  const allPosts = await Astro$1.glob(/* #__PURE__ */ Object.assign({}), () => "../*.md");
  let tags = new Set(allPosts.flatMap((post) => post.frontmatter.tags));
  tags = Array.from(tags);
  console.log(tags);
  tags = tags.filter((element) => element !== void 0);
  const paths = tags.map((tag) => {
    return {
      params: { tag }
    };
  });
  return paths;
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const filteredPosts = (await Astro2.glob(/* #__PURE__ */ Object.assign({"../chattanooga/5-mile-hikes-chattanooga.md": () => Promise.resolve().then(() => _5MileHikesChattanooga)}), () => "../chattanooga/*.md")).filter((post) => post.frontmatter.tags && post.frontmatter.tags.includes(tag));
  return renderTemplate`<html> <head>${renderHead()}</head> <body> <ul> ${filteredPosts.map((p) => renderTemplate`<div class="col-span-1"> ${renderComponent($$result, "Card", $$Card, { "post": p })} </div>`)} </ul> </body></html>`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/tag/[tag].astro", void 0);

const $$file$1 = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/tag/[tag].astro";
const $$url$1 = "/tag/[tag]";

const _tag_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://thingshappening.com");
const $$Paginator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Paginator;
  const { page } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex space-x-8 justify-center text-xl pt-16 font-bold"> ${page.url.prev && renderTemplate`<a${addAttribute(page.url.prev, "href")} class="mr-8" data-test="paginator-prev"> <span class="squiggle">&larr;</span> Prev
</a>`} ${page.url.next && renderTemplate`<a${addAttribute(page.url.next, "href")} data-test="paginator-next">
Next<span class="squiggle">&rarr;</span> </a>`} </section>`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/Paginator.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://thingshappening.com");
const Astro = $$Astro;
async function getStaticPaths({ paginate }) {
  const allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({"./chattanooga/5-mile-hikes-chattanooga.md": () => Promise.resolve().then(() => _5MileHikesChattanooga)}), () => "./chattanooga/*.md");
  const sortedPosts = allPosts.sort((a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf());
  return paginate(sortedPosts, {
    pageSize: 21
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  let pageTitle = "thingshappening";
  let pageDescription = `s'explique;`;
  let seoTitle = "thingshappening.com";
  let seoDescription = "";
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><!-- hello is it me youre looking for --><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2976969447542443" crossorigin="anonymous"><\/script><meta name="google-adsense-account" content="ca-pub-2976969447542443">', "", '</head> <body class="bg-white text-black font-body leading-normal personality-casual"> ', ' <main class="py-12 lg:py-20"> <article class="max-w-6xl mx-auto px-3"> ', ' <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8" data-test="articles-section"> ', " </section> </article> </main> ", " ", " </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": seoTitle, "description": seoDescription }), renderHead(), renderComponent($$result, "Nav", $$Nav, {}), renderComponent($$result, "HomeHeader", $$HomeHeader, { "title": pageTitle, "description": pageDescription }), page.data.map((p) => renderTemplate`<div class="col-span-1"> ${renderComponent($$result, "Card", $$Card, { "post": p })} </div>`), renderComponent($$result, "Paginator", $$Paginator, { "page": page }), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/[...page].astro", void 0);

const $$file = "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/[...page].astro";
const $$url = "/[...page]";

const ____page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _404 as _, _5MileHikesChattanooga as a, index$1 as b, index as c, rss_xml as d, _tag_ as e, ____page_ as f, index$2 as i, rubyFalls as r, search as s, today as t };
