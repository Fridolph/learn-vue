<template>
  <div class="container-page page-programs">
    <div id="particles-programs" class="particles-js">
      <header class="g-header">
        <i @click="goBack" class="iconfont icon-fanhui"></i>
        <h1>我的练习仓库</h1>
      </header>
      <nuxt />
      <footer class="g-footer">
        <h2>copyright © 2016-2018</h2>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    goBack() {
      window.history.go(-1)
    }
  },
  mounted() {
    particlesJS.load("particles-programs", '/particles-programs.js');
  }
};
</script>


<style lang="scss">
@import '../assets/css/reset.scss';
</style>
