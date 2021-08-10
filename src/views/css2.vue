<template>
  <div class="container">
    <div class="block1">
      test div 2-1
    </div>
    <div class="block2">
      test div 2-2
    </div>
  </div>
  
</template>

<style lang="less" scoped>
.container {
  text-align: center;
  line-height: 200px;
  .block1 {
    margin: 0 auto;
    width: 200px !important;
    max-width: 150px;
    height: 200px !important;
    min-height: 300px;
    margin-bottom: 20px;
    background: pink;
  }
  .block2 {
    margin: 0 auto;
    width: 200px !important;
    max-width: 150px;
    min-width: 300px;
    height: 100px !important;
    min-height: 200px;
    max-height: 150px;
    background: pink;
  }
}
</style>