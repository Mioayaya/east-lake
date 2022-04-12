<template>
    <!-- 空白页面 -->
</template>

<script>
import { useRouter } from 'vue-router'
export default {
    name:'ForumBlankView',
    setup() {
        const router = useRouter();
        router.push({path:'/forumview'});
        return{router}
    }
}
</script>

<style>

</style>