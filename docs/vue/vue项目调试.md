---
title: vue项目调试
---
[官方调试方案](https://cn.vuejs.org/v2/cookbook/debugging-in-vscode.html)

### vue调试三种方式

1. vscode安装Debugger for Chrome插件，通过vscode的debug功能打开的chrome，可以映射到具体的文件上面
2. chrome 安装 Vue Devtools 插件
3. 代码里直接写 debugger 设断点（注意开发完要删掉）

### 调试生产代码：

1. 将生产的代码配置
```javascript
//Vue CLI 3 里vue.config.js中配置方法
 devtool: 'source-map',
 module.exports = {
     configureWebpack: {
         devtool: 'source-map'
     }
 }
```
2. 将本地生产代码打包，并运行打包后的代码（一般在 dist 目录）
3. 通过vscode的debug功能打开的chrome，访问本地服务器地址（dist 目录），报错位置可以映射到具体的source-map文件上面

### 调试生产数据
**本地dev环境调用接口会不会跨域？**
1. 后端配置允许跨域请求
dev环境启动命令传入生产环境参数，直接调用生产API地址
例如：`npm run dev:glgl --production`
前提是，API地址是根据环境变量判断的，而不是通过url地址判断的    
**缺点**：这个方案还是有些麻烦，传入生产地址，代表着打包方案也采用生产方案。
2. 用webpack或node服务器做一个代理访问
dev环境启动，直接调用测试API地址，再有webpack映射到生产API地址
vue.config.js中    
**缺点**：配置比较麻烦
```javascript
/*配置方法*/
devServer: {
  host: '10.11.29.222',
  port: 8080,
  proxy: {
    '/': {
      target: 'http://127.0.0.1:8080/',
      changeOrigin: true,
      pathRewrite: {
        '^/': ''
      },
      ws: false
    }
  }
}
```
3. 要么是fiddler做代理，访问本地服务器地址，映射生产服务器地址
dev环境启动，fiddler直接配置API的映射关系  
**缺点**：如果新增API接口，项目中增加配置，fiddler还要继续增加配置  
**问题**：本地没有https请求，无法映射生产的https请求



### 现有项目调试生产数据方案
1. 项目中用的 SockJS-node Node.js server 做了跨域处理（vue-cli3自带）
2. 项目根据url访问地址判断，选择不同的API地址
    方案：
    	直接修改 env/index.js 当中的判断参数 isProduction 为true，
    	因为有sockjs-node跨域方案，直接访问本地地址，调试完再将 isProduction 改回来。  
    **优点**：方便，不用使用额外工具。  
    **缺点**：直接在浏览器暴露了内部测试地址（可以限制外网访问），和url配置信息。
    
_env/index.js文件示例代码：_
```javascript
// 以下三个是生产地址
let baseUrl = 'https://m.xxx.com.cn'
let apiUrl = 'https://api.xxx.com.cn'
let cdnUrl = 'https://s.xxx.com.cn'

let host = window.location.hostname;
let isProduction = true;// 设置开关
if (/10|127|localhost/.test(host)) {//本地环境
    isProduction = false;
} else if (/stg|test/.test(host)) {//测试环境
    isProduction = false;;
}

if (!isProduction) {//通过开关判断
    // 判断不是生产环境，就使用测试环境地址.
    baseUrl = 'https://mtest.xxx.com.cn';
    cdnUrl = 'https://stest.xxx.com.cn';
    apiUrl = 'https://agenttest.xxx.com.cn'
}
export {
    baseUrl,
    apiUrl,
    cdnUrl,
    isProduction
}
```