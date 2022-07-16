import type { RouteRecordRaw } from 'vue-router'

// 获取modules中的路由规则
// https://cn.vitejs.dev/guide/features.html#glob-import
const modules = import.meta.globEager('./modules/**/*.ts')

// modules路由规则
const routes: RouteRecordRaw[] = []

Object.keys(modules).forEach((key) => {
  const modulesRoutes = modules[key].default || {}

  let modRoutesList = []
  if (Array.isArray(modulesRoutes)) {
    modRoutesList = [...modulesRoutes]
  } else {
    modRoutesList = [modulesRoutes]
  }

  routes.push(...modRoutesList)
})

// 根目录路由规则
const rootRoute: RouteRecordRaw = {
  path: '/',
  name: 'root',
  redirect: '/home'
}

// 404页面路由规则
const notFoundPage: RouteRecordRaw = {
  // vue-router@4的变化，舍弃*通配符
  // 官方文档：https://next.router.vuejs.org/zh/guide/migration/index.html#%E5%88%A0%E9%99%A4%E4%BA%86-%EF%BC%88%E6%98%9F%E6%A0%87%E6%88%96%E9%80%9A%E9%85%8D%E7%AC%A6%EF%BC%89%E8%B7%AF%E7%94%B1
  path: '/:pathMatch(.*)*',
  name: '404',
  component: () => import('@/views/common/404Page.vue')
}

export default [rootRoute, ...routes, notFoundPage]
