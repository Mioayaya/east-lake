<template>
    <!-- 发表评论 -->   
    <div class="forumcom">    
        <!-- 头像 -->
        <div class="avatar">
            <img :src="userdata.avater" alt="">
        </div>
        <!-- 内容 -->
        <div class="comment">
            <el-input class="input" type="textarea" :autosize="{ minRows: 3, maxRows: 5}" placeholder="发一条友善的评论吧" v-model="userdata.comment">
            </el-input>
        </div>
        <!-- 按钮 -->
        <div class="send">
            <button type="button" class="btn btn-primary" @click="send">发表评论</button>
        </div>
    </div>
    <!-- 评论列表 -->
    <div class="test">
        
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { useStore } from 'vuex'
import { getCurrentInstance } from 'vue'
import { ElMessageBox } from 'element-plus'
export default {
    name:'ForumCom',
    setup() {
        const store = useStore();
        const { appContext } = getCurrentInstance()
        const userdata = reactive({
            avater: 'https://cdn.luogu.com.cn/upload/usericon/1.png',
            id: 0,
            comment: '',
        })
        userdata.id = store.state.userid;

        let send = () => {
            if(!userdata.id) {
                ElMessageBox.alert('请先登录', {}, appContext)
            }else {
                
                
                userdata.comment = '';
            }
        }
        return {userdata,send}
    }
}
</script>

<style lang="less" scoped>
.forumcom {
    width: 1130px;
    height: auto;
    background-color: white;
    margin-top: 30px;
    margin-left: 13%;
    padding-top: 30px;
    padding-bottom: 20px;
    display: flex;
    padding-left: 50px;
    .avatar {
        margin-right: 30px;
        padding-top: 10px;
        img {
            width: 54px;
            height: 54px;
            object-fit: cover;
            border-radius: 50%
        }
    }
    .comment {
        width: 800px;
        height: auto;
        border-radius: 5px;
    }
    .send {
        margin-left: 30px;
        .btn {
            width: 72px;
            height: 72px;
        }
    }
}

</style>