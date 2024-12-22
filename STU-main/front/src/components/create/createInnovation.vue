<template>
    <el-form ref="form" :model="form" label-width="100px">

        <el-form-item label="学生姓名">
            <el-input v-model="form.studentName"></el-input>
        </el-form-item>
        <el-form-item label="学生学号">
            <el-input v-model="form.studentNum"></el-input>
        </el-form-item>
        <el-form-item label="项目名称">
            <el-input v-model="form.project" > </el-input>
        </el-form-item>
        <el-form-item label="项目内容">
            <el-input v-model="form.content" > </el-input>
        </el-form-item>
        <el-form-item label="项目开始时间">
            <el-date-picker
          v-model="form.data1"
          type="date"
            placeholder="选择开始时间"
          align="right"
          :picker-options="pickerOptions"
          value-format="yyyy-MM-dd">
        </el-date-picker>
           
        </el-form-item>
        <el-form-item label="项目结束时间">
            <el-date-picker
          v-model="form.data2"
          type="date"
            placeholder="选择结束时间"
          align="right"
          :picker-options="pickerOptions"
          value-format="yyyy-MM-dd">
        </el-date-picker>
           
        </el-form-item>
        <el-form-item label="导师">
            <el-input v-model="form.tutor" > </el-input>
        </el-form-item>
        
        <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="back">取消</el-button>
    </el-form-item>
        
    </el-form>

</template>
<script>
import { addInnovation } from '../../api/innovationtable.ts'
export default {
    name: "creatInnovation",
    data() {
      return {
        form: {
        studentName:null,
        studentNum:null,
        content:null,
        project:null,
        data1:null,
        data2:null,
        tutor: null,
        }
      }
    },
    methods: {
        back(){
        this.$router.push('/container/innovationList')
      },
      onSubmit() {
        //console.log('submit!');
        addInnovation( this.form ).then((res) =>{
            if(res.data.data=="添加成功"){
                this.$message.success('添加成功')
                this.$router.push('/container/innovationList')
            }else{
                this.$message.error(res.data.msg)
            }
            console.log(res.data)
        })
      }
    }
  }
</script>