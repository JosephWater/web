<template>
    <el-form ref="form" :model="form" label-width="80px">

      <el-form-item label="姓名">
        <el-input v-model="form.person.name"></el-input>
      </el-form-item>
      <el-form-item label="学号">
        <el-input v-model="form.person.username"></el-input>
      </el-form-item>
      <el-form-item label="学院">
        <el-select v-model="form.person.dept" placeholder="请选择学院">
          <el-option label="软件学院" value="软件学院"></el-option>
          <el-option label="集成电路学院" value="集成电路学院"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item v-if="form.person.dept == '软件学院'" label="专业">
        <el-select v-model="form.major" placeholder="请选择专业">
          <el-option label="软件工程" value="软件工程"></el-option>
          <el-option label="工业软件" value="工业软件"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item v-if="form.person.dept == '集成电路学院'" label="专业">
        <el-select v-model="form.major" placeholder="请选择专业">
          <el-option label="微电子" value="1"></el-option>
          <el-option label="集成电路" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="班级">
        <el-select v-model="form.className" placeholder="请选择班级">
          <el-option label="1班" value="1"></el-option>
          <el-option label="2班" value="2"></el-option>
          <el-option label="菁英班" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="身份证号">
        <el-input v-model="form.person.card"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="form.person.gender"></el-input>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-input v-model="form.person.birthday"></el-input>
      </el-form-item>
      <el-form-item label="邮件">
        <el-input v-model="form.person.email"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.person.phone"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="form.person.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="$router.push('/container/studentList')">取消</el-button>
      </el-form-item>
    </el-form>
</template>
<script>
import {addStudent} from '../../api/studenttable.ts'

export default {
  name: "creatStudent",
  data() {
    return {
      form: {
        major: null,
        className: null,
        person: {
          address: null,
          birthday: null,
          card: '',
          dept: null,
          email: null,
          gender: null,
          name: '',
          phone: null,
          type: 3,
          username: ''
        }
      }
    }
  },
  methods: {
    onSubmit() {
      //console.log('submit!');
      addStudent(this.form).then((res) => {
        if (res.data.data == "添加成功") {
          this.$message.success('添加成功')
          this.$router.push('/container/studentList')
        } else {
          this.$message.error(res.data.msg)
        }
        console.log(res.data)
      })
    }
  }
}
</script>