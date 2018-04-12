const sha1 = require('sha1')
const axios = require('axios')

const className = 'todo' // 命名空间

const request = axios.create({
  baseURL: 'https://d.apicloud.com/mcm/api'
})

const createError = (code, response) => {
  const err = new Error(response.message)
  err.code = code
}

const handleRequest = ({ status, data, ...rest }) => {
  if (status !== 200) throw createError(status, rest)

  return data
}

module.exports = (appId, appKey) => {
  const getHeaders = () => {
    const now = Date.now()
    return {
      'X-APICloud-AppId': appId,
      'X-APICloud-AppKey': `${sha1(`${appId}UZ${appKey}UZ${now}`)}.${now}`
    }
  }

  return {
    async getAllTodos() {
      return handleRequest(
        await request.get(
          `/${className}`,
          { headers: getHeaders() }
        )
      )
    },
    async addTodo(todo) {
      return handleRequest(
        await request.post(
          `/${className}`,
          todo,
          { headers: getHeaders() }
        )
      )
    },
    async updateTodo(id, todo) {
      return handleRequest(
        await request.put(
          `/${className}/${id}`,
          todo,
          { headers: getHeaders() }
        )
      )
    },
    async deleteTodo(id) {
      return handleRequest(
        await request.delete(
          `/${className}/${id}`,
          { headers: getHeaders() }
        )
      )
    },
    async deleteCompleted(ids) {
      const requests = ids.map(id => {
        return {
          method: 'DELETE',
          path: `/mcm/api/${className}/${id}`
        }
      })

      return handleRequest(await request.post(
        '/batch',
        { requests },
        { headers: getHeaders() }
      ))
    }
  }
}
