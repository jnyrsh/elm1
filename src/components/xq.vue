<template>
  <div>
    <header>
      <span class="left" @click="$router.go(-1)"><i class="el-icon-arrow-left"></i></span>
      <span class="zj">{{articleInfo}}</span>
      <router-link to="/elm" tag="span" class="right">切换城市</router-link>
    </header>
     <!-- 搜索 -->
    <van-search
      v-model="keyword"
      placeholder="请输入学校.商务楼.地址"
      input-align="center"
    />
    <van-button type="info" block @click="sub">搜索</van-button>
    <!-- 搜索列表 -->
    <ul v-show="list.length != 0">
      <li
        v-for="(item, index) in list"
        :key="index"
        @click="addplaceHistory(item)"
      >
        <h4>{{ item.name }}</h4>
        <p>{{ item.address }}</p>
      </li>
    </ul>
    <!-- 搜索历史 -->
    <div class="placeHistory" v-show="list.length == 0">
      <h3>搜索历史</h3>
      <ul v-show="placeHistory != 0">
        <li @click="dj(item)" v-for="(item, index) in placeHistory" :key="index">
          <h4>{{ item.name }}</h4>
          <p>{{ item.address }}</p>
        </li>
        <p class="qk" @click="placeHistory = []">清空所有</p>
      </ul>
    </div>
  </div>
</template>

<script>
import { detail, search } from "../utils//api";
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
        articleInfo:"",
         keyword: "", // 搜索关键字
      list: [], //搜索列表
      // 搜索历史
      placeHistory: JSON.parse(localStorage.getItem("placeHistory")) || [],
    };
  },
  created() {
    this.list = []; // 默认搜索列表为空
    // 获取用户信息
    this.articleInfo =  this.$route.query.id;
    console.log(this.articleInfo)
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {
        placeHistory: {
      deep: true,
      handler(newValue, oldValue) {
        localStorage.setItem("placeHistory", JSON.stringify(newValue));
      },
    },
  },
  // 组件方法
  methods: {
    // getArticleInfo() {
    //   this.$axios
    //     .get("http://elm.cangdu.org/v1/cities/" + this.$route.query.id)
    //     .then(res => {
    //       console.log(res);
    //       if (res.status == 200) {
    //         this.articleInfo = res.data.name;
    //       }
    //     });

    // },
        // 搜索事件
    async sub() {
      let { data } = await search(this.$route.query.id, this.keyword);
      this.list = data;
      console.log(data);
    },
    // 添加历史记录
    addplaceHistory(data) {
      let a = this.placeHistory.some((item) => {
        return item.name.includes(data.name);
      });
      // console.log(a);
      // 判断历史记录是否有该数据 并且长度不超过五
     let index =  this.placeHistory.findIndex(item=>{
        return item.name.includes(data.name)
      })
      if(index != -1){

        if (!a) {
          if (this.placeHistory.length >= 5) {
            this.placeHistory.pop();
          }
          this.placeHistory.unshift(data);
        }
        // console.log(this.placeHistory);
        // 写入本地储存
        localStorage.setItem("placeHistory", JSON.stringify(this.placeHistory));
        console.log(data)
      }else{
        this.placeHistory.splice(index,1)
        this.placeHistory.unshift(data)
      }


      this.$router.push({
        path:'/wm',
        query:{
           name:data.name
        }
      });
    },
    dj(){

    }
  },
  mounted() {
      // this.getArticleInfo();
  }
};
</script> 
<style lang="scss" scoped>
header {
  width: 100%;
  height: 66px;
  background: #3190e8;
  line-height: 66px;
  color: #fff;
  .left {
    float: left;
    padding-left: 10px;
    font-size: 20px;
  }
  .zj {
    font-size: 18px;
    font-weight: bold;
    margin-left: 170px;
  }
  .right {
    float: right;
    padding-right: 10px;
    font-size: 16px;
  }
}
h3{
  margin-bottom: 10px;
}
ul {
  list-style: none;
  box-sizing: border-box;
  padding: 0 20px;
  li {
    border-bottom: 1px solid #ccc;
    margin-bottom: 8px;
  }
  >.qk{
    width: 80px;
    line-height: 30px;
    text-align: center;
    background: palegoldenrod;
  }
}
</style>
