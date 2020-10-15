<template>
  <div>
    <router-view/>


    <van-tabbar v-model="active" router="true">
      <van-tabbar-item to="/wm" icon="home-o">外卖</van-tabbar-item>
      <van-tabbar-item to="/ss" icon="search">搜索</van-tabbar-item>
      <van-tabbar-item to="/dd" icon="friends-o">订单</van-tabbar-item>
      <van-tabbar-item to="/wdd" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
        active: 0,
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {},
  mounted() {}
};
</script> 

<style lang="scss" scoped>

</style>
