<template>
  <div>
    <div>
      <el-button style="margin-bottom: 10px; margin-top: 10px" @click="$router.push('/container/studentList')">返回</el-button>
    </div>
    <el-table :data="courseList" border style="width: 100%">
      <el-table-column fixed prop="course.courseNum" label="课序号" width="100">
      </el-table-column>
      <el-table-column prop="course.courseName" label="课程名称" width="100">
      </el-table-column>
      <el-table-column prop="course.openingUnit" label="开课单位" width="100">
      </el-table-column>
      <el-table-column prop="course.totalHours" label="总学时" width="80">
      </el-table-column>
      <el-table-column prop="course.credits" label="学分" width="80">
      </el-table-column>
      <el-table-column prop="course.courseType" label="课程类型" width="80">
      </el-table-column>
      <el-table-column prop="course.place" label="上课地点" width="100">
      </el-table-column>
      <el-table-column prop="course.teacherName" label="任课教师" width="100">
      </el-table-column>
      <el-table-column prop="course.pre1" label="平时成绩占比" width="120" :formatter="formatPercentage">
      </el-table-column>
      <el-table-column prop="course.pre2" label="期末成绩占比" width="120" :formatter="formatPercentage">
      </el-table-column>
      <el-table-column prop="course.time" label="上课时间" width="100" :formatter="formatPercentage2">
      </el-table-column>


      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="deletecourse(scope.row)" type="danger" size="mini"
          >退课
          </el-button>
        </template>
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
  computed: {
    // 定义一个计算属性 courseInfo
    studentInfo() {
      // 返回 Vuex store 中的 courseInfo 状态
      return this.$store.state.studentInfo;
    }
    // 您还可以在这里定义其他计算属性
  },
  methods: {
    formatPercentage(row, column, cellValue) {
      return (cellValue)+ '%';
    },
    formatPercentage2(row, column, cellValue) {
      return '周'+cellValue[0]+'第'+cellValue%10+'节课';
    },
    async getAllStuCourseList() {
      try {
        console.log(this.studentInfo);
        const res = await getStuCourse(this.studentInfo.id);
        this.courseList = res.data.data;
        console.log(res);
        console.log(res.data.data.rows)
        console.log(res.data.data[0].course.courseName);
      } catch (error) {
        console.error('获取课程列表出错:', error);
      }
    },
    deletecourse(row) {
      stuDelCourse(this.studentInfo.id, row.courseId).then((res) => {
        console.log(res)
        console.log(row)
        if (res.data.code == 1) {
          this.$message.success('退课成功')
          this.getAllStuCourseList()
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