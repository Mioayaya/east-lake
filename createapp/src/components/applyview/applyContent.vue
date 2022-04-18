<template>
    <div class="applycontent">
        <div class="sport">
            <span>体训</span>
            <el-scrollbar>
                <div class="choicelist scrollbar-demo-item" v-for="(item,i) in datalist.sport" :key="item.id" 
                :style="{background:(i % 2 ? '#f5f7fa':'#c1d6f8')}">
                    <span class="course">{{item.title}}</span>
                    <el-button-group class="button">
                        <el-button type="primary" plain @click="addlist('sport',i)">添加</el-button>
                        <el-button type="danger" plain @click="delist('sport',i)">删除</el-button>
                    </el-button-group>
                </div>
            </el-scrollbar>
        </div>
        <div class="conersation">
            <span>言训</span>
            <el-scrollbar>
                <div class="choicelist scrollbar-demo-item" v-for="(item,i) in datalist.conversion" :key="item.id" 
                :style="{background:(i % 2 ? '#f5f7fa':'#c1d6f8')}">
                    <span class="course">{{item.title}}</span>
                    <el-button-group class="button">
                        <el-button type="primary" plain @click="addlist('conversion',i)">添加</el-button>
                        <el-button type="danger" plain @click="delist('conversion',i)">删除</el-button>
                    </el-button-group>
                </div>
            </el-scrollbar>          
        </div>
        <div class="heart">
            <span>心训</span>
            <el-scrollbar>
                <div class="choicelist scrollbar-demo-item" v-for="(item,i) in datalist.heart" :key="item.id" 
                :style="{background:(i % 2 ? '#f5f7fa':'#c1d6f8')}">
                    <span class="course">{{item.title}}</span>
                    <el-button-group class="button">
                        <el-button type="primary" plain @click="addlist('heart',i)">添加</el-button>
                        <el-button type="danger" plain @click="delist('heart',i)">删除</el-button>
                    </el-button-group>
                </div>
            </el-scrollbar>
        </div>
        <!-- 已经添加的课程 -->
        <div class="user">
            <span>已经选上的课程：</span>
            <div class="alreadlist" v-for="(item,i) in userdata.courselist">
                <span>{{item}}</span>
            </div>
        </div>
        <div class="pay" v-if="userdata.count">
            <el-button type="success" round @click="dialogTableVisible = true">支付</el-button>
        </div>
        <el-dialog v-model="dialogTableVisible" title="扫码支付">
            <div class="imgs">
                <img src="../../assets/img/pay1.jpg" alt="">
                <img src="../../assets/img/pay2.jpg" alt="">
            </div>
            <el-button class="payforit" type="success" round @click="payFor">确定</el-button>
            <el-button type="info" round @click="dialogTableVisible = false">取消</el-button>
        </el-dialog>
    </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { getCurrentInstance } from 'vue'
import { ElMessageBox } from 'element-plus'
import axios from 'axios'
import { useStore } from 'vuex'
export default {
    name:'ApplyContent',
    setup() {
        const dialogTableVisible = ref(false);
        const formLabelWidth = '140px';
        const { appContext } = getCurrentInstance();
        const datalist = reactive({
            sport:[
                {title:'篮球场',value:false},
                {title:'体育馆',value:false},
                {title:'攀岩场',value:false},
                {title:'竹木科技馆',value:false},
                {title:'百草园',value:false},
                {title:'中国茶谣馆',value:false},
                {title:'农作园',value:false},
            ],
            conversion:[
                {title:'法律辩论赛',value:false},
                {title:'传统文化思辨会',value:false},
            ],
            heart:[
                {title:'心理漫谈',value:false},
                {title:'法律科普',value:false},
            ],
        })
        const userdata = reactive({
            id:0,
            courselist:[],
            count:0,
            list:'',
        })

        const store = useStore();
        userdata.id = store.state.userid;
        
        onMounted( () => {

        })

        let addlist = (vm,num) => {
            // value值为真
            // console.log(num);
            if(datalist[vm][num].value) {
                // 弹出提示，已经选上了
                ElMessageBox.alert('不能重复选课哦', {}, appContext);    
            }else {
                // 提示添加成功
                
                // console.log(vm + num);
                // console.log(userdata);
                // console.log(userdata.courselist.length);
                if(userdata.courselist.length>=8) {
                    ElMessageBox.alert('最多只能选 8 门课哦', {}, appContext);
                } else {
                    userdata.courselist.push(datalist[vm][num].title);
                    datalist[vm][num].value = true;
                    userdata.count += 1;
                }
            }
        }

        let delist = (vm,num) => {
            // value为真 可以删除
            if(datalist[vm][num].value) {
                userdata.courselist.splice(userdata.courselist.indexOf(datalist[vm][num].title),1);
                datalist[vm][num].value = false;
                userdata.count -= 1;
                // console.log(userdata);
            }else {
                ElMessageBox.alert('还没有选该课程哦', {}, appContext); 
            }
        }

        let payFor = () => {
            userdata.list = userdata.courselist.toString();
            axios.post(`http://localhost:5000/api/v3/pay`,userdata);
            dialogTableVisible.value = false;
        }
        return {datalist,addlist,userdata,delist,dialogTableVisible,formLabelWidth,payFor}
    }
}
</script>

<style lang="less" scoped>
.applycontent {
    margin-top: 20px;
    padding: 0 13% 0 13%;
    .choicelist {
        display: flex;
        justify-content: space-between;
        background-color: #c1d6f8;
        .course {
            display: flex;
            margin-left: 15%;
        }
    }
    .user {
        display: flex;
        margin-top: 10px;
        .alreadlist {
            span {
                background-color: #c1d6f8;
                border-radius: 5px;
                margin-left: 3px;
                padding: 0 3px;
            }
        }
    }
    .pay {
        margin-top: 10px;
        text-align: center;
    }
    .payforit {
        text-align: center;
        margin-left: 45%;
    }
}
.imgs {
    display: flex;
    img {
        width: 250px;
        height: 250px;
        margin-left: 30px;
        margin-bottom: 20px;
    }
}
</style>