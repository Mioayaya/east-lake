<template>
    <div class="login">
        <top-nav></top-nav>
        <login-body></login-body>
    </div>
</template>

<script>
import TopNav from '@/components/homeview/topNav.vue'
import LoginBody from '@/components/loginview/loginBody.vue'


export default {
    name:'LoginView',
    components:{
        TopNav,LoginBody,
    }

}
</script>

<style lang="less" scoped>


</style>