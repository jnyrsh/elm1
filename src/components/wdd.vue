<template>
  <div>
    <van-sticky>
      <header>
        <router-link to="/wm" class="left" tag="span"><i class="el-icon-arrow-left"></i></router-link>
        <span class="right">我的</span>
      </header>
      <div class="xx">
        <img src="@/assets/00.jpg" alt />
        <div class="dl">
          <p class="p1">15536434567</p>
          <p class="p2">
            <i class="el-icon-phone"></i>
            暂无绑定手机号
          </p>
        </div>
        <p class="p3">
          <i class="el-icon-arrow-right"></i>
        </p>
      </div>
    </van-sticky>
    <div class="p4">
        <img src="@/assets/1.png" alt="">
    </div>
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
    return {};
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
header {
  background: #3190e8;
  width: 100%;
  height: 3.95rem;
  line-height: 3.95rem;
  > .left {
    color: #fff;
    font-size: 32px;
    padding-left: 10px;
  }
  > .right {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-left: 30%;
  }
}
.xx {
  width: 100%;
  height: 5.95rem;
  background: #3190e8;
  padding: 0px 20px;
  display: flex;
  box-sizing: border-box;
  > img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 20px;
  }
  > .dl {
    //   line-height: 2rem;
    > .p1 {
      font-size: 24px;
      color: #fff;
      font-weight: bold;
      margin-left: 5px;
      margin: 0;
      margin-top: 16px;
    }
    > .p2 {
      color: #fff;
      margin: 0;
    }
  }
  > .p3 {
    font-size: 26px;
    color: #fff;
    margin-left: 100px;
  }
}
.p4{
  >img{
    width: 100%;
  }
}
</style>
