import {GoHistory} from "./utils/GoHistory.js";
export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
}) => {
    GoHistory.getInstance(10);
    router.afterHooks.push((to, from) => {
        if(from.fullPath=="/" && !from.name){
            return ;
        }
        GoHistory.record(to.fullPath)
    })
}