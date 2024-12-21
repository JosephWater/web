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
                    title: '学生管理'
                }
            },
            {
                path: '/container/studentList/createStudent',
                component: () => import('../components/create/createStudent.vue'),
                meta: {
                    title: '学生管理 / 新建学生'
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
                    title: '教师管理 / 新增教师'
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
                    title: '教务管理 / 成绩管理'
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
                    title: '学业管理 / 我的课表'
                }
            },
            {
                path: '/container/courseList/createCourse',
                component: () => import('../components/create/createCourse.vue'),
                meta: {
                    title: '教务管理 / 课程管理 / 新建课程'
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
                    title: '培养管理 / 选课管理 / 已选课程'
                }
            },
            {
                path: '/container/STUcourseList',
                component: () => import('../views/STUcourseList.vue'),
                meta: {
                    title: '培养管理 / 培养方案'
                }
            },
            {
                path: '/container/leaveList/processedLeave',
                component: () => import('../views/ProcessedLeaveListView.vue'),
                meta: {
                    title: '学生管理'
                }
            },
            {
                path: '/container/leaveList/leave',
                component: () => import('../views/LeaveListView.vue'),
                meta: {
                    title: '学生管理'
                }
            },
            {
                path: '/container/leaveList/createLeave',
                component: () => import('../components/create/createLeave.vue'),
            },
            {
                path: '/container/STUChooseCourse',
                component: () => import('../views/STUChooseCourse.vue'),
                meta: {
                    title: '学生管理'
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
                    title: '学业管理 / 我的成绩'
                }
            },
            {
                path: '/container/activity',
                component: () => import('../views/ActivityView.vue'),
                meta: {
                    title: '学生管理'
                }
            },
            {
                path: '/container/STUactivity',
                component: () => import('../views/STUactivity.vue'),
                meta: {
                    title: '学生管理'
                }
            },
            {
                path: '/container/honourList',
                component: () => import('../views/HonourListView.vue'),
            },
            {
                path: '/container/internshipList',
                component: () => import('../views/InternshipListView.vue'),
            },

            {
                path: '/container/internshipList/createInternship',
                component: () => import('../components/create/createInternship.vue'),
            },


            {
                path: '/container/innovationList',
                component: () => import('../views/InnovationListView.vue'),
            },

            {
                path: '/container/innovationList/createInnovation',
                component: () => import('../components/create/createInnovation.vue'),
            },
            {
                path: '/container/socialpraticeList',
                component: () => import('../views/SocialpraticeListView.vue'),
            },

            {
                path: '/container/socialpraticeList/createSocialpratice',
                component: () => import('../components/create/createSocialpratice.vue'),
            },

            {
                path: '/container/volunteerList',
                component: () => import('../views/VolunteerListView.vue'),
            },

            {
                path: '/container/volunteerList/createVolunteer',
                component: () => import('../components/create/createVolunteer.vue'),
            },


            {
                path: '/container/stuInternshipList',
                component: () => import('../views/STUInternshipView.vue'),
            },

            {
                path: '/container/stuInnovationList',
                component: () => import('../views/STUInnovationView.vue'),
            },

            {
                path: '/container/stuSocialpraticeList',
                component: () => import('../views/STUSocialpraticeView.vue'),
            },

            {
                path: '/container/stuVolunteerList',
                component: () => import('../views/STUVolunteerView.vue'),
            },

        ]
    },
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '*',
        redirect: '/404'
    }
]

const router = new VueRouter({
    routes
})

export default router
