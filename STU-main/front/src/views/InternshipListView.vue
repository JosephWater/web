<template>
    <div>
      <div>
        <el-button @click="$router.push('/container/internshipList/createInternship')">添加校外实习</el-button>
      </div>
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

import {getInternshipList, deleteInternship} from '../api/internshiptable.ts';
  
  export default {
    data() {
      return {
        courseList: []
      }
    },
    methods: {
      async getAllInternshipList() {
        try {
          const res = await getInternshipList();
          this.courseList = res.data.data;
          console.log(this.courseList);
          } catch (error) {
          console.error('获取校外实习列表出错:', error);
        }
      },
    
    deleteClick(row) {
      console.log(row.id);
      this.$confirm('是否确认删除此条校外实习的记录', '删除提示').then(() => {
        deleteInternship(row).then(() => {
          this.getAllInternshipList();
          this.$message.success('删除成功')
        })
      }).catch(() => {
      });
    }
    },
    created() {
      this.getAllInternshipList();
    }
  }

  
  </script>