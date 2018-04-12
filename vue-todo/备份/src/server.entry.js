import createApp from './create-app'

export default context => {
  return new Promise((resolve, reject) => {
    const {app, router} = createApp()
    // 在客户端会打开默认地址 而服务端必须手动去push一个地址走到该路由
    router.push(context.url)
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject(new Error('no component matched'))
      }
      context.meta = app.$meta()
      resolve(app)
    })
  })
}
