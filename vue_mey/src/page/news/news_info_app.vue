<template>

  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{ aNewsInfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ aNewsInfo.add_time | setTime }}</span>
      <span>点击：{{ aNewsInfo.click }}次</span>
    </p>

    <hr>

    
    <!-- 内容区域 -->
    <div class="content" v-html="aNewsInfo.content"></div>

    <!-- 评论子组件区域 -->
    <!-- <comment-box :id="this.id"></comment-box> -->
  </div>
</template>

<script>
import { Toast } from "mint-ui";
// import comment from "../../common_app/comment_app"

export default {
  data() {
    return {
      id: this.$route.params.id,
     aNewsInfo : {}

    };
  },
  created() {
    this.getNew()
  },
  methods: {
    getNew() {

      this.$http.get("api/getnew/" + this.id).then(result => {
      
        this.aNewsInfo = result.body.message[0]
        // console.log(this.aNewsInfo);
        
        
        
      });
    }
  },
  components: {
    // 用来注册子组件的节点
    // "comment-box": comment
  }
}
</script>

<style lang="less">
.news-info-container {
  padding: 0 10px;
  .title {
    font-size: 14px;
    font-weight: bold;
    color: #26a2ff;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    font-size: 12px;
    color: #26a2ff;
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>
