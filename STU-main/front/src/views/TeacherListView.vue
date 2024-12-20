<template>
  <div>
    <div>
      <el-button @click="$router.push('/container/teacherList/createTeacher')">添加教师</el-button>
    </div>
    <el-table :data="teacherList" border style="width: 100%">
      <el-table-column fixed prop="person.name" label="姓名" width="100">
      </el-table-column>
      <el-table-column prop="person.username" label="用户名" width="120">
      </el-table-column>
      <el-table-column prop="person.dept" label="学院" width="100">
      </el-table-column>
      <el-table-column prop="degree" label="职称" width="100"> </el-table-column>
      <el-table-column prop="title" label="学位" width="100">
      </el-table-column>
      <el-table-column prop="person.card" label="身份证号" width="100">
      </el-table-column>
      <el-table-column prop="person.gender" label="性别" width="100">
      </el-table-column>
      <el-table-column prop="person.birthday" label="出生日期" width="100">
      </el-table-column>
      <el-table-column prop="person.email" label="邮箱" width="100">
      </el-table-column>
      <el-table-column prop="person.phone" label="联系电话" width="100">
      </el-table-column>
      <el-table-column prop="person.address" label="地址" width="100">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template  slot-scope="scoped">
          <el-button @click="deleteClick(scoped.row)" type="danger" size="mini">删除</el-button>
          <el-button  @click="$router.push('/container/studentList/editStudent')"  size="mini">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getTeacherList,deleteTeacher } from '../api/teachertable.ts';
//import store from '@/store'
//import jwt_decode from "jwt-decode";
export default {
  data() {
    return {
      teacherList: []
    }
  },
  methods: {
    async getAllteacherList() {
      try {
        const res = await getTeacherList();
        this.teacherList = res.data.data.rows;
        console.log(res);
        console.log(this.teacherList);
      } catch (error) {
        console.error('获取教师列表出错:', error);
      }
    },
    deleteClick(row){
      console.log(row.person.id);
      this.$confirm('是否确认删除此教师','删除提示').then(() =>{
        deleteTeacher(row.person).then(() =>{
          this.$message.success('删除成功')
        })
      }).catch(() => {
    });
    }
  },
  created() {
    this.getAllteacherList();
  }
}

</script>