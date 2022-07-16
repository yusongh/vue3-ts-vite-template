import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'

import routes from './routes/index'

const router = createRouter({
  // vueRouter@3版本的mode改成了history，hash模式配置createWebHashHistory，history模式配置createWebHistory
  history: createWebHashHistory(),
  routes
})

/**
 * 路由初始化函数
 * @param app
 */
export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
