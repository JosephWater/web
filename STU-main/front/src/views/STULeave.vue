<template>
    <div>
      <div>
        <el-button @click="$router.push('/container/leaveList/createLeave')">增添请假申请</el-button>
      </div>
      <el-table :data="leaveList" border style="width: 100%">
        <el-table-column fixed prop="studentNum" label="学生学号" width="100">
        </el-table-column>
        <el-table-column prop="studentName" label="学生姓名" width="100">
        </el-table-column>
       
        <el-table-column prop="startData" label="离校时间" width="100">
        </el-table-column>
        <el-table-column prop="endData" label="返校时间" width="100">
        </el-table-column>
        <el-table-column prop="studentleaveReason" label="请假原因" width="250">
        </el-table-column>
        <el-table-column prop="approveStatus" label="批准状态" width="250">
        </el-table-column>
        
  
  
        
      </el-table>
    </div>
  </template>
  <script>
  import { getSTULeave } from '../api/leavetable.ts';
  export default {
    data(){
      return {
        leaveList:[]
      }
    },
    methods: {
      async getSTULeaveList() {
        try {
          const UserInfo = this.$store.getters.getUserInfo;
          const res = await getSTULeave(UserInfo.studentId);
  
          this.leaveList = res.data.data;
          console.log(res);
          console.log(res.data.data.rows)
      
        } catch (error) {
          console.error('获取请假列表出错:', error);
        }
      },
   
    },
    created() {
      this.getSTULeaveList();
    }
  }
  
  
  
  </script>