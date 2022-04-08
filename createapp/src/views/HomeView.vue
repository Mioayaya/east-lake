<template>
	<div class="home">
			<top-nav :userid="userdata.id"></top-nav>
			<swiper-nav></swiper-nav>
			<course-view></course-view>
	</div>
</template>

<script>
import TopNav from '@/components/homeview/topNav.vue'
import SwiperNav from '@/components/homeview/swiperNav.vue'
import CourseView from '@/components/homeview/courseView.vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
import { reactive } from '@vue/reactivity'

export default {
	name:'HomeView',
	components: {
		TopNav,SwiperNav,CourseView,
	},
	setup() {
		const userdata = reactive({
			id: 0,
		})
		const route = useRoute();
		userdata.id = route.query.id;
		console.log(`homeview-userdata.id: ${userdata.id}`);
		// 如果是登录后 即userid是存在的 传递给topnav，使得点击头像跳转到个人页面
		if(userdata.id) {
			
		}
		return {userdata,}
	}
}
</script>

<style lang="less" scoped>



</style>
