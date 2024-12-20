<template>
<el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-container v-if="userInfo.type == 1">
            <adminMenu />
        </el-container>
        <el-container v-if="userInfo.type == 3">
            <stuMenu />
        </el-container>
        <el-container v-if="userInfo.type == 2">
           <teaMenu />
        </el-container> -->            
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
  <style>
    .el-header {
      background-color: #B3C0D1;
      color: #333;
      line-height: 60px;
    }
    
    .el-aside {
      color: #333;
    }
  </style>
  
  <script>
import stuMenu from './TreeMenu/stuMenu.vue';
import teaMenu from './TreeMenu/teaMenu.vue';
import adminMenu from './TreeMenu/adminMenu.vue'; 
export default {
  components:{
    stuMenu,
    teaMenu,
    adminMenu
  },
  
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    computed:
        {   
          userInfo(){
            console.log(this.$store.getters.getUserInfo);
            return this.$store.getters.getUserInfo;
            
        }

      }
}
</script>