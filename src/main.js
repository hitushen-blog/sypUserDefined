import { createApp } from 'vue'
import App from './App.vue'
//路由
import router from "./router";
//引入状态管理库
import store from "../src/store/index";
//引入ui库 
import Vant from 'vant'
// 2. 引入组件样式
import 'vant/lib/index.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入elementplus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 引入自定义方法
import commonFun from '../src/utils/commonFun';
// 引入meta
import { createMetaManager } from 'vue-meta'
// console.log = function () { }
// console.error = function () { }
// console.dir = function () { }

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// console.log(commonFun, '查看引入的对象');
Object.keys(commonFun).forEach((item, index) => {
    app.config.globalProperties.$time = commonFun
})

app.use(router).use(store).use(
    Vant
).use(ElementPlus).use(createMetaManager(false, {
    meta: { tag: 'meta', nameless: true }
})).mount('#app')
