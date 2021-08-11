<!--
 * @Descripttion: 
 * @Author: huyi2
 * @Date: 2021-08-11 17:46:40
 * @LastEditors: huyi2
 * @LastEditTime: 2021-08-11 20:22:00
-->
<template>
  <div class="container">
    <h4>div高度是由行高决定的，而非文字。</h4>
    <div class="lineHeight">高度</div>
    <br/>
    <div class="lineHeight2">高度</div>
  </div>
</template>

<style lang="less" scoped>
.container {
  .lineHeight {
    font-size: 16px; 
    line-height: 0; 
    border: 1px solid #ccc; 
    background: #eee;
  }
  .lineHeight2 {
    font-size: 0; 
    line-height: 16px; 
    border: 1px solid #ccc; 
    background: #eee;
  }
}
</style>