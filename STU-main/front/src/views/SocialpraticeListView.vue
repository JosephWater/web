<template>
    <div>
      <div>
        <el-button style="margin-bottom: 10px; margin-top: 10px" @click="$router.push('/container/socialpraticeList/createSocialpratice')">添加社会实践</el-button>
      </div>
      <el-table :data="courseList" border style="width: 100%">
        <el-table-column fixed prop="studentName" label="学生姓名" width="80">
        </el-table-column>
        <el-table-column prop="studentNum" label="学生学号" width="110">
        </el-table-column>
        <el-table-column prop="name" label="实践名称" width="120">
        </el-table-column>
        <el-table-column prop="unit" label="实践单位" width="90">
        </el-table-column>
        <el-table-column prop="content" label="实践内容" width="200">
        </el-table-column>
        <el-table-column prop="startData" label="开始时间" width="90">
        </el-table-column>
        <el-table-column prop="endData" label="结束时间" width="90">
        </el-table-column>
        <el-table-column prop="certifier" label="证明人" width="80">
        </el-table-column>
        <el-table-column prop="evaluate" label="评价" width="80">
        </el-table-column>
        

        
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="deleteClick(scope.row)" type="danger" size="mini"
              >删除</el-button>
            
          </template>
        </el-table-column>
      </el-table>
    </div>
  </template>
  <script>

import {getSocialpraticeList, deleteSocialpratice} from '../api/socialpraticetable.ts';
  
  export default {
    data() {
      return {
        courseList: []
      }
    },
    methods: {
      async getAllSocialpraticeList() {
        try {
          const res = await getSocialpraticeList();
          this.courseList = res.data.data.rows;
          console.log(res);
        } catch (error) {
          console.error('获取社会实践列表出错:', error);
        }
      },
    
    deleteClick(row) {
      console.log(row.id);
      this.$confirm('是否确认删除此条社会实践的记录', '删除提示').then(() => {
        deleteSocialpratice(row).then(() => {
          this.getAllSocialpraticeList();
          this.$message.success('删除成功')
        })
      }).catch(() => {
      });
    }
  }
  ,
    created() {
      this.getAllSocialpraticeList();
    }
  }
  
  </script>