<template>
    <div>
      <div>
        <el-button @click="$router.push('/container/STUcourse')">查看选课结果</el-button>
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
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="courseChoose(scope.row)" type="danger" size="mini"
              >选课</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </template>
  <script>
  import { chooseCourse, getCourseList } from '../api/coursetable.ts';

  //import store from '@/store'
  //import jwt_decode from "jwt-decode";
  export default {
    data() {
      return {
        courseList: [],
        myInfo:[],
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
      },
      courseChoose(row ){
        const UserInfo = this.$store.getters.getUserInfo;
        chooseCourse(UserInfo.studentId ,  row.id).then((res) =>{
          console.log(res)
          if(res.data.code == 1){
            this.$message.success('选课成功')
          }else{
            this.$message.error(res.data.mes)
          }
        })
      }
    },

    created() {
      this.getAllCourseList();
    }
  }
  
  </script>