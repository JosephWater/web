<template>
  <div>

    <div style="display:flex;margin-top: 15px;margin-bottom:15px">
      <el-button @click="$router.push('/container/studentList/createStudent')">添加学生</el-button>
      <el-input placeholder="请输入内容" v-model="input3" class="input-with-select"
                style="width: 400px;position: absolute ;right: 28px;">
        <el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 120px;">
          <el-option label="姓名" value="1"></el-option>
          <el-option label="用户名" value="2"></el-option>
          <el-option label="专业" value="3"></el-option>
          <el-option label="班级" value="4"></el-option>
        </el-select>
        <el-button @click="research" slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <el-table :data="studentList" border="">
      <el-table-column fixed prop="person.name" label="姓名" width="70">
      </el-table-column>
      <el-table-column prop="person.username" label="用户名" width="120">
      </el-table-column>
      <el-table-column prop="person.dept" label="学院" width="110">
      </el-table-column>
      <el-table-column prop="major" label="专业" width="80"></el-table-column>
      <el-table-column prop="className" label="班级" width="60">
      </el-table-column>
      <el-table-column prop="person.card" label="身份证号" width="80">
      </el-table-column>
      <el-table-column prop="person.gender" label="性别" width="60"  :formatter="genderFormatter">
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
          <el-button @click="edit(scoped.row)" size="mini"
                     icon="el-icon-edit"></el-button>
          <el-button @click="reset(scoped.row)" size="mini"
                     icon="el-icon-refresh-right"></el-button>
          <el-button @click="choose(scoped.row)" size="mini"
                     icon="el-icon-date"></el-button>
          <el-button @click="deleteClick(scoped.row)" type="danger" size="mini" icon="el-icon-delete"></el-button>
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
import {getStudentList, deleteStudent, reset} from '../api/studenttable.ts';
//import store from '@/store'
//import jwt_decode from "jwt-decode";
export default {
  data() {
    return {
      studentList: [],
      input3: '',
      select: '',
      page: 1,
      pageSize: 10,
    }
  },
  methods: {
    edit(row) {
      console.log(row)
      this.$store.commit('setStudentInfo', row);
      this.$router.push('/container/studentList/editStudent')
    },
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
    reset(row) {
      console.log(row.person.id);
      this.$confirm('是否重置密码为123', '重置提示').then(() => {
        reset(row.person.id).then(() => {
          this.getAllStudentList();
          this.$message.success('已重置')
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消重置'
        });
      });
    },
    choose(row) {
      console.log(row)
      this.$store.commit('setStudentInfo', row);
      this.$router.push('/container/studentList/chooseStudent')
    },
    async getAllStudentList() {
      try {
        //console.log(jwt_decode(store.state.jwt))
        const res = await getStudentList({
          page: this.page,
          pageSize: this.pageSize,
          select: this.select,
          input: this.input3
        });
        this.studentList = res.data.data.rows;
        console.log(res);
      } catch (error) {
        console.error('获取学生列表出错:', error);
      }
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getAllStudentList();
    },
    research() {
      this.getAllStudentList();
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getAllStudentList();
    },
    deleteClick(row) {
      console.log(row.person.id);
      this.$confirm('是否确认删除此学生', '删除提示').then(() => {
        deleteStudent(row.person).then(() => {
          this.getAllStudentList();
          this.$message.success('删除成功')
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  },
  created() {
    this.getAllStudentList();
  }
}
</script>
