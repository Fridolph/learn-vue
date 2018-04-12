export default {
  updateCount(state, data) {
    state.num = data.num
  },
  fillTodos(state, todos) {
    state.todos = todos
  },
  addTodo(state, todo) {
    state.todos.unshift(todo)
  },
  updateTodo(state, {id, todo}) {
    state.todos.splice(
      state.todos.findIndex(t => t.id === id),
      1,
      todo
    )
  },
  deleteTodo(state, id) {
    state.todos.splice(
      state.todos.findIndex(t => t.id === id),
      1
    )
  },
  deleteAllCompleted(state) {
    state.todos = state.todos.filter(t => !t.completed)
  },
  doLogin(state, userinfo) {
    state.user = userinfo
  }
}
