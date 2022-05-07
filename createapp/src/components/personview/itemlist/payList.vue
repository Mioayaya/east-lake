<template>
    <div class="paylist">
        <span style="fontSize:20px;fontWeight:600">已购课程</span>
        <div class="list">
            <div class="pic">
                <div class="course" v-for="(item, i) in userdata.img">
                    <img :src="item" alt="">
                </div>
            </div>
            <div class="title">
                <div class="text" v-for="(item, i) in userdata.newClassList">
                    <span>{{ item }}</span>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import axios from 'axios'
import { useStore } from 'vuex'
import { onMounted } from '@vue/runtime-core'
export default {
    name: 'PayList',
    setup() {
        const listdata = {
            list: [
                { img: require('../../../assets/img/con-1.jpg'), title: '传统文化思辨会', author: '', describe: '' },
                { img: require('../../../assets/img/con-2.jpg'), title: '法律辩论赛', author: '', describe: '' },
                { img: require('../../../assets/img/heart-1.jpg'), title: '心理漫谈', author: '', describe: '' },
                { img: require('../../../assets/img/heart-2.jpg'), title: '法律科普', author: '', describe: '' },
                { img: require('../../../assets/img/a1.png'), title: '香榧篇', author: '', describe: '' },
                { img: require('../../../assets/img/a2.jpg'), title: '中草药篇', author: '', describe: '' },
                { img: require('../../../assets/img/a3.jpg'), title: '桃花纸非遗篇', author: '', describe: '' },
                { img: require('../../../assets/img/a4.jpg'), title: '果园篇', author: '', describe: '' },
                { img: require('../../../assets/img/a5.jpg'), title: '烹饪篇', author: '', describe: '' },
            ],
        }

        const userdata = reactive({
            id: 0,
            classlist: '',
            count: 0,
            newClassList: [

            ],
            img: [

            ]
        })
        console.log(userdata);
        const store = useStore();
        onMounted(async () => {
            userdata.id = store.state.userid;
            if (userdata.id) {
                await axios.get(`http://localhost:5000/api/v3/getPay/${userdata.id}`).then(res => {
                    userdata.newClassList = res.data.list.classname.split(',');

                    for (let i = 0; i < userdata.newClassList.length; i++) {
                        // console.log(userdata.newClassList[i]);
                        switch (userdata.newClassList[i]) {
                            case listdata.list[0].title: userdata.img[i] = listdata.list[0].img; break;
                            case listdata.list[1].title: userdata.img[i] = listdata.list[1].img; break;
                            case listdata.list[2].title: userdata.img[i] = listdata.list[2].img; break;
                            case listdata.list[3].title: userdata.img[i] = listdata.list[3].img; break;
                            case listdata.list[4].title: userdata.img[i] = listdata.list[4].img; break;
                            case listdata.list[5].title: userdata.img[i] = listdata.list[5].img; break;
                            case listdata.list[6].title: userdata.img[i] = listdata.list[6].img; break;
                            case listdata.list[7].title: userdata.img[i] = listdata.list[7].img; break;
                            case listdata.list[8].title: userdata.img[i] = listdata.list[8].img; break;
                        }
                    }
                })
            }
        })

        return { userdata }
    }
}
</script>

<style lang="less" scoped>
.paylist {
    width: 1130px;
    height: auto;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-bottom: 50px;
    padding-top: 35px;
    padding-left: 35px;
    position: relative;
    .list {
        display: flex;
        flex-wrap: wrap;
    }

    .pic {
        display: flex;
        flex-wrap: wrap;
        img {
            margin-bottom: 30px;
            width: 234px;
            height: 135px;
            border-radius: 5px;
            margin-right: 20px;
        }
    }

    .title {
        display: flex;
        flex-wrap: wrap;
        position: absolute;
        top: 200px;
    }

    .text {
        display: flex;
        width: 234px;
        height: 165px;
        margin-right: 20px;
    }
}
</style>