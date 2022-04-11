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
}
</script>

<style lang="less" scoped>



</style>
