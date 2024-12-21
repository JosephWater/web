<template>
  <div>
    <el-table :data="courseList" border style="width: 100%">
      <el-table-column fixed prop="studentName" label="学生姓名" width="100">
      </el-table-column>
      <el-table-column prop="studentNum" label="学生学号" width="100">
      </el-table-column>
      <el-table-column prop="unit" label="单位" width="100">
      </el-table-column>
      <el-table-column prop="post" label="岗位" width="100">
      </el-table-column>
      <el-table-column prop="startData" label="实习开始时间" width="100">
      </el-table-column>
      <el-table-column prop="endData" label="实习结束时间" width="100">
      </el-table-column>
      <el-table-column prop="certifier" label="证明人" width="100">
      </el-table-column>
      <el-table-column prop="evaluate" label="实习期间评价情况" width="100">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>

import {getStudentInternshipList} from '../api/internshiptable.ts';

export default {
  data() {
    return {
      courseList: []
    }
  },
  methods: {
    async getStudentInternshipList() {
      try {
        const UserInfo = this.$store.getters.getUserInfo;
        const res = await getStudentInternshipList(UserInfo.studentId);
        this.courseList = res.data.data.rows;
        console.log(res);
      } catch (error) {
        console.error('获取校外实习列表出错:', error);
      }
    }
  },
  created() {
    this.getStudentInternshipList();
  }
}

</script>