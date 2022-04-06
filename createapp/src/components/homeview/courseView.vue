<template>
    <div class="course">
        <div class="top">
            <h3>本周课程推荐</h3>
        </div>
        <div class="content">
            <div class="left">
                <div class="top">
                    <span class="describe">言训</span>
                </div>
                <div class="list">
                    <div class="listitem" v-for="(item,i) in listdata.left" :key="i">
                        <br v-if="(i+1)%4===0">
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
                    <span class="describe">middle</span>
                </div>
                <div class="list">
                    <div class="listitem" v-for="(item,i) in listdata.left" :key="i">
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
                    <span class="describe">right</span>
                </div>
                <div class="list">
                    <div class="listitem" v-for="(item,i) in listdata.left" :key="i">
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
            left: [
                { img:require('../../assets/logo.png'),title:'标题',author:'作者',describe:'' },
                { img:require('../../assets/logo.png'),title:'标题',author:'作者',describe:'' },
                { img:require('../../assets/logo.png'),title:'标题',author:'作者',describe:'' },
                { img:require('../../assets/logo.png'),title:'标题',author:'作者',describe:'' },
                { img:require('../../assets/logo.png'),title:'标题',author:'作者',describe:'' },
            ],
            middle:{},
            right: {},
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
            background-color: white;
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
    margin-left: 40px;
    margin-bottom: 20px;
    .listitem {
        margin-right: 20px;
        display: flex;
        img {
            width: 234px;
            height: 135px;
        }
        .text {
            display: flex;
            flex-direction: column;
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