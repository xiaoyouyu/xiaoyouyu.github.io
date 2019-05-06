const { getLinks } = require('../utils/index.js');
const navConf = require('./navConf.js');
const getFilenames = require('../utils/getFilenames.js');

//排除的文件(虽然是被禁用侧边栏链接，但是依然被编译成html，如果设置了Front Matter 的title，通过搜索框也可以搜索到)
const excludes = [];
/**
 *
 *
 * @param {*} title 标题
 * @param {string} [path='']
 * @param {string} [children=['']] 子级，最多3层嵌套
 * @param {boolean} [collapsable=true] 是否展开，默认true展开，false为关闭
 * @param {number} [sidebarDepth=1] 深度，可使用 YAML front matter 来为某个页面重写此值
 * @returns
 */
const genSidebar = (title, children = null, collapsable = false, path, sidebarDepth) => {
    var otherfield = {
        path,
        sidebarDepth
    };
    let configData = {
        title,
        collapsable,
        children
    }
    Object.keys(otherfield).filter((key, i) => {
        let v = otherfield[key];
        if (v === undefined || v === null) {
            return;
        }
        configData[key] = v;
    })
    return configData
}



/**
 * 侧边栏的配置
 */
s = getLinks(navConf, excludes, genSidebar, getFilenames);
module.exports = s;



// [测试用]采用这种方式 object方式
// 特点：
// 1是同级目录下的文件，也可以配置成父子级侧边栏
// module.exports = {
//     "/docs/vue/": [
//         {
//             title: 'vue',//在这装了一个父级
//             collapsable: false,
//             children: [
//                 ''
//                 ,{path:'/docs/vue/sub/',title:"sub"}
//                 ,{path:'vue项目调试',title:"vue项目调试"}
//                 ,{path:'vue项目&node项目相关内容收集',title:"vue项目&node项目相关内容收集"}
//             ]
//         }
//     ]
//     ,
//     "/docs/vue/sub/":[
//         //可以加一个前进按钮
//         {
//             title: 'vue',//在这装了一个父级
//             path:"/docs/vue/"
//         },
//         {
//             title: null,
//             collapsable: false,
//             children: [
//                 '',['emoji','emoji'],['grammar','grammar']
//             ]
//         },
//         //可以加一个前进按钮
//         {
//             title: 'vue项目调试',//在这装了一个父级
//             path:"/docs/vue/vue项目调试"
//         }
//     ]
//     ,"/docs/markdown/": [
//         {
//             title: 'markdown',//在这装了一个父级
//             collapsable: false,
//             children: [
//                 '',['emoji','emoji'],['grammar','grammar']
//             ]
//         }
//     ]
// };