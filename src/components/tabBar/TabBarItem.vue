<template>
  <!-- 封装item，要填充什么图片/动态图片、文字也是用插槽动态填充，这里只要设置好样式 -->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    // 接收路由path
    path: String,
    // 接收激活item字体的颜色
    activeColor: {
      type: String,
      default: () => 'red'
    }
  },
  data(){
    return{}
  },
  computed:{
    // item是否激活判断
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    // item字体样式
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods:{
    // 单击item触发的事件处理
    itemClick(){
      // 跳转路由
      this.$router.replace(this.path).catch(err => console.log(err));
    }
  }
}
</script>
<style lang="less" scoped>
.tab-bar-item{
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
  img{
    height: 24px;
    width: 24px;
    vertical-align: middle;
    margin: 2px 0;
  }
}
</style>
