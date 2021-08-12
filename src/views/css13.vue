<!--
 * @Descripttion: 
 * @Author: huyi2
 * @Date: 2021-08-11 21:16:46
 * @LastEditors: huyi2
 * @LastEditTime: 2021-08-12 16:17:24
-->
<template>
  <div class="container">
    <div class="box">
      <div class="boxItem">111</div>
      <div class="boxItem relative">222</div>
      <div class="boxItem">333</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  .box {
    display: flex;
    .boxItem {
      margin: 10px;
      background: pink;
      width: 50px;
      height: 50px;

    }
    .relative {
      position: relative;
      top: 10px;
      bottom: 10px; // 无效
      left: 10px;
      right: 10px; // 无效
    }
  }
}
</style>