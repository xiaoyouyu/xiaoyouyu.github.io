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
    ['meta', {
        'http-equiv': 'cache-control',
        'content': 'max-age=600',
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
        rel: 'apple-touch-icon',
        href: '/icons/icon-152x152.png'
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
];