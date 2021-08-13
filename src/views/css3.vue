<!--
 * @Descripttion: 
 * @Author: huyi2
 * @Date: 2021-08-10 19:51:07
 * @LastEditors: huyi2
 * @LastEditTime: 2021-08-13 14:37:41
-->
<template>
  <div>
    <h4>“幽灵空白节点” 实际上也是一个盒子，不过是个假想盒，
    是一个存在于每个“行 框盒子”前面，同时具有该元素的字体和行高属性的 0 宽度的内联盒。</h4>
    <h4>“幽灵空白节点” 的存在是理解后续很多内联元素为何会这么表现的基础。</h4>
    <div class="container">
      <span class="span"></span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  background: pink;
  .span {
    display: inline-block;
  }
}
</style>