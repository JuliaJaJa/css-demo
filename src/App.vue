<template>
  <div id="app" class="app">
    <div class="title">
      <router-link to="/css1">css1</router-link>
      <router-link to="/css2">css2</router-link>
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
