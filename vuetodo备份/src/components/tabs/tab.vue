<script>
export default {
  name: 'tab',
  props: {
    index: {
      required: true,
      type: [Number, String]
    },
    label: {
      type: String,
      default: 'tab'
    }
  },
  computed: {
    active() {
      return this.$parent.value === this.index
    }
  },
  render() {
    const tab = this.$slots.label || <span>{this.label}</span>
    const classNames = {
      tab: true,
      active: this.active
    }
    return (
      <li class={classNames}>
        {tab}
      </li>
    )
  }
}
</script>
