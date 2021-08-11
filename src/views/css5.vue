<!--
 * @Descripttion: 
 * @Author: huyi2
 * @Date: 2021-08-10 19:57:06
 * @LastEditors: huyi2
 * @LastEditTime: 2021-08-11 11:31:51
-->
<template>
  <div class="container">
    <h4>5-1</h4>
    <div class="block1">text</div>
    <div class="empty"></div>
    <span class="block2">text</span>
    <div class="empty"></div>
    <h4>5-2</h4>
    <div class="empty"></div>
    <a href="https:www.baidu.com" target="_blank" class="block3">百度</a>
    <div class="empty"></div>
    <h4>5-3</h4>
    <div class="block4">
      <div class="block5">
        padding都是60px
      </div>
    </div>
    <h4>5-4</h4>
    <div class="empty"></div>
    <div class="block6">
      <span class="block7">内有文字若干</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  .empty {
    height: 50px;
  }
  .block1 {
    background: pink;
    width: 80px; 
    padding: 20px 60px; 
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  .block2 {
    background: pink;
    width: 80px; 
    padding: 20px 60px; 
    box-sizing: border-box;
  }
  .block3 {
    background: pink;
    padding: 50px;
  }
  .block4 {
    background: gray;
    width: 300px;
    height: 200px;
    .block5 {
      background: pink;
      padding: 20%;
    }
  }
  .block6 {
    width: 150px;
    border: 2px dashed #cd0000;
    .block7 {
      // padding: 0 50%; 
      padding: 50%;
      background-color: gray;
      // font-size: 0;
    }
  }
}
</style>
