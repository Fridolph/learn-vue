import Vuex from 'vuex'
import initialState from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

let isDev = process.env.NODE_ENV === 'development'

export default () => {
  // 配置热替换
  const store = new Vuex.Store({
    strict: isDev,
    // 服务端会有初始数据覆盖掉 initialState
    state: initialState,
    getters,
    mutations,
    actions
  })

  if (module.hot) {
    module.hot.accept([
      './state',
      './getters',
      './mutations',
      './actions'
    ], () => {
      const newState = require('./state').default
      const newGetters = require('./getters').default
      const newMutations = require('./mutations').default
      const newActions = require('./actions').default

      // 开启热更新
      store.hotUpdate({
        state: newState,
        getters: newGetters,
        mutations: newMutations,
        actions: newActions
      })
    })
  }

  return store
}
