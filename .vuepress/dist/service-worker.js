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
    "revision": "c33034fae9a956f1586ea1dc51cde1b2"
  },
  {
    "url": "app.png",
    "revision": "daf2b980da9988091a28e0e300ba604c"
  },
  {
    "url": "assets/css/0.styles.f019790a.css",
    "revision": "5a4df30ba26765b03e79a380f796ff97"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3b0cea6b.js",
    "revision": "7db94ef742e10d2047372eca12f0e09d"
  },
  {
    "url": "assets/js/11.7bf3b7d8.js",
    "revision": "c499f3b987e346502e59bb71f8b59fff"
  },
  {
    "url": "assets/js/12.a5cc70d0.js",
    "revision": "384f4847eb04a51cdac6bedf62010e39"
  },
  {
    "url": "assets/js/13.976ede78.js",
    "revision": "a717ce45ba415d22388063eb2ac0f109"
  },
  {
    "url": "assets/js/14.d605463d.js",
    "revision": "6294be04dfa4743ab5efbc81515d4720"
  },
  {
    "url": "assets/js/15.60aef1c3.js",
    "revision": "b822ebd80f329e58d6c155fed3f0de8e"
  },
  {
    "url": "assets/js/16.501cc97a.js",
    "revision": "a788190479952dc749cd1497101b430a"
  },
  {
    "url": "assets/js/2.82ac1a7a.js",
    "revision": "b30b6965aa4e35d014e3f71d30c535a3"
  },
  {
    "url": "assets/js/3.e7824d3c.js",
    "revision": "2bb6e6df0754abc9e73b6b122f565611"
  },
  {
    "url": "assets/js/4.5e4465c6.js",
    "revision": "b87fe4a217261b00b2ab985e3d0c9196"
  },
  {
    "url": "assets/js/5.10e5a2f7.js",
    "revision": "94f98832a2021c82859bc44cf1960bfb"
  },
  {
    "url": "assets/js/6.e13555a6.js",
    "revision": "20ac8c8c4614525d32683579dc2e2141"
  },
  {
    "url": "assets/js/7.16c7ae1d.js",
    "revision": "e76bdf174f3be5925faa0c5f7b990c69"
  },
  {
    "url": "assets/js/8.a3006d13.js",
    "revision": "be44bf044a51cc2a22add63e4f106531"
  },
  {
    "url": "assets/js/9.6fb8dcea.js",
    "revision": "430a98c851d77eda4d1a745b7ee85eed"
  },
  {
    "url": "assets/js/app.554ab09b.js",
    "revision": "d97c9f95b6e96c7c0a828aee5240ed78"
  },
  {
    "url": "docs/guide/index.html",
    "revision": "fd402f7171bfaddd825ee2d8aea3783c"
  },
  {
    "url": "docs/markdown/Emoji表情包.html",
    "revision": "e4012fb66575b669e22c86aa27fb2b50"
  },
  {
    "url": "docs/markdown/index.html",
    "revision": "d7114f4fc78345949abbfa9e30efa852"
  },
  {
    "url": "docs/svn/index.html",
    "revision": "357948420f7f2e736e01900770362120"
  },
  {
    "url": "docs/vue/index.html",
    "revision": "bc1939b00ca89e1a5d8cfb14b21cf0b2"
  },
  {
    "url": "docs/vue/vuex/index.html",
    "revision": "faa6c29918e3d7331c19baa7651e0f60"
  },
  {
    "url": "docs/vue/vue项目调试.html",
    "revision": "1d686a9e8d468c367541d700ff531b5e"
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
    "revision": "f6dda69397c8d44fe2d60b69fa2c52bf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
    const replyPort = event.ports[0]
    const message = event.data
    if (replyPort && message && message.type === 'skip-waiting') {
      event.waitUntil(
        self.skipWaiting().then(
          () => replyPort.postMessage({ error: null }),
          error => replyPort.postMessage({ error })
        )
      )
    }
  })