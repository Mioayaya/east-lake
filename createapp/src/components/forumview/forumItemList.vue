<template>
    <div class="forumlist">
        <div class="item" v-for="(item,i) in comments.item" key="item.id">
            <div class="top">
                <div class="avatar">
                    <img :src="item.avatar" alt="">
                </div>
                <div class="text">
                    <span class="username">{{item.username}}</span>
                    <span class="comment">{{item.comment}}</span>
                    <span class="date">{{item.date}}</span>
                </div>
            </div>
            <div class="bottom">
                <hr>
            </div>            
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import axios from 'axios'
export default {
    name:'ForumItemList',
    setup() {
        const comments = reactive({
            item:[],
        })
        axios.get('http://localhost:5000/api/v2/getcomments').then ( res => {
            comments.item = res.data;
            // console.log(comments.item);
        })

        return { comments}
    }
}
</script>

<style lang="less" scoped>
.forumlist {
    width: 1130px;
    height: auto;
    background-color: white;
    margin-top: 30px;
    margin-left: 13%;
    padding-top: 30px;
    padding-right: 30px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    .item {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        .top {
            display: flex;
            img {
                width: 54px;
                height: 54px;
                object-fit: cover;
                border-radius: 50%                
            }
            .text {
                margin-left: 30px;
                display: flex;
                flex-direction: column;
                .username {
                    margin-top: -5px;
                    color: #FB7299;;
                    font-weight: 700;
                }
                .comment {
                    margin-top: 3px;
                }
                .date {
                    margin-top: 3px;
                    font-size: 15px;
                    color: #ccc;
                }
            }
        }
        
    }
}
</style>