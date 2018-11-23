<template>
  <div class="home_component">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in arr_imglist" :key="index">
          <a :href="item.url">
              <img :src="item.img">
          </a>
    </mt-swipe-item>
</mt-swipe>
<!-- 网格导航 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/news_list">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu2.png" alt="">
              <div class="mui-media-body">图片分享</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu3.png" alt="">
              <div class="mui-media-body">商品购买</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu4.png" alt="">
              <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu5.png" alt="">
              <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu6.png" alt="">
              <div class="mui-media-body">联系我们</div></a></li>
  </ul> 
  </div>
  
</template>

<script>
import { Toast } from "mint-ui";

export default {
  //在使用钩子函数调用 get_banner

  //利用 vue-resource 来发送请求后台数据
  //**为了我们设置了接口根目录 */
    data() {
      return {
        arr_imglist: []
      };
    },
    created() {
      this.getBanner();
    },
    methods: {
      getBanner() {
        // GET /someUrl
        this.$http.get("api/getlunbo").then(response => {
          // console.log(response.body.message);
          this.arr_imglist = response.body.message;
   
        });
      }
    }
  }
</script>

<style lang="less">
.home_component {
  .mint-swipe-items-wrap {
    height: 200px;
    a {
      display: block;
      height: 100%;
      width: 100%;
      img {
        display: block;
        height: 100%;
        width: 100%;
      }
    }
  }

   // 九宫格样式
  .mui-grid-view {
    background-color: #fff;
    border: none;
    .mui-table-view-cell {
      border: none;
      img {
        width: 60px;
        height: 60px;
      }
      .mui-media-body {
        font-size: 13px;
      }
    }
  }
}
</style>
