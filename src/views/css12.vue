<!--
 * @Descripttion: 
 * @Author: huyi2
 * @Date: 2021-08-11 17:47:30
 * @LastEditors: huyi2
 * @LastEditTime: 2021-08-12 14:50:57
-->
<template>
  <div class="container">
    <h4>12-1 position:absolute 单独使用, 无依赖绝对定位, 具有相对定位特性且不占据空间</h4>
    <div>
      <img src="../assets/top1.png" class="top1" />
      <img src="../assets/logo.png" />      
    </div>
    <h4>12-2 兼容性好</h4>
    <h4>设想一下，如果给父元素设置 position:relative，然后 right/top 定位，文字长度一旦发生变化，CSS 代码就要重新调整，维护成本显然要比单独使用absolute高了很多。</h4>
    <div>
      <span>
        导航12312312312312
        <i class="icon-arrow"></i>
      </span>
    </div>
    <h4>12-3 虽然说元素 position:absolute 后的 display 计算值都是块状的，但是其定位的位置和没有设置 position:absolute 时候的位置相关</h4>
    <div class="container2">
      <h3>标题<span class="follow">span</span></h3> 
      <h3>标题<div class="follow">div</div></h3>
    </div>
    <div class="container2">
      <h3>标题</h3><span class="follow">span</span> 
      <br/>
      <h3>标题</h3><div class="follow">div</div>
    </div>
    <h4>12-4 加上对立方向属性</h4>
    <h4>absolute对立方向同时发生定位的时候，元素具有流体特性，可以使用margin：auto使元素居中</h4>
    <div class="container3">元素居中</div>
  </div>
</template>

<style lang="less" scoped>
.container {
  .top1 {
    position: absolute;
  }
  .icon-arrow { 
    position: absolute; 
    width: 12px; height: 13px; 
    margin: -6px 0 0 2px; 
    background: url('../assets/new.png') no-repeat center;
  }
  .container2 {
    width: 200px;
    height: 200px;
    border: 1px solid black;
    .follow {
      position: absolute;
    }
  }
  .container3 {
    border: 1px solid black;
    width: 200px;
    height: 100px; 
    position: absolute; 
    left: 0; right: 0;
    margin: auto;
  }
}
</style>