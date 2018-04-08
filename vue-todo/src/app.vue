<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <todo></todo>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './layouts/header'
import Footer from './layouts/footer'
import Todo from './views/todo/todo'

// console.log(Header.__docs)

export default {
  components: {
    Header,
    Footer,
    Todo,
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


