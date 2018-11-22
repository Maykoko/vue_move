<template>
  <div class="home_component">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in arr_imglist" :key="index">
          <a :href="item.url">
              <img :src="item.img">
          </a>
    </mt-swipe-item>
</mt-swipe>
<!-- <p>{{arr_imglist.toString()}}</p> -->
    
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
      this.get_banner();
    },
    methods: {
      get_banner() {
        // GET /someUrl
        this.$http.get("api/getlunbo").then(response => {
          // console.log(response.body.message);
          this.arr_imglist = response.body.message;
          console.log(this.arr_imglist);
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
