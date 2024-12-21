<template>
  <el-form ref="form" :model="form" label-width="80px">

    <el-form-item label="姓名">
      <el-input v-model="form.person.name"></el-input>
    </el-form-item>
    <el-form-item label="用户名">
      <el-input v-model="form.person.username"></el-input>
    </el-form-item>
    <el-form-item label="学院">
      <el-select v-model="form.person.dept" placeholder="请选择学院">
        <el-option label="软件学院" value="软件学院"></el-option>
        <el-option label="集成电路学院" value="集成电路学院"></el-option>
        <el-option label="数学学院" value="数学学院"></el-option>
        <el-option label="外国语学院" value="外国语学院"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="职称">
      <el-select v-model="form.title" placeholder="请选择职称">
        <el-option label="助理" value="助理"></el-option>
        <el-option label="导师" value="导师"></el-option>
        <el-option label="副教授" value="副教授"></el-option>
        <el-option label="教授" value="教授"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="学位">
      <el-select v-model="form.degree" placeholder="请选择学位">
        <el-option label="硕士" value="硕士"></el-option>
        <el-option label="博士" value="博士"></el-option>
        <el-option label="博士后" value="博士后"></el-option>
        <el-option label="院士" value="院士"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="性别">
      <el-select v-model="form.person.gender" placeholder="请选择性别">
        <el-option label="男" value="1"></el-option>
        <el-option label="女" value="2"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="身份证号">
      <el-input v-model="form.person.card"></el-input>
    </el-form-item>
    <el-form-item label="出生日期">
      <el-date-picker
          v-model="form.person.birthday"
          type="date"
          placeholder="选择日期">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="邮件">
      <el-input v-model="form.person.email"></el-input>
    </el-form-item>
    <el-form-item label="联系电话">
      <el-input v-model="form.person.phone"></el-input>
    </el-form-item>
    <el-form-item label="地址">
      <el-input v-model="form.person.addresss"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button @click="$router.push('/container/teacherList')">返回</el-button>
    </el-form-item>
  </el-form>

</template>
<script>
import {addTeacher} from '../../api/teachertable.ts'

export default {
  data() {
    return {
      form: {
        title: null,
        degree: null,
        person: {
          address: null,
          birthday: null,
          card: '',
          dept: null,
          email: null,
          gender: null,
          name: '',
          phone: null,
          type: 2,
          username: ''
        }
      }
    }
  },
  methods: {
    onSubmit() {
      //console.log('submit!');
      addTeacher(this.form).then((res) => {
        if (res.data.data == "添加成功") {
          this.$message.success('添加成功')
          this.$router.push('/container/teacherList')
        } else {
          this.$message.error(res.data.msg)
        }
        console.log(res.data)
      })
    }
  }
}
</script>