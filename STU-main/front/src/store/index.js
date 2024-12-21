import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        jwt:'',
        userInfo: null,
        courseInfo:null
    },
    getters:{
        getUserId: state => state.userInfo ? state.userInfo.personId : null,
        getUserInfo: state => state.userInfo
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