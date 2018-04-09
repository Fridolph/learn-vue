import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app'
import './assets/styles/global.styl'
import createRouter from './routes/router'

Vue.use(VueRouter)

const router = createRouter()

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#root')
