import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './app'
import './assets/styles/global.styl'
import createRouter from './routes/router'
import createStore from './store'

Vue.use(Vuex)
const store = createStore()

Vue.use(VueRouter)
const router = createRouter()

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#root')
