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
    component: () => import('../components/ContainerView.vue'),
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
        path:'/container/teacherList',
        component: () => import('../views/TeacherListView.vue'),
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
        path:'/container/honourList',
        component: () => import('../views/HonourListView.vue'),
      },
      {
        path:'/container/honourList/createHonour',
        component: () => import('../components/create/createHonour.vue'),
      },
      {
        path:'/container/STUcourse',
        component: () => import('../views/STUcourse.vue'),
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
