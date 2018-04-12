<template>
  <header class="main-header">
    <!-- <h1 class="title">Todo List {{fullname}}</h1> -->
    <h1 class="title">{{fullname}} {{num}}</h1>
  </header>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  data() {
    return {

    }
  },
  computed: {
    // textA() {
    //   return this.$store.state.a.text
    // },
    // textB() {
    //   return this.$store.state.b.text
    // },
    ...mapState({
      num: state => state.num,
    }),
    // ...mapState({
    //   counter: (state) => state.num
    // }),
    ...mapGetters(['fullname'])
  },
  methods: {
    ...mapMutations(['updateCount']),
    ...mapActions(['updateCountAsync'])
  },
  mounted() {
    this.updateCountAsync({num: 5, time: 2000})
  }
}
</script>


<style lang="stylus" scoped>
.main-header
  text-align: center

  .title
    font-size 40px
    color rgba(180,199,238,0.9)
    text-shadow 0.1rem 0.1rem 0.2rem rgba(0,0,0,0.3)
    font-weight 100
    margin 20px

</style>
