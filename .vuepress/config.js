const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const sidebarConf = require('./config/sidebarConf.js');
const headConf = require('./config/headConf.js');
const SwRegisterPlugin = require('sw-register-webpack-plugin');

module.exports = {
    title: '小鱿鱼',
    //副标题
    description: "技术笔记",
    //站点语言环境配置
    locales: {
        '/': {
            lang: 'zh-CN',
        }
    },
    //页面头信息配置
    head: headConf,
    //插件配置
    plugins: pluginConf,
    themeConfig: {
        //是否启动搜索框[搜索框不怎么好使]
        search: true,
        //最大搜索条数
        searchMaxSuggestions: 10,
        //最后更新时间
        lastUpdated: '上次更新',
        //github 地址
        repo: 'xiaoyouyu/-',
        //默认是 false, 设置为 true 来启用页面编辑
        editLinks: true,
        //页面编辑按钮文案
        editLinkText: '在 GitHub 上编辑此页',
        //导航栏设置
        nav: navConf,
        //侧边栏配置 auto 只能生成当前页面的，需要读目录自动生成
        sidebar: sidebarConf
    },
    //不兼容IE低版本
    evergreen: false,
    configureWebpack: (config, isServer) => {
        if (!isServer) {
            // config.plugins.push(new SwRegisterPlugin({
            //     version: +new Date,
            //     filePath: './.vuepress/config/sw-register.js',
            //     output: './sw-register.js'
            // }))
        }
    }
}