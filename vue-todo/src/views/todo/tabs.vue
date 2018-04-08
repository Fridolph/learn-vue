<template>
  <div class="helper">
    <span class="left">{{unFinishedTodoLength}} items left</span>
    <span class="tabs">
      <span
        v-for="state in states"
        :key="state"
        :class="[state, filter === state ? 'actived' : '']"
        @click="toggleFilter(state)"
      >
        {{state}}
      </span>
    </span>
    <span class="clear" @click="clearAllCompleted">Clear Completed</span>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      states: ['all', 'active', 'completed']
    }
  },
  computed: {
    unFinishedTodoLength () {
      return this.todos.filter(todo => !todo.completed).length
    }
  },
  methods: {
    clearAllCompleted () {
      this.$emit('clearAllCompleted')
    },
    toggleFilter (state) {
      this.$emit('toggle', state)
    }
  }
}
</script>

<style lang="stylus" scoped>
.helper
  font-weight 100
  display flex
  flex-wrap wrap
  justify-content space-between
  padding 5px 0
  line-height 30px
  background-color #fff
  font-size 14px
  font-smoothing: antialiased

.left, .clear, .tabs
  padding 0 10px
  box-sizing border-box

.left
  text-align left

.tabs
  flex: 0 0 60%
  max-width: 240px
  display: flex
  justify-content: space-between
  span
    padding: 0 6px
    border-radius: 4px
    border: 1px solid transparent
  .actived
    border: 1px solid skyblue

.clear
  text-align right
  cursor pointer

@media screen and (max-width: 800px) {
  .left {
    width: 100%;
    margin-bottom: 10px;
  }
}

@media screen and (min-width: 801px) and (max-width: 2560px){
  .helper {
    font-weight 100
    display flex
    flex-wrap: nowrap
    justify-content space-between
    padding 5px 0
    line-height 30px
    background-color #fff
    font-size 14px
    font-smoothing: antialiased

    .left {
      text-align left
      width: 150px
    }
  }

  .left, .clear, .tabs {
    padding 0 10px
    box-sizing border-box
  }

  .left, .clear {
    width 150px
  }

  .left {
    text-align left
  }

  .clear {
    text-align right
    cursor pointer
  }
}
</style>


