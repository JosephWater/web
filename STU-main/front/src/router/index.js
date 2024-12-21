import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('../components/LoginView.vue')
  },{
    path:'/404',
    component:()=>import('../views/404View.vue')
  },
  {
    path: '/container/container',
    redirect: '/container/HomePage',
    component: () => import('../components/ContainerView2.vue'),
    meta:{ title: '首页'},
    children:[
      {
        path:'/container/HomePage',
        component: () => import('../views/HomePage.vue'),
        meta:{
          title: ''
        }
      },
      {
        path:'/container/studentList',
        component: () => import('../views/StudentListView.vue'),
        meta:{
          title: '学生管理'
        }
      },
      {
        path:'/container/studentList/createStudent',
        component: () => import('../components/create/createStudent.vue'),
        meta:{
          title: '学生管理 / 新建学生'
        }
      },
      {
        path:'/container/studentList/editStudent',
        component: () => import('../components/create/createStudent.vue'),
        meta:{
          title: '学生管理 / 编辑学生'
        }
      },

      {
        path:'/container/teacherList',
        component: () => import('../views/TeacherListView.vue'),
        meta:{
          title: '教师管理'
        }
      },
      {
        path:'/container/teacherList/createTeacher',
        component: () => import('../components/create/createTeacher.vue'),
        meta:{
          title: '学生管理'
        }
      },
      {
        path:'/container/teacherList/editTeacher',
        component: () => import('../components/create/createTeacher.vue'),
        meta:{
          title: '学生管理'
        }
      },
      {
        path:'/container/courseList',
        component: () => import('../views/CourseListView.vue'),
        meta:{
          title: '学生管理'
        }
      },
      {
        path:'/container/courseList/createCourse',
        component: () => import('../components/create/createCourse.vue'),
        meta:{
          title: '学生管理'
        }
      },
      {
        path:'/container/courseList/editCourse',
        component: () => import('../components/create/createCourse.vue'),
        meta:{
          title: '学生管理'
        }
      },
      
      {
        path:'/container/STUcourse',
        component: () => import('../views/STUcourse.vue'),
        meta:{
          title: '学生管理'
        }
      },
      {
        path:'/container/STUcourseList',
        component: () => import('../views/STUcourseList.vue'),
        meta:{
          title: '学生管理'
        }
      },
      {
        path:'/container/leaveList/processedLeave',
        component: () => import('../views/ProcessedLeaveListView.vue'),
        meta:{
          title: '学生管理'
        }
      },
      {
        path:'/container/leaveList/leave',
        component: () => import('../views/LeaveListView.vue'),
        meta:{
          title: '学生管理'
        }
      },
      {
        path:'/container/STUChooseCourse',
        component: () => import('../views/STUChooseCourse.vue'),
        meta:{
          title: '学生管理'
        }
      },
      {
        path:'/container/activity',
        component: () => import('../views/ActivityView.vue'),
        meta:{
          title: '学生管理'
        }
      },
      {
        path:'/container/STUactivity',
        component: () => import('../views/STUactivity.vue'),
        meta:{
          title: '学生管理'
        }
      },

    ]
  },
  {
    path:'/',
    redirect: '/login'
  },
  {
    path:'*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

export default router
