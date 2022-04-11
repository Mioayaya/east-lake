<template>
    <!-- 个人档案 用户名 email 打卡时长 年龄 生日 性别 性格 爱好 特长-->
    <div class="personalfile">
        <!-- 用户名 打卡时间-->
        <div class="top-1">
            <div class="left">
                <span class="desc">用户名</span>
                <span class="username text">{{userdata.name}}</span>
            </div>
            <div class="right">
                <span class="punch text">{{'已经连续打卡了 '+userdata.punch+' 天'}}</span>
            </div>
        </div>
        <!-- email 年龄 生日 -->
        <div class="top-2 top">
            <div class="left">
                <span class="desc">email</span>
                <span class="email text">{{userdata.email}}</span>
            </div>
            <div class="middle box">
                <span class="desc">年龄</span>
                <span class="age text">{{userdata.age+'岁'}}</span>
            </div>
            <div class="right box">
                <span class="desc">生日</span>
                <span class="birth text">{{userdata.birth}}</span>
            </div>
        </div>
        <!-- 性别 性格 -->
        <div class="top-3 top">
            <div class="left">
                <span class="desc">性别</span>
                <span class="sex text">{{userdata.sex}}</span>
            </div>
            <div class="right box">
                <span class="desc">性格</span>
                <span class="char text">{{charArr.char1+' '+charArr.char2+' '+charArr.char3+' '+charArr.char4}}</span>
            </div>
        </div>
        <!-- 爱好 特长 -->
        <div class="top-4 top">
            <div class="left">
                <span class="desc">爱好</span>
                <span class="hobby text">{{userdata.hobby}}</span>
            </div>
            <div class="right box">
                <span class="desc">特长</span>
                <span class="spec text">{{userdata.specialty}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { useStore } from 'vuex'
import axios from 'axios'
export default {
    name:'PersonalFile',
    setup() {
        const userdata = reactive({
            id: 0,
            email: '',
            name: '',
            age: '',
            birth: '',
            avatar: '',
            sex: '',
            character: '',
            hobby: '',
            specialty: '',
            punch: '',
        })
        const charArr = reactive({
            char1: '',
            char2: '',
            char3: '',
            char4: '',
        })
        const store = useStore();
        userdata.id = store.state.userid;
        if(userdata.id) {
            axios.get(`http://localhost:5000/api/v1/getId/${userdata.id}`).then( res => {
                userdata.name = res.data.user.name;
                userdata.email = res.data.user.email;
                userdata.age = res.data.user.age;
                userdata.birth = res.data.user.birth.slice(0,10);
                userdata.avatar = res.data.user.avatar;
                userdata.sex = res.data.user.sex;
                userdata.hobby = res.data.user.hobby;
                userdata.specialty = res.data.user.specialty;
                userdata.punch = res.data.user.punch;
                charArr.char1 = res.data.user.character.slice(0,2);
                charArr.char2 = res.data.user.character.slice(2,4);
                charArr.char3 = res.data.user.character.slice(4,6);
                charArr.char4 = res.data.user.character.slice(6,8);
                if(userdata.sex!='保密') {
                    userdata.sex += '生';
                }
                // console.log('个人档案');
            })
        }
        return {userdata,charArr}
    }
}
</script>

<style lang="less" scoped>
.personalfile {
    width: 1130px;
    height: auto;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-bottom: 50px;
    padding-top: 35px;
    padding-left: 35px;
    .top-1 {
        display: flex;
        justify-content: space-between;
        padding-right: 60px;
    }
    .top-2 {
        display: flex;
        .email {
            margin-left: 25.3px;
        }
    }
    .top-3 {
        display: flex;
        .sex {
            margin-left: 40px;
        }
    }
    .top-4 {
        display: flex;
        .hobby {
            margin-left: 40px;
        }
    }
    .top {
        margin-top: 30px;
    }
    .text {
        margin-left: 20px;
        color: rgba(0, 0, 0, 0.45);
    }
    .desc{
        font-size: 20px;
        font-weight: 600;
    }
    .box {
        margin-left: 40px;
    }
}


</style>