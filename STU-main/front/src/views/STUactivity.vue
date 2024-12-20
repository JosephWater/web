<template>
    <div>
      <el-table :data="activityList" border="">
        <el-table-column fixed prop="name" label="活动名称" width="100">
        </el-table-column>
        <el-table-column fixed prop="num" label="活动编号" width="100">
        </el-table-column>
        <el-table-column prop="activityType" label="活动类型" width="120">
        </el-table-column>
        <el-table-column prop="organizationalUnit" label="组织单位" width="100">
        </el-table-column>
        <el-table-column prop="startData" label="开始日期" width="100">
        </el-table-column>
        <el-table-column prop="endData" label="结束日期" width="100">
        </el-table-column>
        <el-table-column prop="teacherName" label="审批人" width="100">
        </el-table-column>
        <el-table-column prop="approveStatus" label="审批状态" width="100">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <div align="center" slot-scope="scoped">
            <el-button @click="applyActivity(scoped.row)" size="mini">申请</el-button>
          </div>
        </el-table-column>
      </el-table>
    </div>
  </template>
  <script>
  import {getStudentActivity,StudentApplyActivity} from '../api/activitytable.ts';
  
  //import store from '@/store'
  //import jwt_decode from "jwt-decode";
  export default {
    data() {
      return {
        activityList: [],
      }
    },
    methods: {
      async getActivitychooseList() {
        try {
          //console.log(jwt_decode(store.state.jwt))
          const res = await getStudentActivity();
          this.activityList = res.data.data.rows;
          console.log(this.activityList);
        } catch (error) {
          console.error('获取活动列表出错:', error);
        }
      },
      applyActivity(row){
        const UserInfo = this.$store.getters.getUserInfo;
        StudentApplyActivity(UserInfo.studentId ,  row.num).then((res) =>{
          console.log(res)
          if(res.data.code == 1){
            this.$message.success('申请成功')
          }else{
            this.$message.error(res.data.mes)
          }
        })
      }
    },
    created() {
      this.getActivitychooseList();
    }
  }
  </script>
  