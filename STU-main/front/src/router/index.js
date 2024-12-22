import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        component: () => import('../components/LoginView.vue')
    }, {
        path: '/404',
        component: () => import('../views/404View.vue')
    },
    {
        path: '/container/container',
        redirect: '/container/HomePage',
        component: () => import('../components/ContainerView2.vue'),
        meta: {title: '首页'},
        children: [
            {
                path: '/container/HomePage',
                component: () => import('../views/HomePage.vue'),
                meta: {
                    title: ''
                }
            },
            {
                path: '/container/editPassword',
                component: () => import('../components/edit/editPassword.vue'),
                meta: {
                    title: '修改密码'
                }
            },
            {
                path: '/container/studentList',
                component: () => import('../views/StudentListView.vue'),
                meta: {
                    title: '学生管理'
                }
            },
            {
                path: '/container/studentList/chooseStudent',
                component: () => import('../components/StuChooseView.vue'),
                meta: {
                    title: '学生管理 / 学生选课'
                }
            },
            {
                path: '/container/studentList/createStudent',
                component: () => import('../components/create/createStudent.vue'),
                meta: {
                    title: '学生管理 / 添加学生 '
                }
            },
            {
                path: '/container/studentList/editStudent',
                component: () => import('../components/edit/editStudent.vue'),
                meta: {
                    title: '学生管理 / 编辑学生'
                }
            },

            {
                path: '/container/teacherList',
                component: () => import('../views/TeacherListView.vue'),
                meta: {
                    title: '教师管理'
                }
            },
            {
                path: '/container/teacherList/createTeacher',
                component: () => import('../components/create/createTeacher.vue'),
                meta: {
                    title: '教师管理 / 添加教师'
                }
            },
            {
                path: '/container/teacherList/editTeacher',
                component: () => import('../components/edit/editTeacher.vue'),
                meta: {
                    title: '教师管理 / 编辑教师'
                }
            },
            {
                path: '/container/editScore',
                component: () => import('../components/edit/editScore.vue'),
                meta: {
                    title: '教务管理 / 成绩管理 / 学生成绩'
                }
            },
            {
                path: '/container/courseList',
                component: () => import('../views/CourseListView.vue'),
                meta: {
                    title: '教务管理 / 课程管理'
                }
            },
            {
                path: '/container/STUclassTable',
                component: () => import('../views/STUclassTable.vue'),
                meta: {
                    title: ' 我的课表'
                }
            },
            {
                path: '/container/courseList/createCourse',
                component: () => import('../components/create/createCourse.vue'),
                meta: {
                    title: '教务管理 / 课程管理 / 添加课程'
                }
            },
            {
                path: '/container/courseList/editCourse',
                component: () => import('../components/edit/editCourse.vue'),
                meta: {
                    title: '教务管理 / 课程管理 / 编辑课程'
                }
            },

            {
                path: '/container/STUcourse',
                component: () => import('../views/STUcourse.vue'),
                meta: {
                    title: ' 选课管理 / 选课结果'
                }
            },
            {
                path: '/container/STUcourseList',
                component: () => import('../views/STUcourseList.vue'),
                meta: {
                    title: ' 培养方案'
                }
            },
            {
                path: '/container/leaveList/processedLeave',
                component: () => import('../views/ProcessedLeaveListView.vue'),
                meta: {
                    title: '请假管理'
                }
            },
            {
                path: '/container/leaveList/leave',
                component: () => import('../views/LeaveListView.vue'),
                meta: {
                    title: '请假管理'
                }
            },
            {
                path: '/container/STULeave',
                component: () => import('../views/STULeave.vue'),
                meta: {
                    title: '请假记录'
                }
            },
            {
                path: '/container/leaveList/createLeave',
                component: () => import('../components/create/createLeave.vue'),
                meta: {
                    title: '请假管理'
                }
            },
            {
                path: '/container/STUChooseCourse',
                component: () => import('../views/STUChooseCourse.vue'),
                meta: {
                    title: '选课管理'
                }
            },
            {
                path: '/container/STUcourseList',
                component: () => import('../views/STUcourseList.vue'),
            },
            {
                path: '/container/scoreList',
                component: () => import('../views/scoreListView.vue'),
                meta: {
                    title: '教务管理 / 成绩管理'
                }
            },
            {
                path: '/container/STUscoreList',
                component: () => import('../views/STUscoreView.vue'),
                meta: {
                    title: ' 我的成绩'
                }
            },
            {
                path: '/container/activity',
                component: () => import('../views/ActivityView.vue'),
                meta: {
                    title: '活动管理'
                }
            },
            {
                path: '/container/STUactivity',
                component: () => import('../views/STUactivity.vue'),
                meta: {
                    title: '活动管理'
                }
            },
            {
                path: '/container/honourList/createHonour',
                component: () => import('../components/create/createHonour.vue'),
                meta: {
                    title: '荣誉管理'
                }
            },
            {
                path: '/container/STUhonour',
                component: () => import('../views/STUhonour.vue'),
                meta: {
                    title: '我的荣誉'
                }
            },
            {
                path: '/container/honourList',
                component: () => import('../views/HonourListView.vue'),
                meta: {
                    title: '荣誉管理'
                }
            },
            {
                path: '/container/internshipList',
                component: () => import('../views/InternshipListView.vue'),
                meta: {
                    title: '校外实习管理'
                }
            },

            {
                path: '/container/internshipList/createInternship',
                component: () => import('../components/create/createInternship.vue'),
                meta: {
                    title: '校外实习管理'
                }
            },


            {
                path: '/container/innovationList',
                component: () => import('../views/InnovationListView.vue'),
                meta: {
                    title: '创新项目管理'
                }
            },

            {
                path: '/container/innovationList/createInnovation',
                component: () => import('../components/create/createInnovation.vue'),
                meta: {
                    title: '创新项目管理'
                }
            },
            {
                path: '/container/socialpraticeList',
                component: () => import('../views/SocialpraticeListView.vue'),
                meta: {
                    title: '社会实践管理'
                }
            },

            {
                path: '/container/socialpraticeList/createSocialpratice',
                component: () => import('../components/create/createSocialpratice.vue'),
                meta: {
                    title: '社会实践管理'
                }
            },

            {
                path: '/container/volunteerList',
                component: () => import('../views/VolunteerListView.vue'),
                meta: {
                    title: '志愿服务管理'
                }
            },

            {
                path: '/container/volunteerList/createVolunteer',
                component: () => import('../components/create/createVolunteer.vue'),
                meta: {
                    title: '志愿服务管理'
                }
            },


            {
                path: '/container/stuInternshipList',
                component: () => import('../views/STUInternshipView.vue'),
                meta: {
                    title: '校外实习'
                }
            },

            {
                path: '/container/stuInnovationList',
                component: () => import('../views/STUInnovationView.vue'),
                meta: {
                    title: '创新项目'
                }
            },

            {
                path: '/container/stuSocialpraticeList',
                component: () => import('../views/STUSocialpraticeView.vue'),
                meta: {
                    title: '社会实践'
                }

            },

            {
                path: '/container/stuVolunteerList',
                component: () => import('../views/STUVolunteerView.vue'),
                meta: {
                    title: '志愿服务'
                }
            },

    
      {
        path:'/container/honourList/editHonour',
        component: () => import('../components/edit/editHonour.vue'),
          meta: {
              title: '荣誉管理'
          }
      },
      
      {
        path:'/container/studentleaveList/editStudentleave',
        component: () => import('../components/edit/editLeave.vue'),
          meta: {
              title: '请假管理'
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
