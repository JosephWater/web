<template>
    <el-aside>
        <el-menu router unique-opened>
            <el-sub-menu index="1">
                <template #title>
                    <span> 教师菜单 </span>
                </template>
                <el-menu-item index="/Course">
                    <span>课程管理</span>
                </el-menu-item>
                <el-menu-item>
                    <span>成绩管理</span>
                </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
                <template #title>
                    <span> 人员管理 </span>
                </template>
                <el-menu-item index="/teacher-panel">
                    <span>教师管理</span>
                </el-menu-item>
                <el-menu-item index="/student-panel">
                    <span>学生管理</span>
                </el-menu-item>
            </el-sub-menu>
        <el-menu-item>
            <span>人员管理</span>
        </el-menu-item>
        <el-menu-item index="/course-panel">
            <span>课程管理</span>
        </el-menu-item>
        <el-menu-item>
            <span>教务管理</span>
        </el-menu-item>
        </el-menu>
    </el-aside>
</template>


<script lang="ts">
export default {
  name: 'TeaMenu',
}

</script>