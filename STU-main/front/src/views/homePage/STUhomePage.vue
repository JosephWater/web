<template>
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
            class="course"
          >
            <div class="course-name">{{ course.course.courseName }}</div>
            <div class="course-details">教师: {{ course.course.teacherName }}</div>
            <div class="course-details">地点: {{ course.course.place }}</div>
          </div>
          <div v-if="getCoursesForTimeAndDay(dayIndex + 1, timeIndex + 1).length === 0" class="no-course">
              
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { getStuCourse } from "../../api/coursetable.ts";
  
  export default {
    data() {
      return {
        days: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
        times: ["第一节", "第二节", "第三节", "第四节", "第五节"],
        courseList: [],
      };
    },
    methods: {
      async getAllStuCourseList() {
        try {
          const UserInfo = this.$store.getters.getUserInfo;
          const res = await getStuCourse(UserInfo.studentId);
          this.courseList = res.data.data;
          //console.log("完整课程数据:", this.courseList); // 打印完整数据
          // 打印每个课程的time值，方便检查对应关系
          this.courseList.forEach(course => {
              console.log(course.course.courseName, course.course.time)
          })
        } catch (error) {
          console.error("获取课程列表出错:", error);
        }
      },
      getCoursesForTimeAndDay(dayIndex, timeSlot) {
        const filteredCourses = this.courseList.filter((course) => {
          const time = course.course.time;
          const courseDay = Math.floor(time / 10);
          const courseTime = time % 10;
          console.log(`dayIndex:${dayIndex}, timeSlot:${timeSlot}, courseDay:${courseDay}, courseTime:${courseTime}, courseName:${course.course.courseName}`);
          return courseDay === dayIndex && courseTime === timeSlot;
        });
          console.log(`filteredCourses:`,filteredCourses);
        return filteredCourses;
      },
    },
    created() {
      this.getAllStuCourseList();
    },
  };
  </script>

  <style scoped>

  </style>
  