<!--
 * @Descripttion: 
 * @Author: huyi2
 * @Date: 2021-08-11 21:16:56
 * @LastEditors: huyi2
 * @LastEditTime: 2021-08-12 16:22:31
-->
<template>
  <div class="container">
    <div class="father"> 
      <div class="right"> 
      &nbsp;<div class="son"></div> 
      </div> 
    </div> 

  </div>
</template>

<style lang="less" scoped>
.container {
  .father { 
    width: 300px;
    height: 200px; 
    position: relative; 
    background: #eeeeee;
  } 
  .right { 
    height: 0; 
    text-align: right; 
    overflow: hidden; 
  } 
  .son { 
    display: inline; 
    width: 40px; height: 40px; 
    position: fixed; 
    margin-left: -40px;
    background: pink;
  }
}
</style>