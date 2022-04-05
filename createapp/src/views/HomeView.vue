<template>
	<div class="home">
		<top-nav></top-nav>
		<swiper-nav></swiper-nav>
	</div>
</template>

<script>
import TopNav from '@/components/homeview/topNav.vue'
import SwiperNav from '@/components/homeview/swiperNav.vue'
export default {
	name:'HomeView',
	components: {
		TopNav,SwiperNav,
	},
}
</script>

<style lang="less" scoped>



</style>
