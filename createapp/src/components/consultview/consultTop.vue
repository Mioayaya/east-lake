<template>
    <div class="contop">
        <el-scrollbar height="400px">
            <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
        </el-scrollbar>
    </div>
</template>

<script>
export default {
    name:'ConsultTop'
}
</script>

<style lang="less" scoped>
.contop {
    width: 1130px;
    height: auto;
    background-color: white;
    margin-top: 30px;
    margin-left: 13%;
    padding-top: 30px;
    padding-bottom: 20px;
    display: flex;
    padding-left: 50px;
    .scrollbar-demo-item {
        width: 800px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        margin: 10px;
        text-align: center;
        border-radius: 4px;
        background: var(--el-color-primary-light-9);
        color: var(--el-color-primary);
    }
}
</style>