<template>
    <div class="persontop">
        <div class="user">
            <div class="avatar">
                <img :src="userdata.avatar" alt="">
            </div>
            <div class="text">
                <span class="name">{{ userdata.name }}</span>
                <span class="sign">{{ userdata.sign }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { useStore } from 'vuex'
import axios from 'axios'
export default {
    name:'PersonTop',
    setup() {
        const userdata = reactive({
            id:0,
            avatar:'https://cdn.luogu.com.cn/upload/usericon/1.png',
            name:'',
            sign:'',
        })
        const store = useStore();
        userdata.id = store.state.userid;
        if(userdata.id) {
            axios.get(`http://localhost:5000/api/v1/getId/${userdata.id}`).then ( res => {
                console.log(res);
                let name = res.data.user.name;
                let sign = res.data.user.sign;
                let avatar = res.data.user.avatar;
                userdata.name = name;
                userdata.sign = sign;
                userdata.avatar = avatar;
            })
        }
        return {userdata}
    }
}
</script>

<style lang="less" scoped>
.persontop {
    width: 1130px;
    height: 240px;
    background-color: white;
    position: relative;
    display: flex;
    margin-top: 30px;
    margin-left: 13%;
    background-image: url("https://cdn.luogu.org/images/bg/fe/DSCF0530-shrink.jpg");
    background-size: cover;
    background-position: center;
    color: #fff;
    .user {
        position: absolute;
        bottom: 24px;
        left: 24px;
        display: flex;
        .avatar {
            img {
                width: 64px;
                height: 64px;
                border-radius: 50%;
            }
        }
        .text {
            display: flex;
            flex-direction: column;
            margin-left: 10px;
            .name {
                font-size: 1.5em;
            }
        }
    }
}
</style>