<!--
 * @Descripttion: 
 * @Author: huyi2
 * @Date: 2021-08-11 17:46:28
 * @LastEditors: huyi2
 * @LastEditTime: 2021-08-13 15:33:31
-->
<template>
  <div class="container">
    <h4>三角形</h4>
    <div class="triangle"></div>
    <h4>一半三角形</h4>
    <div class="halfTriangle"></div>
    <h4>四色边框</h4>
    <div class="block"></div>
    <h4>梯形</h4>
    <div class="block2"></div>
  </div>
</template>

<style lang="less" scoped>
.container {
  .triangle {
    width: 0; 
    border: 10px solid; 
    border-color: pink transparent transparent;
  }
  .halfTriangle {
    width: 0; 
    border-width: 20px 10px; 
    border-style: solid; 
    border-color: #f30 #f30 transparent transparent;
  }
  .block {
    width: 10px;
    height: 10px; 
    border: 10px solid; 
    border-color: #f30 #00f #396 #0f0;
  }
  .block2 {
    width: 10px; height: 10px; 
    border: 10px solid; 
    border-color: #f30 transparent transparent;
  }
}
</style>