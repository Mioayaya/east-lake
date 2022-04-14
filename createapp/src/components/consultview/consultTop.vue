<template>
<div class="consult">
    <div class="top">
        欢迎咨询康怀研学工作室
    </div>
    <div class="comment">    
        <el-scrollbar>
            <div class="conlist scrollbar-demo-item" v-for="(item,i) in datalist" :key="item.id">
                <div class="conlist"  v-show="item.show">
                    <div class="avatar">
                        <img :src="item.avatar" alt="">
                    </div>
                    <div class="text">
                        <span>{{item.consult}}</span>
                    </div>
                </div>
            </div>
        </el-scrollbar>
    </div>
    <div class="userinput">
         <!-- 头像 -->
        <div class="avatar">
            <img :src="input.avatar" alt="">
        </div>
        <!-- 内容 -->
        <div class="comment">
            <el-input class="input" type="textarea" :autosize="{ minRows: 2, maxRows: 3}" placeholder="和工作室聊聊看吧~" v-model="input.comment">
            </el-input>
        </div>
        <!-- 按钮 -->
        <div class="send">
            <button type="button" class="btn btn-primary" @click="send">发送</button>
        </div>

    </div>
</div>

</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { onMounted, onUnmounted } from '@vue/runtime-core'
import { getCurrentInstance } from 'vue'
import { ElMessageBox } from 'element-plus'
export default {
    name:'ConsultTop',
    setup() {
        const { appContext } = getCurrentInstance();
        const datalist = reactive([
            {id:0,consult:'您好，欢迎咨询康怀研学工作室，您想咨询关于孩子的哪个方面呢？点击下方的咨询类型，我们有相应的专业咨询老师为您一对一服务。',avatar:require('../../assets/avatar/consult.jpg'),show:0},
            {id:1,consult:'1.孩子兴趣拓展咨询 2.孩子教育辅导问题咨询 3.政策解读咨询 4.孩子未来职业规划咨询',avatar:require('../../assets/avatar/consult.jpg'),show:0},
        ])
        datalist[1].consult = datalist[1].consult.replace(/\r\n/g, "<br>")
        const input = reactive({
            comment: '',
            avatar: 'https://cdn.luogu.com.cn/upload/usericon/1.png',
            id: 0,
            show: 1,
        })
        let num = 0;
        let timer;
        let send = () => {
            if(input.comment.trim() === '') {
                ElMessageBox.alert('不要发送空白内容哦!', {}, appContext);    
            }
            
        }
        onMounted(() => {
            timer = setInterval(() => {
                if(num>=1 && num <= 2) {
                    datalist[num-1].show = 1; 
                }
                num += 1;
                console.log(num);
            },1000);                
        })

        onUnmounted(() => {
            clearInterval(timer);
        })
        
        return {datalist,input,send}
    }
}
</script>

<style lang="less" scoped>
.consult {
    width: 1130px;
    height: auto;
    background-color: white;
    margin-top: 30px;
    margin-left: 13%;
    padding-top: 30px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    padding-right: 50px;
    .top {
        text-align: center;
        font-size: 30px;
        align-content: center;
    }
    .userinput {
        margin-top: 10px;
        display: flex;
        img {
            width: 54px;
            height: 54px;
            object-fit: cover;
            border-radius: 50%;
        }
        .comment {
            margin-left: 20px;
            margin-right: 20px;
            width: 300px;
        }
        .send {
            margin-top: 5px;
        }
    }
    .comment {
        background-color:aliceblue;
    }
    .el-scrollbar {
        height: 300px;
    }
    .scrollbar-demo-item {
        width: 1000px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: auto;
        margin: 10px;
    }
    .conlist {
        display: flex;
        justify-content: left;
        .avatar {
            img {
                width: 54px;
                height: 54px;
                object-fit: cover;
                border-radius: 50%;
            }
        }
        .text { 
            width: 600px;
            height: auto;
            padding: 10px;
            margin-left: 20px;
            border-radius: 4px;
            background: var(--el-color-primary-light-6);
            color: var(--el-color-primary);
        }
    }
}
</style>