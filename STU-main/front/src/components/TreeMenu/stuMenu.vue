<template>
  <el-aside>
    <el-menu router unique-opened>

      <el-submenu index="1">
        <template #title>
          <span> 培养管理 </span>
        </template>
        <el-menu-item index="/container/STUcourseList">
          <span>培养方案</span>
        </el-menu-item>
        <el-menu-item index="/STUmainPage">
          <span>我的课表</span>
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

      <router-link to="/STUmainPage" style="text-decoration:none">
        <el-menu-item index="1-4">学生主页</el-menu-item>
      </router-link>
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