<script>
export default {
  name: 'tabs',
  props: {
    value: [String, Number],
    required: true
  },
  render() {
    return (
      <div class="tabs">
        <ul class="tabs-header">
          {this.$slots.default}
        </ul>
      </div>
    )
  }
}
</script>
