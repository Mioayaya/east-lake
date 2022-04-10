<template>
    <!-- 个人设置 修改基本信息: 头像 用户名字 生日 性别 性格 兴趣爱好 特长-->
    <div class="personalSet">
        <!-- 头像设置 -->
        <div class="avatar">
            <span>头像设置</span>
            <div class="change">
                <img :src="userdata.avatar" alt="">
                <button type="button" class="btn btn-outline-primary">选择图片</button>
            </div>
        </div>
        <!-- 设置名字 -->
        <div class="name">
            <span>用户名</span>
            <input type="text" class="form-control" id="username" v-model="userdata.name">
        </div>
        <!-- 设置生日 -->
        <div class="birth">
            <span>出生日期</span>
            <el-config-provider :locale="locale">
                <el-date-picker v-model="userdata.birth" type="date" placeholder="选择日期"></el-date-picker>
            </el-config-provider>
        </div>
        <!-- 设置性别 -->
        <div class="sex">
            <span>性别</span>
            <div class="sexchoice">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="男" v-model="userdata.sex">
                    <label class="form-check-label" for="inlineRadio1">男</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="女" v-model="userdata.sex">
                    <label class="form-check-label" for="inlineRadio2">女</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="保密" v-model="userdata.sex">
                    <label class="form-check-label" for="inlineRadio3">保密</label>
                </div>
            </div>
        </div>
        <!-- 性格 -->
        <div class="character">
            <span>性格</span>
            <select class="form-control" id="exampleFormControlSelect1" v-model="charArr.char1">
                <option value="外向">外向</option>
                <option value="内向">内向</option>
            </select>
            <select class="form-control" id="exampleFormControlSelect1" v-model="charArr.char2">
                <option value="感觉">感觉</option>
                <option value="直觉">直觉</option>
            </select>
            <select class="form-control" id="exampleFormControlSelect1" v-model="charArr.char3">
                <option value="思维">思维</option>
                <option value="情感">情感</option>
            </select>
            <select class="form-control" id="exampleFormControlSelect1" v-model="charArr.char4">
                <option value="判断">判断</option>
                <option value="感知">感知</option>
            </select>
        </div>
        <!-- 性格提示 -->
        <p style="fontSize:10px;color:#bbb;">* 根据MBTI性格测试来填写</p>
        <!-- 兴趣爱好 -->
        <div class="hobby">
            <span>兴趣爱好</span>
            <input type="text" class="form-control" id="userhobby" v-model="userdata.hobby">
        </div>
        <!-- 特长 -->
        <div class="specialty">
            <span>特长</span>
            <input type="text" class="form-control" id="userspecialty" v-model="userdata.specialty">
        </div>
        <!-- 保存 -->
        <div class="save">
            <button type="button" class="btn btn-success" @click="saveData">提交</button>
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { useStore } from 'vuex'
import {ElConfigProvider} from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import axios from 'axios';
import { now } from 'lodash';
export default {
    name:'PersonalSet',
    components: {
        [ElConfigProvider.name]:ElConfigProvider,//添加组件
    },
    setup() {
        const locale = zhCn;
        const userdata = reactive({
            id: 0,
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
            char1: '外向',
            char2: '感觉',
            char3: '思维',
            char4: '判断',
        })
        const store = useStore();
        userdata.id = store.state.userid;
        // 获取用户信息
        // console.log(userdata.id);
        if(userdata.id) {
            axios.get(`http://localhost:5000/api/v1/getId/${userdata.id}`).then( res => {
                userdata.name = res.data.user.name;
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
                console.log(res);
            })
        }
        // 提交
        let saveData = () => {
            // 拼接字符串，存入到userdata中
            userdata.character = charArr.char1 + charArr.char2 + charArr.char3 + charArr.char4;
            let date = new Date();
            let birth = userdata.birth.toString().slice(11,15);
            userdata.age =  (date.getFullYear() - birth).toString();
            // 修改数据
            axios.post('http://localhost:5000/api/v1/edit',userdata).then ( res => {
                console.log(res);
            })
            
        }
        return {userdata,locale,charArr,saveData}
    }
}
</script>

<style lang="less" scoped>
.personalSet {
    width: 1130px;
    height: auto;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-bottom: 50px;
    padding-top: 35px;
    padding-left: 35px;
    .avatar {
        display: flex;
        justify-content:left;
        .change {
            display: flex;
            flex-direction: column;
            margin-left: 70px;
            img {
                width: 118px;
                height: 118px;
                border-radius: 50%;
                object-fit: cover;
            }
            .btn {
                width: 90px;
                margin-top: 20px;
                margin-left: 15px;
            }
        }   
    }
    .name {
        display: flex;
        justify-content: left;
        padding-top: 35px;
        #username {
            width: 300px;
            margin-left: 105px;
        }
    }
    .birth {
        padding-top: 35px;
        span {
            margin-right: 85px;
        }
    }
    .sex {
        padding-top: 35px;
        display: flex;
        .sexchoice {
            margin-top: 5px;
            margin-left: 125px;
        }
    }
    .character {
        padding-top: 35px;
        display: flex;
        span {
            margin-right: 125px;
        }
        .form-control {
            width: 125px;
            margin-right: 20px;
        }
    }
    .hobby {
        padding-top: 20px;
        display: flex;
        .form-control {
            width: 300px;
            margin-left: 85px;
        }
    }
    .specialty {
        padding-top: 35px;
        display: flex;
        .form-control {
            width: 300px;
            margin-left: 125px;
        }
    }
    .save {
        margin-left: 250px;
        padding-top: 35px;
    }
    span {
        font-size: 20px;
        font-weight: 600;
    }
}


</style>