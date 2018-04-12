import model from '../../model/client-model'
import notify from '../../components/notification/function'
// import bus from '../../util/bus'

const handleError = err => {
  console.log(err)
}

export default {
  updateCountAsync(store, data) {
    setTimeout(() => {
      // console.dir(data)
      store.commit('updateCount', {
        num: data.num
      })
    }, data.time)
  },
  fetchTodos({ commit }) {
    model.getAllTodos()
      .then(res => {
        commit('fillTodos', res)
      })
      .catch(err => {
        handleError(err)
      })
  },
  addTodo({commit}, todo) {
    model.createTodo(todo)
      .then(data => {
        commit('addTodo', data)
        notify({
          content: '你又多了一件事要做'
        })
      })
      .catch(err => {
        handleError(err)
      })
  },
  updateTodo({commit}, {id, todo}) {
    model.updateTodo(id, todo)
      .then(res => {
        commit('updateTodo', {id, todo: res})
      })
      .catch(err => {
        handleError(err)
      })
  },
  deleteTodo({commit}, id) {
    model.deleteTodo(id)
      .then(data => {
        commit('deleteTodo', id)
        notify({
          content: '待办事项中少了一件事'
        })
      })
      .catch(err => {
        handleError(err)
      })
  },
  deleteAllCompleted({commit, state}) {
    const ids = state.todos.filter(t => t.completed).map(t => t.id)
    model.deleteAllCompleted(ids)
      .then(() => {
        commit('deleteAllCompleted')
        notify({
          content: '清理一下'
        })
      })
      .catch(err => {
        handleError(err)
      })
  }
}
