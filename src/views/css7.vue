<!--
 * @Descripttion: 
 * @Author: huyi2
 * @Date: 2021-08-11 17:46:22
 * @LastEditors: huyi2
 * @LastEditTime: 2021-08-11 19:26:23
-->
<template>
  <div class="container">
    <div class="father">
      <div class="son"></div>
    </div>
    <h4>元素右对齐</h4>
    <div class="father">
      <div class="son2"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  .father { 
    width: 300px; 
    height: 200px;
    background-color: gray;
  } 
  .son { 
    width: 200px; 
    height: 200px;
    margin-right: 80px; 
    margin-left: auto; 
    background-color: pink
  }
  .son2 {
    width: 200px; 
    height: 200px; 
    margin-left: auto; 
    background-color: pink
  }
}
</style>
