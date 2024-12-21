<template>
  <el-container>
    <el-footer height="50px" class="custom-top">
      <img src="../../public/img/logo.png" alt="TUP Logo" class="footer-logo">
      <div class="footer-right-content">
        <el-button @click="fullScreen()" size="mini" icon="el-icon-full-screen"></el-button>
        <el-button @click="refresh()" size="mini" icon="el-icon-refresh" style="margin-right: 10px"></el-button>
        <template v-if="userInfo.username != '请登录'">
          <span class="footer-text">你好! {{ userInfo.username }}</span>
            <el-button @click="logout()" type="primary" size="mini" class="footer-button"
              icon="el-icon-switch-button"></el-button>
        </template>
        <template v-if="userInfo.username == '请登录'">
          <span class="footer-text">请登录！</span>
          <el-button @click="$router.push('/login')" type="primary" size="mini" class="footer-button-login">登录</el-button>
        </template>

      </div>
    </el-footer>
    <el-container>
      <el-aside width="200px" class="custom-aside" style="background-color: rgb(238, 241, 246)">
        <div class="title-card">
          <h1 class="platform-title">智慧教学管理服务平台</h1>
          <div class="wave-bg"></div>
        </div>
        <div class="menu">
          <el-container v-if="userInfo.type == 1">
            <adminMenu/>
          </el-container>
          <el-container v-if="userInfo.type == 3">
            <stuMenu/>
          </el-container>
          <el-container v-if="userInfo.type == 2">
            <teaMenu/>
          </el-container>
        </div>
      </el-aside>

      <el-container>
        <el-header height=35px class="custom-header" style="text-align: right; font-size: 12px ">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item
            v-for="(item , index) in $route.matched"
            :key="index"
            :to="{ path: item.path }">{{ item.meta.title }}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import stuMenu from './TreeMenu/stuMenu.vue';
import teaMenu from './TreeMenu/teaMenu.vue';
import adminMenu from './TreeMenu/adminMenu.vue';
import { mapMutations } from 'vuex';
import store from '@/store'

export default {
  components: {
    stuMenu,
    teaMenu,
    adminMenu
  },

  methods: {
    ...mapMutations(['Statelogout']),
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    logout() {
      store.state.jwt = '';
      //this.Statelogout();
      store.state.userInfo.username = '请登录';
      this.$router.push('/login');
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    refresh() {
      location.reload();
    },
    fullScreen() {
    }
  },
  computed:
      {
        userInfo() {
          console.log(this.$store.getters.getUserInfo);
          return this.$store.getters.getUserInfo;

        }

      }
}
</script>
<style>
.footer-logo {
  height: 50px; /* 调整logo大小 */
  width: auto;
  object-fit: contain;
}

.footer-right-content {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.footer-text {
  margin-right: 10px;
  font-size: 14px;
  color: #333;
}
.footer-button-login {
  font-size: 12px;
  background-color: #4B8BF4;
  border-color: white;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.footer-button-login:hover {
  border-color: white;
  background-color: #5f99f5;
}
.footer-button {
  font-size: 12px;
  background-color: rgb(255, 0, 51);
  border-color: white;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.footer-button:hover {
  border-color: white;
  background-color: #db5e77;
}

.menu {
  border-radius: 12px;
}

.title-card {
  position: relative;
  height: 80px;
  background: linear-gradient(135deg, #4B8BF4, #1A73E8);
  margin: 4px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(26, 115, 232, 0.2);
}

.platform-title {
  position: relative;
  color: white;
  font-size: 14px;
  margin: 0;
  padding: 20px 0 0 20px;
  z-index: 2;
}

.wave-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.15), transparent);
  transform: skewY(-3deg);
  transform-origin: bottom right;
}

.custom-aside {
  background-color: rgb(238, 241, 246);
  color: #333;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  border-radius: 5px;
  margin: 1px;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
}

.custom-aside:hover {
  border-color: #dcdfe6;
  box-shadow: 2px 0 12px 0 rgba(0, 0, 0, 0.1);
}

.custom-header {
  background-color: white;
  color: #333;
  display: flex;
  align-items: center; /* 垂直居中 */
  padding: 0 20px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  margin: 1px;
  border-radius: 5px;
  border-color: #dcdfe6;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.custom-header:hover {
  border-color: #dcdfe6;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.custom-top {
  background-color: white;
  color: #333;
  display: flex;
  align-items: center; /* 垂直居中 */
  padding: 0 20px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  border-radius: 8px;
  margin: 2px;
  box-shadow:0 4px 12px rgba(0, 0, 0, 0.1);
}

.custom-top:hover {
  border-color: #dcdfe6;
  box-shadow: 0 -2px 12px 0 rgba(0, 0, 0, 0.1);
}

.el-header {
  background-color: #f0f0f0;
  height: 20px;
  color: #333;
  line-height: 60px;
}

.el-footer {
  background-color: white;
  color: #333;
  line-height: 20px;
}

.el-aside {
  color: #333;
}


</style>
  
