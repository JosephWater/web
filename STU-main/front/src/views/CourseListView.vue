<template>
    <div>
      <div>
        <el-button @click="$router.push('/container/courseList/createCourse')">添加课程</el-button>
      </div>
      <el-table :data="courseList" border style="width: 100%">
        <el-table-column fixed prop="courseNum" label="课序号" width="100">
        </el-table-column>
        <el-table-column prop="courseName" label="课程名称" width="100">
        </el-table-column>
        <el-table-column prop="openingUnit" label="开课单位" width="100">
        </el-table-column>
        <el-table-column prop="totalHours" label="总学时" width="100">
        </el-table-column>
        <el-table-column prop="credits" label="学分" width="100">
        </el-table-column>
        <el-table-column prop="courseType" label="课程类型" width="100">
        </el-table-column>
        <el-table-column prop="place" label="上课地点" width="100">
        </el-table-column>
        <el-table-column prop="teacherName" label="任课教师" width="100">
        </el-table-column>
        <el-table-column prop="pre1" label="平时成绩" width="100">
        </el-table-column>       
        <el-table-column prop="pre2" label="期末成绩" width="100">
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