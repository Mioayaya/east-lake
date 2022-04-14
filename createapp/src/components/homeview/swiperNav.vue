<template>
    <div class="swiper-sign">
        <!-- 轮播图 -->
        <div class="swiper-nav">
            <swiper :pagination="true" :navigation="true" :modules="modules" :loop="true" class="mySwiper" >
                <swiper-slide v-for="(item,i) in images" :key="i">
                    <img :src="item.pic" type="button"  @click="imgClick(i)" alt="图片加载错误">
                </swiper-slide>
            </swiper>
        </div>
        <!-- 签到 -->
        <div class="sign">
            <div class="unSign" v-if="data.state">
                <div class="top">
                    <span>欢迎回来,</span>
                    <span class="username">{{ data.username }}</span>
                </div>
                <div class="content">
                    <span class="month">{{ my_date.month }}</span>
                    <span class="day">{{ my_date.day }}</span>
                    <span class="week">星期{{ my_date.week }}</span>
                </div>
                <div class="bottom">
                    <button type="button" class="btn btn-primary" @click="signIn()">点击打卡</button>
                </div>                
            </div>
            
            <div class="signIn" v-if="!data.state">
                <div class="top">
                    <span class="username">{{ data.username+' ' }}</span>
                    <span>的运势</span>
                </div>
                <div class="fortune"> 
                    <span class="text">{{'§ '+nowSign.fortune+' §'}}</span>
                </div>
                <div class="events">
                    <div class="lucky">
                        <div class="event1">
                            <span class="YI">宜: </span>
                            <span class="event">{{nowSign.lucky1}}</span>
                        </div>
                        <div class="event2">
                            <span class="YI">宜: </span>
                            <span class="event">{{nowSign.lucky2}}</span>
                        </div>
                    </div>
                    <div class="bad">
                        <div class="event1">
                            <span class="YI">忌: </span>
                            <span class="event">{{nowSign.bad1}}</span>
                        </div>
                        <div class="event2">
                            <span class="YI">忌: </span>
                            <span class="event">{{nowSign.bad2}}</span>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <span>你已经在康杯连续打卡了{{' '+data.punch+' '}}天</span>
                </div>  
            </div>
        </div>
    </div>
    
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from 'swiper';
import { Navigation } from "swiper";
import {reactive} from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';

