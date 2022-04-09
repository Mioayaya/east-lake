<template>
    <div class="topNav">
        <!-- 标题栏左侧 -->
        <div class="topLeft">
            <router-link :to="{ path:'/' }">
                <a class="navbar-brand">康杯研学</a>
            </router-link>
            <div class="iteam">
                    <li>智能课件</li>
                    <li>专家讲座</li>
                    <li>一对一资讯</li>
                    <li>论坛交流</li>
            </div>
        </div>

        <!-- 标题栏右侧 -->
        <div class="topRight">
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="输入搜索内容" aria-label="Search">
                <div class="search">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-icon-test"></use>
                    </svg>
                </div>
                <div class="avatar">
                    <!-- 默认未登录的头像 -->
                    <router-link :to="{ path:'/loginview'}" v-if="!userdata.id">
                        <img :src="img" alt="用户头像">
                    </router-link>
                    <!-- 登录后 -->
                    <router-link :to="{path:'/personview'}" v-if="userdata.id">
                        <img :src="userdata.avatar" alt="用户头像">
                    </router-link>
                </div>
            </form>
        </div>
        <!-- <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
            </div>
        </nav> -->
     </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { useStore } from 'vuex';
import axios from 'axios';
export default {
    name:'TopNav',
    setup() {
        let img = 'https://cdn.luogu.com.cn/upload/usericon/1.png';
        const userdata = reactive({
            id:0,
            avatar: '',
        })
        const store = useStore();
        userdata.id = store.state.userid;
        // 如果用户登录、则载入头像
        if(userdata.id) {
            axios.get(`http://localhost:5000/api/v1/getId/${userdata.id}`).then ( res => {
                console.log(res);
                let avatar = res.data.user.avatar;
                userdata.avatar = avatar;
            })
        }
        console.log(`topNav-props.userid: ${userdata.id}`);
        return { img,userdata, }
    }
}

</script>

<style lang="less" scoped>

.topNav {
    height: 67px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0 150px;
    .topLeft {
        display: flex;
        justify-content: left;
        align-items: center;
        a {
            color: rgba(144, 137, 37, 0.634);
        }
        .iteam {
            display: flex;
            justify-content: left;
            list-style: none;
            li {
                margin-left: 10px;
            }
        }
    }
    .topRight {
        .d-flex {
            display: flex;
            justify-content: space-around;
            align-items: baseline;
            .search {
                margin-left: 3px;
                padding-top: 5px;
                .icon {
                    bottom: 10px;
                    width: 25px;
                    height: 25px;
                }
            }
            .avatar {
                margin-left: 10px;
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
            }
        }

    }

}

</style>