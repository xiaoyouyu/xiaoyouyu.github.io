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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ff4f6d3a0803bf63cb724536be23651a"
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
    "url": "assets/js/10.695b729a.js",
    "revision": "7db94ef742e10d2047372eca12f0e09d"
  },
  {
    "url": "assets/js/11.b97cd90c.js",
    "revision": "e8257eb6c234466a399b8a663e785365"
  },
  {
    "url": "assets/js/12.5eadcb44.js",
    "revision": "d46aad511a3df8b753141b1a64a3f2d6"
  },
  {
    "url": "assets/js/13.999e8bbf.js",
    "revision": "7c1b59e78129d2cfabff9dc0442b6cf6"
  },
  {
    "url": "assets/js/14.9e592b66.js",
    "revision": "4c7f7d78ccfa39a6dd35aeb93b0bfa13"
  },
  {
    "url": "assets/js/15.7a157c78.js",
    "revision": "b822ebd80f329e58d6c155fed3f0de8e"
  },
  {
    "url": "assets/js/16.501cc97a.js",
    "revision": "a788190479952dc749cd1497101b430a"
  },
  {
    "url": "assets/js/2.67adf6fa.js",
    "revision": "b30b6965aa4e35d014e3f71d30c535a3"
  },
  {
    "url": "assets/js/3.c98e1996.js",
    "revision": "2bb6e6df0754abc9e73b6b122f565611"
  },
  {
    "url": "assets/js/4.32511c13.js",
    "revision": "b87fe4a217261b00b2ab985e3d0c9196"
  },
  {
    "url": "assets/js/5.d8048fa3.js",
    "revision": "25c34fc4aa777ad998ecddf31d442cd7"
  },
  {
    "url": "assets/js/6.e13555a6.js",
    "revision": "20ac8c8c4614525d32683579dc2e2141"
  },
  {
    "url": "assets/js/7.99d30589.js",
    "revision": "e76bdf174f3be5925faa0c5f7b990c69"
  },
  {
    "url": "assets/js/8.69743046.js",
    "revision": "be44bf044a51cc2a22add63e4f106531"
  },
  {
    "url": "assets/js/9.8119a5b7.js",
    "revision": "6cff094d91807ee49fdde6a4edf0f5cf"
  },
  {
    "url": "assets/js/app.200f72b3.js",
    "revision": "e01437139784dc93a3bf5bffb42bdc6a"
  },
  {
    "url": "docs/guide/index.html",
    "revision": "cc8507e108256f7279af6a073afdcfc5"
  },
  {
    "url": "docs/markdown/Emoji表情包.html",
    "revision": "6320ad4b67f763af7868ee9bc04c6200"
  },
  {
    "url": "docs/markdown/index.html",
    "revision": "1ea68b27f076dcdbed02dbd42a12dc63"
  },
  {
    "url": "docs/svn/index.html",
    "revision": "88bff69c035f3b1ba6cc687be863ffcc"
  },
  {
    "url": "docs/vue/index.html",
    "revision": "15e0f90cd43e88adfddd3ac699d3444b"
  },
  {
    "url": "docs/vue/vuex/index.html",
    "revision": "7e39b540359ce3bab405a5dbc09d6959"
  },
  {
    "url": "docs/vue/vue项目调试.html",
    "revision": "f80f6f919bf589ec64bc470f2e0f139d"
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
    "revision": "d9731cd635102e6ec6e073071f00ff67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
