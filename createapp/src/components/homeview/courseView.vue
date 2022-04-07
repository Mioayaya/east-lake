<template>
    <div class="course">
        <div class="top">
            <h3>本周课程推荐</h3>
        </div>
        <div class="content">
            <div class="left">
                <div class="top">
                    <span class="describe">体训</span>
                </div>
                <div class="list">
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
            <div class="middle">
                <div class="top">
                    <span class="describe">言训</span>
                </div>
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
            <div class="right">
                <div class="top">
                    <span class="describe">心训</span>
                </div>
                <div class="list">
                    <div class="listitem" v-for="(item,i) in listdata.Heart" :key="i">
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
    </div>
</template>

<script>
export default {
    // 117*66
    name:'CourseView',
    setup() {
        const listdata = {
            Conversion: [
                { img:require('../../assets/img/con-1.jpg'),title:'传统文化思辨会',author:'',describe:'' },
                { img:require('../../assets/img/con-2.jpg'),title:'法律辩论赛',author:'',describe:'' },
            ],
            Heart: [
                { img:require('../../assets/img/heart-1.jpg'),title:'心理漫谈',author:'',describe:'' },
                { img:require('../../assets/img/heart-2.jpg'),title:'法律科普',author:'',describe:'' },
            ],
            Sport: [
                { img:require('../../assets/img/sport-Nong.jpg'),title:'农作园',author:'',describe:'' },
                { img:require('../../assets/img/sport-tea.jpg'),title:'中国茶谣馆',author:'',describe:'' },
                { img:require('../../assets/img/sport-BCY.jpg'),title:'百草园',author:'',describe:'' },
                { img:require('../../assets/img/sport-ZMKJG.jpg'),title:'竹木科技馆',author:'',describe:'' },
                { img:require('../../assets/img/sport-PYC.jpg'),title:'攀岩场',author:'',describe:'' },
                { img:require('../../assets//img/sport-TYG.jpg'),title:'体育馆',author:'',describe:'' },
                { img:require('../../assets/img/sport-LQC.jpg'),title:'篮球场',author:'',describe:'' },
            ],
        }

        return { listdata ,}
    }
}
</script>

<style lang="less" scoped>
.course {
    margin-left: 13%;
    margin-top: 30px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    .content {
        display: flex;
        flex-direction: column;
        .left {
            width: 1130px;
            height: auto;
            background-color: #fff;
            margin-bottom: 30px;
            .top {
                height: 50px;
                background: linear-gradient(to bottom, #fcf8ed, #fefbf5, #fff);
                padding-top: 15px;
                .describe {
                    margin-left: 50px;
                    display: flex;
                    align-items: flex-end;
                    font-size: 18px;
                    font-weight: 600;
                    color: #d1802b;
                }
            }
        }
        .middle {
            width: 1130px;
            height: auto;
            background-color: white;
            margin-right: 20px;
            margin-bottom: 30px;
            .top {
                height: 50px;
                background: linear-gradient(to bottom, #fcf8ed, #fefbf5, #fff);
                padding-top: 15px;
                .describe {
                    margin-left: 50px;
                    display: flex;
                    align-items: flex-end;
                    font-size: 18px;
                    font-weight: 600;
                    color: #d1802b;
                }
            }
        }
        .right {
            width: 1130px;
            height: auto;
            background-color: white;
            margin-right: 20px;
            .top {
                height: 50px;
                background: linear-gradient(to bottom, #fcf8ed, #fefbf5, #fff);
                padding-top: 15px;
                .describe {
                    margin-left: 50px;
                    display: flex;
                    align-items: flex-end;
                    font-size: 18px;
                    font-weight: 600;
                    color: #d1802b;
                }
            }
        }
    }
}

.list {
    display: flex;
    flex-wrap: wrap;
    margin-left: 40px;
    margin-bottom: 20px;
    margin-top: 10px;
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

</style>