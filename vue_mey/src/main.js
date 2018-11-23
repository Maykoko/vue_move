// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'

//导入 mui的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra(1).css'

//因为要像接口发送请求  所以要导入 vue-resource
import vueResource from 'vue-resource'
// 注册
Vue.use(vueResource)

//设置接口根目录
Vue.http.options.root = 'http://www.lovegf.cn:8899/'

//设置时间格式化  全局过滤器  这里只是定义--分页app  用到时才是调用
Vue.filter('setTime', function (msg,str) {
  
  return moment(msg).format(str)
  
})

//定义全局组件 --- 评论组件
var comment = {
  
}

//导入公共的样式
import './css/common.less'

//按需导入 mint-ui 相关的样式
import { Button, Cell, Toast, Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  
  render: h => h(App),
  
  router,
})
