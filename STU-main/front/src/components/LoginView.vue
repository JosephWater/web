<template>
  <div class="login-container">
    <div class="login-box">
      <h2 class="login-title">欢迎登录</h2>
      <el-form
          :model="loginForm"
          :rules="rules"
          ref="loginForm"
          label-width="100px"
          class="login-form"
          label-position="top"
          text-align: left

      >
        <el-form-item label="用户名" prop="username" class="custom-username-field">
          <el-input
              v-model="loginForm.username"
              prefix-icon="el-icon-user"
              autocomplete="off"
              class="input-with-focus"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
              type="password"
              v-model="loginForm.password"
              prefix-icon="el-icon-lock"
              autocomplete="off"
              class="input-with-focus"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
              type="primary"
              @click="submitForm('loginForm')"
              class="login-button">登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
<!--    <div class="login-box2">
      <h2 class="login-title">注册</h2>
      <el-form :model="form">
        <el-form-item label="身份">
          <el-select v-model="form.type" placeholder="请选择身份">
            <el-option label="教师" value="1"></el-option>
            <el-option label="学生" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="平时成绩">
          <el-input v-model="form.score1"></el-input>
        </el-form-item>
        <el-form-item label="平时成绩">
          <el-input v-model="form.score1"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
              type="primary"
              @click="submitForm('loginForm')"
              class="login-button">登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>-->
  </div>
</template>

<script>
import {login} from "../api/login.ts";

export default {
  data() {
    return {
      form: {
        score1: '',
        score2: '',
        type:''
      },
      loginForm: {
        username: "",
        password: "",
        hover: false
      },
      rules: {
        username: [
          {required: true, message: "请输入用户名", trigger: "blur"},
        ],
        password: [{required: true, message: "请输入密码", trigger: "blur"}],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          try {
            // 1. 使用封装的登录方法
            const loginRes = await login(this.loginForm);
            if (loginRes.data.code === 1) {
              // 2. 保存JWT
              this.$store.commit('setJwt', loginRes.data.data.jwt);
              localStorage.setItem('jwt', loginRes.data.data.jwt);
              // 4. 保存用户信息
              this.$store.commit('setUserInfo', loginRes.data.data);
              // 5. 跳转
              this.$router.push('/container/HomePage');
              console.log(loginRes.data);
            } else {
              this.$alert("用户名或密码错误", "", {
                confirmButtonText: "确定"
              });
            }
          } catch (error) {
            console.error('登录失败:', error);
            this.$alert("登录失败，请稍后重试", "", {
              confirmButtonText: "确定"
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.login-container {
  background-image: url(../assets/pika.png);
  background-size: cover;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.login-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
  filter: blur(8px);
}

.background-image {

  width: 100%;
  height: 100%;
  object-fit: cover;
}

.login-box {

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.541);
  border-radius: 12px;
  text-align: center;
  z-index: 1;
}

.login-box2 {

  position: absolute;
  top: 50%;
  left: 64%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 381px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.541);
  border-radius: 12px;
  text-align: center;
  z-index: 1;
}

.login-title {
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: bold;
  color: #333;
}

.login-form .el-form-item {
  font-size: 10px;
  margin-bottom: 24px;
  text-align: left;
}

.login-form.el-form-item__label {
  font-size: 100px;
  font-weight: bold; /* 可选：设置字体粗细 */
  color: #09fb36; /* 可选：设置字体颜色 */
}

.input-with-focus {
  transition: box-shadow 0.3s;
}

.input-with-focus:focus {
  box-shadow: 0 0 5px rgba(82, 192, 255, 0.6);
}

.login-button {
  width: 100%;
  font-size: 18px;
  border-radius: 6px;
  background-color: #409eff;
  border-color: #409eff;
  transition: background-color 0.3s, border-color 0.3s;
}

.login-button:hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
}

.extra-links {
  margin-top: 24px;
  text-align: center;
}

.register-link {
  color: #409eff;
  text-decoration: none;
  transition: color 0.3s;
}

.register-link:hover {
  color: #66b1ff;
}

.custom-username-field .el-form-item__label {
  font-size: 20px; /* 修改标签的字体大小 */
}

</style>
