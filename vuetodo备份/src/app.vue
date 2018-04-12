<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <router-link to="/todolist">todolist</router-link>
    <router-link to="/login">login</router-link>
    <!-- <todo></todo> -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
    <transition name="fade">
      <Notification content="test notify" />
    </transition>
  </div>
</template>

<script>
import Header from './layouts/header'
import Footer from './layouts/footer'
import Todo from './views/todo/todo'

export default {
  metaInfo: {
    title: 'The Todo App'
  },
  components: {
    Header,
    Footer,
    Todo
  }
}
</script>

<style lang="stylus" scoped>
#app
  position fixed
  left 0
  right 0
  top 0
  bottom 0

#cover
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color rgba(99,99,99,0.8)
  opacity .9
  z-index -1

</style>


