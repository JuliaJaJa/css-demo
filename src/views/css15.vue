<!--
 * @Descripttion: 
 * @Author: huyi2
 * @Date: 2021-08-11 21:17:04
 * @LastEditors: huyi2
 * @LastEditTime: 2021-08-12 18:10:40
-->
<template>
  <div class="container">
    <h4>同一个层叠上下文，数值大的在上面</h4>
    <div style="position:relative; z-index:auto;"> 
      <!-- flower -->
      <img src="../assets/flower.png" style="position:absolute; z-index:2;"> 
      </div> 
      <div style="position:relative; z-index:auto;"> 
      <!-- logo --> 
      <img src="../assets/logo.png" style="position:relative; z-index:1;"> 
    </div>
    <h4>不同层叠上下文，后来居上</h4>
    <div style="position:relative; z-index:0;"> 
      <!-- flower -->
      <img src="../assets/flower.png" style="position:absolute; z-index:2;"> 
      </div> 
      <div style="position:relative; z-index:0;"> 
      <!-- logo --> 
      <img src="../assets/logo.png" style="position:relative; z-index:1;"> 
    </div>
    <h4>层叠顺序</h4>
    <h4>当给.box设置display: flex时，.parent就变成层叠上下文元素，根据层叠顺序规则，
      层叠上下文元素的background/border的层叠等级小于z-index值小于0的元素的层叠等级，
      所以z-index值为-1的.child在.parent上面</h4>
    <div class="box">
      <div class="parent">
        parent
        <div class="child">child</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  .box {
    // display: flex;
  }
  .parent {
    width: 200px;
    height: 100px;
    background: pink;
    /* 虽然设置了z-index，但是没有设置position，z-index无效，.parent还是普通元素，没有产生层叠上下文 */
    z-index: 1;
  }
  .child {
    width: 100px;
    height: 200px;
    background: yellow;
    position: relative;
    z-index: -1;
  }
}
</style>