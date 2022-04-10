<template>
    <!-- 主页list -->
    <div class="homelist">
        <!-- 初始页面 -->
        <div class="left" v-if="userdata.state">
            <div class="desc">
                <span class="top">个人介绍</span>
                <span class="sign">{{userdata.sign}}</span>
            </div>
            <div class="edit">
                <button type="button" class="btn btn-outline-primary" @click="editSign">编辑</button>
            </div>
        </div>
        <!-- 编辑页面 -->
        <div class="left" v-if="!userdata.state">
            <div class="desc">
                <span class="top">编辑个人介绍</span>
                <input type="text" class="form-control" id="exampleFormControlInput1" v-model="userdata.sign">
            </div>
            <div class="save">
                <button type="button" class="btn btn-outline-primary" @click="saveSign">保存</button>
            </div>
        </div>
        <div class="right">
            <div class="text">
                <span>用户id</span>
                <span>用户类型</span>
                <span>注册时间</span>
            </div>
            <div class="num">
                <span>{{userdata.id}}</span>
                <span>普通用户</span>
                <span>{{userdata.date}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { useStore } from 'vuex'
import axios from 'axios';
export default {
    name:'HomeList',
    setup() {
        const store = useStore();
        const userdata = reactive({
            id: 0,
            date: '',
            sign: '',
            state: true,
        })
        userdata.id = store.state.userid;
        if(userdata.id) {
            axios.get(`http://localhost:5000/api/v1/getId/${userdata.id}`).then ( res => {
                let date = res.data.user.date;
                let sign = res.data.user.sign;
                date = date.slice(0,10);
                userdata.date = date;
                userdata.sign = sign;
            })
        }
        console.log(userdata);
        let editSign = () => {
            userdata.state = !userdata.state ;
        }
        let saveSign = () => {
            axios.post('http://localhost:5000/api/v1/editsign',userdata).then ( res => {
                console.log(res);
            })
            userdata.state = !userdata.state ;
        }
        return {userdata,editSign,saveSign}
    }
}
</script>

<style lang="less" scoped>
.homelist {
    display: flex;
    .left {
        width: 750px;
        height: 110px;
        background-color: #fff;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        .desc {
            display: flex;
            flex-direction: column;
            .form-control {
                margin-top: 15px;
                margin-left: 20px;
            }
            .top {
                font-size: 20px;
                font-weight: 600;
            }
            span {
                margin-top: 15px;
                margin-left: 20px;
            }
        }
        .edit {
            margin-top: 15px;
            margin-right: 20px;
        }
        .save {
            margin-top: 15px;
            margin-right: 20px;
        }
    }
    .right {
        margin-left: 20px;
        width: calc(1130px - 750px - 20px);
        height: 110px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        .text {
            display: flex;
            flex-direction: column;
            span {
                margin-top: 10px;
                margin-left: 20px;
            }
        }
        .num {
            display: flex;
            flex-direction: column;
            text-align: right;
            color: rgba(0, 0, 0, 0.45);
            span {
                margin-top: 10px;
                margin-right: 20px;
            }
        }
    }
}
</style>