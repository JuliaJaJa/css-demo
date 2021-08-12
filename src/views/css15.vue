<!--
 * @Descripttion: 
 * @Author: huyi2
 * @Date: 2021-08-11 21:17:04
 * @LastEditors: huyi2
 * @LastEditTime: 2021-08-12 17:46:14
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
  </div>
</template>

<style lang="less" scoped>
.container {
  
}
</style>