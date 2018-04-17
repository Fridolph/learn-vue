<template>
  <div class="program-container">
    <div id="particles-programs">
      <header class="g-header">
        <nuxt-link to="/"><i class="iconfont icon-fanhui"></i></nuxt-link>
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
  mounted() {
    particlesJS.load("particles-programs", '/particles-programs.js');
  }
};
</script>


<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
li,
ol {
  list-style: none;
}
a {
  text-decoration: none;
}
.program-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;

  .g-header,
  .g-footer {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 1;
  }

  .g-header {
    top: 20px;
    width: 90%;
    h1 {
      font-size: 24px;
    }
    .iconfont {
      position: absolute;
      left: -10px;
      top: 0;
      font-size: 24px;
      padding: 5px 10px;
      cursor: pointer;
    }
  }

  .g-footer {
    bottom: 20px;
    h2 {
      font-size: 12px;
    }
  }

  #particles-programs {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 9;
    background: #f5f6f7;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
}
</style>
