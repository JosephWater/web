<template>
  <el-form ref="form" :model="form" label-width="80px">

    <el-form-item label="旧密码">
      <el-input v-model="form.old"></el-input>
    </el-form-item>
    <el-form-item label="新密码">
      <el-input v-model="form.newp"></el-input>
    </el-form-item>
    <el-form-item label="再次输入">
      <el-input v-model="form.again"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
          type="primary"
          @click="editPassword"
          class="login-button">修改
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import {password} from "../../api/studenttable.ts";

export default {

  data() {
    return {
      form: {
        old: '',
        newp: '',
        again: ''
      }
    }
  },
  computed: {
    // 定义一个计算属性 courseInfo
    userInfo() {
      // 返回 Vuex store 中的 courseInfo 状态
      return this.$store.state.userInfo;
    }
    // 您还可以在这里定义其他计算属性
  },
  methods: {
    editPassword() {
      if (this.form.newp === this.form.old) {
        this.$message({
          type: 'info',
          message: '新密码不能与旧密码相同'
        });
      } else if (this.form.newp !== this.form.again) {
        this.$message({
          type: 'info',
          message: '两次输入的密码不一致'
        });
      } else {
        password({"personId": this.userInfo.personId, "old": this.form.old, "newp": this.form.newp}).then((res) => {
          if (res.data.data == "修改成功") {
            this.$message.success('修改成功')
          } else {
            this.$message.error(res.data.msg)
          }
        })
      }
    }
  }
}
</script>
<style>.login-button {
  font-size: 18px;
  border-radius: 6px;
  background-color: #409eff;
  border-color: #409eff;
  transition: background-color 0.3s, border-color 0.3s;
}</style>