<template>
    <div class="personnav">
        <el-tabs v-model="activeName.value" @tab-click="handleClick" class="items">
            <el-tab-pane label="主页" name="first">
                <home-list></home-list>
            </el-tab-pane>
            <el-tab-pane label="推荐课程" name="second">
                <course-list></course-list>
            </el-tab-pane>
            <el-tab-pane label="个人档案" name="third">
                <personal-file></personal-file>
            </el-tab-pane>
            <el-tab-pane label="个人设置" name="fourth">
                <personal-set></personal-set>
            </el-tab-pane>
            <el-tab-pane label="报名课程" name="fifth">
                <pay-list></pay-list>
            </el-tab-pane>
        </el-tabs>

    </div>
</template>

<script>
import HomeList from '@/components/personview/itemlist/homeList.vue'
import PersonalFile from '@/components/personview/itemlist/personalFile.vue'
import PersonalSet from '@/components/personview/itemlist/personalSet.vue'
import CourseList from '@/components/personview/itemlist/courseList.vue'
import PayList from '@/components/personview/itemlist/payList.vue'
import { reactive, ref } from '@vue/reactivity'
export default {
    name:'PersonNav',
    components:{
        HomeList,PersonalFile,PersonalSet,CourseList,PayList
    },
    setup() {
        const activeName = reactive({
            value: 'first',
        })

        let handleClick = ( tab )=> {
            // console.log(tab);
        }
        return { activeName,handleClick}
    }
}
</script>

<style lang="less" scoped>
.personnav {
    width: 1130px;
    height: 65px;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-left: 13%;
    display: flex;
    position: relative;
    .items {
        position: absolute;
        margin-top: 14px;
        :deep(.el-tabs__nav) {
            padding-bottom: 13px;
            margin-left: 30px;
        }
        :deep(.el-tabs__item) {
            font-size: 20px;
        }
    }
}
</style>