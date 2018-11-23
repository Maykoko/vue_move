import Vue from 'vue'
import Router from 'vue-router'

import  home_component from '../page/home/home_app.vue'
import  member_component from '../page/member/member_app.vue'
import  search_component from '../page/search/search_app.vue'
import  shopcar_component from '../page/shopcar/shopcar_app.vue'
import  news_list_component from '../page/news/news_list_app.vue'
// import  news_info_component from '../page/news/news_info_app.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/', redirect:'/home'},
    {path:'/home', component:home_component},
    {path:'/member', component:member_component},
    {path:'/search', component:search_component},
    {path:'/shopcar', component:shopcar_component},
    {path:'/news_list', component:news_list_component},
    // {path:'/news_info', component:news_info_component},
    
    
  ]
})
