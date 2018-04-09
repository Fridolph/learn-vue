// import TodoList from '../views/todo/todo'
// import Login from '../views/login'

export default [
  {
    path: '/',
    redirect: '/todolist'
  },
  {
    path: '/todolist',
    name: 'app',
    component: () => import('../views/todo/todo'),
    meta: {
      title: 'Todo List App',
      description: '一个小而全的 Vue todo 应用'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  }
]
