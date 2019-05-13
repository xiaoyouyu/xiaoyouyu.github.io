const secretKeyConf = require('./secretKeyConf.js');

module.exports = {
    // TODO vuepress-pwa插件在iphoneIOS12.0 Safari运行有问题，暂时不使用这个插件，后期使用lavas的pwa方案 
    // 不知道为什么，不使用pwa，也能在iphoneIOS12.0添加主屏幕，并且通过主屏幕直接访问
    //'@vuepress/pwa': {
    //     serviceWorker: true, //是否开启
    //     // workboxConfig:"./sw-workbox.js",//如果熟悉workbox，通过自定义文件形式，来配置，放在public文件夹下
    //     generateSWConfig: { //vuepress lavas的话，不要暴露这个配置
    //         globIgnores: ["sw-register.js"],
    //     },
    //     updatePopup: {
    //         message: "站点发生更新，请手动刷新"
    //     }
    // },
    '@vuepress/back-to-top': true,
    '@vuepress/google-analytics': {
        'ga': secretKeyConf.ga
    },
    'vuepress-plugin-baidu-autopush': {} //百度站点自动推送
};