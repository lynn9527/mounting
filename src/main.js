// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'jquery'
import qs from 'qs'
import axios from 'axios'
Vue.prototype.$http=axios;
Vue.prototype.$qs=qs;



//在main.js中定义一个全局函数
Vue.prototype.getConfigJson=function(){
  this.$http.get("serverconfig.json").then((result)=>{
    //用一个全局字段保存ApiUrl 也可以用sessionStorage存储
    Vue.prototype.BASE_API=result.body.BASE_API;
  }).catch((error)=>{console.log(error)});
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App),
  components: { App },
  template: '<App/>'
})
