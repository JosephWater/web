<template>

    <div>
        <div>
            学生
        </div> 
        <div>
            studentList
        </div>
    </div>

</template>
<script>
import { getStudentList } from '../api/studenttable.ts';

export default {
  data() {
    return {
      studentList: []
    }
  },
  methods: {
    async getAllStudentList() {
      try {
        const res = await getStudentList();
        this.studentList = res.data.list;
        console.log(res);
      } catch (error) {
        console.error('获取学生列表出错:', error);
      }
    }
  },
  created() {
    this.getAllStudentList();
  }
}
</script>