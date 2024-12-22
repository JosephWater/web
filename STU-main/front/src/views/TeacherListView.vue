<template>
  <div>
    <div style="display:flex;margin-top: 15px;margin-bottom:15px">
    <el-button @click="$router.push('/container/teacherList/createTeacher')">添加教师</el-button>
      <el-input placeholder="请输入内容" v-model="input3" class="input-with-select"
                style="width: 400px;position: absolute ;right: 28px;">
        <el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 120px;">
          <el-option label="姓名" value="1"></el-option>
          <el-option label="用户名" value="2"></el-option>
          <el-option label="职称" value="3"></el-option>
          <el-option label="学位" value="4"></el-option>
        </el-select>
        <el-button @click="research" slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <el-table :data="teacherList" border="">
      <el-table-column fixed prop="person.name" label="姓名" width="70">
      </el-table-column>
      <el-table-column prop="person.username" label="用户名" width="90">
      </el-table-column>
      <el-table-column prop="person.dept" label="学院" width="110">
      </el-table-column>
      <el-table-column prop="title" label="职称" width="80"> </el-table-column>
      <el-table-column prop="degree" label="学位" width="80">
      </el-table-column>
      <el-table-column prop="person.card" label="身份证号" width="100">
      </el-table-column>
      <el-table-column prop="person.gender" label="性别" width="100"  :formatter="genderFormatter">
      </el-table-column>
      <el-table-column prop="person.birthday" label="出生日期" width="100">
      </el-table-column>
      <el-table-column prop="person.email" label="邮箱" width="100">
      </el-table-column>
      <el-table-column prop="person.phone" label="联系电话" width="100">
      </el-table-column>
      <el-table-column prop="person.address" label="地址" width="100">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <div align="center" slot-scope="scoped">
          <el-button @click="edit(scoped.row)"  size="mini" icon="el-icon-edit"></el-button>
          <el-button  @click="reset(scoped.row)"  size="mini" icon="el-icon-refresh-right"></el-button>
          <el-button  @click="$router.push('/container/teacherList/editTeacher')" type="danger" size="mini" icon="el-icon-delete"></el-button>
        </div>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage2"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="sizes, prev, pager, next"
          :total="1000"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { getTeacherList,deleteTeacher } from '../api/teachertable.ts';
import {reset} from "../api/studenttable.ts";
//import store from '@/store'
//import jwt_decode from "jwt-decode";
export default {
  data() {
    return {
      teacherList: [],
      input3: '',
      select: '',
      page: 1,
      pageSize: 10
    }
  },
  methods: {
    genderFormatter(row, column, cellValue) {
      // cellValue 是当前单元格的值，即 person.gender
      // 根据 cellValue 的值返回对应的文本
      const genderMap = {
        1: '男',
        2: '女',
        // 可以添加更多映射，如果需要的话
      };
      return genderMap[cellValue] || '未知'; // 如果 cellValue 不在映射中，返回 '未知'
    },
    edit(row){
      console.log(row)
      this.$store.commit('setTeacherInfo', row);
      this.$router.push('/container/teacherList/editTeacher')
    },
    reset(row) {
      console.log(row.person.id);
      this.$confirm('是否重置密码为123', '重置提示').then(() => {
        reset(row.person.id).then(() => {
          this.getAllteacherList();
          this.$message.success('已重置')
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消重置'
        });
      });
    },
    async getAllteacherList() {
      try {
        const res = await getTeacherList({ page: this.page, pageSize: this.pageSize ,select:this.select,input:this.input3});
        this.teacherList = res.data.data.rows;
        console.log(res);
        console.log(this.teacherList);
      } catch (error) {
        console.error('获取教师列表出错:', error);
      }
    },
    handleSizeChange(val){
      this.pageSize = val;
      this.getAllteacherList();
    },
    research(){this.getAllteacherList();},
    handleCurrentChange(val){
      this.page=val;
      this.getAllteacherList();
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