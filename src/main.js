import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { DatePicker } from 'ant-design-vue';
import ElementPlus from 'element-plus'
import { createStore } from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vue3videoPlay from 'vue3-video-play' // 引入组件
import 'vue3-video-play/dist/style.css' // 引入css
import 'element-plus/dist/index.css'
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
import './assets/main.css'

// Create a new store instance.
const store = createStore({
    //全局变量
    state () {
        return {
            items:[]
        }
    },
    // vuex中的方法, 在组件中使用commit来调用
    mutations: {
        setItems(state, items){
            if (items.length != state.items.length){
                state.items = items
            }
        }
    },
    // 计算属性
    getters: {
        getItems (state) {
            return state.items
        },
    }
})


const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(DatePicker);
app.use(store)
app.use(vue3videoPlay)
app.use(VueAxios, axios)
app.mount('#app')
