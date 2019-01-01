/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-141dae35e7ce5cc06a92.js"
  },
  {
    "url": "app-125861c3df7602cd48ab.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-443b65c3f0ee85da1c77.js"
  },
  {
    "url": "index.html",
    "revision": "d8b5353ce511fcaab48e2c1c6b8942cc"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "45b7ad1407edc9175c4c6bb32398c4ae"
  },
  {
    "url": "2.050f02fd5e58f4d8c4df.css"
  },
  {
    "url": "component---src-pages-index-jsx.628c23ccc49648caff63.css"
  },
  {
    "url": "component---src-pages-index-jsx-839e5e37743f7ef2ba47.js"
  },
  {
    "url": "1-8ed7e95b502d48aed139.js"
  },
  {
    "url": "0-c2e286bd97f85a63b6a9.js"
  },
  {
    "url": "3-777fab93336d22779fd0.js"
  },
  {
    "url": "2-5ff705c37abd03924653.js"
  },
  {
    "url": "static/d/800/path---index-6a9-8Z5qsw55rThCUF3ZHtxfRfIsKHU.json",
    "revision": "5bbee1a3c534d3abfed7d33ec2b40dd0"
  },
  {
    "url": "component---src-pages-404-jsx-523e71573a3a6bd131e9.js"
  },
  {
    "url": "static/d/155/path---404-html-516-62a-efKwbHkjHJ6kPfDzpz1W1Gvb4.json",
    "revision": "8abf907b276dfbde7f4a22c9fad5ec0f"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});