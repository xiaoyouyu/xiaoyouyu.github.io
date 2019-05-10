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
self.__precacheManifest = [{
        "url": "404.html",
        "revision": "feee289ea93f0af72099b7b1d1225809"
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
        "url": "assets/js/10.d9a4fad3.js",
        "revision": "4aff73e10f41f65f7f0ddc8e26b99d4d"
    },
    {
        "url": "assets/js/11.fcfc7b87.js",
        "revision": "c499f3b987e346502e59bb71f8b59fff"
    },
    {
        "url": "assets/js/12.64ee7392.js",
        "revision": "23babe58cf72da8608bceb055a93e889"
    },
    {
        "url": "assets/js/13.0597c5b3.js",
        "revision": "f2d468a5287d238d54db5700b0fae380"
    },
    {
        "url": "assets/js/14.df62b8b9.js",
        "revision": "067efd4c6bcbedde669dea4ecb512692"
    },
    {
        "url": "assets/js/15.cc417beb.js",
        "revision": "b822ebd80f329e58d6c155fed3f0de8e"
    },
    {
        "url": "assets/js/16.501cc97a.js",
        "revision": "a788190479952dc749cd1497101b430a"
    },
    {
        "url": "assets/js/2.018a5dde.js",
        "revision": "b30b6965aa4e35d014e3f71d30c535a3"
    },
    {
        "url": "assets/js/3.d7ba7ae5.js",
        "revision": "2bb6e6df0754abc9e73b6b122f565611"
    },
    {
        "url": "assets/js/4.2888c40e.js",
        "revision": "b87fe4a217261b00b2ab985e3d0c9196"
    },
    {
        "url": "assets/js/5.185e3bb3.js",
        "revision": "25c34fc4aa777ad998ecddf31d442cd7"
    },
    {
        "url": "assets/js/6.e13555a6.js",
        "revision": "20ac8c8c4614525d32683579dc2e2141"
    },
    {
        "url": "assets/js/7.3b395757.js",
        "revision": "e76bdf174f3be5925faa0c5f7b990c69"
    },
    {
        "url": "assets/js/8.e885b432.js",
        "revision": "ab63d662e29f64db0283400f69138a65"
    },
    {
        "url": "assets/js/9.c0a89d18.js",
        "revision": "457cd98d04cddd1928eb8e71f9aaade2"
    },
    {
        "url": "assets/js/app.b210c6bb.js",
        "revision": "abbbed044fe175b973b6e2dde92df659"
    },
    {
        "url": "docs/guide/index.html",
        "revision": "c89cc4b8f919cbe759df5b691e2d9364"
    },
    {
        "url": "docs/markdown/Emoji表情包.html",
        "revision": "7cde7e4a632db077cecc429fef58c836"
    },
    {
        "url": "docs/markdown/index.html",
        "revision": "58b9a141613afb1c5d6c94650cdc2fcd"
    },
    {
        "url": "docs/svn/index.html",
        "revision": "583a1ade7355b9dbe00006b49145f23f"
    },
    {
        "url": "docs/vue/index.html",
        "revision": "c397d2f770829bef535e0c1a50eef557"
    },
    {
        "url": "docs/vue/vuex/index.html",
        "revision": "0e2a5fe6c71bea11d696cadf442e4896"
    },
    {
        "url": "docs/vue/vue项目调试.html",
        "revision": "1fc623a2bdf6f7c5911f3916f6df283f"
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
        "revision": "243cba5eb3afe19288211dc0a6f90fc5"
    },
    {
        "url": "sw-register.js",
        "revision": "be3b35063715d522fcdbaf285a9b8c5e"
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
                () => replyPort.postMessage({
                    error: null
                }),
                error => replyPort.postMessage({
                    error
                })
            )
        )
    }
})
addEventListener('activate', function (event) {
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