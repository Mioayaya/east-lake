import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/common/font/font.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'

createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app')

//注册全局方法
const app = createApp(App)
app.config.globalProperties.$axios = axios;    
axios.defaults.baseURL = '/api';
