<template>
    <el-aside>
        <el-menu router unique-opened>
            <el-submenu index="1">
                <template #title>
                    <span> 教务管理 </span>
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
            <router-link to="/STUmainPage" style="text-decoration:none"><el-menu-item index="1-4">学生主页</el-menu-item></router-link>
        <el-menu-item index="/course-panel">
            <span>学生选课</span>
        </el-menu-item>
        <el-menu-item>
            <span>教务管理</span>
        </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<style lang="scss" scoped>
    .el-aside{
        background-color: #eee;
        height: 100vh;
        width: auto;
    }
    .el-menu{
        width: 200px;

}
</style>
<script lang="ts">
export default {
  name: 'adminMenu',
}

</script>