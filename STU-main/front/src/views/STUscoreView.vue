<template>
  <div>
    <el-table :data="courseList" border style="width: 100%">
      <el-table-column fixed prop="course.courseNum" label="课序号" width="90">
      </el-table-column>
      <el-table-column prop="course.courseName" label="课程名称" width="90">
      </el-table-column>
      <el-table-column prop="course.openingUnit" label="开课单位" width="100">
      </el-table-column>
      <el-table-column prop="course.totalHours" label="总学时" width="70">
      </el-table-column>
      <el-table-column prop="course.credits" label="学分" width="70">
      </el-table-column>
      <el-table-column prop="course.courseType" label="课程类型" width="80">
      </el-table-column>
      <el-table-column prop="course.teacherName" label="任课教师" width="100">
      </el-table-column>
      <el-table-column prop="course.pre1" label="平时成绩占比" width="110" :formatter="formatPercentage">
      </el-table-column>
      <el-table-column prop="score1" label="平时成绩" width="80">
      </el-table-column>
      <el-table-column prop="course.pre2" label="期末成绩占比" width="110" :formatter="formatPercentage">
      </el-table-column>
      <el-table-column prop="score2" label="期末成绩" width="80">
      </el-table-column>
      <el-table-column prop="score3" label="最终成绩" width="80">
      </el-table-column>
      <el-table-column prop="score3" label="绩点" width="80" :formatter="formatFivePointScore">
      </el-table-column>
    </el-table>
    <div class="classtable1" style="margin-top: 20px;margin-right: 20px">
      <div ref="chartDom" style="width: 500px; height: 400px;"></div>
    </div>
    <div class="classtable2" style="margin-top: 20px">
      <div ref="chartContainer" style="width: 700px; height: 400px;"></div>
    </div>
  </div>
</template>

<script>
import {getStuCourse} from '../api/coursetable.ts';
import * as echarts from 'echarts';

export default {
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
  data() {
    return {
      courseList: [],
      chart: null,
      chart2: null,
    }
  },
  methods: {
    initChart2() {
      // 获取 DOM 元素
      const chartDom = this.$refs.chartDom;
      // 初始化 ECharts 实例
      this.chart = echarts.init(chartDom);
      const sc = this.courseList[0];
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
    initChart() {
      console.log(this.courseList)
      const chartContainer = this.$refs.chartContainer;
      this.chart = echarts.init(chartContainer);
      const scores3 = this.courseList.map(course => course.score3);
      const courseName = this.courseList.map(course => course.course.courseName);
      const option = {

        xAxis: {
          type: 'category',
          data: courseName,
          axisLabel: {
            // 设置标签的显示间隔
            interval: 0, // 0 表示显示所有标签，非零值会跳过一些标签

            // 设置标签的旋转角度
            rotate: 45, // 标签将旋转45度以节省空间

            // 其他可选配置，如字体大小、颜色等
            fontSize: 12,
            color: '#333'
          }
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: scores3,
            type: 'line',
            color: 'red',
          },
        ],
      };
      // 使用配置项生成图表
      this.chart.setOption(option);
    },
    formatFivePointScore(row, column, cellValue) {
      let fivePointScore = 0;
      if (cellValue < 60) {
        return 0
      } else {
        fivePointScore = (cellValue - 50) / 10;
      }
      return fivePointScore.toFixed(2);
    },
    formatPercentage(row, column, cellValue) {
      return (cellValue) + '%';
    },
    formatPercentage2(row, column, cellValue) {
      return '周' + cellValue[0] + '第' + cellValue % 10 + '节课';
    },
    async getAllStuCourseList() {
      try {
        const UserInfo = this.$store.getters.getUserInfo;
        const res = await getStuCourse(UserInfo.studentId);
        this.courseList = res.data.data;
        console.log(res);
        this.initChart();
        this.initChart2()
      } catch (error) {
        console.error('获取课程列表出错:', error);
      }
    },
  },
  created() {
    this.getAllStuCourseList();
  }
}

</script>
<style>
.classtable1 {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(26, 115, 232, 0.2);
  float: left;
  width: 40%;
  height: 400px;
  margin_top: 20px;
}
.classtable2 {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(26, 115, 232, 0.2);
  float: left;
  width: 55%;
  height: 400px;
  margin_top: 20px;
}
</style>