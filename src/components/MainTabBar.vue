<template>
  <!-- 调用组件，通过插槽填充对应的内容 -->
  <tab-bar>
    <tab-bar-item path="/home">
      <template v-slot:item-icon>
        <img src="@/assets/img/home.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/home-active.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <template v-slot:item-icon>
        <img src="@/assets/img/category.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/category-active.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <template v-slot:item-icon>
        <img src="@/assets/img/cart.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/cart-active.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:item-icon>
        <img src="@/assets/img/profile.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/profile-active.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from './tabBar/TabBar.vue'
import TabBarItem from './tabBar/TabBarItem.vue'
export default {
  components:{
    TabBar,
    TabBarItem
  }
}
</script>
