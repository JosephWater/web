<template>
  <div>
    <el-table :data="courseList" border style="width: 100%">
      <el-table-column fixed prop="studentName" label="学生姓名" width="100">
      </el-table-column>
      <el-table-column prop="studentNum" label="学生学号" width="100">
      </el-table-column>
      <el-table-column prop="project" label="项目名称" width="100">
      </el-table-column>
      <el-table-column prop="content" label="项目内容" width="100">
      </el-table-column>
      <el-table-column prop="data1" label="项目开始时间" width="100">
      </el-table-column>
      <el-table-column prop="data2" label="项目结束时间" width="100">
      </el-table-column>
      <el-table-column prop="tutor" label="导师" width="100">
      </el-table-column>

    </el-table>
  </div>
</template>
<script>

import {getStudentInnovationList} from '../api/innovationtable.ts';

export default {
  data() {
    return {
      courseList: []
    }
  },
  methods: {
    async getStudentInnovationList() {
      try {
        const UserInfo = this.$store.getters.getUserInfo;
        const res = await getStudentInnovationList(UserInfo.studentId);
        this.courseList = res.data.data.rows;
        console.log(res);
      } catch (error) {
        console.error('获取创新项目列表出错:', error);
      }
    }
  },

  created() {
    this.getStudentInnovationList();
  }
}

</script>