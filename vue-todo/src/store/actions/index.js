export default {
  updateCountAsync(store, data) {
    setTimeout(() => {
      console.dir(data)
      store.commit('updateCount', {
        num: data.num
      })
    }, data.time)
  }
}
