<template>
    <div>
      <el-table :data="courseList" border style="width: 100%">
        <el-table-column fixed prop="course.courseNum" label="课序号" width="100">
        </el-table-column>
        <el-table-column prop="course.courseName" label="课程名称" width="100">
        </el-table-column>
        <el-table-column prop="course.openingUnit" label="开课单位" width="100">
        </el-table-column>
        <el-table-column prop="course.totalHours" label="总学时" width="100">
        </el-table-column>
        <el-table-column prop="course.credits" label="学分" width="100">
        </el-table-column>
        <el-table-column prop="course.courseType" label="课程类型" width="100">
        </el-table-column>
        <el-table-column prop="course.place" label="上课地点" width="100">
        </el-table-column>
        <el-table-column prop="course.teacherName" label="任课教师" width="100">
        </el-table-column>
        <el-table-column prop="course.pre1" label="平时成绩占比" width="120" :formatter="formatPercentage">
        </el-table-column>
        <el-table-column prop="course.score1" label="平时成绩" width="120">
        </el-table-column>
        <el-table-column prop="course.pre2" label="期末成绩占比" width="120" :formatter="formatPercentage">
        </el-table-column>
        <el-table-column prop="course.score2" label="期末成绩" width="120">
        </el-table-column>
        <el-table-column prop="course.score3" label="最终成绩（百分制）" width="120">
        </el-table-column>
        <el-table-column prop="course.score3" label="最终成绩（五分制）" width="120" :formatter="formatFivePointScore">
        </el-table-column>
      </el-table>
    </div>
  </template>
  
  <script>
  import {getStuCourse, stuDelCourse} from '../api/coursetable.ts';
  
  export default {
    data() {
      return {
        courseList: []
      }
    },
    methods: {
    formatFivePointScore(row, column, cellValue) {
      // Calculate the five-point score
      const fivePointScore = cellValue / 10 - 5;
      // Format the output to two decimal places
      return fivePointScore.toFixed(2);
    },
      formatPercentage(row, column, cellValue) {
        return (cellValue)+ '%';
      },
      formatPercentage2(row, column, cellValue) {
        return '周'+cellValue[0]+'第'+cellValue%10+'节课';
      },
      async getAllStuCourseList() {
        try {
          const UserInfo = this.$store.getters.getUserInfo;
          const res = await getStuCourse(UserInfo.studentId);
  
          this.courseList = res.data.data;
          console.log(res);
          console.log(res.data.data.rows)
          console.log(res.data.data[0].course.courseName);
        } catch (error) {
          console.error('获取课程列表出错:', error);
        }
      },
      deletecourse(row) {
        const UserInfo = this.$store.getters.getUserInfo;
        stuDelCourse(UserInfo.studentId, row.courseId).then((res) => {
          console.log(res)
          console.log(row)
          if (res.data.code == 1) {
            this.$message.success('退课成功')
            this.getAllStuCourseList();
  
          } else {
            this.$message.error(res.data.mes)
          }
        })
      }
    },
    created() {
      this.getAllStuCourseList();
    }
  }
  
  </script>