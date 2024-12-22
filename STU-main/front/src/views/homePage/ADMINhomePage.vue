<template>
  <div>
    <el-carousel :interval="4000" type="card" height="350px">
      <el-carousel-item v-for="(imageName, index) in imageNames" :key="index">
        <img :src="require(`@/assets/${imageName}`)" class="carousel-image" alt="">
      </el-carousel-item>
    </el-carousel>

    <div class="classtable">
      <div class="tit">团队成员</div>
      <hr>
      <div class="text">刘翔 框架搭建与前后端联调</div>
      <div class="text">李约瑟 前端页面设计与美化</div>
      <div class="text">苏浩 后端与数据库功能实现</div>
      <div class="text">王熠 前端功能开发</div>
      <div class="text">刘全越 功能设计与git仓库维护</div>
    </div>
    <div class="classtable">
      <div class="tit">前端技术栈</div>
      <hr>
      <div class="text">vue cli 脚手架</div>
      <div class="text">vue router 路由管理</div>
      <div class="text">vuex 管理工具</div>
      <div class="text">element ECharts 组件库</div>
      <div class="text">TypeScript 编程语言</div>
    </div>
    <div class="classtable">
      <div class="tit">后端技术栈</div>
      <hr>
      <div class="text">springboot 开发框架</div>
      <div class="text">jwt 令牌认证</div>
      <div class="text">mybatis/mybatisplus 持久层框架</div>
      <div class="text">pagehelper/lambok 分页与简化插件</div>
      <div class="text">interceptor/globalException 全局拦截器</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageNames: [
        'img_0.png',
        'img_1.png',
        'img_2.png',
        'img_3.png',
        'img_4.png',
      ]
    };
  }
};
</script>

<style>
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 0px 20px 0px 20px;
}

.classtable {
  margin: 10px 30px 10px 10px;
  padding: 30px 30px 30px 30px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(26, 115, 232, 0.2);
  float: left;
  width: 25%;
  height: 200px;
  margin-left: 5px;
}
.tit{
  font-size: 25px;
  font-weight: bold;
  color: #333;
}
.text{
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  margin-bottom: 10px;
}
</style>