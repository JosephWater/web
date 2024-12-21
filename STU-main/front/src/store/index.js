import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        jwt:'',
        userInfo: null,
        courseInfo:null,
        studentInfo:null,
        teacherInfo:null,
    },
    getters:{
        getUserId: state => state.userInfo ? state.userInfo.personId : null,
        getUserInfo: state => state.userInfo,
        getStudentInfo: state => state.studentInfo,
        getTeacherInfo: state => state.teacherInfo
    },
    mutations:{
        setJwt(state,jwt){
            state.jwt=jwt
        },
        setUserInfo(state, info) {  // 添加setUserInfo
            state.userInfo = info
        },
        setCourseInfo(state, info) {  // 添加setUserInfo
            state.courseInfo = info
        },
        setTeacherInfo(state, info) {  // 添加setUserInfo
            state.teacherInfo = info
        },
        setStudentInfo(state, info) {  // 添加setUserInfo
            state.studentInfo = info
        },
        Statelogout(state) { 
            state.jwt = ''; 
            state.userInfo = null; 
            localStorage.removeItem('jwt'); 
        }
        
    },

    actions:{
    },
    modules:{
    },
    plugins: [createPersistedState()] 
})