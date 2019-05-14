## 介绍
这是一个 VuePress 项目，建议使用yarn管理此项目

## 如何使用
```bash
# 1. 首先拷贝该项目
git clone https://github.com/xiaoyouyu/-.git

# 2. 安装依赖
yarn install

# 3. 本地运行
yarn dev

# 4. 修改内容并push
yarn push origin master

# 5. 打包项目
yarn build
```

## 配置
在 .vuepress/config/secretKeyConf.js 文件里，需要填写自己的相关配置内容
分别是
//Valine 评论功能配置
appId:""
,appKey:""
//google analytics 谷歌分析配置
    ,ga:"UA-139645828-1"
    //google 提高在搜索结果中的展现率
    ,googleSearchConsole:"Z8IG4v348qcydMP25GCgfRU2RIbUXbG9SK2bM2j8aCs"
    //百度统计
    ,hm:"536020c63661169243a356501dcb5d98"

### 1. secretKeyConf 配置项

```bash
# Valine
1. appId
2. appKey
# google analytics
3. ga
# google 网站认证
4. googleSearchConsole
```

### 2. 修改 node_modules 文件

1. 在默认主题上添加 Valine 组件

   路径为 

   ```bash
   # node_modules/@vuepress/theme-default/components/Page.vue
   ```

   修改内容为

   ```vue
       </div>
   
       <slot name="bottom"/>
       <!-- 仅需添加 <Valine></Valine> 即可 -->
       <Valine></Valine>
     </main>
   </template>
   ```

