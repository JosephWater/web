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
    path: '/container',
    redirect: '/container/CourseListView.vue',
    component: () => import('../components/ContainerView2.vue'),
    children:[
      {
        path:'/container/studentList',
        component: () => import('../views/StudentListView.vue'),
      },
      {
        path:'/container/studentList/createStudent',
        component: () => import('../components/create/createStudent.vue'),
      },
      {
        path:'/container/studentList/editStudent',
        component: () => import('../components/create/createStudent.vue'),
      },
      {
        path:'/STUmainPage',
        component: () => import('../views/homePage/STUhomePage.vue'),
      },
      {
        path:'/container/teacherList',
        component: () => import('../views/TeacherListView.vue'),
      },
      {
        path:'/container/teacherList/createTeacher',
        component: () => import('../components/create/createTeacher.vue'),
      },
      {
        path:'/container/teacherList/editTeacher',
        component: () => import('../components/create/createTeacher.vue'),
      },
      {
        path:'/container/courseList',
        component: () => import('../views/CourseListView.vue'),
      },
      {
        path:'/container/courseList/createCourse',
        component: () => import('../components/create/createCourse.vue'),
      },
      {
        path:'/container/courseList/editCourse',
        component: () => import('../components/create/createCourse.vue'),
      },
      
      {
        path:'/container/STUcourse',
        component: () => import('../views/STUcourse.vue'),
      },
      {
        path:'/container/STUcourseList',
        component: () => import('../views/STUcourseList.vue'),
      },
      {
        path:'/container/leaveList/processedLeave',
        component: () => import('../views/ProcessedLeaveListView.vue'),
      },
      {
        path:'/container/leaveList/leave',
        component: () => import('../views/LeaveListView.vue'),
      },
      {
        path:'/container/STUChooseCourse',
        component: () => import('../views/STUChooseCourse.vue'),
      },
      {
        path:'/container/activity',
        component: () => import('../views/ActivityView.vue'),
      },
      {
        path:'/container/STUactivity',
        component: () => import('../views/STUactivity.vue'),
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
