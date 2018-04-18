<template>
  <section>
    <SlideShow :bglist="bglist" />
    <div id="container" class="box-container">
      <div class="container-inner">
        <div class="inner-header">
          <div class="title">
            <h1>Fridolph的个人网站</h1>
            <sub>Fridolph's Personal Website</sub>
          </div>
        </div>
        <div class="inner-content">
          <ul class="list">
            <li class="list-item item-1">
              <a target="_blank" href="https://github.com/fridolph">» github</a>
            </li>            
            <li class="list-item item-2">
              <a target="_blank" href="https://fridolph.github.io">» Blog</a>
            </li>            
            <li class="list-item item-3">
              <div class="box">
                <nuxt-link to="/programs">» Program</nuxt-link>
                <div class="over-layer">
                  <nuxt-link to="/programs">» Program</nuxt-link>
                </div>
              </div>
            </li>
            <li class="list-item item-1">
              <nuxt-link to="/books">» books</nuxt-link>
            </li>
            <li class="list-item item-2" v-if="$route.query && $route.query.visitor === 'hr'">
              <nuxt-link to="/resume">» resume</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="inner-footer">
          Contact | fridolph.wang
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SlideShow from '../components/SlideShow'

export default {
  components: {
    SlideShow
  },
  data() {
    return {
      bglist: [
        { src: 'http://blog.fueson.top/bg/op.jpg?imageView2/1/w/1280/h/795/format/jpg/interlace/1/q/70' },
        { src: 'http://blog.fueson.top/bg/saber2.jpg?imageView2/1/w/1280/h/795/format/jpg/interlace/1/q/70' },
        { src: 'http://blog.fueson.top/bg/acher.jpg?imageView2/1/w/1280/h/795/format/jpg/interlace/1/q/70' },
        // { src: 'http://blog.fueson.top/bg/naruto.jpg?imageView2/1/w/1280/h/795/format/jpg/interlace/1/q/70' },
        // { src: 'http://blog.fueson.top/bg/gintoki.jpg?imageView2/1/w/1280/h/795/format/jpg/interlace/1/q/70' },
        { src: 'http://blog.fueson.top/bg/fairy.jpg?imageView2/1/w/1280/h/795/format/jpg/interlace/1/q/70' },
        // { src: 'http://blog.fueson.top/bg/fire.jpg?imageView2/1/w/1280/h/795/format/jpg/interlace/1/q/70' },
        // { src: 'http://blog.fueson.top/bg/geass.jpg?imageView2/1/w/1280/h/795/format/jpg/interlace/1/q/70' },
        // { src: 'http://blog.fueson.top/bg/gate.jpg?imageView2/1/w/1280/h/795/format/jpg/interlace/1/q/70' },
        // { src: 'http://blog.fueson.top/bg/titan.jpg?imageView2/1/w/1280/h/795/format/jpg/interlace/1/q/70' }
      ]
    }
  },
  mounted() {
    console.log(this.$route.query)
  }
}
</script>

<style lang="scss" scoped>
.box-container {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  color: #fefefe;
  overflow: hidden;
  position: absolute;
  z-index: 100;
  left: 50%;
  top: 50%;
  min-height: 300px;
  width: 90vw;
  max-width: 600px;
  transform: translate(-50%, -50%);
  padding: 20px;
  display: flex;
  justify-content: center;

  .container-inner {
    width: 100%;
  }

  .inner-header {
    text-align: center;
    text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  h1 {
    font-size: 24px;
  }

  .inner-content {
    margin: 20px 0 10px 0;
    padding: 10px;

    .list {
      position: relative;
      &::before, &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.6);
      }
      &::before {
        left: 0;
        top: -20px;
      }
      &::after {
        left: 0;
        bottom: -20px;
      }
    }

    .list-item {
      text-indent: 1em;
      border-radius: 4px;
      margin: 10px 0;
      background: rgba(0, 0, 0, 0.6);
      transition: all ease-in-out 0.4s;
      a {
        color: #eee;
        display: block;
        line-height: 2;
        transition: all ease-in-out 0.4s;
      }
    }

    .item-1:hover {
      background: linear-gradient(90deg, #b9deed, rgba(255, 255, 255, 0.7));
      a {color: #333;}
    }
    .item-2 {
      position: relative;
      z-index: 2;
      &::before {
        content: '';
        background: linear-gradient(90deg, #71bbe9, #f0f0f0);
        position: absolute;
        z-index: -1;
        width: 0;
        height: 100%;
        left: 0;
        border-radius: 4px;
        transition: all 0.7s ease;
      }
      &:hover {
        a {color: #333;}
        &::before {
          width: 100%;
        }
      }
    }
    .item-3 {
      position: relative;
      perspective: 500px;
      width: 100%;
      height: 32px;
      .box {
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        .over-layer {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          background: linear-gradient(90deg, #c4b9ed, rgba(255, 255, 255, 0.7));
          transform: translateY(100%);
          color: #fff;
          transition: all 0.6s ease;
          border-radius: 4px;
        }
        &:hover {
          .layer {
            transform: translateY(-100%) rotateX(90deg);
            transform-origin: bottom center;
            opacity: 0;
          }
          .over-layer {
            opacity: 1;
            transform: translateY(0);
          }
        }
      }
    }
  }

  .inner-footer {
    text-align: right;
    font-size: 14px;
  }
}

</style>
