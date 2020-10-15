<template>
  <div>
    <!-- <div ref="obtain"></div> -->
    <van-sticky>
      <header>
        <span class="left">ele.me</span>
        <!-- <div slot="right" v-show="id != 0"><van-icon name="manager-o" /></div> -->
        <router-link to="/dl" tag="span" class="right" >登录|注册</router-link>
        <div @click="topto" v-show="top >= 600">单击回到顶部</div>
      </header>
    </van-sticky>
    
    <nav>
      <div class="top">
        <span class="dq">当前定位城市:</span>
        <span class="dw">定位不准时,请在城市列表中选择</span>
      </div>
      <a href="#">
      <router-link :to="'/xq?id='+ guess.name" tag="span" class="df">{{ guess.name }}</router-link>
       <!-- <p class="df" @click="$router.push('/xq?id=' + guess.id)">{{ guess.name }}</p> -->
      <router-link :to="'/xq?id='+ guess.name" tag="span" class="jt">></router-link>
      </a>
    </nav>

    <section class="aaa">
      <h4>热门城市</h4>
      <ul>
        <li v-for="(item,index) in hot" :key="index">
              <router-link class="li1" :to="'/xq?id='+item.name">{{item.name}}</router-link>
        </li>
      </ul>
    </section>
    <div class="xh">
      <ul>
        <li v-for="(a,b) in d" :key="b"><a :href="'#'+a">{{a}}</a></li>
      </ul>
    </div>
    <section class="hot">
      <ul class="ul">
        <li class="li" v-for="(item,index) in citys" :key="index">
          <h4 class="h4" :id="index">{{index}}</h4>
          <router-link class="li2" v-for="(s,k) in item" :key="k" :to="'/xq?id='+s.name">{{s.name}}</router-link>
          <!-- <span ></span> -->
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import {ajaxCity} from '../utils/api'
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
      data: [],
      hot: [],
      citys: {},
      guess:{},
      d:[],
      top:0,
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    async ajaxGuess(){
      let { data } = await ajaxCity("guess")
      this.guess = data
    },
    sstop(){
      this.top = document.documentElement.scrollTop;
      console.log(this.top)
    },
    topto(){
      document.documentElement.scrollTop = 0;
    }

  },

  async mounted() {
    this.$axios.get("http://elm.cangdu.org/v1/cities?type=hot").then(red => {
      console.log(red);
      this.hot = red.data;
    });
    let res = await this.$axios
      .get("http://elm.cangdu.org/v1/cities?type=group")
      // .then(res => {
        let city =res
        console.log(res);
        Object.keys(res.data)
          .sort()
          .map(index => {
            return (this.citys[index] = res.data[index]);
          });
        this.$set(this.citys);
        this.d = Object.keys(res.data).sort()
        console.log(this.citys);
      // });
    // 滚动条的获取
    // window.addEventListener("scroll", this.handleScrollx, true);
    this.ajaxGuess();
     window.addEventListener('scroll',this.sstop,true);
    
  },

};
</script> 


<style lang="scss"  scoped>
div {
  background: #f5f5f5;
}
header {
  width: 100%;
  height: 66px;
  background: #3190e8;
  line-height: 66px;
  color: #fff;
  font-size: 20px;
  .left {
    float: left;
    padding-left: 20px;
  }
  .right {
    float: right;
    padding-right: 20px;
  }
  >div{
    background: #3190e8;
  }
}
nav {
  border-top: 1px solid #e4e4e4;
  background: #fff;
  margin-bottom: 0.4rem;
  .top {
    display: flex;
    justify-content: space-between;
    line-height: 2.45rem;
    background: #fff;
    height: 2.45rem;
    padding: 0.45rem;
    // border-bottom: 1px splid #ccc;
    .dq {
      font-size: 16px;
      color: #666;
    }
    .dw {
      font-weight: 900;
      font-size: 17px;
      color: #9f9f9f;
    }
  }
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.8rem;
    padding: 0.65rem;
    border-top: 1px solid #e4e4e4;
    border-bottom: 2px solid #e4e4e4;
    .df {
      color: #3190e8;
      font-size: 22px;
    }
    .jt {
      color: #999;
      font-size: 22px;
    }
  }
}
.aaa {
  background: #fff;
  //   margin-bottom: 0.4rem;
  h4 {
    margin: 0;
    color: #666;
    height: 2.65rem;
    line-height: 2.65rem;
    background: #fff;
    font-weight: 400;
    text-indent: 0.65rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font-size: 18px;
  }
  > ul {
    background: #fff;
    >li{
      >.li1 {
      float: left;
      text-align: center;
      border-bottom: 0.025rem solid #e4e4e4;
      border-right: 0.025rem solid #e4e4e4;
      width: 25%;
      height: 2.75rem;
      line-height: 2.75rem;
      font-size: 16px;
      color: #3190e8;
      box-sizing: border-box;
    }
    }
  }
}
.hot {
  background: #fff;
  > .ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    > .li {
      > .h4 {
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        margin: 0;
        background: #e4e4e4;
        padding-left: 15px;
      }
      display: flex;
      flex-wrap: wrap;

      >.li2 {
        display: block;
        width: 33.2%;
        border-bottom: 0.5px solid #e4e4e4;
        border-right: 0.5px solid #e4e4e4;
        text-align: center;
        height: 3rem;
        line-height: 3rem;
        color: #666;
      }
      // width: 100px;
      // color: #666;
      // float: left;/
      // text-align: center;
      // border-bottom: .025rem solid #e4e4e4;
      // height: 1.75rem;
    }
  }
}
.xh{
  position: fixed;
  top: 35%;
  right: 0;
}
</style>
