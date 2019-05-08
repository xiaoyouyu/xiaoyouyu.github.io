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
    "revision": "9614a02ff513db2807ad200c9ef96a36"
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
    "url": "assets/js/10.d5a5942e.js",
    "revision": "4aff73e10f41f65f7f0ddc8e26b99d4d"
  },
  {
    "url": "assets/js/11.e93052ce.js",
    "revision": "c499f3b987e346502e59bb71f8b59fff"
  },
  {
    "url": "assets/js/12.888dcfaf.js",
    "revision": "23babe58cf72da8608bceb055a93e889"
  },
  {
    "url": "assets/js/13.8d891f25.js",
    "revision": "a717ce45ba415d22388063eb2ac0f109"
  },
  {
    "url": "assets/js/14.e47b6ca1.js",
    "revision": "25c85a173bc1c833fd3bc2981f94c08c"
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
    "url": "assets/js/8.bfb5acc5.js",
    "revision": "ab63d662e29f64db0283400f69138a65"
  },
  {
    "url": "assets/js/9.72277f3f.js",
    "revision": "a5047bb645b6f25bc044f95409110d5a"
  },
  {
    "url": "assets/js/app.9df54915.js",
    "revision": "94b93490450cc095539e19af4cf31edc"
  },
  {
    "url": "docs/guide/index.html",
    "revision": "e6a7c05301dd010398ebaa1b769072f9"
  },
  {
    "url": "docs/markdown/Emoji表情包.html",
    "revision": "70e6c7ccad2dcf4c33b235efeb05acc7"
  },
  {
    "url": "docs/markdown/index.html",
    "revision": "2319a80f133c237584f20178a1b6b2cf"
  },
  {
    "url": "docs/svn/index.html",
    "revision": "db2de0ecac6b25804bf9b72759bdbdd4"
  },
  {
    "url": "docs/vue/index.html",
    "revision": "89c253d991edcdde0b8cbf01c7884e2a"
  },
  {
    "url": "docs/vue/vuex/index.html",
    "revision": "dfdc58d6bf6bcfe7945ede4414a74349"
  },
  {
    "url": "docs/vue/vue项目调试.html",
    "revision": "3c6477116c6f74504afe028d136b2c56"
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
    "revision": "989bdd6e0a5f27747faffaaca66edd34"
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
