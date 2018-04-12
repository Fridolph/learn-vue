// import TodoList from '../views/todo/todo'
// import Login from '../views/login'
import Router from 'vue-router'
import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history',
    // base: '/base/', 通过vue-router跳转的路径默认带上该配置
    // linkActiveClass: 'active-link',
    // linkExactActiveClass: 'exact-active-link',
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {x: 0, y: 0}
      }
    }
  })
}
