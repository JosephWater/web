<template>
    <div>
      <div>
        <el-button style="margin-bottom: 10px; margin-top: 10px" @click="$router.push('/container/honourList/createHonour')">添加荣誉信息</el-button>
      </div>
      <el-table :data="honourList" border style="width: 100%">
        <el-table-column fixed prop="studentNum" label="学生学号" width="150">
        </el-table-column>
        <el-table-column prop="studentName" label="学生姓名" width="100">
        </el-table-column>
        <el-table-column prop="name" label="荣誉名称" width="100">
        </el-table-column>
        <el-table-column prop="honorLevel" label="荣誉等级" width="100">
        </el-table-column>
        <el-table-column prop="time" label="获得日期" width="100">
        </el-table-column>
       
     
        


      

        <el-table-column label="操作" align="center">
        <div align="center" slot-scope="scoped">
          <el-button @click="edit(scoped.row)" size="mini"
                     icon="el-icon-edit"></el-button>
          <el-button @click="deleteClick(scoped.row)" type="danger" size="mini" icon="el-icon-delete"></el-button>
        </div>
      </el-table-column>


        
      </el-table>
    </div>
  </template>
  <script>
  import { getHonourList , deleteHonour} from '../api/honourtable.ts';
  
  export default {
    data() {
      return {
        honourList: []
      }
    },
    methods: {
      edit(row){
      console.log(row)
      this.$store.commit('setHonourInfo', row);
      this.$router.push('/container/honourList/editHonour')
    },
      deleteClick(row) {
      console.log(row);
      this.$confirm('是否确认删除此记录', '删除提示').then(() => {
        deleteHonour(row).then(() => {
          this.getAllHonourList();
          this.$message.success('删除成功')
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
      async getAllHonourList() {
        try {
          const res = await getHonourList();
          this.honourList = res.data.data;
          console.log(res);
          console.log(this.honourList);
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