<template>
    <div>
        {{ userInfo }}
    </div>
</template>
<script>
    export default {
        computed:
        {   userInfo(){
                return this.$store.getters.getUserInfo;
            }

        }
    }

  
</script>