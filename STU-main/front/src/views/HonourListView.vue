<template>
    <div>
      <div>
        <el-button @click="$router.push('/container/honourList/createHonour')">添加荣誉信息</el-button>
      </div>
      <el-table :data="honourList" border style="width: 100%">
        
        <el-table-column fixed prop="studentId" label="学生学号" width="100">
        </el-table-column>
        <el-table-column prop="studentName" label="学生姓名" width="100">
        </el-table-column>
        <el-table-column prop="competition" label="竞赛名称" width="100">
        </el-table-column>
        <el-table-column prop="award" label="荣誉等级" width="100">
        </el-table-column>
        <el-table-column prop="train" label="实习经历" width="100">
        </el-table-column>
        <el-table-column prop="scientific" label="科研成果" width="100">
        </el-table-column>
     
        


        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="deleteClick(scope.row)" type="danger" size="mini"
              >删除</el-button>
            <el-button  @click="$router.push('/container/honourList/createHonour')"  size="mini"
              >编辑</el-button>
          </template>
        </el-table-column>
        
      </el-table>
    </div>
  </template>
  <script>
  import { getHonourList } from '../api/honourtable.ts';
  
  export default {
    data() {
      return {
        honourList: []
      }
    },
    methods: {
      async getAllHonourList() {
        try {
          const res = await getHonourList();
          this.honourList = res.data.data.rows;
          console.log(res);
        } catch (error) {
          console.error('获取荣誉列表出错:', error);
        }
      }
    },
    created() {
      this.getAllHonourList();
    }
  }
  
  </script>