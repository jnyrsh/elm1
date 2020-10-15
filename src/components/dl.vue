<template>
  <div>
    <!-- 头部布局开始 -->
    <van-sticky>
      <div class="header">
        <van-icon name="arrow-left" @click="$router.go(-1)" />
        <p>密码登录</p>
      </div>
    </van-sticky>
    <!-- 头部布局结束 -->

    <van-form>
      <van-field
        v-model="username"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[
        {
          pattern:/^((\+|00)86)?((134\d{4})|((13[0-3|5-9]|14[1|5-9]|15[0-9]|16[2|5|6|7]|17[0-8]|18[0-9]|19[0-2|5-9])\d{8}))$/,
          message:'请输入正确的手机号'
        }
      ]"
      />
      <div id="password">

      <van-field
        v-model="password"
        :type="type"
        label="密码"
        placeholder="请输入密码"
        :rules="[{pattern:/^\d{6}$/,message:'请输入正确密码'}]"
      />
      <div class="switch" @click="swit">
          <app-switch :flag="flag"></app-switch>
      </div>
      </div>
     <!-- 验证码 -->
      <div class="codea">
        <van-field
          v-model="code"
          name="验证码"
          label="验证码"
          placeholder="验证码"
        />
        <div class="code">
          <img :src="src" alt="" />
          <span @click="getCode">看不清 换一张 </span>
        </div>
      </div>
      <!-- 提交按钮 -->
      <div style="margin: 16px;">
        <van-button
          round
          block
          type="primary"
          :disabled="username == '' || password == '' || code == ''"
          @click="sub"
        >
          登录
        </van-button>
      </div>
      <p style="color: red; font-size: 12px; line-height: 18px">
        温馨提示：未注册过的账号，登录时将自动注册
        <br />注册过的用户可凭账号密码登录
      </p>
    </van-form>
  </div>
</template>
<script>
import axios from "axios";
axios.defaults.withCredentials = true;
// switch 开关
import AppSwitch from "./switch";
import { code } from "../utils/api";
export default {
  name: "",
   // 局部注册的组件
  components: { AppSwitch },
  data() {
    return {
      username: "13593594926",
      password: "123456",
      code: "",
      src: "",
      flag: false, //swicth开关
      type: "password", //密码类型
    };
  },
  created() {},
  mounted() {
    // console.log(this.$route.params);
    this.getCode();
  }, //方法
   // 组件方法
  methods: {
    // 获取验证码图片
    async getCode() {
      let res = await code();
      this.src = res.data.code;
    },
    // 登录
    async sub() {
      // 写入cookie
      this.setCookie("cap", this.code, 2);
      this.setCookie("SID", 100, 2);
      let {data} = await axios.post("/api/v2/login", {
        username: this.username,
        password: this.password,
        captcha_code: this.code,
      });
      // console.log(res)
      if (data.id != "") {
        this.$router.push("/wdd?id=" + data.id);
      }
    },
    // 设置cookie
    setCookie(key, value, t) {
      var oDate = new Date();
      oDate.setDate(oDate.getDate() + t);
      document.cookie = key + "=" + value + "; maxAge=" + oDate.toDateString();
    },
    // switch 开关
    swit() {
      this.flag = !this.flag;
      this.flag ? (this.type = "text") : (this.type = "password");
    },
  },
};
</script>
<style scoped lang="scss">
form {
  padding: 10px;
  .van-cell {
    height: 66px;
    line-height: 66px;
    input {
      height: 44px;
    }
  }
}
* {
  padding: 0;
  margin: 0;
}
.header {
  width: 100%;
  height: 60px;
  font-size: 20px;
  background-color: #3190e8;
  color: aliceblue;
  display: flex;
  align-items: center;
  padding: 0 5px;
  box-sizing: border-box;
  p {
    font-size: 24px;
    //   font-weight: 550;
    margin-left: 120px;
  }
}
.codea {
  position: relative;
  .code {
    position: absolute;
    top: 25px;
    right: 16px;
    z-index: 999;
  }
}
#password {
  position: relative;
  .switch {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 999;
  }
}
</style>

