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
    "revision": "2168433a2c144e6f903386d0f365741a"
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
    "url": "assets/js/10.bece0766.js",
    "revision": "5d2601192e3b08fc80a20e9881bbf1f1"
  },
  {
    "url": "assets/js/11.2c080318.js",
    "revision": "ba094d80558a33feeac1dd63bf564cab"
  },
  {
    "url": "assets/js/12.09370c9b.js",
    "revision": "f110ce09780965c2f99e92f846880985"
  },
  {
    "url": "assets/js/13.d3f63afe.js",
    "revision": "a717ce45ba415d22388063eb2ac0f109"
  },
  {
    "url": "assets/js/14.9d67f889.js",
    "revision": "b5b4e7580742e87126b6f2cbd54e41a7"
  },
  {
    "url": "assets/js/15.db4ed87b.js",
    "revision": "0b514875029a076f254c78301900fd63"
  },
  {
    "url": "assets/js/16.501cc97a.js",
    "revision": "a788190479952dc749cd1497101b430a"
  },
  {
    "url": "assets/js/2.a9a68986.js",
    "revision": "b30b6965aa4e35d014e3f71d30c535a3"
  },
  {
    "url": "assets/js/3.856021c4.js",
    "revision": "2bb6e6df0754abc9e73b6b122f565611"
  },
  {
    "url": "assets/js/4.ee492fcf.js",
    "revision": "b87fe4a217261b00b2ab985e3d0c9196"
  },
  {
    "url": "assets/js/5.4f972972.js",
    "revision": "25c34fc4aa777ad998ecddf31d442cd7"
  },
  {
    "url": "assets/js/6.e13555a6.js",
    "revision": "20ac8c8c4614525d32683579dc2e2141"
  },
  {
    "url": "assets/js/7.d61ee445.js",
    "revision": "e76bdf174f3be5925faa0c5f7b990c69"
  },
  {
    "url": "assets/js/8.f13536ac.js",
    "revision": "ab63d662e29f64db0283400f69138a65"
  },
  {
    "url": "assets/js/9.07ac8277.js",
    "revision": "457cd98d04cddd1928eb8e71f9aaade2"
  },
  {
    "url": "assets/js/app.7f46df11.js",
    "revision": "ec8d075c2ecfb76fc6cfba8cfaf77982"
  },
  {
    "url": "docs/guide/index.html",
    "revision": "3da78f77ab8fd50d17f4d6f714fab63c"
  },
  {
    "url": "docs/markdown/Emoji表情包.html",
    "revision": "c7bea1411c040e42c0c583ed4da4c26e"
  },
  {
    "url": "docs/markdown/index.html",
    "revision": "ea8c32a00087eb20509ef524180601d0"
  },
  {
    "url": "docs/svn/index.html",
    "revision": "5eb4a8a972e16ba3151f3ebdeffca494"
  },
  {
    "url": "docs/vue/index.html",
    "revision": "5cb80be86d3dd80b86cc27093106e1b6"
  },
  {
    "url": "docs/vue/vuex/index.html",
    "revision": "7afb95b2185f5160b727d377d8a3bacf"
  },
  {
    "url": "docs/vue/vue项目调试.html",
    "revision": "6ec9a19460a9591b423e0c57824cff8b"
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
    "revision": "5b47a6a35a02e119d81ab82619967181"
  },
  {
    "url": "sw-register.js",
    "revision": "b42a87b876c4cf27577ba18a15a04572"
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
