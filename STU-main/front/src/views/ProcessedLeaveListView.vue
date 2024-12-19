<template>
    <div>
      <div>
        <el-button @click="$router.push('/container/leaveList/leave')">所有的请假申请</el-button>
      </div>
      <el-table :data="processedLeaveList" border style="width: 100%">
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
  import { processedLeaveListView } from '../api/leavetable.ts';
  //import store from '@/store'
  //import jwt_decode from "jwt-decode";
  export default {
    data() {
      return {
        processedLeaveList: []
      }
    },
    methods: {
      async getAllProcessedLeaveListView() {
        try {
          //console.log(jwt_decode(store.state.jwt))
          const res = await processedLeaveListView();
          this.processedLeaveList = res.data.data.rows;
          console.log(res);
        } catch (error) {
          console.error('获取已处理的请假列表出错:', error);
        }
      },
     
    },
    created() {
      this.getAllProcessedLeaveListView();
    }
  }
  
  </script>