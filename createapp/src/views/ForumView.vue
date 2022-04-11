<template>
    <div class="forrum">
        <top-nav></top-nav>
        <forum-top></forum-top>
        <forum-com></forum-com>
    </div>
</template>

<script>
import TopNav from '@/components/homeview/topNav.vue'
import ForumTop from '@/components/forumview/forumTop.vue'
import ForumCom from '@/components/forumview/forumCom.vue'
export default {
    name:'ForumView',
    components:{
        TopNav,ForumTop,ForumCom
    },
}
</script>

<style lang="less" scoped>

</style>