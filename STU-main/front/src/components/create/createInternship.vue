<template>
    <el-form ref="form" :model="form" label-width="160px">

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
            <el-date-picker
          v-model="form.startData"
          type="date"
            placeholder="选择开始时间"
          align="right"
          :picker-options="pickerOptions"
          value-format="yyyy-MM-dd">
        </el-date-picker>
        </el-form-item>
        <el-form-item label="实习结束时间">
            <el-date-picker
          v-model="form.endData"
          type="date"
            placeholder="选择结束时间"
          align="right"
          :picker-options="pickerOptions"
          value-format="yyyy-MM-dd">
        </el-date-picker>
        </el-form-item>
        <el-form-item label="证明人">
            <el-input v-model="form.certifier" > </el-input>
        </el-form-item>
        <el-form-item label="实习期间评价情况">
            <el-input type="textarea" v-model="form.evaluate" > </el-input>
        </el-form-item>
        <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="back">取消</el-button>
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
        back(){
        this.$router.push('/container/internshipList')
      },
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