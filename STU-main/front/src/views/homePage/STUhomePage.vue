<template>
  <div>
  <div class="StuInfo">
  <el-descriptions class="margin-top" title="个人信息" :column="3"  border>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        姓名
      </template>
     {{ studentInfo.person.name }} 
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        手机号
      </template>
      {{ studentInfo.person.phone }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        居住地
      </template>
      {{studentInfo.person.address}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        专业
      </template>
      {{ studentInfo.person.dept }} {{ studentInfo.major }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
        邮箱
      </template>
      {{studentInfo.person.email }}
    </el-descriptions-item>
  </el-descriptions>

  </div >
  <div class="classtable">
    <div class="timetable">
      <div class="header">
        <div class="cell"></div>
        <div class="cell" v-for="(day, dayIndex) in days" :key="dayIndex">{{ day }}</div>
      </div>
      <div class="row" v-for="(time, timeIndex) in times" :key="timeIndex">
        <div class="cell time">{{ time }}</div>
        <div class="cell" v-for="(day, dayIndex) in days" :key="dayIndex">
          <div
            v-for="course in getCoursesForTimeAndDay(dayIndex + 1, timeIndex + 1)"
            :key="course.courseId"
            
          >
          <template v-if="course.course.courseType == '必修'">
            <div class="course">
            <div class="course-name">{{ course.course.courseName }}<br><br></div>
            <div class="course-details">教师: {{ course.course.teacherName }}</div>
            <div class="course-details">地点: {{ course.course.place }}</div>
            </div>
          </template>  
          <template v-if="course.course.courseType != '必修'">
            <div class="course2">
            <div class="course-name">{{ course.course.courseName }}<br><br></div>
            <div class="course-details">教师: {{ course.course.teacherName }}</div>
            <div class="course-details">地点: {{ course.course.place }}</div>
            </div>
          </template>
          </div>
          <div v-if="getCoursesForTimeAndDay(dayIndex + 1, timeIndex + 1).length === 0" class="no-course">
              
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="calender">
    <el-calendar v-model="date">
    </el-calendar>
  </div>
</div>
  </template>
  
  <script>
  import { getStuCourse } from "../../api/coursetable.ts";
  import { getStudentInfo } from "../../api/login.ts";
  export default {
    data() {
      return {
        days: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
        times: ["第一节", "第二节", "第三节", "第四节", "第五节"],
        courseList: [],
        date: new Date(),
        studentInfo:[],
      };
    },
    methods: {
      async getAllStuCourseList() {
        try {
          const UserInfo = this.$store.getters.getUserInfo;
          const res = await getStuCourse(UserInfo.studentId);
          this.courseList = res.data.data;
          //console.log(res);
          //console.log("完整课程数据:", this.courseList); // 打印完整数据
          // 打印每个课程的time值，方便检查对应关系
  
        } catch (error) {
          console.error("获取课程列表出错:", error);
        }
      },
      async getStuInfo( ){
        try {
        const UserInfo = this.$store.getters.getUserInfo;
        const info = await getStudentInfo(UserInfo.studentId);
        
        this.studentInfo = info.data.data;
        console.log(info);
      } catch (error) {
        console.error('获取学生信息出错:', error);
      }
      },
      getCoursesForTimeAndDay(dayIndex, timeSlot) {
        const filteredCourses = this.courseList.filter((course) => {
          const time = course.course.time;
          const courseDay = Math.floor(time / 10);
          const courseTime = time % 10;
          //console.log(`dayIndex:${dayIndex}, timeSlot:${timeSlot}, courseDay:${courseDay}, courseTime:${courseTime}, courseName:${course.course.courseName}`);
          return courseDay === dayIndex && courseTime === timeSlot;
        });
          //console.log(`filteredCourses:`,filteredCourses);
        return filteredCourses;
      },
    },
    created() {
      this.getAllStuCourseList();
      this.getStuInfo();
    },
  };
  </script>

<style scoped>
.calender{
  padding: 10px 20px 15px 1px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(26, 115, 232, 0.2);
  margin-bottom: 30px;
  float:right;
  width: 35%;
  height: 585px;
  margin-left: 5px;
}
.StuInfo{
  padding: 10px 10px 15px 10px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(26, 115, 232, 0.2);
  margin-bottom: 30px;
}
.classtable{
  padding: 10px 0px 30px 10px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(26, 115, 232, 0.2);
  float: left;
  width: 60%;
  height: 570px;
  margin-left: 5px;
}
.timetable {
  margin-right: 10px;
  display: grid;

  grid-template-columns: 100px repeat(7, 1fr); /* 时间段列 + 7天 */
  gap: 1px;
  background-color: #dfdbdba8; /* 表格外边框颜色 */
  border-collapse: collapse; /* 合并单元格边框 (虽然在 grid 布局中不直接起作用，但保留以防将来修改布局方式) */
  width: 90%; /* 确保表格宽度占据父容器 */
  border-radius: 10px;
  height: 570px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cell {
  background-color: #fff;
  border: 0.05px solid #e3e0e014; /* 更淡的单元格边框 */
  padding: 1px; /* 略微调整内边距 */
  text-align: center;
  overflow: hidden; /* 防止内容溢出 */
  word-break: break-all; /* 允许单词在任何字符处断开 */
}

.header {
  display: contents; /* 使 header 的子元素直接成为 grid 的子元素 */
  background-color: #cbeff2; /* 头部背景色 */
  font-weight: bold;
}

.header .cell {
  border-bottom: 1px solid #caedff; /* 头部单元格底部分割线 */
  padding-top: 12px;
  padding-bottom: 12px;
}

.row {
  display: contents; /* 使 row 的子元素直接成为 grid 的子元素 */
}

.time {
  font-weight: bold;
  background-color: #ffffffcb; /* 时间列背景色 */
  text-align: center; /* 时间文字居中 */
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
}

.course {
  background-color: #e0f2f7; /* 更接近图片中的淡蓝色 */
  margin: 1px; /* 略微增加外边距 */
  padding: 6px;
  border: 0px solid #ffffff; /* 更接近图片中的边框颜色 */
  border-radius: 4px; /* 略微调整圆角 */
  text-align: left; /* 文本左对齐 */
  height: 90%; /* 确保课程块填充整个单元格高度 */
  box-sizing: border-box; /* 包含 padding 和 border */
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
}

.course2 {
  background-color: #f0b9c9; /* 更接近图片中的淡蓝色 */
  margin: 1px; /* 略微增加外边距 */
  padding: 6px;
  border: 0px solid #ffffff; /* 更接近图片中的边框颜色 */
  border-radius: 4px; /* 略微调整圆角 */
  text-align: left; /* 文本左对齐 */
  height: 90%; /* 确保课程块填充整个单元格高度 */
  box-sizing: border-box; /* 包含 padding 和 border */
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
}
.course:nth-child(even) { /* 偶数课程背景色略微加深 */
  background-color: #d0e9f2;
}

.course-name {
  
  margin-bottom: 2px;
}

.course-details {
  font-size: 12px;
  color: #777; /* 更深的灰色 */
  line-height: 1.2;
}

.no-course {
    text-align: center;
    color: grey;
    height: 100%;
    display: flex; /* 使用 Flexbox 布局 */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
}
</style>