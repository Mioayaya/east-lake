<template>
    <div class="register">
        <div class="top">
            <h1>Sign up</h1>
        </div>

        <!-- 表单组 -->
        <el-form ref="userSignupRef" :model="signupForm" status-icon :rules="rules" label-width="120px" class="signup-form" label-position="top">
            <!-- 用户名 -->
            <el-form-item label="用户名" prop="name">
                <el-input v-model.number="signupForm.name" type="text" placeholder="请输入用户名"/>
            </el-form-item>
            <!-- 邮箱 -->
            <el-form-item label="邮箱" prop="email">
                <el-input v-model.number="signupForm.email" type="email" placeholder="请输入邮箱"/>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item label="密码" prop="password">
                <el-input v-model="signupForm.password" type="password" placeholder="请输入密码"/>
            </el-form-item>
            <!-- 确认密码 -->
            <el-form-item label="确认密码" prop="password2">
                <el-input v-model="signupForm.password2" type="password" placeholder="请输入一遍"/>
            </el-form-item>
            <!-- 登录按钮 -->
            <el-form-item class="sign-up">
                <el-button type="primary" @click="submitForm(userSignupRef)">注册</el-button>
            </el-form-item>
        </el-form>

        <div class="bottom">
            <hr>
            <div class="have-account">
                <span class="no-acc">已有账号?</span> 
                <router-link :to="{ path:'/loginview'}">
                    <a>登录</a>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import axios from 'axios'
import { getCurrentInstance, onBeforeMount} from "vue";
import { useRouter, useRoute } from 'vue-router'

export default {
    name:'RegisterBody',
    setup() {
        const router = useRouter();
        const route = useRoute();
        const validatePass = (rules, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'))
            } else {
                callback()
            }
        }
        const validatePass2 = (rules, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'))
            } else if (value !== signupForm.password) {
                callback(new Error("两次输入的密码不一致!"))
            } else {
                callback()
            }
        }

        const userSignupRef = ref();
        const signupForm = reactive({
            name:'',
            email:'',
            password:'',
            password2:''
        })
        const rules = reactive({
            name:[{ required:true,message:"用户名不能为空",trigger:"blur" }],
            email:[{ required:true,message:"邮箱不能为空",trigger:"blur" }],
            password:[{ validator: validatePass,trigger:"blur" }],
            password2:[{ validator: validatePass2,trigger:"blur"}]
        })

        let { proxy } = getCurrentInstance();
        const submitForm = (formEl) => {
            if (!formEl) return
            formEl.validate((valid) => {
                if (valid) {
                    axios.post("http://localhost:5000/api/v1/register",signupForm).then( res => {
                        console.log('注册成功');
                        console.log(res);
                        router.push('/loginview');
                    })
                    console.log('submit!')
                } else {
                    console.log('error submit!')
                    return false
                }
            })
        }

        return {userSignupRef,signupForm,rules,submitForm}
    }
}
</script>

<style lang="less" scoped>
.register {
    position: absolute;
    margin-top: 40px;
    left: 38%;
    width: 380px;
    height: 560px;
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
    .signup-form {
        padding: 0 40px;
        .sign-up {
            align-items: center;
            display: flex;
            justify-content: space-around;
            position: relative;
            button {
                margin-left: 40%;
            }
        }
    }
    .bottom {
        padding: 0 40px;
        position: relative;
        .have-account {
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