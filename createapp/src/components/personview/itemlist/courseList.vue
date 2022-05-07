<template>
    <!-- 课程推荐 -->
    <div class="course">
        <!-- 查看一下性格是否是空的，是的话提示先填写个人信息 -->
        <div class="tips" v-show="!userdata.showid">* 请先填写个人信息,完成推荐哦~</div>
        <!-- 推荐课程列表 -->
        <div class="list" v-show="userdata.showid">
            <!-- 1是心训 -->
            <div class="list" v-if="userdata.showid == 1">
                <div class="listitem" v-for="(item, i) in listdata.Heart" :key="i">
                    <img :src="item.img" alt="">
                    <div class="text">
                        <span class="title">{{ item.title }}</span>
                    </div>
                </div>
            </div>
            <!-- 2是言讯 -->
            <div class="list" v-if="userdata.showid == 2">
                <div class="list">
                    <div class="listitem" v-for="(item, i) in listdata.Conversion" :key="i">
                        <img :src="item.img" alt="">
                        <div class="text">
                            <span class="title">{{ item.title }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 体训没了 -->
            <div class="list" v-if="userdata.showid == 3">
                <div class="listitem" v-for="(item, i) in listdata.Aesthetic" :key="i">
                    <img :src="item.img" alt="">
                    <div class="text">
                        <span class="title">{{ item.title }}</span>
                        <!-- 提示详情文本 -->
                        <div class="tips">
                            <span class="addreess">{{ '活动地点: ' + item.address }}</span>
                            <span class="describe">{{ '活动任务: ' + item.describe }}</span>
                            <span class="goal" v-if="item.goal">{{ '活动目标: ' + item.goal }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 添加报名按钮 -->
            <button type="button" @click="apply" class="btn btn-info" style="color: aliceblue;">点击报名</button>
        </div>

    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { useStore } from 'vuex'
import axios from 'axios'
import { useRouter } from 'vue-router'
export default {
    name: 'CoureList',
    setup() {
        const listdata = {
            Conversion: [
                { img: require('../../../assets/img/con-1.jpg'), title: '传统文化思辨会', author: '', describe: '' },
                { img: require('../../../assets/img/con-2.jpg'), title: '法律辩论赛', author: '', describe: '' },
            ],
            Heart: [
                { img: require('../../../assets/img/heart-1.jpg'), title: '心理漫谈', author: '', describe: '' },
                { img: require('../../../assets/img/heart-2.jpg'), title: '法律科普', author: '', describe: '' },
            ],
            Aesthetic: [
                { img: require('../../../assets/img/a1.png'), title: '香榧篇', author: '', address: '锦南街道横岭村', describe: '带领大家游香榧田，并向大家介绍基本的香榧种植、采摘、晾晒、制作加工有关知识。', goal: '亲历农事活动，不仅是让孩子们感受农业活动，更多的是能让孩子了解到粮食的来之不易。' },
                { img: require('../../../assets/img/a2.jpg'), title: '中草药篇', author: '', address: '天目山仙草小镇', describe: '依托天目山山地溪谷环境多样的本底，以生态休假和促进健康为导向，带领孩子感受中草药种植、观光、休闲、养身、娱乐功能，并向宣传普及健康养生知识，依托特有的中草药产品及现有山水脉络等独特风光，让孩子融入大自然。', goal: '' },
                { img: require('../../../assets/img/a3.jpg'), title: '桃花纸非遗篇', author: '', address: '杨洪村桃花纸非遗体验园', describe: '临安桃花纸的发源地千洪乡，如今的於潜杨洪村。这里群山环抱，竹海延绵，这里绿树成荫，溪水清澈，这里有山谷，名曰蝴蝶谷，谷深千尺，这里有浙西自行车廊道，绿色生态。', goal: '在问宣堂向孩子们通过实物及图文展示桃花纸制作全过程，造纸所用的原材料，纸的品种，及纸的用途等等，激发孩子保护和传承临安传统文化——桃花纸古法制作技艺这项非物质文化遗产。' },
                { img: require('../../../assets/img/a4.jpg'), title: '果园篇', author: '', address: '临安於潜镇的横岭自然村', describe: '三月里春暖花开，杭州临安於潜镇的横岭自然村，300亩高山樱桃花竞相开放，一片片樱桃花如云似雪，这份春日限定美景不仅将村庄装点得格外漂亮灵动，更是拉开了横鑫村这个“四季果园”的甜蜜收获序幕。樱桃、桃子、黑布林等特色水果一直是横鑫村的支柱产业。近年来，横鑫村通过於潜镇“三服务”的持续助力，不断优化基础设施，丰富水果产业内容，“春有百花秋收获，夏有瓜果冬有雪”的横鑫“四季果园”的模式已经逐渐成型。', goal: '亲子采摘活动，无形之间促使孩子亲近大自然。' },
                { img: require('../../../assets/img/a5.jpg'), title: '烹饪篇', author: '', address: '康怀美育工作室烹饪教室', describe: '烹饪老师与班主任带着同学们到附近商场里采买食材。在老师的指导下，同学们在买菜过程中了解民生，懂得智慧理财；在动手做菜过程中，学习生活技能，培养合作精神；在品尝美食过程中，学会分享，传播快乐。菜肴出锅后，进行精致的摆盘，大家发挥创意、大胆操作，让刚出锅的平平无奇家常菜瞬间堪比米其林餐厅的高端美食，色香味俱全，从任何角度看都能让人胃口大动，食欲大开。', goal: '“对于习惯“衣来伸手饭来张口”的这一代人，自己动手烧菜做饭，可以培养吃苦耐劳的品格、责任意识，提高动手能力，由于“厨艺课”还有趣味性，从中更可体会到劳动的快乐，让人生发对生活的热爱，因此更为学生所欢迎。”' },
            ],
        }
        const userdata = reactive({
            id: 0,
            showid: 0,
        })
        const store = useStore();
        const router = useRouter();
        userdata.id = store.state.userid;

        let apply = () => {
            router.push('/applyview');
            // router.push({path:'/applyview',query:{id:'xxx'}});
        }
        if (userdata.id) {
            axios.get(`http://localhost:5000/api/v1/getId/${userdata.id}`).then(res => {
                userdata.showid = res.data.user.showId;
            })
        }


        // console.log(listdata);
        return { userdata, listdata, apply }
    }
}
</script>

<style lang="less" scoped>
.course {
    width: 1130px;
    height: auto;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-bottom: 50px;
    padding-top: 35px;
    padding-left: 35px;

    .list {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 20px;

        .listitem {
            margin-right: 30px;
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
            background-color: #fff;
            position: relative;

            img {
                width: 300px;
                height: 150px;
                border-radius: 5px;
            }

            .text {
                display: flex;
                flex-direction: column;
                margin-top: 15px;
                margin-left: 15px;

                .title {
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 20px;
                    color: #333;
                    margin-bottom: 3px;
                    overflow: hidden;
                }

                .author {
                    color: #666;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 16px;
                }
            }

            .tips {
                visibility: hidden;
                // display: none;
                position: absolute;
                z-index: 1;
                width: 300px;
                height: 150px;
                top: -30px;
                left: 0px;
                background: rgba(255, 250, 240, 0.5);
                border: 1px solid rgb(0, 47, 167);
                border-radius: 10px;
                padding: 10px 20px;

                .describe {
                    overflow: hidden;
                    // height: 90px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    /*垂直方向*/
                    -webkit-line-clamp: 2;
                    /*行数*/
                }

                .goal {
                    overflow: hidden;
                    // height: 100px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    /*垂直方向*/
                    -webkit-line-clamp: 2;
                    /*行数*/
                }
            }
        }



        .listitem:hover {

            cursor: pointer;

            img {
                filter: blur(2px);
            }

            .tips {
                display: flex;
                flex-direction: column;
                visibility: visible;
                transform: translateY(30px);
                transition: 0.5s;
            }

        }
    }

}
</style>