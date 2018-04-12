// 每次服务端渲染都要去渲染一个新的APP，不能用渲染过的对象去替换
// 因为每次渲染，都会包含上一次渲染的状态，从而影响该次渲染的内容
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

import App from './app'
import createStore from './store'
import createRouter from './routes'
import Notification from './components/notification'
import Tabs from './components/tabs'
import './assets/styles/global.styl'

Vue.use(Meta)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Notification)
Vue.use(Tabs)

// 每次调用创建新的对象，否则可能在服务端内存溢出
export default () => {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return {
    app,
    router,
    store
  }
}
