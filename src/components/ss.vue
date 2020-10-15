<template>
<div>
    <header>
        <router-link to="/wm" class="left" tag="span">
        
        </router-link>
        <span class="right" @click="btn">搜索</span>
      </header>
      <div class="ss">
          <van-search
          class="input"
      v-model="keyword"
      placeholder="请输入商家或美食名称"
      input-align="center"
    />
    <el-button class="btn" type="primary">提交</el-button>
      </div>
</div>
</template>

<script>
import axios from 'axios'
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
  methods: {
  },
  mounted () {
  },
}
</script> 


<style lang="scss" scoped>
body,html{
    background-color: #e4e4e4;
    width: 100%;
}
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
.ss{
    width: 100%;
    height: 80px;
    // background: #e4e4e4;
    display: flex;
    // line-height: 80px;
    >.input{
        width: 80%;
        height: 70px;
    }
    >.btn{
        width: 80px;
        height: 38px;
        margin-top: 15px;
    }
}
</style>
