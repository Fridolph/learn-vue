import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../app'
import Bar from '../components/Bar'
import Baz from '../components/Baz'
import Foo from '../components/Foo'

Vue.use(VueRouter)

export const craeteRouter = () => {
  return new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        comopnent: App
      },
      {
        path: '/foo',
        component: Foo
      },
      {
        path: '/bar',
        component: Bar
      },
      {
        path: '/baz',
        component: Baz
      },
    ]
  })
}