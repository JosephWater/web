<template>
  <div>
    <el-table :data="courseList" border style="width: 100%">
      <el-table-column fixed prop="studentName" label="学生姓名" width="100">
      </el-table-column>
      <el-table-column prop="studentNum" label="学生学号" width="150">
      </el-table-column>
      <el-table-column prop="name" label="名称" width="150">
      </el-table-column>
      <el-table-column prop="unit" label="单位" width="150">
      </el-table-column>
      <el-table-column prop="content" label="志愿服务内容" width="200">
      </el-table-column>
      <el-table-column prop="date" label="志愿服务日期" width="150">
      </el-table-column>
      <el-table-column prop="hour" label="志愿时长" width="100">
      </el-table-column>
      <el-table-column prop="certifier" label="证明人" width="100">
      </el-table-column>
      <el-table-column prop="evaluate" label="志愿服务期间评价情况" width="200">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>

import {getStudentVolunteerList, } from '../api/volunteertable.ts';

export default {
  data() {
    return {
      courseList: []
    }
  },
  methods: {
    async getAllStudentVolunteerList() {
      try {
        const UserInfo = this.$store.getters.getUserInfo;
        const res = await getStudentVolunteerList(UserInfo.studentId);
        this.courseList = res.data.data;
        console.log(res);
      } catch (error) {
        console.error('获取志愿服务列表出错:', error);
      }
    }
  },

  created() {
    this.getAllStudentVolunteerList();
  }
}

</script>