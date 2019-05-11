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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "36a510e931f5a68e2b5719368b702760"
  },
  {
    "url": "app.png",
    "revision": "daf2b980da9988091a28e0e300ba604c"
  },
  {
    "url": "assets/css/0.styles.a1803f11.css",
    "revision": "d57bd4134ee2c7e2e82f3ae2a8d65946"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ced00c4c.js",
    "revision": "2fc775f3285cb6a0bd39615c47e774c5"
  },
  {
    "url": "assets/js/11.363abfbd.js",
    "revision": "a3e832246d1ec0280b32325a328884c8"
  },
  {
    "url": "assets/js/12.c52317aa.js",
    "revision": "1dc87dcb2ad71540da579a8ac8d28ff0"
  },
  {
    "url": "assets/js/13.fa205801.js",
    "revision": "f3d25f07ec33ea3655d0a3a3418e31d4"
  },
  {
    "url": "assets/js/14.dbc0d4a9.js",
    "revision": "a69cd4879438e66eb3a433226d6df8e1"
  },
  {
    "url": "assets/js/15.007e57dd.js",
    "revision": "5ea0890d474d000af881bdf676485cd4"
  },
  {
    "url": "assets/js/2.8586269a.js",
    "revision": "eb6e75c9b6fbe4e96cf456094d02bcb1"
  },
  {
    "url": "assets/js/3.c3badb97.js",
    "revision": "fb163a65da2ae1916a8d77ab5727253d"
  },
  {
    "url": "assets/js/4.94e1b0ec.js",
    "revision": "91acf64b133c8328ee6cd22ceb2a80dc"
  },
  {
    "url": "assets/js/5.0589bc8b.js",
    "revision": "c80f99461da2f3d3e19c644008dc6d4c"
  },
  {
    "url": "assets/js/6.b75eceef.js",
    "revision": "3939bf25fe11f1dc24415d7a7212cc46"
  },
  {
    "url": "assets/js/7.5e60c4e6.js",
    "revision": "eb27f4c1411df6686957500cb15f659d"
  },
  {
    "url": "assets/js/8.29160b16.js",
    "revision": "8e606e77951c3a9ca85e2077b027de3b"
  },
  {
    "url": "assets/js/9.aad9bbe8.js",
    "revision": "f77036d2bdb663fc980e76956af0d160"
  },
  {
    "url": "assets/js/app.31fe4097.js",
    "revision": "d179cd5650285476b688b474607ff12d"
  },
  {
    "url": "docs/guide/index.html",
    "revision": "258c86436a6dd1bb4446030cf6b8953d"
  },
  {
    "url": "docs/markdown/Emoji表情包.html",
    "revision": "945272c6317cac1b82b0494abdf228aa"
  },
  {
    "url": "docs/markdown/index.html",
    "revision": "319b13cb0375e18df3652e25f7d66e08"
  },
  {
    "url": "docs/svn/index.html",
    "revision": "b6265b42c35ed5ff635db96cc759be17"
  },
  {
    "url": "docs/vue/index.html",
    "revision": "b9fad9d1b48dea17ba613d6bfb79fae3"
  },
  {
    "url": "docs/vue/vuex/index.html",
    "revision": "7145b125c61c736dfee94293c15828bd"
  },
  {
    "url": "docs/vue/vue项目调试.html",
    "revision": "480410842b60eba7bbc7eda5de3f0eda"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "003a4f323ce077c0eb1c57a769d81b04"
  },
  {
    "url": "icons/hbb/apple-launch-1242x2208.png",
    "revision": "63811de6896615b9a6f77127b2751414"
  },
  {
    "url": "icons/hbb/apple-launch-1536x2048.png",
    "revision": "0f20220907814fe2582bd56855b03a07"
  },
  {
    "url": "icons/hbb/apple-launch-640x1136.png",
    "revision": "78b050616d3b55131a7c2cd4196792a4"
  },
  {
    "url": "icons/hbb/apple-launch-750x1334.png",
    "revision": "f33a4c448368585e5887b8a70e18b803"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "160ca24b75d22ece99e69b13b9bc251d"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "114a9280acf551005fb2de5800725c56"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "f260f2e03536b1853e763b97ce78f998"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "428df90a089b949e37694e985ca2ff47"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "da14bbf9df09a0e7aca7af0f1d1abb95"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "93917ce5dda3d75f02bc69d1c24b7faa"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "53eec6536bef9b49242c3873f0c19612"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "c7c8c480bec2dfd47b8ce4f1aaf9f275"
  },
  {
    "url": "icons/touch-bar.svg",
    "revision": "c4279f77fbbde00f515a9542868dba4d"
  },
  {
    "url": "index.html",
    "revision": "80c7585817dab339b529862009dff61a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
workbox.core.skipWaiting();
workbox.core.clientsClaim();
