<template>
    <div>
      <div>
        <el-button style="margin-bottom: 10px; margin-top: 10px" @click="$router.push('/container/volunteerList/createVolunteer')">添加志愿服务</el-button>
      </div>
      <el-table :data="courseList" border style="width: 100%">
        <el-table-column fixed prop="studentName" label="学生姓名" width="80">
        </el-table-column>
        <el-table-column prop="studentNum" label="学生学号" width="110">
        </el-table-column>
        <el-table-column prop="name" label="名称" width="100">
        </el-table-column>
        <el-table-column prop="unit" label="单位" width="100">
        </el-table-column>
        <el-table-column prop="content" label="服务内容" width="100">
        </el-table-column>
        <el-table-column prop="date" label="服务日期" width="100">
        </el-table-column>
        <el-table-column prop="hour" label="志愿时长" width="100">
        </el-table-column>
        <el-table-column prop="certifier" label="证明人" width="100">
        </el-table-column>
        <el-table-column prop="evaluate" label="评价" width="100">
        </el-table-column>
        

        
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="deleteClick(scope.row)" type="danger" size="mini"
              >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </template>
  <script>

import {getVolunteerList, deleteVolunteer} from '../api/volunteertable.ts';
  
  export default {
    data() {
      return {
        courseList: []
      }
    },
    methods: {
      async getVolunteerList() {
        try {
          const UserInfo = this.$store.getters.getUserInfo;
          const res = await getVolunteerList(UserInfo.studentId);
          this.courseList = res.data.data.rows;
          console.log(res);
        } catch (error) {
          console.error('获取志愿服务列表出错:', error);
        }
      }
    },
    deleteClick(row) {
      console.log(row.id);
      this.$confirm('是否确认删除此条志愿服务的记录', '删除提示').then(() => {
        deleteVolunteer(row).then(() => {
          this.getVolunteerList();
          this.$message.success('删除成功')
        })
      }).catch(() => {
      });
    }
  ,
    created() {
      this.getVolunteerList();
    }
  }
  
  </script>