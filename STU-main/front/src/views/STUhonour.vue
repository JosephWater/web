<template>
    <div>
  
        <el-table :data="honourList" border style="width: 100%">
        
        <el-table-column fixed prop="studentNum" label="学生学号" width="100">
        </el-table-column>
        <el-table-column prop="studentName" label="学生姓名" width="100">
        </el-table-column>
        <el-table-column prop="name" label="荣誉名称" width="200">
        </el-table-column>
        <el-table-column prop="honorLevel" label="荣誉等级" width="100">
        </el-table-column>
        <el-table-column prop="time" label="获得日期" width="300">
        </el-table-column>
       
     
        


      

       <!--  <el-table-column label="操作" align="center">
        <div align="center" slot-scope="scoped">
          <el-button @click="$router.push('/container/honourList/createHonour')" size="mini" icon="el-icon-edit"></el-button>
          <el-button @click="deleteClick(scoped.row)" type="danger" size="mini" icon="el-icon-delete"></el-button>
        </div>
      </el-table-column>
 -->

        
      </el-table>
      
      </div>
  </template>
  
  <script>
  import { getStuHonour } from '../api/honourtable.ts';
  
  export default {
    data() {
      return {
        honourList: []
      }
    },
    methods: {
      async getStuHonourList() {
        try {
          const UserInfo = this.$store.getters.getUserInfo;
          const res = await getStuHonour(UserInfo.studentId);
  
          this.honourList = res.data.data;
          console.log(res);
          console.log(res.data.data.rows)
      
        } catch (error) {
          console.error('获取荣誉列表出错:', error);
        }
      },
   
    },
    created() {
      this.getStuHonourList();
    }
  }
  
  </script>