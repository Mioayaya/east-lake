<template>
    <div class="person">
        <top-nav :userid="userdata.id"></top-nav>
        个人页面
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import TopNav from '@/components/homeview/topNav.vue';
export default {
    components:{
        TopNav,
    },
    setup() {
        const userdata = reactive({
            id: 0,
        })
        const route = useRoute();
        userdata.id = route.query.userid;
        console.log(`personview-userdata.id: ${userdata.id}`);
        return { userdata, }
    }
}
</script>

<style lang="less" scoped>

</style>