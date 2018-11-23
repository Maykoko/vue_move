<template>
    <div class="newsList_component">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="(itme) in aNewsList"  :key="itme.img_url">
            <router-link :to="'/news_info/'+itme.id">
                <!-- <img class="mui-media-object mui-pull-left" :src="itme.img_url"> -->
                <img class="mui-media-object mui-pull-left" src="../../images/menu3.png">
                <div class="mui-media-body">
                  <!-- 这里的setTime() 相当是调用 -->
                   <p>{{ itme.title }}</p> 
                <!-- <p class='mui-ellipsis'>{{ itme.zhaiyao }}</p> -->
                <span> {{itme.add_time | setTime('YYYY-MM-DD:HH:MM:SS') }}</span>
                <span class="news_click"> 点击{{itme.click}}次</span>
                </div>
            </router-link>
        </li>
      </ul>

     
    </div>  
</template>

<script>

import Toast from "mint-ui";
export default {
  data() {
    return {
      aNewsList: [],
      id: ''
    };
  },
  mounted() {
    this.getNewsList();
  },
 
  methods: {
    getNewsList() {
      this.$http.get("api/getnewslist").then(result => {
        if (result.body.status == 0) {
          this.aNewsList = result.body.message;
          this.id = result.body.message.id
          console.log(this.aNewsList);
        } else {
          Toast("图片获取失败!请重试!");
        }
      });
    }
  },
};
</script>

<style lang="less">
.newsList_component {
  .news_click {
    display: block;
    float: right;
  }
}
</style>
