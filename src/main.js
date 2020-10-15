import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './utils/request'

Vue.prototype.$http =http

import axios from "axios"
Vue.prototype.$axios = axios


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);



Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
