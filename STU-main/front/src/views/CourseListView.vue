<template>
    <div>
      <div>
        <el-button @click="$router.push('/container/courseList/createCourse')">添加课程</el-button>
      </div>
      <el-table :data="courseList" border style="width: 100%">
        <el-table-column fixed prop="course.courseNum" label="课序号" width="100">
        </el-table-column>
        <el-table-column prop="course.coursename" label="课程名称" width="100">
        </el-table-column>
        <el-table-column prop="course.openingunit" label="开课单位" width="100">
        </el-table-column>
        <el-table-column prop="course.totalhours" label="总学时" width="100">
        </el-table-column>
        <el-table-column prop="course.credit" label="学分" width="100">
        </el-table-column>
        <el-table-column prop="course.coursetype" label="课程类型" width="100">
        </el-table-column>
        <el-table-column prop="course.place" label="上课地点" width="100">
        </el-table-column>
        <el-table-column prop="course.teacher" label="任课教师" width="100">
        </el-table-column>
        


        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="deleteClick(scope.row)" type="danger" size="mini"
              >删除</el-button>
            <el-button  @click="$router.push('/container/courseList/createCourse')"  size="mini"
              >编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </template>
  <script>
  import { getCourseList } from '../api/coursetable.ts';
  
  export default {
    data() {
      return {
        courseList: []
      }
    },
    methods: {
      async getAllCourseList() {
        try {
          const res = await getCourseList();
          this.courseList = res.data.data.rows;
          console.log(res);
        } catch (error) {
          console.error('获取课程列表出错:', error);
        }
      }
    },
    created() {
      this.getAllCourseList();
    }
  }
  
  </script>