export default {
    name:'SwiperNav',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        // 签到数据
        const signData = {
            fortune:['大吉','吉','小吉','中平','平','大凶','凶','小凶'],
            luckyEvents:[
                '刷题',
                '装逼',
                '学习',
                '学习珂朵莉',
                '看番',
                '考试',
                '出门',
            ],
            badEvents:[
                '继续完成未完成的作业',
                '旅游',
                '偷偷睡觉',
                '玩游戏',
                '写作文',
            ],
        }
        // 随机抽取的签到数据
        const nowSign = {
            fortune:'',
            lucky1:'',
            lucky2:'',
            bad1:'',
            bad2:'',
        }
        // 用户数据
        const data = reactive({
            username: 'root',
            state: true,
            id: 0,
            punch: 0,
        })

        const store = useStore();
        data.state = store.state.punch;
        data.id = store.state.userid;
        // 如果不是加载用户信息
        if(data.id) {
            axios.get(`http://localhost:5000/api/v1/getId/${data.id}`).then ( res => {
                console.log(res);
                let name = res.data.user.name;
                let punch = res.data.user.punch;
                data.username = name;
                data.punch = punch;
            })
        }

        // 轮播图片
        const images = [
            { pic:require('../../assets/img/home-1.jpg'),src:'https://mp.weixin.qq.com/s/QqJEZs_lkYY9Q_YX6LxBhg' },
            { pic:require('../../assets/img/home-3.jpg'),src:'' },
            { pic:require('../../assets/img/home-4.jpg'),src:'' },
            { pic:require('../../assets/img/home-5.jpg'),src:'' },
            { pic:require('../../assets/img/home-2.jpg'),src:'' },
        ]
        // 日期
        const date = new Date();
        const my_date = {
            month:'',
            day:'',
            week:'',
        }
        my_date.month = date.getMonth()+1; // 不知道为什么js获取的是上个月的月份...
        my_date.day = date.getDate()
        my_date.week = date.getDay();

        // 判断一些day 如果小于10的话变成0x
        if(my_date.day<10) {
            my_date.day = my_date.day.toString();
            my_date.day = '0' + my_date.day;
        }

        // 签到抽取随机数据
        getSign();
        function getSign() {
            let luckNum = getnumber(signData.fortune.length);
            // 存入输出数据中
            nowSign.fortune = signData.fortune[luckNum];
            // console.log(nowSign.fortune)
            // 获取随机事件
            let luck1 = getnumber(signData.luckyEvents.length);
            let luck2 = getnumber(signData.luckyEvents.length);
            // 防止事件重复
            if(luck1===luck2){
                luck2 = getnumber(signData.luckyEvents.length);
            }
            nowSign.lucky1 = signData.luckyEvents[luck1];
            nowSign.lucky2 = signData.luckyEvents[luck2];
            
            // 获取忌讳事件
            let bad1 = getnumber(signData.badEvents.length);
            let bad2 = getnumber(signData.badEvents.length);
            // 防止事件重复
            if(bad1===bad2){
                bad2 = getnumber(signData.badEvents.length);
            }
            nowSign.bad1 = signData.badEvents[bad1];
            nowSign.bad2 = signData.badEvents[bad2];

            // console.log(nowSign);

            function getnumber(x) {
                let num = Math.random();
                num = num*100;          //变成1~100的数
                num = Math.floor(num);  // 向下取整
                num = num % x;          // 按需求随机
                return num;
            }
        }


        changeNumber();
        // 将数字变成汉字
        function changeNumber() {
            switch(my_date.month) {
                case 1 : my_date.month = '一月大';break;
                case 2 : my_date.month = '二月小';break;
                case 3 : my_date.month = '三月大';break;
                case 4 : my_date.month = '四月小';break;
                case 5 : my_date.month = '五月大';break;
                case 6 : my_date.month = '六月小';break;
                case 7 : my_date.month = '七月大';break;
                case 8 : my_date.month = '八月大';break;
                case 9 : my_date.month = '九月小';break;
                case 10 : my_date.month = '十月大';break;
                case 11 : my_date.month = '十一月';break;
                case 12 : my_date.month = '十二月';break;
            }
            switch(my_date.week) {
                case 1 : my_date.week = '一';break;
                case 2 : my_date.week = '二';break;
                case 3 : my_date.week = '三';break;
                case 4 : my_date.week = '四';break;
                case 5 : my_date.week = '五';break;
                case 6 : my_date.week = '六';break;
                case 7 : my_date.week = '七';break;
            }
        }

        // 测试函数
        function test() {
            console.log(my_date);
        }
        // 签到
        function signIn() {
            // console.log(axios.get('http://localhost:5000'));
            // data.state = !data.state ;
            // 修改全局变量
            store.dispatch('punch',false);
            data.state = store.state.punch;
            data.punch += 1;
            // 更改打卡天数
            axios.post('http://localhost:5000/api/v1/editpunch',data).then ( res => {
                console.log(res);
            })
        }
        let imgClick = (num) => {
            // alert(num);
            if(images[num].src != ''){
                window.open(images[num].src);
            }
            
        }
        return {
            modules: [Navigation,Pagination],
            signData,
            nowSign,
            images,
            data,
            my_date,
            test,
            signIn,
            imgClick,
        };
    },
}

</script>

<style lang="less" scoped>
.swiper-sign {
    width: 1130px;
    height: 338px;
    background-color: white;
    position: relative;
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    margin-left: 13%;
    padding-top: 20px;
    .swiper-nav {
    width: 720px;
    height: 281px;
    position: relative;
        .swiper {

            width: 720px;
            height: 281px;
            .swiper-slide {
                text-align: center;
                font-size: 18px;
                background: #fff;
                display: -webkit-box;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                -webkit-justify-content: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                -webkit-align-items: center;
                align-items: center;
            }

            .swiper-slide img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .swiper-pagination {
                position: absolute;
                display: flex;
                top: 500px;
            }
        }
    }
    .sign {
        width: 300px;
        height: 281px;
        .top {
            font-size: 25px;
            font-weight: 600;
            align-items: center;
            text-align: center;
            padding: 15px;
            .username {
                color: #0e90d2;
            }
        }
        .content {
            padding: 30px;
            text-align: center;
            color: rgba(5, 67, 16, 0.79);
            .month {
                display: inline-block;
                width: 20px;
                vertical-align: top;
                line-height: 17px;
                margin-left: 10px;
                margin-right: 10px;
                font-weight: bold;
            }
            .day {
                display: inline-block;
                font-size: 85px;
                vertical-align: top;
                line-height: 55px;
                font-weight: bolder;
            }
            .week {
                display: inline-block;
                width: 20px;
                vertical-align: top;
                line-height: 17px;
                margin-left: 10px;
                margin-right: 10px;
                font-weight: bold;
            }
        }
        .bottom {
            margin-top: 30px;
            text-align: center;
        }
        .signIn {
            .fortune {
                margin-left: -30px;
                font-size: 60px;
                font-weight: bold;
                margin-top: 0px;
                color: #5eb95e !important;
                padding-left: 30px;
                text-align: center;
            }
            .events {
                display: flex;
                justify-content: space-between;
                .event1 {
                    margin-bottom: 10px;
                }
                .YI {
                    box-sizing: border-box;
                    font-weight: bold;
                }
                .lucky {
                    color: #e74c3c !important;
                }
            }
        }
    }


}


</style>