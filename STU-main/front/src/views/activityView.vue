<template>
  <div>
    <div style="display:flex;margin-top: 10px;margin-bottom:15px">
      <el-button @click="$router.push('/container/studentList/createStudent')">添加活动</el-button>
      <el-button @click="$router.push('/container/studentList/createStudent')">添加请求</el-button>
      <el-select v-model="select" slot="prepend" placeholder="全部请求" style="margin-left:15px">
          <el-option label="全部请求" value="1"></el-option>
          <el-option label="已批准" value="2"></el-option>
          <el-option label="未批准" value="3"></el-option>
          <el-option label="待审批" value="4"></el-option>
        </el-select>
    </div>
    <el-table :data="studentList" border="">
      <el-table-column fixed prop="name" label="活动名称" width="100">
      </el-table-column>
      <el-table-column fixed prop="name" label="活动编号" width="100">
      </el-table-column>
      <el-table-column prop="activityType" label="活动类型" width="120">
      </el-table-column>
      <el-table-column prop="organizationalUnit" label="组织单位" width="100">
      </el-table-column>
      <el-table-column prop="startData" label="开始日期" width="100"></el-table-column>
      <el-table-column prop="endData" label="结束日期" width="100">
      </el-table-column>
      <el-table-column prop="studentName" label="申请人" width="100">
      </el-table-column>
      <el-table-column prop="studentNum" label="学号" width="100">
      </el-table-column>
      <el-table-column prop="teacherName" label="审批人" width="100">
      </el-table-column>
      <el-table-column prop="teacherNum" label="用户名" width="100">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <div align="center" >
          <el-button @click="$router.push('/container/studentList/editStudent')" size="mini" icon="el-icon-check"></el-button>
          <el-button @click="$router.push('/container/studentList/editStudent')" size="mini" icon="el-icon-close"></el-button>
          <el-button @click="deleteClick(scoped.row)" type="danger" size="mini" icon="el-icon-delete"></el-button>
        </div>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage2"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="sizes, prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import {getStudentList, deleteStudent} from '../api/studenttable.ts';
//import store from '@/store'
//import jwt_decode from "jwt-decode";
export default {
  data() {
    return {
      studentList: [],
      input3: '',
      select: '',
      page: 1,
      pageSize: 10,
    }
  },
  methods: {
    async getAllStudentList() {
      try {
        //console.log(jwt_decode(store.state.jwt))
        const res = await getStudentList({ page: this.page, pageSize: this.pageSize ,select:this.select,input:this.input3});
        this.studentList = res.data.data.rows;
        console.log(res);
      } catch (error) {
        console.error('获取学生列表出错:', error);
      }
    },
    handleSizeChange(val){
      this.pageSize = val;
      this.getAllStudentList();
    },
    research(){this.getAllStudentList();},
    handleCurrentChange(val){
      this.page=val;
      this.getAllStudentList();
    },
    deleteClick(row) {
      console.log(row.person.id);
      this.$confirm('是否确认删除此学生', '删除提示').then(() => {
        deleteStudent(row.person).then(() => {
          this.getAllStudentList();
          this.$message.success('删除成功')
        })
      }).catch(() => {
      });
    }
  },
  created() {
    this.getAllStudentList();
  }
}
</script>
