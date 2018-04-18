<template>
  <div class="page-container-common fixed-layout page-books">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="all" name="all">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :key="idx" v-for="(v, idx) in cards">
            <el-card :body-style="{padding: '0px'}" shadow="hover" class="card-item">
              <a target="_blank" :href="v.href" class="card-item-wrapper">
                <img width="90" class="card-img" :src="v.img" :alt="v.title">
                <div style="padding: 14px">
                  <h3 class="title">{{v.title}}</h3>
                  <p class="summary">{{v.summary}}</p>
                </div>

                <div class="item-cover">
                  <p class="desc">项目介绍：{{v.desc}}</p>
                  <p class="tech">{{v.tech}}</p>
                </div>
              </a>
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="online" name="online">online</el-tab-pane>
      <el-tab-pane label="css3" name="css3">css3</el-tab-pane>
      <el-tab-pane label="js" name="js">js</el-tab-pane>
      <el-tab-pane label="jquery" name="jquery">jquery</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  layout: 'books',
  data() {
    return {
      activeName: 'all',
      cards: [
        {
          img: 'https://avatars0.githubusercontent.com/u/17010702?s=460&v=4',
          href: 'https://avatars0.githubusercontent.com/u/17010702?s=460&v=4',
          title: '项目名称项目名称项目名称项目名称项目名称',
          summary: '项目简介',
          desc: '项目介绍，这里最好只放两排水电费地方速度发来吉林省地方大富科技',
          tech: '技术栈: vue, 打包工具: webpack'
        },
        {
          img: 'https://avatars0.githubusercontent.com/u/17010702?s=460&v=4',
          href: 'https://avatars0.githubusercontent.com/u/17010702?s=460&v=4',
          title: '项目名称项目名称项目名称项目名称项目名称',
          summary: '项目简介',
          desc: '项目介绍，这里最好只放两排水电费地方速度发来吉林省地方大富科技',
          tech: '技术栈: vue, 打包工具: webpack'
        },
        {
          img: 'https://avatars0.githubusercontent.com/u/17010702?s=460&v=4',
          href: 'https://avatars0.githubusercontent.com/u/17010702?s=460&v=4',
          title: '项目名称项目名称项目名称项目名称项目名称',
          summary: '项目简介',
          desc: '项目介绍，这里最好只放两排水电费地方速度发来吉林省地方大富科技',
          tech: '技术栈: vue, 打包工具: webpack'
        },
        {
          img: 'https://avatars0.githubusercontent.com/u/17010702?s=460&v=4',
          href: 'https://avatars0.githubusercontent.com/u/17010702?s=460&v=4',
          title: '项目名称项目名称项目名称项目名称项目名称',
          summary: '项目简介',
          desc: '项目介绍，这里最好只放两排水电费地方速度发来吉林省地方大富科技',
          tech: '技术栈: vue, 打包工具: webpack'
        },
        {
          img: 'https://avatars0.githubusercontent.com/u/17010702?s=460&v=4',
          href: 'https://avatars0.githubusercontent.com/u/17010702?s=460&v=4',
          title: '项目名称项目名称项目名称项目名称项目名称',
          summary: '项目简介',
          desc: '项目介绍，这里最好只放两排水电费地方速度发来吉林省地方大富科技',
          tech: '技术栈: vue, 打包工具: webpack'
        },
        {
          img: 'https://avatars0.githubusercontent.com/u/17010702?s=460&v=4',
          href: 'https://avatars0.githubusercontent.com/u/17010702?s=460&v=4',
          title: '项目名称项目名称项目名称项目名称项目名称',
          summary: '项目简介',
          desc: '项目介绍，这里最好只放两排水电费地方速度发来吉林省地方大富科技',
          tech: '技术栈: vue, 打包工具: webpack'
        },
        {
          img: 'https://avatars0.githubusercontent.com/u/17010702?s=460&v=4',
          href: 'https://avatars0.githubusercontent.com/u/17010702?s=460&v=4',
          title: '项目名称项目名称项目名称项目名称项目名称',
          summary: '项目简介',
          desc: '项目介绍，这里最好只放两排水电费地方速度发来吉林省地方大富科技',
          tech: '技术栈: vue, 打包工具: webpack'
        },
      ]
    }
  },
  methods: {
    handleClick(tab, event) {}
  }
}
</script>

<style lang="scss">
@import '../../assets/css/page-container.scss';
</style>
