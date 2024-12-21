<template>
    <el-form ref="form" :model="form" label-width="80px">

        <el-form-item label="学生姓名">
            <el-input v-model="form.studentName"></el-input>
        </el-form-item>
        <el-form-item label="学生学号">
            <el-input v-model="form.studentNum"></el-input>
        </el-form-item>
        <el-form-item label="社会实践名称">
            <el-input v-model="form.name" > </el-input>
        </el-form-item>
        <el-form-item label="社会实践单位单位">
            <el-input v-model="form.unit" > </el-input>
        </el-form-item>
        <el-form-item label="实践内容">
            <el-input v-model="form.content" > </el-input>
        </el-form-item>
        <el-form-item label="实践开始时间">
            <el-input v-model="form.startData" > </el-input>
        </el-form-item>
        <el-form-item label="实践结束时间">
            <el-input v-model="form.endData" > </el-input>
        </el-form-item>
        <el-form-item label="证明人">
            <el-input v-model="form.certifier" > </el-input>
        </el-form-item>
        <el-form-item label="实践期间评价情况">
            <el-input v-model="form.evaluate" > </el-input>
        </el-form-item>

        
    </el-form>

</template>
<script>
import { addSocialpratice } from '../../api/socialpraticetable.ts'
export default {
    name: "createSocialpratice",
    data() {
      return {
        form: {
        studentName:null,
        studentNum:null,
        name:null,
        unit:null,
        content:null,
        startData:null,
        endData:null,
        certifier: null,
        evaluate: null
        }
      }
    },
    methods: {
      onSubmit() {
        //console.log('submit!');
        addSocialpratice( this.form ).then((res) =>{
            if(res.data.data=="添加成功"){
                this.$message.success('添加成功')
                this.$router.push('/container/socialpraticeList')
            }else{
                this.$message.error(res.data.msg)
            }
            console.log(res.data)
        })
      }
    }
  }
</script>