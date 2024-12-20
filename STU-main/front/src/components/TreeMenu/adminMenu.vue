<template>
  <el-aside>
    <el-menu router unique-opened>
      <el-submenu index="1">
        <template #title>
          <span>教务管理</span>
        </template>
        <el-menu-item index="/container/courseList">
          <span>课程管理</span>
        </el-menu-item>
        <el-menu-item>
          <span>成绩管理</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template #title>
          <span> 人员管理 </span>
        </template>
        <el-menu-item index="/container/studentList">
          <span>学生管理</span>
        </el-menu-item>
        <el-menu-item index="/container/teacherList">
          <span>教师管理</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template #title>
          <span>学生事项</span>
        </template>
        <el-menu-item index="/container/activity">
          <span>活动管理</span>
        </el-menu-item>
        <el-menu-item index="/container/teacherList">
          <span>请假管理</span>
        </el-menu-item>
        <el-menu-item index="/container/teacherList">
          <span>消费管理</span>
        </el-menu-item>
        <el-menu-item index="/container/teacherList">
          <span>荣誉管理</span>
        </el-menu-item>
    </el-submenu>
    </el-menu>
  </el-aside>
</template>

<style lang="scss" scoped>
.el-aside {
  background-color: #eee;
  height: 100vh;
  width: auto;
}

.el-menu {
  width: 200px;

}
</style>
<script lang="ts">
export default {
  name: 'adminMenu',
}

</script>