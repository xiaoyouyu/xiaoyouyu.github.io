---
title: Vuex 简介
---
### [什么是Vuex](https://vuex.vuejs.org/zh/)
vuex相当于一个全局的配置对象（以单例模式存在），当把这个对象全局注入（Vue.use(Vuex)）后，就跟window对象类似，在任何一个vue文件中都可以使用它，可以通过state设置一些开关和配置，通过mutations设置一些处理state函数。

```javascript
const store = new Vuex.Store({
    state: { //状态，表示属性数据
        count: 0
    },
    mutations: { //转换，表示处理属性的函数
        increment(state) {
            state.count++
        }
    }
})
```
组件中，可以通过this.$store.state获取属性，dom模板中使用，要省去this
Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 Vue.use(Vuex)）：
```javascript
import Vuex from 'vuex'
Vue.use(Vuex);
var store = new Vuex.Store({}) //可以将这块单独一个文件进行配置，然后用import导入进来
var mapState = new Vuex.mapState({}) //辅助函数，用来为当前组件提供额外的计算属性

//或者
import {
    Store,
    mapState,
    install
} from 'vuex'
var xvxx = {
    Store,
    mapState,
    install
};
Vue.use(xvxx)
var store = new Store({})
var mapState = new mapState({}) //辅助函数，用来为当前组件提供额外的计算属性

//将store注入到每一个子组件中
const app = new Vue({
    el: '#app',
    store, // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件的vue实例上面
    components: {
        Counter
    },
    template: `
	    <div class="app">
	      <counter></counter>
	    </div>
	  `,
    // 使用对象展开运算符将此对象混入到外部对象中
    computed: {
        localComputed() { /* ... */ },
        ...mapState({
            //对象展开运算符， 相当于在computed下声明了mapState里的这些属性
            // 箭头函数可使代码更简练
            count: state => state.count,

            // 传字符串参数 'count' 等同于 `state => state.count`，就是将count属性，另取一个名字
            countAlias: 'count',

            // 为了能够使用 `this` 获取局部状态，必须使用常规函数
            countPlusLocalState(state) {
                return state.count + this.localCount
            }
        })
    }
})
```