### 使用slot分发内容

在使用组件时，常常要像这样组合它们：

<app>
  <app-header></app-header>
  <app-footer></app-footer>
</app>

注意两点：

1. <app> 组件不知道它的挂载点会有什么内容。挂载点的内容是由 <app> 的父组件决定的

2. <app> 组件很可能有它自己的模板

为了让组件可以组合，我们需要一种方式来混合父组件的内容与子组件自己的模板。这这个过程被成为内容分发（或transclusion）
Vue.js实现了一个内容分发API，参照了当前web组件规范草案，使用了特殊的<slot>元素作为原始内容的插槽。
