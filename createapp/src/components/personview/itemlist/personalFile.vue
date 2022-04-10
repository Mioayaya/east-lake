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

            </div>
        </div>
        <!-- email 年龄 生日 -->
        <div class="top-2">
            <div class="left">
                <span class="desc">email</span>
                <span class="email text">{{userdata.email}}</span>
            </div>
            <div class="middle">
                
            </div>
            <div class="right">

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
                userdata.birth = res.data.user.birth;
                userdata.avatar = res.data.user.avatar;
                userdata.sex = res.data.user.namsexe;
                userdata.hobby = res.data.user.hobby;
                userdata.specialty = res.data.user.specialty;
                charArr.char1 = res.data.user.character.slice(0,2);
                charArr.char2 = res.data.user.character.slice(2,4);
                charArr.char3 = res.data.user.character.slice(4,6);
                charArr.char4 = res.data.user.character.slice(6,8);
                console.log('个人档案');
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

    .text {
        margin-left: 20px;
        color: rgba(0, 0, 0, 0.45);
    }
    .desc{
        font-size: 20px;
        font-weight: 600;
    }
}


</style>