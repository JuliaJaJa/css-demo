<!--
 * @Descripttion: 
 * @Author: huyi2
 * @Date: 2021-08-11 21:17:11
 * @LastEditors: huyi2
 * @LastEditTime: 2021-08-11 21:19:46
-->
<template>
  <div class="container">
    <ol>
      <li>列表</li>
      <li class="dn">列表</li>
      <li>列表</li>
      <li>列表</li>
    </ol>
    <ol>
      <li>列表</li>
      <li class="vh">列表</li>
      <li>列表</li>
      <li>列表</li>
    </ol>
  </div>
</template>

<style lang="less" scoped>
.container {
  .vh {
    visibility: hidden;
  }
  .dn {
    display: none;
  }
  ol {
    border: 1px solid;
    margin: 1em 0;
    counter-reset: test;
  }
  li:after {
    counter-increment: test;
    content: counter(test);
  }
}
</style>