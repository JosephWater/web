pm <template>
  <el-container>
    <!-- head -->
  <el-header>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
            
          
  </el-header>
  <el-container>
    <!-- aside -->
    <el-aside width="200px">
    <router-link to="/STUmainPage" style="text-decoration:none"><el-menu-item index="1-4">学生主页</el-menu-item></router-link>
      <el-container v-if="userInfo.type == 1">
        <adminMenu />
      </el-container>
      <el-container v-if="userInfo.type == 3">
        <stuMenu />
      </el-container>
      <el-container v-if="userInfo.type == 2">
        <teaMenu />
      </el-container> 
    </el-aside>
    <!-- main -->
    <el-main>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <router-view></router-view>
    </el-main>
  </el-container>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-container>
</template>
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
<style>
.el-header {
   display: flex;  
    justify-content: center;  
    align-items: center;
    height: 100%;
    background:white;  
    color: #ffffff;  
    font-size: 30px;  
 
  }
  
</style>