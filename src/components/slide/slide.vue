<template>
	<div class="lunbo">
		<swiper :options="swiperOption" ref="mySwiperA">
			<!-- 幻灯内容 -->
			<swiper-slide class="slide1" @click.native="changeText">
				<p>成交金额<span>(元)</span></p>
				<p>2.70<span>万</span></p>
				<p>较前一天：<span>20%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
				<p>较上周同期：<span>20%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
			</swiper-slide>
			<swiper-slide class="slide2">
				<p>支付金额<span>(元)</span></p>
				<p>2.70<span>万</span></p>
				<p>较前一天：<span>20%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
				<p>较上周同期：<span>20%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
			</swiper-slide>
			<swiper-slide class="slide3">
				<p>下单金额<span>(元)</span></p>
				<p>2.70<span>万</span></p>
				<p>较前一天：<span>20%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
				<p>较上周同期：<span>20%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
			</swiper-slide>
			<swiper-slide class="slide4">
				<p>访客数<span>(元)</span></p>
				<p>2.70<span>万</span></p>
				<p>较前一天：<span>20%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
				<p>较上周同期：<span>20%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
			</swiper-slide>
			<swiper-slide class="slide5">
				<p>客单价<span>(元)</span></p>
				<p>2.70<span>万</span></p>
				<p>较前一天：<span>20%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
				<p>较上周同期：<span>20%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
			</swiper-slide>
			<swiper-slide class="slide6">
				<p>支付转化率<span>(元)</span></p>
				<p>2.70<span>万</span></p>
				<p>较前一天：<span>20%</span><i class="iconfont icon-shuzhishangsheng"></i></p>
				<p>较上周同期：<span>20%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
			</swiper-slide>
			
			<!-- 以下控件元素均为可选 -->
			<!--<div class="swiper-pagination" slot="pagination"></div>-->
			<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div>
			<!--<div class="swiper-scrollbar" slot="scrollbar"></div>-->
		</swiper>
	</div>
</template>
<script>
	import {swiper, swiperSlide} from 'vue-awesome-swiper'
	export default {
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				swiperOption: {
					// 所有配置均为可选（同Swiper配置） 
					notNextTick: true,
//					centeredSlides: true,
					width: 192,
					slidesPerView: 1,
					slidesPerGroup: 6,
					autoplay: 3000,
					grabCursor: true,
					setWrapperSize: true,
					autoHeight: true,
//					loop: true,
					paginationClickable: true,
					/*prevEl: '.swiper-button-prev',
					nextEl: '.swiper-button-next',*/
//					scrollbar: '.swiper-scrollbar',
					mousewheelControl: true,
					observeParents: true,
					navigation: {
					    nextEl: '.swiper-button-next',
					    prevEl: '.swiper-button-prev',
					},
					onTransitionStart(swiper) {
						console.log(swiper)
					}
				}
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiperA.swiper
			}
		},
		methods: {
			changeText(){
				console.log(111)
			}
		},
		mounted() {
			console.log("每次切换都会触发我");
			this.swiper.slideTo(3, 1000, false)
		}
	}
</script>
<style scoped="scoped">
	.lunbo{
		margin-left: 40px;
		border: 1px solid #ededef;
	}
	.swiper-slide{
		box-sizing: border-box;
		/*padding: 25px;*/
	}
	.swiper-wraper{
		overflow: hidden;
	}
	.swiper-button-prev{
		left: -35px;
		z-index: 999;
	}
	.swiper-button-next {
		z-index: 9999;
		right: -35px;
	}
	.swiper-slide {
		/*text-align: center;*/
		padding: 26px 0 26px 26px;
		font-size: 16px;
		width: 192px;
		color: #333;
		box-sizing: border-box;
		background: #fbfbfb;
		/*border: 1px solid red;*/
	}
	
	.swiper-slide p:nth-of-type(1) span {
		font-size: 12px;
		margin-left: 5px;
	}
	
	.swiper-slide p:nth-of-type(2) {
		font-size: 25px;
		margin: 16px 0;
	}
	
	.swiper-slide p:nth-of-type(2) span {
		font-size: 18px;
		margin-left: 5px;
	}
	
	.swiper-slide p:nth-of-type(3),
	.swiper-slide p:nth-of-type(4) {
		font-size: 14px;
		color: #888;
	}
	
	.swiper-slide p:nth-of-type(3) span {
		margin-left: 38px;
	}
	
	.swiper-slide p:nth-of-type(3) i {
		color: #ff4949;
	}
	
	.swiper-slide p:nth-of-type(4) span {
		margin-left: 24px;
	}
	
	.swiper-slide p:nth-of-type(4) i {
		color: #14ce00;
	}
	.slide2{
		border-left: 1px solid #ededef;
		border-right: 1px solid #ededef;
	}
	.slide4{
		border-left: 1px solid #ededef;
		border-right: 1px solid #ededef;
	}
	.slide5{
		/*border-left: 1px solid #ededef;*/
		border-right: 1px solid #ededef;
	}
</style>