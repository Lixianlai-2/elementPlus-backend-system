import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import {router} from './router'
import 'element-plus/dist/index.css'
import config from './config/index.js'
import axios from 'axios'

console.log('环境变量', import.meta.env)
axios.get(config.baseApi + '/login').then(r => console.log('返回的结果==》', r))


const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
