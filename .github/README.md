## 介绍

这是一个 [VuePress](https://v1.vuepress.vuejs.org/zh/) 框架项目，建议使用 [Yarn](https://yarn.bootcss.com/) 管理此项目。
此项目发布后，用于持续记录技术笔记。
欢迎小伙伴参与维护。


## 如何克隆到本地自己玩

```bash
1. 克隆到本地代码库
git clone https://github.com/xiaoyouyu/-.git

2. 安装依赖
yarn install

3. 本地运行
yarn dev

4. 修改成自己的内容并打包项目
yarn build
```

## 配置

在 .vuepress/config/secretKeyConf.js 文件里，需要填写自己的相关配置内容：

1. [Valine 评论功能配置](https://valine.js.org/quickstart.html)
   appId:""
   appKey:""

2. [Google Analytics 谷歌分析配置](https://support.google.com/analytics)
   ga:""

3. [Google Search Console 提高在Google搜索结果中的展现率](https://search.google.com/search-console/about)
   googleSearchConsole:""

4. [百度统计](https://mtj.baidu.com/web/welcome/login)
   hm:""

## 待完善的内容

- [x] 清晰的目录结构，侧边栏由项目自动生成，不需要手动配置
- [x] iPhone 添加到主屏幕后，切换导致重新加载问题
- [ ] 针对上述问题，在网速慢的环境，增加loading等待提示，避免在首页长时间停留
- [ ] 禁止ios用户双击页面放大（mate标签并不是完美解决方案）
- [ ] 首屏图片尽量压缩至最小（最好和152头像一样大小）
- [ ] vue启动动画：图片预加载逻辑，当首屏图片加载完后，再显示内容（img load 监控）
- [ ] 在指南里的时间轴想做成一个书签，或者发布记录
- [ ] 添加Algolia	第三方搜索功能
- [ ] 重做一个PWA功能（vuepress-pwa 对缓存处理不理想，借鉴lavas解决方案，lavas简直是教科书版的缓存处理方案）
- [ ] 待补充...
