<template>
	<div class="home">
			<top-nav></top-nav>
			<swiper-nav></swiper-nav>
			<course-view></course-view>
	</div>
</template>

<script>
import TopNav from '@/components/homeview/topNav.vue'
import SwiperNav from '@/components/homeview/swiperNav.vue'
import CourseView from '@/components/homeview/courseView.vue'
import { reactive } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
	name:'HomeView',
	components: {
		TopNav,SwiperNav,CourseView,
	},
	setup() {
		const userdata = reactive({
			id: 0,
		})
		// const id = getCurrentInstance()?.appContext.config.globalProperties.$userid;
		// console.log(`全局变量id: ${id}`);
		// 全局变量
		const store=useStore();
		userdata.id = store.state.userid;
		console.log(`homeview-userdata.id: ${userdata.id}`);  // userid
		// 如果是登录后 即userid是存在的 传递给topnav，使得点击头像跳转到个人页面
		if(userdata.id) {
			
		}
		return {userdata,}
	}
}
</script>

<style lang="less" scoped>



</style>
