<template>
  <div class="container">
    <h4>width:auto</h4>
    <div class="nav">
      <a href="" class="nav-a">导航1</a>
      <a href="" class="nav-a">导航2</a>
      <a href="" class="nav-a">导航3</a>
    </div>
    <h4>width:100%</h4>
    <div class="nav">
      <a href="" class="nav-a width">导航1</a>
      <a href="" class="nav-a width">导航2</a>
      <a href="" class="nav-a width">导航3</a>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 240px;
  margin: 0 auto;
}
.width {
  width: 100%;
}
.nav {
  background-color: #FDE6CC;
}
.nav-a {
  // width: 200px;
  // box-sizing: border-box;
  display: block;
  margin: 0 10px;
  padding: 9px 10px;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  color: black;
}
.nav-a:first-child { border-top: 0; }
.nav-a + .nav-a + .nav-a { border-bottom: 0;}
</style>