<template>
    <!-- 课程推荐 -->
    <div class="course">
        <!-- 查看一下性格是否是空的，是的话提示先填写个人信息 -->
        <div class="tips" v-show="!userdata.showid">* 请先填写个人信息,完成推荐哦~</div>
        <!-- 推荐课程列表 -->
        <div class="list" v-show="userdata.showid">
            <!-- 1是心训 -->
            <div class="list" v-if="userdata.showid==1">
                <div class="listitem" v-for="(item,i) in listdata.Heart" :key="i">
                    <img :src="item.img" alt="">
                    <div class="text">
                        <span class="title">{{item.title}}</span>
                        <span class="author">{{item.author}}</span>
                        <span class="des">{{item.describe}}</span>
                    </div>
                </div>
            </div>
            <!-- 2是言讯 -->
            <div class="list" v-if="userdata.showid==2">
                <div class="list">
                    <div class="listitem" v-for="(item,i) in listdata.Conversion" :key="i">
                        <img :src="item.img" alt="">
                        <div class="text">
                            <span class="title">{{item.title}}</span>
                            <span class="author">{{item.author}}</span>
                            <span class="des">{{item.describe}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 3是体训 -->
            <div class="list" v-if="userdata.showid==3">
                <div class="listitem" v-for="(item,i) in listdata.Sport" :key="i">
                    <img :src="item.img" alt="">
                    <div class="text">
                        <span class="title">{{item.title}}</span>
                        <span class="author">{{item.author}}</span>
                        <span class="des">{{item.describe}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { useStore } from 'vuex'
import axios from 'axios'
export default {
    name:'CoureList',
    setup() {
        const listdata = {
            Conversion: [
                { img:require('../../../assets/img/con-1.jpg'),title:'传统文化思辨会',author:'',describe:'' },
                { img:require('../../../assets/img/con-2.jpg'),title:'法律辩论赛',author:'',describe:'' },
            ],
            Heart: [
                { img:require('../../../assets/img/heart-1.jpg'),title:'心理漫谈',author:'',describe:'' },
                { img:require('../../../assets/img/heart-2.jpg'),title:'法律科普',author:'',describe:'' },
            ],
            Sport: [
                { img:require('../../../assets/img/sport-Nong.jpg'),title:'农作园',author:'',describe:'' },
                { img:require('../../../assets/img/sport-tea.jpg'),title:'中国茶谣馆',author:'',describe:'' },
                { img:require('../../../assets/img/sport-BCY.jpg'),title:'百草园',author:'',describe:'' },
                { img:require('../../../assets/img/sport-ZMKJG.jpg'),title:'竹木科技馆',author:'',describe:'' },
                { img:require('../../../assets/img/sport-PYC.jpg'),title:'攀岩场',author:'',describe:'' },
                { img:require('../../../assets//img/sport-TYG.jpg'),title:'体育馆',author:'',describe:'' },
                { img:require('../../../assets/img/sport-LQC.jpg'),title:'篮球场',author:'',describe:'' },
            ],
        }
        const userdata = reactive({
            id: 0,
            showid: 0,
        })
        const store = useStore();
        userdata.id = store.state.userid;

        if(userdata.id) {
            axios.get(`http://localhost:5000/api/v1/getId/${userdata.id}`).then( res => {
                userdata.showid = res.data.user.showId;
            })
        }

        
        // console.log(listdata);
        return {userdata,listdata}
    }
}
</script>

<style lang="less" scoped>
.course {
    width: 1130px;
    height: auto;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-bottom: 50px;
    padding-top: 35px;
    padding-left: 35px;
    .list {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 20px;
        .listitem {
            margin-right: 30px;
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
            background-color: #fff;
            img {
                width: 234px;
                height: 135px;
                border-radius: 5px;
            }
            .text {
                display: flex;
                flex-direction: column;
                margin-top: 15px;
                margin-left: 15px;
                .title {
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 20px;
                    color: #333;
                    margin-bottom: 3px;
                    overflow: hidden;
                }
                .author {
                    color: #666;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 16px;
                }
            }
        }
        
    }
}
</style>