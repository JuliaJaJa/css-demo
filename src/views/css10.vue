<!--
 * @Descripttion: 
 * @Author: huyi2
 * @Date: 2021-08-11 17:46:40
 * @LastEditors: huyi2
 * @LastEditTime: 2021-08-12 11:15:55
-->
<template>
  <div class="container">
    <h4>10-1</h4>
    <h4>div高度是由行高决定的，而非文字。</h4>
    <div class="lineHeight">高度</div>
    <br/>
    <div class="lineHeight2">高度</div>
    <h4>非替换内联元素</h4>
    <!-- <span class="lineHeight3">内容高度</span> -->
    <h4>10-2 幽灵空白节点导致</h4>
    <div class="box"> 
      <span class="box_span">内容...</span> 
    </div>
    <div class="box2"> 
      <span class="box_span2">内容...</span> 
    </div>
    <div class="box3"> 
      x<span class="box_span3">文字内容x</span> 
    </div>
    <h4>10-3 vertical-align 的百分比值是相对于 line-height 计算的</h4>
    <div class="box4"> 
      <span class="box_span4">文字内容</span> 
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 300px;
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
  .lineHeight3 {
    line-height: 24px;
  }
  .box {
    line-height: 20px;
    background: pink;
    margin-bottom: 10px;
  }
  .box_span {
    line-height: 96px;
  }
  .box2 {
    line-height: 96px;
    background: pink;
    margin-bottom: 10px;
  }
  .box_span2 {
    line-height: 20px;
  }
  .box3 {
    line-height: 32px;
    // font-size: 24px;
    background: pink;
  }
  .box_span3 {
    font-size: 24px;
  }
  .box4 {
    line-height: 20px;
    background: pink;
  }
  .box_span4 {
    font-size: 20px;
    // vertical-align: -5px;
    vertical-align: -25%;
  }
}
</style>