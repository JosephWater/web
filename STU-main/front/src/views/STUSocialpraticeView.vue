<template>


    <el-table :data="courseList" border style="width: 100%">
      <el-table-column fixed prop="studentName" label="学生姓名" width="100">
      </el-table-column>
      <el-table-column prop="studentNum" label="学生学号" width="150">
      </el-table-column>
      <el-table-column prop="name" label="社会实践名称" width="160">
      </el-table-column>
      <el-table-column prop="unit" label="社会实践单位" width="150">
      </el-table-column>
      <el-table-column prop="content" label="实践内容" width="150">
      </el-table-column>
      <el-table-column prop="startData" label="实践开始时间" width="150">
      </el-table-column>
      <el-table-column prop="endData" label="实践结束时间" width="150">
      </el-table-column>
      <el-table-column prop="certifier" label="证明人" width="100">
      </el-table-column>
      <el-table-column prop="evaluate" label="实践期间评价情况" width="200">
      </el-table-column>
    </el-table>

</template>

<script>

import {getStudentSocialpraticeList} from '../api/socialpraticetable.ts';

export default {
  data() {
    return {
      courseList: []
    }
  },
  methods: {
    async getAllStudentSocialpraticeList() {
      try {
        const UserInfo = this.$store.getters.getUserInfo;
        const res = await getStudentSocialpraticeList(UserInfo.studentId);
        this.courseList = res.data.data;
        console.log(res);
      } catch (error) {
        console.error('获取社会实践列表出错:', error);
      }
    }
  },
  created() {
    this.getAllStudentSocialpraticeList();
  }
}

</script>