<template>
    <div>
      <div>
        <el-button @click="$router.push('/container/innovationList/createInnovation')">添加创新项目</el-button>
      </div>
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

import {getInnovationList, deleteInnovation} from '../api/innovationtable.ts';
  
  export default {
    data() {
      return {
        courseList: []
      }
    },
    methods: {
      async getAllInnovationList() {
        try {
          const res = await getInnovationList();
          this.courseList = res.data.data;
          console.log(this.courseList);
          console.log(res);
        } catch (error) {
          console.error('获取创新项目列表出错:', error);
        }
      } ,
    deleteClick(row) {
      console.log(row.id);
      this.$confirm('是否确认删除此条创新项目的记录', '删除提示').then(() => {
        deleteInnovation(row).then(() => {
          this.getAllInnovationList();
          this.$message.success('删除成功')
        })
      }).catch(() => {
      });
    }}
  ,
    created(){

      this.getAllInnovationList();
    }
  
}
  
  </script>