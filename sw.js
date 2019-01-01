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
    "url": "webpack-runtime-7822fc9608aa3bb9d4fb.js"
  },
  {
    "url": "app-3a9a47a9963c1d830043.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-443b65c3f0ee85da1c77.js"
  },
  {
    "url": "index.html",
    "revision": "7fb6d04e7750d4ec9d5ac350df3395d1"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "9e99a0754688b8e9d20308ab4b02bc29"
  },
  {
    "url": "2.050f02fd5e58f4d8c4df.css"
  },
  {
    "url": "component---src-pages-index-jsx.628c23ccc49648caff63.css"
  },
  {
    "url": "component---src-pages-index-jsx-cfd479c297e8ebf7cb3a.js"
  },
  {
    "url": "1-43bd27bcf21634819c7a.js"
  },
  {
    "url": "0-37cb7dd8a56a76295927.js"
  },
  {
    "url": "3-d36d737a85fd4081c146.js"
  },
  {
    "url": "2-f96fcadbc176b12ed2cc.js"
  },
  {
    "url": "static/d/800/path---index-6a9-8Z5qsw55rThCUF3ZHtxfRfIsKHU.json",
    "revision": "5bbee1a3c534d3abfed7d33ec2b40dd0"
  },
  {
    "url": "component---src-pages-404-jsx-402c2cb042d9133c440d.js"
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