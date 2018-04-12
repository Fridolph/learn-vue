import Notification from './notification'

export default {
  extends: Notification,
  data() {
    return {
      verticalOffset: 0,
      autoClose: 3000,
      height: 0,
      visible: false
    }
  },
  computed: {
    style() {
      return {
        position: 'fixed',
        right: '20px',
        bottom: `${this.verticalOffset}px`
      }
    }
  },
  methods: {
    createTimer() {
      if (this.autoClose) {
        this.timer = setTimeout(() => {
          this.visible = false
        }, this.autoClose)
      }
    },
    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },
    afterEnter() {
      this.height = this.$el.offsetHeight
    }
  },
  mounted() {
    this.createTimer()
  },
  beforeDestory() {
    this.clearTimer()
  }
}
