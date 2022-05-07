<template>
    <!-- 发表评论 -->   
    <div class="forumcom">    
        <!-- 头像 -->
        <div class="avatar">
            <img :src="userdata.avatar" alt="">
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
    <forum-item-list></forum-item-list>
</template>

<script>
import ForumItemList from '@/components/forumview/forumItemList.vue'
import { reactive } from '@vue/reactivity'
import { useStore } from 'vuex'
import { getCurrentInstance, onMounted } from 'vue'
import { ElMessageBox } from 'element-plus'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import { create } from 'lodash'
import { ajaxUpload } from 'element-plus/es/components/upload/src/ajax'
export default {
    name:'ForumCom',
    components:{
        ForumItemList
    },
    setup() {
        const chinaTime = require("china-time");
        const store = useStore();
        const { appContext } = getCurrentInstance();
        // const useroute = useRoute(); 
        const router = useRouter();
        const userdata = reactive({
            avatar: 'https://cdn.luogu.com.cn/upload/usericon/1.png',
            id: 0,
            comment: '',
            name: '',
            date: '',
        });
        const comments = reactive({
            item:[],
        })
        userdata.id = store.state.userid;
        if(userdata.id) {
            axios.get(`http://localhost:5000/api/v1/getId/${userdata.id}`).then ( res => {
                // console.log(res);
                userdata.avatar = res.data.user.avatar;
                userdata.name = res.data.user.name;    
            })
        }
        let send = () => {
            if(!userdata.id) {
                ElMessageBox.alert('请先登录', {}, appContext);
            }else if(userdata.comment.trim() === '') {
                ElMessageBox.alert('你还没有评论!', {}, appContext);
            }
            else {
                let time = chinaTime("YYYY-MM-DD HH:mm:ss")
                userdata.date = time;
                axios.post(`http://localhost:5000/api/v2/comment`,userdata);
                ElMessageBox.alert('发送成功', {}, appContext);
                comments.item.push(userdata);
                console.log(comments);
                // axios.get('http://localhost:5000/api/v2/getcomments').then(res => {
                //     comments.item = res.data;
                //     console.log(comments);
                // })
                // 刷新歌单列表
                router.push({path:'/forumblankview'});
                userdata.comment = '';
            }
            
        }
        onMounted( async () => {
            let res = await axios.get('http://localhost:5000/api/v2/getcomments');
            comments.item = res.data;
            // console.log(comments);
        })
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