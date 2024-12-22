<template>
  <div ref="chartDom" style="width: 500px; height: 400px;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'EChartsComponent',
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
  methods: {
    initChart() {
      // 获取 DOM 元素
      const chartDom = this.$refs.chartDom;
      // 初始化 ECharts 实例
      this.chart = echarts.init(chartDom);
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
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            // ... 其他配置
            data: [
              { value: 1048, name: '优秀' },
              { value: 735, name: '良好' },
              { value: 735, name: '中等' },
              { value: 735, name: '及格' },
              { value: 735, name: '不及格' },
              // ... 其他数据
            ],
          },
        ],
      };
      // 使用配置项生成图表
      this.chart.setOption(option);
    },
  },
};
</script>

<style scoped>
/* 你可以在这里添加一些样式 */
</style>