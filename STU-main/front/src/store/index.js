import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        jwt:'',
        userInfo: null
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
        }
        
    },
    actions:{
    },
    modules:{
    },
    plugins: [createPersistedState()] 
})