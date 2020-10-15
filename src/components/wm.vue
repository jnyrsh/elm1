<template>
  <div>
    <van-sticky>
      <header>
        <router-link to="/ss?id" tag="span" class="ss">
          <i class="el-icon-search"></i>
        </router-link>
        <router-link to="/elm" tag="span" class="span">{{$route.query.name}}</router-link>
        <router-link to="/wdd" tag="span" class="wd">
          <i class="el-icon-user"></i>
        </router-link>
      </header>
    </van-sticky>
    <div class="lb">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="red">
        <van-swipe-item>
          <van-grid :column-num="4">
            <van-grid-item
              v-for="(item,index) in data"
              :key="index"
              :text="item.title"
              v-show="index < 8"
            >
              <template #icon>
                <van-image
                  width="50"
                  height="50"
                  :src="'https://fuss10.elemecdn.com/'+item.image_url"
                />
              </template>
            </van-grid-item>
          </van-grid>
        </van-swipe-item>
        <van-swipe-item>
          <van-grid :column-num="4">
            <van-grid-item
              v-for="(item,index) in data"
              :key="index"
              :text="item.title"
              v-show="index > 7"
            >
              <template #icon>
                <van-image
                  width="50"
                  height="50"
                  :src="'https://fuss10.elemecdn.com/'+item.image_url"
                />
              </template>
            </van-grid-item>
          </van-grid>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="tw">
      <div class="top">
        <i class="el-icon-takeaway-box"></i>
        附近商家
      </div>
      <van-card
        v-for="(item,index) in shop"
        :key="index"
        :thumb="`http://elm.cangdu.org/img/${item.image_path}`"
      >
        <template #title>
          <!-- 头 -->
          <div class="tou">
            <h4>{{item.name}}</h4>
            <p>
              <span v-for="(i,k) in item.supports" :key="k">{{i.icon_name}}</span>
            </p>
          </div>
          <!-- 中 -->
          <div class="zhong">
            <h4>
              <van-rate
                v-model="item.rating"
                allow-half
                void-icon="star"
                void-color="#eee"
                size="10px"
              />
              <span>{{item.rating}} 月销{{ item.recent_order_num}}单</span>
            </h4>
            <p>
              <span>{{item.delivery_mode.text }}</span> |
              <span>准时达</span>
            </p>
          </div>
          <!-- 尾 -->
          <div class="wei">
            <h4>{{`￥${item.float_minimum_order_amount}起送/${item.piecewise_agent_fee.tips }`}}</h4>
            <p>{{`${item.distance}/${item.order_lead_time}`}}</p>
          </div>
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
import { getNav, getShop } from "../utils/api";
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
      lb: [],
      data: {},
      shop: []
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    async getNav() {
      this.data = JSON.parse(localStorage.getItem('placeHistory'))[0]
      let res = await getNav();
      console.log(res);
      this.data = res.data;
    },
    async getShop() {
      let res = await getShop();
      console.log(res);
      this.shop = res.data;
    }
  },
  mounted() {
    this.getNav();
    this.getShop();
    // console.log(this.$route.query.data)
  }
};
</script> 


 <style lang="scss" scoped>
body,
html {
  height: 100%;
//   width: 100%;
  background-color: #f5f5f5;
}
header {
  width: 100%;
  background: #3190e8;
  height: 60px;
  padding: 18px 12px 0 12px;
// display: flex;
// justify-content: space-between;
  box-sizing: border-box;
//   align-items: center;
>.span{
    margin-left: 60px;
    color: #fff;
    font-weight: bold;
}
  > .ss {
    font-size: 26px;
    color: #fff;
  }
  > .wd {
    font-size: 26px;
    color: #fff;
    float: right;
  }
}
.tw {
  width: 100%;
  margin-top: 15px;
  > .top {
    width: 100%;
    height: 40px;
    // background: yellow;
    color: #999;
    font-size: 16px;
    padding-left: 10px;
    box-sizing: border-box;
    line-height: 40px;
    > .el-icon-takeaway-box {
      width: 0.8rem;
      height: 0.8rem;
      color: #999;
      margin-right: 6px;
    }
  }
}
.my-swipe {
  width: 100%;
}
.tou,
.zhong,
.wei {
  display: flex;
  justify-content: space-between;
}
.tou {
  margin-top: 5px;
  h4 {
    font-weight: normal;
    font-size: 16px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 180px;
  }
  p {
    font-size: 10px;
    color: #ccc;
    span {
      margin-left: 3px;
      font-size: 8px;
    }
  }
}
.zhong {
  margin-top: 14px;
  h4 {
    font-weight: normal;
    font-size: 10px;
    color: #aaa;
  }
  p {
    span {
      font-size: 8px;
    }
  }
}
.wei {
  margin-top: 15px;

  h4 {
    font-weight: normal;
    font-size: 10px;
  }
  p {
    font-size: 8px;
  }
}
</style>
