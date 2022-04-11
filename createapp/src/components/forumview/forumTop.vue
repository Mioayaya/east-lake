<template>
    <div class="forumtop">
        <span>发表一条友善的评论吧~</span>
    </div>
</template>

<script>
export default {
    name:'ForumTop',

}
</script>

<style lang="less" scoped>
.forumtop {
    width: 1130px;
    height: 280px;
    background-color: white;
    background-image: url("https://img1.baidu.com/it/u=4009750993,4249493204&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800");
    background-size: cover;
    background-position: center;
    margin-top: 30px;
    margin-left: 13%;
    padding-top: 20px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    span {
        color: #fff;
        font-size: 20px;
    }
}
</style>