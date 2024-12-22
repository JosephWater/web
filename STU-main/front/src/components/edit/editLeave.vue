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
    <el-form-item label="老师教职工号">
      <el-input v-model="form.teacherNum"></el-input>
    </el-form-item>
    <el-form-item label="老师姓名">
      <el-input v-model="form.teacherName"></el-input>
    </el-form-item>

             
      <el-form-item>
        <el-button type="primary" @click="onSubmit">更改</el-button>
        <el-button @click="back">取消</el-button>
    </el-form-item>
  
    </el-form>
  
  </template>
  <script>
  import { updateStudentleave } from '../../api/leavetable.ts'
  
  export default {
    computed: {
      // 定义一个计算属性 courseInfo
      studentleaveInfo() {
        // 返回 Vuex store 中的 courseInfo 状态
        return this.$store.state.studentleaveInfo;
      }
    },
    name: "creatStudentleave",
    data() {
      return {
        form: {
            studentleaveType:'',
            /* studentId:'', */
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
      onSubmit() {
        //console.log('submit!');
        updateStudentleave( this.form ).then((res) =>{
          if(res.data.data=="更新成功"){
            this.$message.success('更新成功')
            this.$router.push('/container/STULeave')
          }else{
            this.$message.error(res.data.msg)
          }
          console.log(res.data)
        })
      }
    },
    created() {
      console.log(this.studentleaveInfo)
      this.form.id = this.studentleaveInfo.id;
      this.form.studentleaveType = this.studentleaveInfo.studentleaveType;
      this.form.studentleaveReason = this.studentleaveInfo.studentleaveReason;
      this.form.startData = this.studentleaveInfo.startData;
      this.form.endData = this.studentleaveInfo.endData;
      this.form.teacherName = this.studentleaveInfo.teacherName;
      this.form.teacherNum = this.studentleaveInfo.teacherNum;
    
    }
  }
  </script>