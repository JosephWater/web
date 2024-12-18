<template>
    <el-form ref="form" :model="form" label-width="80px">

        <el-form-item label="学生学号">
            <el-input v-model="form.studentId"></el-input>
        </el-form-item>
        <el-form-item label="学生姓名">
            <el-input v-model="form.studentName"></el-input>
        </el-form-item>
        <el-form-item label="荣誉等级">
            <el-select v-model="form.award" placeholder="请选择荣誉等级">
              <el-option label="院级" value="院级"></el-option>
              <el-option label="校级" value="校级"></el-option>
              <el-option label="市级" value="市级"></el-option>
              <el-option label="省级" value="省级"></el-option>
              <el-option label="国家级" value="国家级"></el-option>
              
            </el-select>
       
       
        </el-form-item>

        <el-form-item label="竞赛名称">
            <el-input v-model="form.competition"></el-input>
        </el-form-item>

        <el-form-item label="实习经历">
            <el-input v-model="form.train"></el-input>
        </el-form-item>
        <el-form-item label="科研成果">
            <el-input v-model="form.scientific"></el-input>
        </el-form-item>




       
        
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
    </el-form-item>
    </el-form>

</template>
<script>
import { addHonour } from '../../api/honourtable.ts'
export default {
    name: "creatHonour",
    data() {
      return {
        form:{
          studentId:null,
        studentName: null,
        award: null,
        competition: null,
        train: null,
        scientific: null,
        
                
        }
      }
    },
    methods: {
      onSubmit() {
        //console.log('submit!');
        addHonour( this.form ).then((res) =>{
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