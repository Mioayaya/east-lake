<template>
    <div class="teachtop">
        <div class="top">
            <span>不定期邀请专家针对不同教育问题举行讲座</span>
        </div>
        <div class="conent">
            <div class="left">
                <img :src="teachdata.pic" alt="">
            </div>
            <div class="right">
                <div class="name">
                    <span>本次主题和讲师如下:</span>
                    <p>主题：“双减”政策与青少年核心素养的培养 <br>
                     时间:5月下旬 <br>
                     讲座开展:康怀研学网页及其APP</p>
                    <span>讲师介绍:</span>
                    <p>&nbsp;&nbsp; 程向明，浙江农林大学讲师，大学本科，硕士学位。</p>
                    <span>研究方向:</span>
                    <p>&nbsp;&nbsp; 广告设计、品牌形象设计、广告学</p>
                </div>
                <div class="result">
                    <span>成果:</span>
                    <p>&nbsp;&nbsp; 主持了参与了省级厅级校级课堂教学改革项目8项;
                        担任了学生创新创业项目6项;指导了学生发表论文8篇;
                        发表学术论文10余篇;组织各类广告学专业学科竞赛,
                        指导学生共计获得奖项100余项。</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
    name:'TeachTop',
    setup() {
        const teachdata = reactive({
            pic:require('../../assets/avatar/teacher.jpg'),
            
        })

        return {teachdata,}
    }
}
</script>

<style lang="less" scoped>
.teachtop {
    width: 1130px;
    height: auto;
    background-color: white;
    margin-top: 30px;
    margin-left: 13%;
    padding-top: 30px;
    padding-bottom: 20px;
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
    flex-direction: column;
    .top {
        margin-bottom: 10px;
    }
    .conent {
        display: flex;
    }
    .left {
        img {
            width: 300px;
            height: auto;

        }
    }
    .right {
        width: 600px;
        padding: 0 20px 20px 50px; 
    }
    span {
        font-size: 20px;
        font-weight: 600;
    }
}

</style>