<template>
  <div>
    <h1>User page - {{name}}</h1>
    <nuxt-child></nuxt-child>    
  </div>
</template>

<script>
export default {
  asyncData(context) {
    // called every time before loading the component
    return {name: 'hello world'}
  },
  fetch() {
    // the fetch method used to fill the sotre before rendering the page
  }
}
</script>
