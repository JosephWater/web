<template>
    <el-form ref="form" :model="form" label-width="80px">

      <el-form-item label="学生姓名">
            <el-input v-model="form.studentName"></el-input>
        </el-form-item>
        <el-form-item label="学生学号">
            <el-input v-model="form.studentNum"></el-input>
        </el-form-item>
        
        <el-form-item label="荣誉等级">
            <el-select v-model="form.honorLevel" placeholder="请选择荣誉等级">
              <el-option label="院级" value="院级"></el-option>
              <el-option label="校级" value="校级"></el-option>
              <el-option label="市级" value="市级"></el-option>
              <el-option label="省级" value="省级"></el-option>
              <el-option label="国家级" value="国家级"></el-option>
              
            </el-select>
       
       
        </el-form-item>

        <el-form-item label="荣誉名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="获得日期">
          <div>
         <el-date-picker
          v-model="form.time"
          type="date"
            placeholder="选择获奖时间"
          align="right"
          :picker-options="pickerOptions"
          value-format="yyyy-MM-dd">
        </el-date-picker>
      </div>
    </el-form-item>




       
        
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="back">取消</el-button>
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
          studentNum:'',
        studentName: '',
        honorLevel: '',
        name: null,
        time:'',
        
        
                
        }
      }
    },
    methods: {
      back(){
        this.$router.push('/container/honourList')
      },
      onSubmit() {
        //console.log('submit!');
        addHonour(this.form).then((res) =>{
            if(res.data.data=="添加成功"){
                this.$message.success('添加成功');
                this.$router.push('/container/honourList')
            }else{
                this.$message.error(res.data.msg)
            }
            console.log(res)
        })
      }
    }
  }
</script>