//引入组件
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Login from '../components/Login.vue'
import Welcome from '../components/Welcome.vue'

import {createRouter, createWebHashHistory} from 'vue-router'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    {
        path: '/',
        component: Home,
        name: 'home',
        // // 为什么要设置重定向？判断用户是否登录了，如果没有，就会重定向到登录页面
        redirect: '/welcome',
        children: [
            {
                path: 'welcome',
                component: Welcome,
                name: 'welcome',
                meta: {
                    title: '欢迎页'
                }
            },
            {
                path: 'login',
                component: Login,
                name: 'login',
                meta: {
                    title: '登录页面'
                }
            }
        ]
    },
    {path: '/about', component: About, name: 'about'},
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
export const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。不需要后端的ngix配置
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
