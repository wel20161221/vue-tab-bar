<template>
  <!-- 控制整个tab-bar显示的位置，以及内部的布局方式 -->
  <!-- 内容用插槽动态填充 -->
  <div class="tab-tar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  }
}
</script>
<style lang="less" scoped>
.tab-tar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  box-shadow: 0 -1px 1px rgba(100,100,100,.2);
}
</style>