const secretKeyConf = require('./secretKeyConf.js');

module.exports = [
    ['link', {
        rel: 'shortcut icon',
        href: '/favicon-32x32.png'
    }],
    ['link', {
        rel: 'manifest',
        href: '/manifest.json'
    }],
    // ['meta', {
    //     "Http-Equiv": 'pragma',
    //     "content": 'no-cache'
    // }],
    // ['meta', {
    //     "Http-Equiv": 'Cache-Control',
    //     "content": 'max-age=600'
    // }],
    // ['meta', {
    //     "Http-Equiv": 'expires',
    //     "content": 'Wed, 26 Feb 1997 08:21:57 GMT'
    // }],
    ['meta', {
        "Http-Equiv": 'X-UA-Compatible',
        "content": 'IE=edge'
    }],
    ['meta', {
        "name": 'renderer',
        "content": 'webkit'
    }],
    ['meta', {
        name: 'theme-color',
        content: '#3eaf7c'
    }],
    ['meta', {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
    }],
    ['meta', {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
    }],
    ['meta', {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
    }],
    ['link', {
        rel: 'apple-touch-startup-image',
        media:'(device-width: 320px)',
        href: '/icons/hbb/apple-launch-640x1136.png'
    }],
    ['link', {
        rel: 'apple-touch-startup-image',
        media:'(device-width: 375px)',
        href: '/icons/hbb/apple-launch-750x1334.png'
    }],
    ['link', {
        rel: 'apple-touch-startup-image',
        media:'(device-width: 414px)',
        href: '/icons/hbb/apple-launch-1242x2208.png'
    }],
    ['link', {
        rel: 'apple-touch-startup-image',
        media:'(device-width: 768px)',
        href: '/icons/hbb/apple-launch-1536x2048.png'
    }],
    ['link', {
        rel: 'apple-touch-icon',
        href: '/icons/icon-152x152.png'
    }],
    ['meta', {
        name: 'msapplication-TileImage',
        content: '/icons/icon-192x192.png'
    }],
    ['meta', {
        name: 'msapplication-TileColor',
        content: '#3eaf7c'
    }],
    ['link', {
        rel: 'mask-icon',
        href: '/icons/touch-bar.svg',
        color: '#3eaf7c'
    }],
    ['meta', {
        name: 'google-site-verification',
        content: secretKeyConf.googleSearchConsole
    }],
    ['script', {
        src: "//hm.baidu.com/hm.js?"+secretKeyConf.hm
    }]
];