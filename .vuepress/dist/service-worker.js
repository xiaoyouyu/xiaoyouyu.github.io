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
    "revision": "a2b8a7ae730714c47f5327817d180e6d"
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
    "url": "assets/js/11.0ede2576.js",
    "revision": "d69b842ddff61ab6c9f73daaab7b8139"
  },
  {
    "url": "assets/js/12.5eadcb44.js",
    "revision": "d46aad511a3df8b753141b1a64a3f2d6"
  },
  {
    "url": "assets/js/13.c886a001.js",
    "revision": "8da536ad08f1bf2b81fd942d620b9ba3"
  },
  {
    "url": "assets/js/14.bf9f72b8.js",
    "revision": "b5b4e7580742e87126b6f2cbd54e41a7"
  },
  {
    "url": "assets/js/15.acde0a73.js",
    "revision": "5a3f7bd6542053a0e4317406bdc7297a"
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
    "url": "assets/js/9.40122979.js",
    "revision": "457cd98d04cddd1928eb8e71f9aaade2"
  },
  {
    "url": "assets/js/app.5c0eb675.js",
    "revision": "d9afcb4de28db3595846fb3ba74762b7"
  },
  {
    "url": "docs/guide/index.html",
    "revision": "f10912da0e5bae15b2fc6b361f9cdf0a"
  },
  {
    "url": "docs/markdown/Emoji表情包.html",
    "revision": "72ea8e4af1d025c4ff776f09103d04cc"
  },
  {
    "url": "docs/markdown/index.html",
    "revision": "67230ffb815817f1716b52d997e56b64"
  },
  {
    "url": "docs/svn/index.html",
    "revision": "b0dac3257dd2ca1251dc7240286e7a0b"
  },
  {
    "url": "docs/vue/index.html",
    "revision": "19b80ff3d9b7be2c102ab659338edfe4"
  },
  {
    "url": "docs/vue/vuex/index.html",
    "revision": "579a88b8cd3dbfcb61e086f5f5867e59"
  },
  {
    "url": "docs/vue/vue项目调试.html",
    "revision": "22c53c4193e1981e37356d9001d8116f"
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
    "revision": "f3b4f426abb905cd0189ffaf3069427d"
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
