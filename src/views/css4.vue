<!--
 * @Descripttion: 
 * @Author: huyi2
 * @Date: 2021-08-10 19:57:00
 * @LastEditors: huyi2
 * @LastEditTime: 2021-08-11 14:52:05
-->
<template>
  <div class="container">
    <br/>
    <div>
      <p>如果没有 CSS 尺寸和 HTML 尺寸，则使用固有尺寸作为最终的宽高(200*200)</p>
      <img src="@/assets/logo.png" alt="vue_logo">
    </div>
    <div>
      <p>如果没有 CSS 尺寸，则使用 HTML尺寸作为最终的宽高(100*100)</p>
      <img src="@/assets/logo.png" alt="vue_logo" width="100" height="100">
    </div>
    <div>
      <p>如果有 CSS 尺寸，则最终尺寸由 CSS 属性决定(150*150)</p>
      <img class="img" src="@/assets/logo.png" alt="vue_logo" width="100" height="100">
    </div>
    <div>
      <p>如果“固有尺寸”含有固有的宽高比例，同时仅设置了宽度或仅设置了高度，则元素依然按照固有的宽高比例显示。(50*50)</p>
      <img src="@/assets/logo.png" alt="vue_logo" width="50">
    </div>
    <div>
      <p>替换元素内容的固有尺寸无法改变，图片尺寸变化的本质并不是改变了固有尺寸，</p>
      <p>而是采用了填充（fill）作为适配 HTML 尺寸和 CSS 尺寸的方式，且在 CSS3 之前，此适配方式是不能修改的</p>
      <div class="fillImg"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  .img {
    width: 150px;
    height: 150px;
  }
  .fillImg:before {
    content: url('../assets/logo.png'); 
    display: block; 
    width: 100px;
    height: 100px;
  }
}
</style>