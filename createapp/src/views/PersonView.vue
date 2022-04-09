<template>
    <div class="person">
        <top-nav></top-nav>
        <person-top></person-top>
        <person-nav></person-nav>
    </div>
</template>

<script>
import TopNav from '@/components/homeview/topNav.vue';
import PersonTop from '@/components/personview/personTop.vue';
import PersonNav from '@/components/personview/personNav.vue';
import { reactive } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
    components:{
        TopNav,PersonTop,PersonNav
    },
    setup() {
        const userdata = reactive({
            id: 0,
        })
        const store = useStore();
        userdata.id = store.state.userid;
        console.log(`personview-userdata.id: ${userdata.id}`);
        return { userdata, }
    }
}
</script>

<style lang="less" scoped>

</style>