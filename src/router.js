import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import Login from './views/Login.vue'
import Layout from './views/Layout.vue'
import menus from '@/config/menu-config'

Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'login',
//       component: Login
//     },
//     {
//       path: '/home'
//     }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
//   ]
// })

const routes = []

// 登录路由
routes.push({
  path: '/',
  name: 'Login',
  component: () => import('./views/Login')
})

//侧边栏二级菜单路由
let LayoutChildren = [];
menus.forEach((item) => {
  item.sub.forEach((cell) => {
    LayoutChildren.push({
      path:cell.name,
      name:cell.name,
      meta:cell.meta,
      component: () => import(`./components/${cell.name}`)
    })
  })
})
// menus.forEach((item) => {
//   item.sub.forEach((sub) => {
//     LayoutChildren.push({
//       path: sub.name,
//       name: sub.name,
//       component: () => import(`./components/${sub.name}`)
//     })
//   })
// })

routes.push({
  path: '/home',
  name: 'Home',
  component: Layout,
  children: LayoutChildren
})



export default new Router({routes})

