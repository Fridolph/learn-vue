import Vue from 'vue'
import App from './app'
import {createRouter} from './router'

const router = createRouter()

export default () => {
  const app = new Vue({
    // 根实例简单的渲染应用程序组件
    router,
    render: h => h(app)
  })
  return { app, router }
}