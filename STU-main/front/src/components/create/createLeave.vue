<template>
    <el-form ref="form" :model="form" label-width="80px">

       
        <el-form-item label="请假类型">
            <el-select v-model="form.studentleaveType" placeholder="请选择请假类型">
                <el-option label="病假" value="病假"></el-option>
                <el-option label="事假" value="事假"></el-option>
                <el-option label="其他" value="其他"></el-option>
        </el-select>
        </el-form-item>
        <el-form-item label="请假原因">
      <el-input v-model="form.studentleaveReason"></el-input>
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
    <el-form-item label="教职工号">
      <el-input v-model="form.teacherNum"></el-input>
    </el-form-item>
    <el-form-item label="老师姓名">
      <el-input v-model="form.teacherName"></el-input>
    </el-form-item>
   


       

             
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="back">取消</el-button>
    </el-form-item>
    </el-form>

</template>
<script>
import { addLeave  } from '../../api/leavetable.ts'
export default {
    name: "createLeave",
    data() {
      return {
        form: {
          studentleaveType:'',
            studentId:'',
            studentleaveReason: '',    
            startData: null,    
            endData: null,    
            teacherName:'',
            teacherNum:'',
        }
      }
    },
    methods: {
      back(){
        this.$router.push('/container/STULeave')
      },

      async onSubmit() {
        const UserInfo = this.$store.getters.getUserInfo;
          this.form.studentId = UserInfo.studentId;
  
        //console.log('submit!');
        addLeave( this.form ).then((res) =>{
         
            if(res.data.data=="申请成功"){
                this.$message.success('申请成功');
                this.$router.push('/container/STULeave')
            }else{this.$message.error(res.data.msg)}
            console.log(res)
            
        })
        
      }
    }
  }
</script>