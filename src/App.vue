<!--
 * @Descripttion: 目录
 * @Author: huyi2
 * @Date: 2021-08-09 16:12:12
 * @LastEditors: huyi2
 * @LastEditTime: 2021-08-10 20:01:21
-->
<template>
  <div id="app" class="app">
    <div class="title">
      <router-link class="title_item" to="/css1">1、width:auto与width:100%</router-link>
      <router-link class="title_item" to="/css2">2、max-width</router-link>
      <router-link class="title_item" to="/css3">3、</router-link>
      <router-link class="title_item" to="/css4">4、</router-link>
      <router-link class="title_item" to="/css5">5、</router-link>
      <router-link class="title_item" to="/css6">6、</router-link>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
.app {
  .title {
    display: flex;
    padding: 30px;
    &_item {
      margin: 10px;
    }
  }
  .content {
    padding: 30px;
  }
}
</style>
