<template>
    <div class="swiper-sign">
        <!-- 轮播图 -->
        <div class="swiper-nav">
            <swiper :pagination="true" :navigation="true" :modules="modules" :loop="true" class="mySwiper" >
                <swiper-slide v-for="(item,i) in images" :key="i">
                    <img :src="item.pic" alt="图片加载错误">
                </swiper-slide>
            </swiper>
        </div>
        <!-- 签到 -->
        <div class="sign">
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
                <button type="button" class="btn btn-primary" @click="test">点击打卡</button>
            </div>
        </div>

    </div>
    
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from 'swiper'
import { Navigation } from "swiper";

export default {
    name:'SwiperNav',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const data = {
            username:'root',
        }
        const images = [
            { pic:require('../../assets/img/home-1.jpg') },
            { pic:require('../../assets/img/home-3.jpg') },
            { pic:require('../../assets/img/home-4.jpg') },
            { pic:require('../../assets/img/home-5.jpg') },
            { pic:require('../../assets/img/home-2.jpg') },
        ]
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
        return {
            modules: [Navigation,Pagination],
            images,
            data,
            my_date,
            test,
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
                background: rgb(255, 0, 0);
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
    }
}


</style>