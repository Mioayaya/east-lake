<template>
    <div class="login">
        <div class="top">
            <h1>Sign in</h1>
        </div>
        <!-- 表单组 -->
        <el-form ref="userSigninRef" :model="signinForm" status-icon :rules="rules" label-width="120px" class="form" label-position="top">
            <!-- 邮箱 -->
            <el-form-item label="邮箱" prop="email">
                <el-input v-model.number="signinForm.email" type="email" placeholder="请输入邮箱"/>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item label="密码" prop="password">
                <el-input v-model="signinForm.password" type="password" placeholder="请输入密码"/>
            </el-form-item>
            <!-- 登录按钮 -->
            <el-form-item class="sign-in">
                <el-button type="primary" @click="submitForm(userSigninRef)">登录</el-button>
                <a href="">忘记密码?</a>
            </el-form-item>
        </el-form>

        <div class="bottom">
            <hr>
            <div class="no-account">
                <span class="no-acc">没有账号?</span> 
                <router-link :to="{ path:'/registerview'}">
                    <a>注册</a>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

import { reactive, ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';
import { getTest } from '@/api';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router'
export default {
    name:'LoginBody',
    components:{
        
    },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const userSigninRef = ref();
        const signinForm = reactive({
            email:'',
            password:'',
        })
        const getdata = reactive({

        })
        const rules = reactive({
            email:[{ required:true,message:"邮箱不能为空",trigger:"blur" }],
            password:[{ required:true,message:"密码不能为空",trigger:"blur" }]
        })
        const submitForm = (formEl) => {
            if (!formEl) return
            formEl.validate((valid) => {
                if (valid) {
                    axios.post('http://localhost:5000/api/v1/login',signinForm).then( res => {
                        console.log('登录成功');
                        console.log(res);
                        let u_id = res.data.user.id;
                        // console.log(u_id);
                        router.push({path:'/',query:{id:u_id}});
                        // router.push('/');
                    })
                    console.log('submit!')
                } else {
                    console.log('error submit!')
                    return false
                }
            })
        }

        return {userSigninRef,signinForm,rules,submitForm}
    }
}
</script>

<style lang="less" scoped>
.login {
    position: absolute;
    margin-top: 40px;
    left: 38%;
    width: 380px;
    height: 520px;
    background-color: #fff;
    border-radius: 5px;
    .top {
        align-items: center;
        display: flex;
        justify-content: center;
        h1 {
            font-family: 'Dancing Script', cursive;
            font-size: 50px;
            margin: 30px 0;
            color: rgb(0, 106, 255);
        }
    }
    
    .form {
        padding: 0 40px;
        .sign-in {
            align-items: center;
            display: flex;
            justify-content: space-around;
            position: relative;
            button {
                margin-left: 80px;
            }
        }
    }
    
    .bottom {
        padding: 0 40px;
        position: relative;
        .no-account {
            display: flex;
            justify-content: center;
        }
    }
    a {
        color: rgb(0, 106, 255);
    }
    a:hover {
        color:rgb(49, 23, 166);
    }
}

</style>