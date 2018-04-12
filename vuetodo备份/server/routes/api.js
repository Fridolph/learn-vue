const Router = require('koa-router')

const apiRouter = new Router({prefix: '/api'})

const validateUser = async (ctx, next) => {
  if (ctx.session.user) {
    ctx.status = 401
    ctx.body = 'need login'
  } else {
    await next()
  }
}

const successResonse = data => {
  return {
    success: true,
    data
  }
}

apiRouter.use(validateUser)

apiRouter
  .get('/todos', async (ctx) => {
    const todos = await ctx.db.getAllTodos()
    ctx.body = successResonse(todos)
  })
  .post('/todo', async (ctx) => {
    const data = await ctx.db.addTodo(ctx.request.body)
    ctx.body = successResonse(data)
  })
  .put('/todo/:id', async ctx => {
    const data = await ctx.db.updateTodo(ctx.params.id, ctx.request.body)
    ctx.body = successResonse(data)
  })
  .delete('/todo/:id', async ctx => {
    const data = await ctx.db.deleteTodo(ctx.params.id)
    ctx.body = successResonse(data)
  })
  .delete('/delete/completed', async ctx => {
    const data = await ctx.db.deleteCompleted(ctx.request.body.ids)
    ctx.body = successResonse(data)
  })

module.exports = apiRouter
