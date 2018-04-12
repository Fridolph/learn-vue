import axios from 'axios'
import {createError} from './util'

const request = axios.create({
  baseURL: '/'
})

const handleRequest = req => {
  return new Promise((resolve, reject) => {
    req.then(res => {
      const data = res.data
      if (!data) {
        return reject(createError(400, 'bad data'))
      }
      if (!data.success) {
        return reject(createError(400, data.message))
      }
      resolve(data.data)
    })
  })
}

export default {
  getAllTodos() {
    return handleRequest(request.get('/api/todos'))
  },
  login(username, password) {
    return handleRequest(request.post('/user/login', {username, password}))
  },
  updateTodo(id, todo) {
    return handleRequest(request.put(`/api/todo/${id}`, todo))
  },
  createTodo(todo) {
    return handleRequest(request.post(`/api/todo`, todo))
  },
  deleteTodo(id) {
    return handleRequest(request.delete(`/api/todo/${id}`))
  },
  delteAllCompleted(ids) {
    return handleRequest(request.put(`/api/delete/completed`, {ids}))
  }
}
