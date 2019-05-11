const secretKeyConf = require('./secretKeyConf.js');

module.exports = {
    '@vuepress/pwa': {
        serviceWorker: true, //是否开启
        // workboxConfig:"./sw-workbox.js",//如果熟悉workbox，通过自定义文件形式，来配置，放在public文件夹下
        generateSWConfig: { //vuepress lavas的话，不要暴露这个配置
            globIgnores: ["sw-register.js"],
        },
        updatePopup: {
            message: "站点发生更新，请手动刷新"
        }
    },
    '@vuepress/back-to-top': true,
    '@vuepress/google-analytics': {
        'ga': secretKeyConf.ga
    },
    'vuepress-plugin-baidu-autopush': {} //百度站点自动推送
};