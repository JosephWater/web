<template>
  <div>
    <div>
      <el-button @click="$router.push('/container/leaveList/processedLeave')">已处理的请假申请</el-button>
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
    approveClick(row){
      console.log(row.id)
      this.$confirm('确定同意批准吗？','批准提示').then(() =>{
        approveLeave(row.id).then(res =>{
          console.log(res)
        })
      })
      console.log(approveLeave)

    },
    rejectClick(row){
      console.log(row.id)
      this.$confirm('真的打算拒绝吗？','拒绝提示').then(() =>{
        rejectLeave(row.id).then(res =>{
          console.log(res)
        })
      })
      console.log(rejectLeave)

    }
    

  },
  
  created() {
    this.getAllLeavetList();
  },
}



</script>