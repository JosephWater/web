<template>
    <el-form ref="form" :model="form" label-width="80px">

        <el-form-item label="学生姓名">
            <el-input v-model="form.studentName"></el-input>
        </el-form-item>
        <el-form-item label="学生学号">
            <el-input v-model="form.studentNum"></el-input>
        </el-form-item>
        <el-form-item label="名称">
            <el-input v-model="form.name" > </el-input>
        </el-form-item>
        <el-form-item label="单位">
            <el-input v-model="form.unit" > </el-input>
        </el-form-item>
        <el-form-item label="志愿服务内容">
            <el-input v-model="form.content" > </el-input>
        </el-form-item>
        <el-form-item label="志愿服务日期">
            <el-input v-model="form.date" > </el-input>
        </el-form-item>
        <el-form-item label="志愿时长">
            <el-input v-model="form.hour" > </el-input>
        </el-form-item>
        <el-form-item label="证明人">
            <el-input v-model="form.certifier" > </el-input>
        </el-form-item>
        <el-form-item label="志愿服务期间评价情况">
            <el-input v-model="form.evaluate" > </el-input>
        </el-form-item>

        
    </el-form>

</template>
<script>
import { addVolunteer } from '../../api/volunteertable.ts'
export default {
    name: "creatVolunteer",
    data() {
      return {
        form: {
        studentName:null,
        studentNum:null,
        name:null,
        unit:null,
        content:null,
        date:null,
        hour:null,
        certifier: null,
        evaluate: null
        }
      }
    },
    methods: {
      onSubmit() {
        //console.log('submit!');
        addVolunteer( this.form ).then((res) =>{
            if(res.data.data=="添加成功"){
                this.$message.success('添加成功')
                this.$router.push('/container/volunteerList')
            }else{
                this.$message.error(res.data.msg)
            }
            console.log(res.data)
        })
      }
    }
  }
</script>