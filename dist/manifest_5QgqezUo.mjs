import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_WOcrr5Aa.mjs';
import 'clsx';
import 'cssesc';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"file:///Users/jack.burum/portfolio-of-small-bets/things_happening/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/jack.burum/portfolio-of-small-bets/things_happening/dist/chattanooga/5-mile-hikes-chattanooga/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/chattanooga/5-mile-hikes-chattanooga","isIndex":false,"type":"page","pattern":"^\\/chattanooga\\/5-mile-hikes-chattanooga\\/?$","segments":[[{"content":"chattanooga","dynamic":false,"spread":false}],[{"content":"5-mile-hikes-chattanooga","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/chattanooga/5-mile-hikes-chattanooga.md","pathname":"/chattanooga/5-mile-hikes-chattanooga","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/jack.burum/portfolio-of-small-bets/things_happening/dist/chattanooga/attractions/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/chattanooga/attractions","isIndex":true,"type":"page","pattern":"^\\/chattanooga\\/attractions\\/?$","segments":[[{"content":"chattanooga","dynamic":false,"spread":false}],[{"content":"attractions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/chattanooga/attractions/index.astro","pathname":"/chattanooga/attractions","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/jack.burum/portfolio-of-small-bets/things_happening/dist/chattanooga/attractions/ruby-falls/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/chattanooga/attractions/ruby-falls","isIndex":false,"type":"page","pattern":"^\\/chattanooga\\/attractions\\/ruby-falls\\/?$","segments":[[{"content":"chattanooga","dynamic":false,"spread":false}],[{"content":"attractions","dynamic":false,"spread":false}],[{"content":"ruby-falls","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/chattanooga/attractions/ruby-falls.md","pathname":"/chattanooga/attractions/ruby-falls","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/jack.burum/portfolio-of-small-bets/things_happening/dist/chattanooga/events/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/chattanooga/events","isIndex":true,"type":"page","pattern":"^\\/chattanooga\\/events\\/?$","segments":[[{"content":"chattanooga","dynamic":false,"spread":false}],[{"content":"events","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/chattanooga/events/index.astro","pathname":"/chattanooga/events","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/jack.burum/portfolio-of-small-bets/things_happening/dist/chattanooga/events/today/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/chattanooga/events/today","isIndex":false,"type":"page","pattern":"^\\/chattanooga\\/events\\/today\\/?$","segments":[[{"content":"chattanooga","dynamic":false,"spread":false}],[{"content":"events","dynamic":false,"spread":false}],[{"content":"today","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/chattanooga/events/today.md","pathname":"/chattanooga/events/today","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/jack.burum/portfolio-of-small-bets/things_happening/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/jack.burum/portfolio-of-small-bets/things_happening/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/jack.burum/portfolio-of-small-bets/things_happening/dist/search/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/search","isIndex":false,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://thingshappening.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/5-mile-hikes-chattanooga.md",{"propagation":"none","containsHead":true}],["/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/[...page].astro",{"propagation":"none","containsHead":true}],["/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/rss.xml.js",{"propagation":"none","containsHead":true}],["/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/tag/[tag].astro",{"propagation":"none","containsHead":true}],["/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/attractions/ruby-falls.md",{"propagation":"none","containsHead":true}],["/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/attractions/index.astro",{"propagation":"none","containsHead":true}],["/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/chattanooga/events/index.astro",{"propagation":"none","containsHead":true}],["/Users/jack.burum/portfolio-of-small-bets/things_happening/src/pages/search.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/chattanooga/5-mile-hikes-chattanooga@_@md":"pages/chattanooga/5-mile-hikes-chattanooga.astro.mjs","\u0000@astro-page:src/pages/chattanooga/attractions/index@_@astro":"pages/chattanooga/attractions.astro.mjs","\u0000@astro-page:src/pages/chattanooga/attractions/ruby-falls@_@md":"pages/chattanooga/attractions/ruby-falls.astro.mjs","\u0000@astro-page:src/pages/chattanooga/events/index@_@astro":"pages/chattanooga/events.astro.mjs","\u0000@astro-page:src/pages/chattanooga/events/today@_@md":"pages/chattanooga/events/today.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/search@_@astro":"pages/search.astro.mjs","\u0000@astro-page:src/pages/tag/[tag]@_@astro":"pages/tag/_tag_.astro.mjs","\u0000@astro-page:src/pages/[...page]@_@astro":"pages/_---page_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_5QgqezUo.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.7We8B_Qi.js","/astro/hoisted.js?q=3":"_astro/hoisted.tlrkCr7x.js","/astro/hoisted.js?q=0":"_astro/hoisted.199W-q54.js","/astro/hoisted.js?q=2":"_astro/hoisted.oiOwzI7I.js","astro:scripts/before-hydration.js":""},"assets":["/file:///Users/jack.burum/portfolio-of-small-bets/things_happening/dist/404.html","/file:///Users/jack.burum/portfolio-of-small-bets/things_happening/dist/chattanooga/5-mile-hikes-chattanooga/index.html","/file:///Users/jack.burum/portfolio-of-small-bets/things_happening/dist/chattanooga/attractions/index.html","/file:///Users/jack.burum/portfolio-of-small-bets/things_happening/dist/chattanooga/attractions/ruby-falls/index.html","/file:///Users/jack.burum/portfolio-of-small-bets/things_happening/dist/chattanooga/events/index.html","/file:///Users/jack.burum/portfolio-of-small-bets/things_happening/dist/chattanooga/events/today/index.html","/file:///Users/jack.burum/portfolio-of-small-bets/things_happening/dist/index.html","/file:///Users/jack.burum/portfolio-of-small-bets/things_happening/dist/rss.xml","/file:///Users/jack.burum/portfolio-of-small-bets/things_happening/dist/search/index.html"],"buildFormat":"directory"});

export { manifest };
