<template>
  <el-aside>
    <el-menu router unique-opened>
      <el-menu-item index="/container/HomePage">
        <span>学生主页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template #title>
          <span> 培养管理 </span>
        </template>
        <el-menu-item index="/container/STUcourseList">
          <span>培养方案</span>
        </el-menu-item>
        <el-menu-item index="/container/STUChooseCourse">
          <span>选课管理</span>
        </el-menu-item>
        <el-menu-item index="/container/STUhonour">
          <span>我的荣誉</span>
        </el-menu-item>
         <el-menu-item index="/container/STULeave">
          <span>请假记录</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template #title>
          <span> 学业管理 </span>
        </template>
        <el-menu-item index="/container/STUclassTable">
          <span>我的课表</span>
        </el-menu-item>
        <el-menu-item index="/container/STUscoreList">
          <span>我的成绩</span>
        </el-menu-item>
      </el-submenu>


      <router-link to="/container/STUactivity" style="text-decoration:none">
        <el-menu-item index="1-4">活动申请</el-menu-item>
      </router-link>
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