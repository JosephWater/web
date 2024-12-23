<template>
    <div>
    <template v-if="userInfo.type!=3">
        <ADMINhomePage />
    </template>
    <template v-if="userInfo.type == 3">
        <STUhomePage />
    </template>
    </div>
</template>
<script>
import ADMINhomePage from './homePage/ADMINhomePage.vue';
import STUhomePage from './homePage/STUhomePage.vue';
export default{
    components:{
        STUhomePage,
        ADMINhomePage
    },
    methods:{
        
    },
    computed:{
        userInfo(){
            return this.$store.getters.getUserInfo;
        }
    }
}
</script>