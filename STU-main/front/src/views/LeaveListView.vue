<template>
  <div>
    <div>
      <el-button style="margin-bottom: 10px; margin-top: 10px" @click="$router.push('/container/leaveList/processedLeave')">已处理的请假申请</el-button>
    </div>
    <el-table :data="leaveList" border style="width: 100%">
      <el-table-column fixed prop="studentNum" label="学生学号" width="120">
      </el-table-column>
      <el-table-column prop="studentName" label="学生姓名" width="80">
      </el-table-column>
     
      <el-table-column prop="startData" label="离校时间" width="100">
      </el-table-column>
      <el-table-column prop="endData" label="返校时间" width="100">
      </el-table-column>
      <el-table-column prop="studentleaveType" label="请假类型" width="120">
      </el-table-column>
      <el-table-column prop="studentleaveReason" label="请假原因" width="200">
      </el-table-column>
      <el-table-column prop="approveStatus" label="批准状态" width="150">
      </el-table-column>
      <el-table-column prop="teacherNum" label="老师教职工号" width="150">
      </el-table-column>
      <el-table-column prop="teacherName" label="老师姓名" width="100">
      </el-table-column>

      <el-table-column label="操作" align="center">
        <div align="center" slot-scope="scoped">
          <el-button @click="approveClick(scoped.row)" size="mini"
                     icon="el-icon-check"></el-button>
          <el-button @click="rejectClick(scoped.row)" size="mini"
                     icon="el-icon-close"></el-button>
         
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getLeaveList,approveLeave,rejectLeave } from '../api/leavetable.ts';
export default {
  data(){
    return {
      leaveList:[]
    }
  },
  methods:{
    async getAllLeavetList() {
      try {
        //console.log(jwt_decode(store.state.jwt))
        const res = await getLeaveList();
        this.leaveList = res.data.data.rows;
        console.log(res);
      } catch (error) {
        console.error('获取请假列表出错:', error);
      }
    },
    approveClick(row) {
      console.log(row);
      approveLeave(row).then(() => {
        this.$message.success('修改成功'),
            this.getAllLeavetList()
      })
    },
    rejectClick(row) {
      console.log(row);
      rejectLeave(row).then(() => {
        this.$message.success('修改成功'),
            this.getAllLeavetList()
      })
    },
    

  },
  
  created() {
    this.getAllLeavetList();
  },
}



</script>