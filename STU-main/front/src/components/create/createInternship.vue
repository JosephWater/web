<template>
    <el-form ref="form" :model="form" label-width="80px">

        <el-form-item label="学生姓名">
            <el-input v-model="form.studentName"></el-input>
        </el-form-item>
        <el-form-item label="学生学号">
            <el-input v-model="form.studentNum"></el-input>
        </el-form-item>
        <el-form-item label="单位">
            <el-input v-model="form.unit" > </el-input>
        </el-form-item>
        <el-form-item label="岗位">
            <el-input v-model="form.post" > </el-input>
        </el-form-item>
        <el-form-item label="实习开始时间">
            <el-input v-model="form.startData" > </el-input>
        </el-form-item>
        <el-form-item label="实习结束时间">
            <el-input v-model="form.endData" > </el-input>
        </el-form-item>
        <el-form-item label="证明人">
            <el-input v-model="form.certifier" > </el-input>
        </el-form-item>
        <el-form-item label="实习期间评价情况">
            <el-input v-model="form.evaluate" > </el-input>
        </el-form-item>

        
    </el-form>

</template>
<script>
import { addInternship } from '../../api/internshiptable.ts'
export default {
    name: "creatInternship",
    data() {
      return {
        form:{
        studentName:null,
        studentNum:null,
        unit:null,
        post:null,
        startData:null,
        endData :null,
        certifier: null,
        evaluate: null,
        }
      }
    },
    methods: {
      onSubmit() {
        //console.log('submit!');
        addInternship( this.form ).then((res) =>{
            if(res.data.data=="添加成功"){
                this.$message.success('添加成功')
                this.$router.push('/container/internshipList')
            }else{
                this.$message.error(res.data.msg)
            }
            console.log(res.data)
        })
      }
    }
  }
</script>