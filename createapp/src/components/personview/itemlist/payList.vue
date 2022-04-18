<template>
    <div class="paylist">
        <span style="fontSize:20px;fontWeight:600">已购课程</span>
        <div class="pic">
            <div class="course" v-for="(item,i) in userdata.img">
                <img :src="item" alt="">
            </div>
        </div>
        <div class="title">
            <div class="text" v-for="(item,i) in userdata.newClassList">
                <span>{{item}}</span>
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
    name:'PayList',
    setup() {
        const listdata = {
            list: [
                { img:require('../../../assets/img/con-1.jpg'),title:'传统文化思辨会',author:'',describe:'' },
                { img:require('../../../assets/img/con-2.jpg'),title:'法律辩论赛',author:'',describe:'' }, 
                { img:require('../../../assets/img/heart-1.jpg'),title:'心理漫谈',author:'',describe:'' },
                { img:require('../../../assets/img/heart-2.jpg'),title:'法律科普',author:'',describe:'' },
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
            classlist: '',
            count: 0,
            newClassList: [
                
            ],
            img: [

            ]
        })

        const store = useStore();
        onMounted(async() => {
            userdata.id = store.state.userid;
            if(userdata.id) {
                await axios.get(`http://localhost:5000/api/v3/getPay/${userdata.id}`).then( res => {
                    userdata.classlist = res.data.list.classname;
                    console.log(userdata.classlist.length);
                    let str = '';
                    for(let i=0;i<userdata.classlist.length;i++) {
                        if(userdata.classlist[i] != ',') {
                            str += userdata.classlist[i];
                        }else {
                            userdata.newClassList.push(str);
                            str = '';
                            userdata.count += 1;
                        }
                    }
                    for(let i=0;i<userdata.count;i++) {
                        console.log(userdata.newClassList[i]);
                        switch(userdata.newClassList[i]) {
                            case listdata.list[0].title: userdata.img[i] = listdata.list[0].img;break;
                            case listdata.list[1].title: userdata.img[i] = listdata.list[1].img;break;
                            case listdata.list[2].title: userdata.img[i] = listdata.list[2].img;break;
                            case listdata.list[3].title: userdata.img[i] = listdata.list[3].img;break;
                            case listdata.list[4].title: userdata.img[i] = listdata.list[4].img;break;
                            case listdata.list[5].title: userdata.img[i] = listdata.list[5].img;break;
                            case listdata.list[6].title: userdata.img[i] = listdata.list[6].img;break;
                            case listdata.list[7].title: userdata.img[i] = listdata.list[7].img;break;
                            case listdata.list[8].title: userdata.img[i] = listdata.list[8].img;break;
                            case listdata.list[9].title: userdata.img[i] = listdata.list[9].img;break;
                            case listdata.list[10].title: userdata.img[i] = listdata.list[10].img;break;
                        }
                    }
                })
            }
        })
        
        return {userdata}
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
    .pic {
        display: flex;
        img {
            width: 234px;
            height: 135px;
            border-radius: 5px;
            margin-right: 20px;
        }
    }
    .title {
        display: flex;
    }
    .text {
        display: flex;
        width: 234px;
        height: 35px;
        margin-right: 20px;
    }
}
</style>