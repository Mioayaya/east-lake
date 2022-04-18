<template>
    <div class="apply">
        <apply-top></apply-top>
        <apply-content></apply-content>
    </div>
</template>

<script>
import ApplyTop from '@/components/applyview/applyTop.vue'
import ApplyContent from '@/components/applyview/applyContent.vue'
import { useRoute } from 'vue-router'
export default {
    name:'ApplyView',
    components:{
        ApplyTop,ApplyContent
    },
    setup() {
        const route = useRoute();
        console.log(route.query.id);
    }
}

</script>

<style lang="less" scoped>
.apply {
    width: 1130px;
    height: auto;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-left: 13%;
    margin-top: 50px;
    padding-top: 30px;
    padding-left: 20px;
    padding-bottom: 30px;
}

</style>