<template>
    <el-form ref="form" :model="form" label-width="80px">

        <el-form-item label="学生学号">
            <el-input v-model="form.studentNum"></el-input>
        </el-form-item>
        <el-form-item label="学生姓名">
            <el-input v-model="form.studentName"></el-input>
        </el-form-item>
        <el-form-item label="请假原因">
            <el-select v-model="form.studentleaveReason" placeholder="请选择请假原因">
                <el-option label="病假" value="病假"></el-option>
                <el-option label="事假" value="事假"></el-option>
                <el-option label="身体有点舒服" value="身体有点舒服"></el-option>
        </el-select>
        </el-form-item>
 
        <el-form-item label="离校时间">
          <div>
         <el-date-picker
          v-model="form.startData"
          type="datetime"
            placeholder="选择离校时间"
          align="right"
          :picker-options="pickerOptions">
        </el-date-picker>
      </div>
    </el-form-item>
  
        <el-form-item label="返校时间">
          <div>
         <el-date-picker
          v-model="form.endData"
          type="datetime"
            placeholder="选择返校时间"
          align="right"
          :picker-options="pickerOptions">
        </el-date-picker>
      </div>
    </el-form-item>


       

             
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
    </el-form-item>
    </el-form>

</template>
<script>
import { addLeave } from '../../api/leavetable.ts'
export default {
    name: "createLeave",
    data() {
      return {
        form: {
            studentNum: '',    
            studentName: '',    
            studentleaveReason: '',    
            startData: '',    
            endData: '',    
        }
      }
    },
    methods: {
      onSubmit() {
        //console.log('submit!');
        addLeave( this.form ).then((res) =>{
            if(res.data.data=="申请成功"){
                this.$message.success('申请成功')
            }else{
                this.$message.error('申请失败')
            }
            console.log(res)
        })
      }
    }
  }
</script>