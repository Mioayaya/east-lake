<template>
    <div class="applytop">
        <router-link :to="{path:'/personview'}">
            <div class="left">{{'< 返回'}}</div>
        </router-link>
        
        <div class="right">个性化选课</div>
    </div>
</template>

<script>
export default {
    name:'ApplyTop'
}
</script>

<style lang="less" scoped>
.applytop {
    display: flex;
    justify-content: left;
    align-items: center;
    position: relative;
    .left {
        background-color: #ddd;
        border-radius: 3px;
        padding: 0 5px 0 5px;
    }
    .right {
        display: flex;
        margin-left: 200px;
        font-size: 20px;
        font-weight: 600;
    }
}
</style>