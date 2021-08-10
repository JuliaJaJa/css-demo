<!--
 * @Descripttion: 目录
 * @Author: huyi2
 * @Date: 2021-08-09 16:12:12
 * @LastEditors: huyi2
 * @LastEditTime: 2021-08-10 19:22:32
-->
<template>
  <div id="app" class="app">
    <div class="title">
      <router-link to="/css1">1、width:auto与width:100%</router-link>
      <router-link to="/css2">2、max-width</router-link>
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

<style lang="less">
.app {
  .title {
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin: 0 auto;
  }
  .content {
    padding: 30px;
    // border: 1px dashed #eeeeee;
  }
}
</style>
