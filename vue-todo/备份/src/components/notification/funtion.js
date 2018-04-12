import Vue from 'vue'
import Component from './func-notification'

const NotificationConstructor = Vue.extend(Component)

const instances = [] // 存放消息条数
let seed = 1 // 组件id

const removeInstance = instance => {
  if (!instance) return
  const len = instances.length
  const index = instances.findIndex(inst => instance.id === inst.id)

  instance.splice(index, 1)

  if (len <= 1) return
  const removeHeight = instance.vm.height
  for (let i = index; i < len - 1; i++) {
    instances[i].verticalOffset = parseInt(instances[i].verticalOffset) - removeHeight - 16
  }
}

const notify = options => {
  if (Vue.prototype.$isServer) return

  const { autoClose, ...restProps } = options

  const instance = new NotificationConstructor({
    propsData: {
      ...restProps
    },
    data: {
      autoClose: autoClose === undefined ? 3000 : autoClose
    }
  })

  const id = `notification_${seed++}`
  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true

  // 计算高度
  let verticalOffset = 0
  instance.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instance.push(instance)

  instance.vm.$on('closed', () => {
    removeInstance(instance)
    document.body.removeChild(instance.vm.$el)
    instance.vm.$destroy()
  })

  instance.vm.$on('close', () => {
    instance.vm.visible = false
  })

  return instance.vm
}

export default notify
