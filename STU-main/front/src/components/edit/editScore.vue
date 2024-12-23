<template>
  <div>
    <div class="classtable">
      <el-button @click="$router.push('/container/scoreList')" style="margin-bottom: 10px">返回</el-button>

      <el-dialog :visible.sync="dialogVisible" title="修改成绩">
        <el-form :model="form">

          <el-form-item label="平时成绩">
            <el-input-number v-model="form.score1" @change="handleChange" :min="0" :max="100" :step="5"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="考试成绩">
            <el-input-number v-model="form.score2" @change="handleChange" :min="0" :max="100" :step="5"
            ></el-input-number>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确定</el-button>
      </span>
      </el-dialog>
      <el-table :data="scoreList" border style="width: 100%">
        <el-table-column prop="course.courseName" label="课程名称" width="80">
        </el-table-column>
        <el-table-column prop="course.courseNum" label="课序号" width="90">
        </el-table-column>
        <el-table-column prop="person.name" label="学生" width="80">
        </el-table-column>
        <el-table-column prop="person.username" label="学号" width="110">
        </el-table-column>
        <el-table-column prop="score1" label="平时成绩" width="80">
        </el-table-column>
        <el-table-column prop="score2" label="考试成绩" width="80">
        </el-table-column>
        <el-table-column prop="score3" label="总成绩" width="70">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <div align="center" slot-scope="scoped">
            <el-button @click="edit(scoped.row)" size="mini" icon="el-icon-edit"></el-button>
            <el-button @click="deleteClick(scoped.row)" type="danger" size="mini" icon="el-icon-delete"></el-button>
          </div>
        </el-table-column>
      </el-table>
    </div>
    <div class="classtable1">
      <div ref="chartDom" style="width: 450px; height: 400px;"></div>
    </div>
  </div>
</template>
<script>
import {addScore, deleteScore, getScore} from "../../api/score.ts";
import * as echarts from 'echarts';

export default {
  data() {
    return {
      scoreList: [],
      id: '',
      dialogVisible: false,
      select: '',
      form: {
        score1: '',
        score2: ''
      },
      chart: null,
    }
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
  computed: {
    // 定义一个计算属性 courseInfo
    courseInfo() {
      // 返回 Vuex store 中的 courseInfo 状态
      return this.$store.state.courseInfo;
    }
    // 您还可以在这里定义其他计算属性
  },
  methods: {
    initChart() {
      // 获取 DOM 元素
      const chartDom = this.$refs.chartDom;
      // 初始化 ECharts 实例
      this.chart = echarts.init(chartDom);
      const sc = this.scoreList[0];
      console.log(sc)
      // 配置选项
      const option = {
        // ... 你的 ECharts 配置选项
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '5%',
          left: 'center',
        },
        series: [
          {
            name: '成绩表',
            type: 'pie',
            radius: ['40%', '70%'],
            // ... 其他配置
            data: [
              { value: sc.num1, name: '优秀' },
              { value: sc.num2, name: '良好' },
              { value: sc.num3, name: '及格' },
              { value: sc.num4, name: '不及格' },
              { value: sc.num5, name: '未评分' },
            ],
          },
        ],
      };
      // 使用配置项生成图表
      this.chart.setOption(option);
    },
    handleConfirm() {
      addScore({"id": this.id, "score1": this.form.score1, "score2": this.form.score2}).then((res) => {
        if (res.data.data == "添加成功") {
          this.$message.success('添加成功'),
              this.getAllCourseList(),
              this.dialogVisible = false
        } else {
          this.$message.error(res.data.msg)
        }
        console.log(res.data)
      })
    },

    edit(row) {
      this.dialogVisible = true;
      this.form = {
        score1: 0,
        score2: 0
      };
      this.id = row.id;
    },
    deleteClick(row) {
      this.$confirm('是否确认删除', '删除提示').then(() => {
        deleteScore(row).then(() => {
          this.getAllCourseList();
          this.$message.success('删除成功')
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    async getAllCourseList() {
      try {
        const res = await getScore(this.courseInfo.id);
        console.log(res);
        this.scoreList = res.data.data;
        this.initChart();
        console.log(this.scoreList[0].num3);
      } catch (error) {
        console.error('获取课程列表出错:', error);
      }
    }
  },

  created() {
    this.getAllCourseList();
  }
}

</script>
<style scoped>
.classtable {
  margin :0 17px 0 0;
  padding: 10px 20px 0px 20px;
  border-radius: 12px;
  /*overflow: hidden;*/
  box-shadow: 0 4px 12px rgba(26, 115, 232, 0.2);
  float: left;
  width: 59%;
  height: 800px;
}
.classtable1 {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(26, 115, 232, 0.2);
  float: left;
  width: 35%;
  height: 400px;
}
</style>