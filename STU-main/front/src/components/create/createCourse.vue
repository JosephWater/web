<template>
    <el-form ref="form" :model="form" label-width="80px">

        <el-form-item label="课序号">
            <el-input v-model="form.course.coursenum"></el-input>
        </el-form-item>
        <el-form-item label="课程名称">
            <el-input v-model="form.course.coursename"></el-input>
        </el-form-item>
        <el-form-item label="开课单位">
            <el-select v-model="form.course.openingunit" placeholder="请选择开课单位">
                <el-option label="软件学院" value="软件学院"></el-option>
                <el-option label="集成电路学院" value="集成电路学院"></el-option>
            </el-select>
       
       
        </el-form-item>

        <el-form-item label="总学时">
            <el-input v-model="form.course.totalhours"></el-input>
        </el-form-item>

        <el-form-item label="学分">
            <el-input v-model="form.course.credit"></el-input>
        </el-form-item>




        <el-form-item label="课程类型">
            <el-select v-model="form.course.coursetype" placeholder="请选择课程类型">
                <el-option label="通识必修课" value="1"></el-option>
                <el-option label="专业基础课" value="2"></el-option>
                <el-option label="专业选修课" value="3"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="上课地点">
            <el-input v-model="form.course.place"></el-input>
        </el-form-item>
        
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
    </el-form-item>
    </el-form>

</template>
<script>
import { addCourse } from '../../api/coursetable.ts'
export default {
    name: "creatCourse",
    data() {
      return {
        form: {
        major: '',
        className: '',
        person: {
          name: '',
          type: 1,
          dept: '',
          card: null,
          gender: null,
          birthday: null,
          email: null,
          phone: null,
          address: null
        },
        user: {
          password: '',
          username: ''
        }          
        }
      }
    },
    methods: {
      onSubmit() {
        //console.log('submit!');
        addCourse( this.form ).then((res) =>{
            if(res.data.data=="添加成功"){
                this.$message.success('添加成功')
            }else{
                this.$message.error('添加失败')
            }
            console.log(res)
        })
      }
    }
  }
</script>