<!--
 * @Descripttion: 目录
 * @Author: huyi2
 * @Date: 2021-08-09 16:12:12
 * @LastEditors: huyi2
 * @LastEditTime: 2021-08-11 19:29:44
-->
<template>
  <div id="app" class="app">
    <div class="title">
      <router-link class="title_item" to="/css1">1、width:auto与width:100%</router-link>
      <router-link class="title_item" to="/css2">2、max-width</router-link>
      <router-link class="title_item" to="/css3">3、幽灵空白节点</router-link>
      <router-link class="title_item" to="/css4">4、content-替换元素</router-link>
      <router-link class="title_item" to="/css5">5、padding</router-link>
      <router-link class="title_item" to="/css6">6、margin合并</router-link>
      <router-link class="title_item" to="/css7">7、margin:auto</router-link>
      <router-link class="title_item" to="/css8">8、border绘制图形</router-link>
      <router-link class="title_item" to="/css9">9</router-link>
      <router-link class="title_item" to="/css10">10</router-link>
      <router-link class="title_item" to="/css11">11</router-link>
      <router-link class="title_item" to="/css12">12</router-link>
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
