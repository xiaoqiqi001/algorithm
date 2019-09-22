<template>
  <div class="tree-item">
    <div class="basic-wrapper">
      <div class="basic-style left1">
        <div class="element"></div>
      </div>
      <div class="basic-style left2">
        <div class="element"></div>
      </div>
      <div class="basic-style right1">
        <div class="element"></div>
      </div>
      <div class="basic-style right2">
        <div class="element"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang='scss'>
  .tree-item {
    width: 800px;
    min-height: 100px;
    border: 1px solid pink;
    padding: 0 80px;
    .basic-wrapper {
      position: relative;
      width: 30px;
      height: 30px;
      background: #f9f;
      border-radius: 50%;
    }
    .left1 {
      transform:rotate(50deg);
      left: -30px;
    }
    .left2 {
      transform:rotate(25deg);
    }
    .right1 {
      transform:rotate(-25deg);
      left: 30px;
    }
    .right2 {
      transform:rotate(-50deg);
      left: 60px;
    }
    .basic-style {
      top: 8px;
      height: 88px;
      width: 1px;
      background: #f9f;
      position: absolute;
      .element {
        height: 30px;
        width: 30px;
        background: #f9f;
        position: absolute;
        border-radius: 50%;
        bottom: -20px;
        left: -15px;
      }
    }
  }
</style>