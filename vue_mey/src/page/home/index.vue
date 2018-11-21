<template>
  <div class="home_component">
    <mt-swipe :auto="4000">
  <mt-swipe-item>
    <a href="#">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542817260820&di=32adc2fb3a535fb9b78105ec8eeaae7c&imgtype=0&src=http%3A%2F%2Fimg3.cache.netease.com%2Fphoto%2F0008%2F2014-01-14%2F9IIDSTCO29GB0008.jpg" alt="">
    </a>
  </mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
<p>111</p>
    
  </div>
  
</template>

<script>

export default {
  //在使用钩子函数调用 get_banner
  created() {
    get_banner()
  },

  //利用 vue-resource 来发送请求后台数据
  //**为了我们设置了接口根目录 */
  methods: {
    get_banner() {
      // GET /someUrl
      this.$http.get("/someUrl").then(
        response => {
          // get body data
          this.someData = response.body;
        },
        response => {
          // error callback
        }
      );
    }
  }
};
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
}
</style>
