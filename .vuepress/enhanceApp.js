import {GoHistory} from "./utils/GoHistory.js";
//https://v1.vuepress.vuejs.org/zh/miscellaneous/design-concepts.html#%E6%8F%92%E4%BB%B6%E5%8C%96
//https://v1.vuepress.vuejs.org/zh/guide/basic-config.html#%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE
export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData, // 站点元数据
    isServer
}) => {
    if (!isServer) {
        GoHistory.getInstance();
        router.afterHooks.push((to, from) => {
            if(from.fullPath=="/" && !from.name){
                return ;
            }
            GoHistory.record(to.fullPath)
        })
    }
}