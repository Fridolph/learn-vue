import Notification from './notification'
import notify from './funtion'

export default Vue => {
  Vue.component(Notification.name, Notification)
  Vue.prototype.$notify = notify
}
