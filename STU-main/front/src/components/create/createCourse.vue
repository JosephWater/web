<template>
    <el-form ref="form" :model="form" label-width="80px">

        <el-form-item label="课序号">
            <el-input v-model="form.courseNum"></el-input>
        </el-form-item>
        <el-form-item label="课程名称">
            <el-input v-model="form.courseName"></el-input>
        </el-form-item>
        <el-form-item label="开课单位">
            <el-select v-model="form.openingUnit" placeholder="请选择开课单位">
                <el-option label="软件学院" value="软件学院"></el-option>
                <el-option label="集成电路学院" value="集成电路学院"></el-option>
        </el-select>
       
       
        </el-form-item>

        <el-form-item label="总学时">
            <el-input v-model="form.totalHours"></el-input>
        </el-form-item>

        <el-form-item label="学分">
            <el-input v-model="form.credit"></el-input>
        </el-form-item>
        <el-form-item label="课程类型">
            <el-select v-model="form.courseType" placeholder="请选择课程类型">
                <el-option label="通识必修课" value="通识必修课"></el-option>
                <el-option label="专业基础课" value="专业基础课"></el-option>
                <el-option label="专业选修课" value="专业选修课"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="上课地点">
            <el-input v-model="form.place"></el-input>
        </el-form-item>
        <el-form-item label="平时成绩占比">
            <el-input v-model="form.pre1"></el-input>
        </el-form-item>
        <el-form-item label="期末成绩占比">
            <el-input v-model="form.pre2"></el-input>
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
                courseName: '',
                courseNum: '',
                openingUnit: '',
                totalHours: '',
                credits: '',
                courseType: '',
                time: '',
                place:'',
                term: '',
                teacherName: '',
                pre1: '',
                pre2: ''        
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