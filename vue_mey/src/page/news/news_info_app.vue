<template>
  <div class="news_info_component">
    <h1>新闻详情页</h1>

     <!-- 历史评论内容区域 -->
      <div class="content"></div>
      <!-- 评论发表区域 -->
      <comment> </comment>
  </div>
</template>

<script>
//导入评论功能组件
import comment from "../../common_app/comment_app";

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    comment
  }
};
</script>

<style lang="less">
</style>

