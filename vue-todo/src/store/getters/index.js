// 虽然也可在业务组件中写，但相同的部分同样写显然是很浪费的
// 这里是一次解耦 其实可理解为 vuex里的 computed
export default {
  fullname(state) {
    return `${state.firstname} - ${state.lastname}`
  }
}
