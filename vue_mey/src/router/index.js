import Vue from 'vue'
import Router from 'vue-router'

import  home_component from '../page/home/index.vue'
import  member_component from '../page/member/index.vue'
import  search_component from '../page/search/index.vue'
import  shopcar_component from '../page/shopcar/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/', component:home_component
    },
    {
      path:'/home', component:home_component
    },
    {
      path:'/member', component:member_component
    },
    {
      path:'/search', component:search_component
    },
    {
      path:'/shopcar', component:shopcar_component
    },
    
  ]
})
