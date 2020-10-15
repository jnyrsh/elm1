<template>
<div>
       <header>
        <router-link to="/wm" class="left" tag="span"><i class="el-icon-arrow-left"></i></router-link>
        <span class="right">订单列表</span>
      </header>
</div>
</template>

<script>
export default {
  // 组件名称
  name: 'demo',
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
  // 组件状态值
  data () {
   return {}
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {},
  mounted () {
  },

}
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
</style>
