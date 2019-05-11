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
    "revision": "2363d3b452f1b7e0854f5cd99038e09d"
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
    "url": "assets/js/10.ec64b873.js",
    "revision": "353c1f8a7ae11b9489282bb259e0eead"
  },
  {
    "url": "assets/js/11.23aa0059.js",
    "revision": "252b0f9f1530707106057386dcff8439"
  },
  {
    "url": "assets/js/12.e5890adb.js",
    "revision": "664e9ac64f2f8721e628830886dc6405"
  },
  {
    "url": "assets/js/13.6b36ed81.js",
    "revision": "4da4058554430f74a41b2da7f2544cb8"
  },
  {
    "url": "assets/js/14.6760c216.js",
    "revision": "c938afc1ee83f98c6ad37a7ee1a1f026"
  },
  {
    "url": "assets/js/15.007e57dd.js",
    "revision": "5ea0890d474d000af881bdf676485cd4"
  },
  {
    "url": "assets/js/2.758407b3.js",
    "revision": "eb6e75c9b6fbe4e96cf456094d02bcb1"
  },
  {
    "url": "assets/js/3.916bc5db.js",
    "revision": "fb163a65da2ae1916a8d77ab5727253d"
  },
  {
    "url": "assets/js/4.56e2bd05.js",
    "revision": "91acf64b133c8328ee6cd22ceb2a80dc"
  },
  {
    "url": "assets/js/5.0589bc8b.js",
    "revision": "c80f99461da2f3d3e19c644008dc6d4c"
  },
  {
    "url": "assets/js/6.ab1b8e7b.js",
    "revision": "3939bf25fe11f1dc24415d7a7212cc46"
  },
  {
    "url": "assets/js/7.83495368.js",
    "revision": "fb656d11c284403ca8a6fe25d61d5043"
  },
  {
    "url": "assets/js/8.a340e389.js",
    "revision": "22197f28c690df383439a154b68a9b28"
  },
  {
    "url": "assets/js/9.a4616b6a.js",
    "revision": "039d35cb23c79e759e4c2b300b63eaa1"
  },
  {
    "url": "assets/js/app.f2ebcd47.js",
    "revision": "e45860bbc54962a0962a091a8dea9f0a"
  },
  {
    "url": "docs/guide/index.html",
    "revision": "3dd801605c9ce53fb52908465d35f549"
  },
  {
    "url": "docs/markdown/Emoji表情包.html",
    "revision": "99f7cb9d5096ab83603c485f047bdb37"
  },
  {
    "url": "docs/markdown/index.html",
    "revision": "3cc88ef2194f567650e62f34c66ee41a"
  },
  {
    "url": "docs/svn/index.html",
    "revision": "595f95082dbe5b32c035f9e9a319469c"
  },
  {
    "url": "docs/vue/index.html",
    "revision": "3fabd763c0f1ec07c9991084d4e748fc"
  },
  {
    "url": "docs/vue/vuex/index.html",
    "revision": "9d2bf67df8257b2668ce9d2ebdfa03c0"
  },
  {
    "url": "docs/vue/vue项目调试.html",
    "revision": "45617966e13c3239292d7817d0a4b719"
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
    "revision": "b92948c4a935bece0a606c7e23fb498f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();
workbox.core.skipWaiting();
workbox.core.clientsClaim();
self.addEventListener('activate', function (event) {
    send_message_to_all_clients("sw.update");
});
//sw发送信息给页面
function send_message_to_all_clients(msg) {
    clients.matchAll().then(clients => {
        clients.forEach(client => {
            return new Promise(function (resolve, reject) {
                var msg_chan = new MessageChannel();
                msg_chan.port1.onmessage = function (event) {
                    if (event.data.error) {
                        reject(event.data.error);
                    } else {
                        resolve(event.data);
                    }
                };
                client.postMessage(msg, [msg_chan.port2]);
            });
        })
    })
}