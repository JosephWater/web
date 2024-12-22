<template>
    <div>
      <div>
        <el-button @click="$router.push('/container/leaveList/createLeave')">增添请假申请</el-button>
      </div>
      <el-table :data="leaveList" border style="width: 100%">
        <el-table-column fixed prop="studentNum" label="学生学号" width="150">
        </el-table-column>
        <el-table-column prop="studentName" label="学生姓名" width="100">
        </el-table-column>
       
        <el-table-column prop="startData" label="离校时间" width="150">
        </el-table-column>
        <el-table-column prop="endData" label="返校时间" width="150">
        </el-table-column>
        <el-table-column prop="studentleaveReason" label="请假类型" width="100">
        </el-table-column>
        <el-table-column prop="studentleaveType" label="请假原因" width="250">
        </el-table-column>
        <el-table-column prop="approveStatus" label="批准状态" width="100">
        </el-table-column>
        <el-table-column prop="teacherNum" label="老师教职工号" width="150">
      </el-table-column>
      <el-table-column prop="teacherName" label="老师姓名" width="100">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <div align="center" slot-scope="scoped">
          <el-button @click="edit(scoped.row)" size="mini"
                     icon="el-icon-edit"></el-button>
          <el-button @click="deleteClick(scoped.row)" type="danger" size="mini" icon="el-icon-delete"></el-button>
        </div>
      </el-table-column>
  
        
      </el-table>
    </div>
  </template>
  <script>
  import { deleteLeave ,getSTULeave  } from '../api/leavetable.ts';
  export default {
    data(){
      return {
        leaveList:[]
      }
    },
    methods: {
      edit(row){
      console.log(row)
      this.$store.commit('setStudentleaveInfo', row);
      this.$router.push('/container/studentleaveList/editStudentleave')
    },
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
      deleteClick(row) {
      console.log(row);
      this.$confirm('是否确认删除此记录', '删除提示').then(() => {
        deleteLeave(row).then(() => {
          this.getSTULeaveList();
          this.$message.success('删除成功')
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    },
    created() {
      this.getSTULeaveList();
    }
  }
  
  
  
  </script>