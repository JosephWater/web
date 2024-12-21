<template>
  <el-form ref="form" :model="form" label-width="80px">

    <el-form-item label="课程名称">
      <el-input v-model="form.courseName"></el-input>
    </el-form-item>
    <el-form-item label="课序号">
      <el-input v-model="form.courseNum"></el-input>
    </el-form-item>
    <el-form-item label="开课单位">
      <el-select v-model="form.openingUnit" placeholder="请选择开课单位">
        <el-option label="软件学院" value="软件学院"></el-option>
        <el-option label="集成电路学院" value="集成电路学院"></el-option>
        <el-option label="数学学院" value="数学学院"></el-option>
        <el-option label="外国语学院" value="外国语学院"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="总学时">
      <el-input-number v-model="form.totalHours" @change="handleChange" :min="0" :max="100"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="学分">
      <el-input-number v-model="form.credits" @change="handleChange" :min="0" :max="10"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="课程类型">
      <el-select v-model="form.courseType" placeholder="请选择课程类型">
        <el-option label="必修" value="必修"></el-option>
        <el-option label="选修" value="选修"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="上课时间">
      <el-cascader
          v-model="form.tim"
          :options="options1"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"></el-cascader>
    </el-form-item>
    <el-form-item label="上课地点">
      <el-cascader
          v-model="form.pla"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"></el-cascader>
    </el-form-item>
    <el-form-item label="平时成绩">
      <el-input-number v-model="form.pre1" @change="handleChange" :min="0" :max="100" :step="5"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="期末成绩">
      {{ 100 - form.pre1 }}
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">保存</el-button>
      <el-button @click="$router.push('/container/courseList')">返回</el-button>
    </el-form-item>
  </el-form>

</template>
<script>
import {editCourse} from '../../api/coursetable.ts'

export default {
  computed: {
    // 定义一个计算属性 courseInfo
    courseInfo() {
      // 返回 Vuex store 中的 courseInfo 状态
      return this.$store.state.courseInfo;
    }
    // 您还可以在这里定义其他计算属性
  },
  name: "creatCourse",
  data() {
    return {
      form: {
        id:'',
        courseName: '',
        courseNum: '',
        openingUnit: '',
        totalHours: 0,
        credits: '',
        courseType: null,
        tim: '',
        time: 0,
        place: '',
        pla: '',
        term: '',
        teacherName: '',
        pre1: 0,
        pre2: 0
      },
      options1: [
        {
          label: '周一',
          value: '1',
          children: [{label: '第一节', value: '1'}, {label: '第二节', value: '2'}, {
            label: '第三节',
            value: '3'
          }, {label: '第四节', value: '4'}, {label: '第五节', value: '5'}]
        },
        {
          label: '周二',
          value: '2',
          children: [{label: '第一节', value: '1'}, {label: '第二节', value: '2'}, {
            label: '第三节',
            value: '3'
          }, {label: '第四节', value: '4'}, {label: '第五节', value: '5'}]
        },
        {
          label: '周三',
          value: '3',
          children: [{label: '第一节', value: '1'}, {label: '第二节', value: '2'}, {
            label: '第三节',
            value: '3'
          }, {label: '第四节', value: '4'}, {label: '第五节', value: '5'}]
        },
        {
          label: '周四',
          value: '4',
          children: [{label: '第一节', value: '1'}, {label: '第二节', value: '2'}, {
            label: '第三节',
            value: '3'
          }, {label: '第四节', value: '4'}, {label: '第五节', value: '5'}]
        },
        {
          label: '周五',
          value: '5',
          children: [{label: '第一节', value: '1'}, {label: '第二节', value: '2'}, {
            label: '第三节',
            value: '3'
          }, {label: '第四节', value: '4'}, {label: '第五节', value: '5'}]
        },
        {
          label: '周六',
          value: '6',
          children: [{label: '第一节', value: '1'}, {label: '第二节', value: '2'}, {
            label: '第三节',
            value: '3'
          }, {label: '第四节', value: '4'}, {label: '第五节', value: '5'}]
        },
        {
          label: '周日',
          value: '7',
          children: [{label: '第一节', value: '1'}, {label: '第二节', value: '2'}, {
            label: '第三节',
            value: '3'
          }, {label: '第四节', value: '4'}, {label: '第五节', value: '5'}]
        }
      ],
      options: [{
        value: '1-',
        label: '一区',
        children: [
          {
            value: '101',
            label: '101'
          }, {value: '102', label: '102'}, {value: '103', label: '103'}, {value: '201', label: '201'}, {
            value: '202',
            label: '202'
          }, {value: '203', label: '203'}, {value: '301', label: '301'}, {value: '302', label: '302'}, {
            value: '303',
            label: '303'
          }]
      }, {
        value: '2-',
        label: '二区',
        children: [{
          value: '101',
          label: '101'
        }, {value: '102', label: '102'}, {value: '103', label: '103'}, {value: '201', label: '201'}, {
          value: '202',
          label: '202'
        }, {value: '203', label: '203'}, {value: '301', label: '301'}, {value: '302', label: '302'}, {
          value: '303',
          label: '303'
        }]
      }, {
        value: '3-',
        label: '三区',
        children: [{
          value: '101',
          label: '101'
        }, {value: '102', label: '102'}, {value: '103', label: '103'}, {value: '201', label: '201'}, {
          value: '202',
          label: '202'
        }, {value: '203', label: '203'}, {value: '301', label: '301'}, {value: '302', label: '302'}, {
          value: '303',
          label: '303'
        }]
      }, {
        value: '4-',
        label: '四区',
        children: [{
          value: '101',
          label: '101'
        }, {value: '102', label: '102'}, {value: '103', label: '103'}, {value: '201', label: '201'}, {
          value: '202',
          label: '202'
        }, {value: '203', label: '203'}, {value: '301', label: '301'}, {value: '302', label: '302'}, {
          value: '303',
          label: '303'
        }]
      }, {
        value: '5-',
        label: '五区',
        children: [{
          value: '101',
          label: '101'
        }, {value: '102', label: '102'}, {value: '103', label: '103'}, {value: '201', label: '201'}, {
          value: '202',
          label: '202'
        }, {value: '203', label: '203'}, {value: '301', label: '301'}, {value: '302', label: '302'}, {
          value: '303',
          label: '303'
        }]
      }
      ],

    }
  },
  methods:
      {
        onSubmit() {
          this.form.pre2 = 100 - this.form.pre1,
              this.form.place = this.form.pla[0] + this.form.pla[1],
              this.form.time = this.form.tim[0] + this.form.tim[1],
              console.log(this.form)
              editCourse(this.form).then((res) => {
                if (res.data.data == "更新成功") {
                  this.$message.success('已保存')
                } else {
                  this.$message.error(res.data.msg)
                }
                console.log(res)
              })
        }
      },
  created() {
    console.log(this.courseInfo)
    this.form.id = this.courseInfo.id;
    this.form.courseName = this.courseInfo.courseName;
    this.form.courseNum = this.courseInfo.courseNum;
    this.form.openingUnit = this.courseInfo.openingUnit;
    this.form.totalHours = this.courseInfo.totalHours;
    this.form.credits = this.courseInfo.credits;
    this.form.courseType = this.courseInfo.courseType;
    this.form.teacherName = this.courseInfo.teacherName;
    this.form.pre1 = this.courseInfo.pre1;
    this.form.pre2 = this.courseInfo.pre2;
    this.form.time = this.courseInfo.time;
    this.form.place = this.courseInfo.place;
  }
}
</script>