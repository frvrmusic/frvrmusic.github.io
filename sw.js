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
    "url": "webpack-runtime-31a4a2c2d734ef252eba.js"
  },
  {
    "url": "app-e3f11b4aafe87b38fb08.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-e0e3e622c0592ce4c41d.js"
  },
  {
    "url": "index.html",
    "revision": "f70cb3fd2e3c3c372ec5a6e13f61067f"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a6a9bfc4138ac266f07ed306ba923bfa"
  },
  {
    "url": "2.050f02fd5e58f4d8c4df.css"
  },
  {
    "url": "component---src-pages-index-jsx.628c23ccc49648caff63.css"
  },
  {
    "url": "component---src-pages-index-jsx-e15e444215dd7735d9a9.js"
  },
  {
    "url": "1-315c938fd737008cfb86.js"
  },
  {
    "url": "0-3b62620d26c90404f0ac.js"
  },
  {
    "url": "3-24ef9dd78206ed46a305.js"
  },
  {
    "url": "2-a5635921d8af11c95279.js"
  },
  {
    "url": "static/d/818/path---index-6a9-3z8kEgJYvNAEuCsn8BGXM9ipuNI.json",
    "revision": "520e9a58eb0b7960dec403a5e1b3522b"
  },
  {
    "url": "component---src-pages-404-jsx-e134b5cd553dbe9e7fd4.js"
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