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
    "url": "webpack-runtime-e2218000b81d2c08453a.js"
  },
  {
    "url": "app-4ef8f440bce3337aacb4.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-32c78b429e55eede23f2.js"
  },
  {
    "url": "index.html",
    "revision": "42e1261d31d9b5af06c999c9d9f310f1"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "29bb5257a0ab3a2edbb53dc64e605b00"
  },
  {
    "url": "2.050f02fd5e58f4d8c4df.css"
  },
  {
    "url": "component---src-pages-index-jsx.628c23ccc49648caff63.css"
  },
  {
    "url": "component---src-pages-index-jsx-b1dca24a4f2a5ef8cb34.js"
  },
  {
    "url": "1-8a49c018ebb291017bdc.js"
  },
  {
    "url": "0-a34630dc12cf6fcde089.js"
  },
  {
    "url": "3-d37e4e80299005025071.js"
  },
  {
    "url": "2-3f4f7b066564d5b2d739.js"
  },
  {
    "url": "static/d/613/path---index-6a9-c2q98fKsp2N6EDNWlnpTHeTLVQ.json",
    "revision": "7ec6e5b414307982169b89e7b7100969"
  },
  {
    "url": "component---src-pages-404-jsx-5690a924c2bab2948b21.js"
  },
  {
    "url": "static/d/400/path---404-html-516-62a-cKg45i9OKiBbMHWFlxAkntPiPA.json",
    "revision": "4cb438192cee6a9f86c52d03f713537e"
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