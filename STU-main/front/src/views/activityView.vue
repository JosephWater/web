<template>
  <div>
    <div style="display:flex;margin-top: 10px;margin-bottom:15px">
      <el-button @click="addActivity">添加活动</el-button>
      <el-dialog :visible.sync="dialogVisible" title="活动信息">
        <el-form :model="form">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动编号">
            <el-input v-model="form.num"></el-input>
          </el-form-item>
          <el-form-item label="活动类型">
            <el-input v-model="form.activityType"></el-input>
          </el-form-item>
          <el-form-item label="组织单位">
            <el-input v-model="form.organizationalUnit"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确定</el-button>
      </span>
      </el-dialog>
      <el-select v-model="select" slot="prepend" placeholder="全部请求" style="margin-left:15px">
        <el-option label="全部请求" value="1"></el-option>
        <el-option label="已批准" value="2"></el-option>
        <el-option label="未批准" value="3"></el-option>
        <el-option label="待审批" value="4"></el-option>
      </el-select>
      <el-button @click="research" slot="append" icon="el-icon-search"></el-button>
    </div>
    <el-table :data="activityList" border="">
      <el-table-column fixed prop="name" label="活动名称" width="100">
      </el-table-column>
      <el-table-column fixed prop="num" label="活动编号" width="100">
      </el-table-column>
      <el-table-column prop="activityType" label="活动类型" width="120">
      </el-table-column>
      <el-table-column prop="organizationalUnit" label="组织单位" width="100">
      </el-table-column>
      <el-table-column prop="startData" label="开始日期" width="100">
      </el-table-column>
      <el-table-column prop="endData" label="结束日期" width="100">
      </el-table-column>
      <el-table-column prop="studentName" label="申请人" width="100">
      </el-table-column>
      <el-table-column prop="studentNum" label="学号" width="100">
      </el-table-column>
      <el-table-column prop="teacherName" label="审批人" width="100">
      </el-table-column>
      <el-table-column prop="teacherNum" label="审批人账号" width="100">
      </el-table-column>
      <el-table-column prop="approveStatus" label="审批状态" width="100">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <div align="center" slot-scope="scoped">
          <el-button @click="approveActivity(scoped.row)" size="mini"
                     icon="el-icon-check"></el-button>
          <el-button @click="rapproveActivity(scoped.row)" size="mini"
                     icon="el-icon-close"></el-button>
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
import {deleteActivity,approveActivity, rapproveActivity, getActivitychooseList, addActivity} from '../api/activitytable.ts';

//import store from '@/store'
//import jwt_decode from "jwt-decode";
export default {
  data() {
    return {
      activityList: [],
      page: 1,
      pageSize: 10,
      dialogVisible: false,
      select: '',
      form: {
        name: '',
        num: '',
        activityType: '',
        organizationalUnit: '',
      },
    }
  },
  methods: {
    async getActivitychooseList() {
      try {
        //console.log(jwt_decode(store.state.jwt))
        const res = await getActivitychooseList({page: this.page, pageSize: this.pageSize, select: this.select});
        this.activityList = res.data.data.rows;
        console.log(res);
      } catch (error) {
        console.error('获取活动列表出错:', error);
      }
    },
    approveActivity(row) {
      console.log(row);
      approveActivity(row).then(() => {
        this.$message.success('修改成功'),
            this.getActivitychooseList()
      })
    },
    rapproveActivity(row) {
      console.log(row);
      rapproveActivity(row).then(() => {
        this.$message.success('修改成功'),
        this.getActivitychooseList()
      })
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getActivitychooseList();
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getActivitychooseList();
    },
    research() {
      this.getActivitychooseList();
    },
    addActivity() {
      this.dialogVisible = true;
      this.form = {
        name: '',
        num: '',
        activityType: '',
        organizationalUnit: '',
      };
    },
    deleteClick(row) {
      console.log(row);
      this.$confirm('是否确认删除此记录', '删除提示').then(() => {
        deleteActivity(row).then(() => {
          this.getActivitychooseList();
          this.$message.success('删除成功')
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    handleConfirm() {
      addActivity(this.form).then((res) => {
        if (res.data.data == "添加成功") {
          this.$message.success('添加成功'),
              this.dialogVisible = false
        } else {
          this.$message.error(res.data.msg)
        }
        console.log(res.data)
      })
    }
  },
  created() {
    this.getActivitychooseList();
  }
}
</script>
