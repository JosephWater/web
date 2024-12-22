<template>
  <el-aside>
    <el-menu router unique-opened>
      <el-menu-item index="/container/HomePage">
        <span>学生主页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template #title>
          <span> 培养管理 </span>
        </template>
        <el-menu-item index="/container/STUcourseList">
          <span>培养方案</span>
        </el-menu-item>
        <el-menu-item index="/container/STUChooseCourse">
          <span>选课管理</span>
        </el-menu-item>

      </el-submenu>
      <el-submenu index="2">
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
      <el-submenu index="3">
        <template #title>
          <span> 个人事项 </span>
        </template>
        <el-menu-item index="/container/STUhonour">
          <span>我的荣誉</span>
        </el-menu-item>
        <el-menu-item index="/container/STULeave">
          <span>请假记录</span>
        </el-menu-item>
        <el-menu-item index="/container/STUactivity">
          <span index="1-4">活动申请</span>
        </el-menu-item>
      </el-submenu>


      <el-submenu index="4">
        <template #title>
          <span> 创新实践 </span>
        </template>
        <el-menu-item index="/container/stuInternshipList">
          <span>校外实习</span>
        </el-menu-item>
        <el-menu-item index="/container/stuInnovationList">
          <span>创新项目</span>
        </el-menu-item>
        <el-menu-item index="/container/stuSocialpraticeList">
          <span>社会实践</span>
        </el-menu-item>
        <el-menu-item index="/container/stuVolunteerList">
          <span>志愿服务</span>
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