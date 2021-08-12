<!--
 * @Descripttion: 
 * @Author: huyi2
 * @Date: 2021-08-11 17:47:24
 * @LastEditors: huyi2
 * @LastEditTime: 2021-08-12 13:23:09
-->
<template>
  <div>
    <h4>11-1 文字环绕</h4>
    <div class="container">
      <div class="float">
        <img src="../assets/logo.png" height="50">
      </div>
      文字环绕，文字环绕，文字环绕，文字环绕，文字环绕，文字环绕，文字环绕，文字环绕，文字环绕，文字环绕
    </div>
    <div>文字环绕，文字环绕，文字环绕，文字环绕，文字环绕，文字环绕，文字环绕，文字环绕，文字环绕</div>
    <h4>11-2 清除浮动</h4>
    <h4>clear 元素盒子的边不能和前面的浮动元素相邻</h4>
    <h4>创建BFC  可以清除浮动</h4>
    <div class="parent">
      <div class="child1"></div>
      <div class="child2"></div>
    </div>
    <div class="clearfix"></div>
    <h4>11-3 BFC自适应布局 图片改变大小 文字布局不变</h4>
    <div class="bfc">
      <img class="bfc_img" src="../assets/logo.png" height="50">
      <p class="bfc_p">文字环绕，文字环绕，文字环绕，文字环绕，文字环绕，文字环绕，文字环绕，文字环绕，文字环绕，文字环绕</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.clearfix {
  clear: both;
}
.container {
  width: 260px;
  height: 100px;
  border: 1px solid black;
  .float {
    float: left;
  }
}
.parent{
  width:300px; 
  background:#ddd; 
  border:1px solid;
  // display: inline-block;
  // overflow: hidden;
  // float: left;
} 
.child1{ 
  width:100px; 
  height:100px; 
  background:pink;
  float:left;
}
.child2{ 
  // clear: left;
  width:200px; 
  height:50px; 
  background:red;
}
.bfc {
  width: 300px;
  border: 1px solid black;
  &_p {
    overflow: hidden;
  }
  &_img {
    float: left;
    margin-right: 10px;
  }
}
</style>