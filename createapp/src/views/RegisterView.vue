<template>
    <div class="register">
        <top-nav></top-nav>
        <register-body></register-body>
    </div>
  
</template>

<script>
import TopNav from '@/components/homeview/topNav.vue'
import RegisterBody from '@/components/registerview/registerBody.vue'

export default {
    name:'RegisterView',
    components:{
        TopNav,RegisterBody

    }
}
</script>

<style lang="less" scoped>

</style>