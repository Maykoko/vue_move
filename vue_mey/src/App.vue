<template>
<div class="app_index">

  <!--头部 -->
  <mt-header fixed title="May"></mt-header>
  <!-- 底部 -->
  　<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
  <!-- 中间内容部分 -->
  <router-view>

  </router-view>
  </div>
</template>

<script>
</script>
  
<style lang="less">
   .app_index {
      padding-top: 40px;
      padding-bottom: 50px;
   } 
</style>

