<!--
 * @Descripttion: 
 * @Author: huyi2
 * @Date: 2021-08-10 19:57:11
 * @LastEditors: huyi2
 * @LastEditTime: 2021-08-13 15:30:25
-->
<template>
  <div class="container">
    <h4>相邻兄弟元素合并</h4>
    <h4>合并计算规则: 正正取大值 正负值相加 负负最负值</h4>
    
    <p class="block">第一行</p>
    <p class="block2">第二行</p>

    <h4>父级和第一个/最后一个子元素合并</h4>
    <div class="father">
      <div class="son">son</div> 
    </div>

    <h4>空块级元素的margin合并</h4>
    <div class="father2"> 
      <div class="son2"></div>
    </div>

    <h4>创建bfc 防止margin合并</h4>
    <p class="block">第一行</p>
    <div class="bfc">
      <p class="block2">第二行</p>
    </div>
    
  </div>
</template>

<style lang="less" scoped>
.container {
  .bfc {
    overflow: hidden;
  }
  .block {
    text-align: center;
    line-height: 50px;
    width: 100px;
    height: 50px;
    margin: 10px 0;
    background: pink;
  }
  .block2 {
    text-align: center;
    line-height: 50px;
    width: 100px;
    height: 50px;
    margin: 20px 0;
    background: pink;
  }
  .father {
    width: 100px;
    background: pink;
  }
  .son {
    margin-top: 80px;
  }
  .father2 {
    overflow: hidden; // 使div块状化
    background: pink;
  }
  .son2 {
    margin: 10px 0;
  }
}
</style>