<template>
	<div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
	import echarts from 'echarts'

	export default {
		props: {
			className: {
				type: String,
				default: 'chart'
			},
			id: {
				type: String,
				default: 'chart'
			},
			height: {
				type: String,
				default: '200px'
			},
			width: {
				type: String,
				default: '200px'
			}
		},
		data() {
			return {
				chart: null
			}
		},
		methods: {
			initChart() {
				this.chart = echarts.init(document.getElementById(this.id));
				this.chart.setOption({
					title: [{
						right: '10',
					}],
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ["今天", "昨天"],
						x: 'right'
					},
					xAxis: [{
						//show: false,
						data: [0, 3, 6, 9, 12, 15, 18, 21, 23]
					}],
					yAxis: [{
						show: false,
						splitLine: {
							show: false
						}
					}],
					grid: [{
						bottom: '20%'
					}, {
						left: 0
					}],

					series: [{
						name: "今天",
						type: 'line',
						smooth: true,
						data: [5, 15, 30, 10, 3, 1, 6, 8, 1]
					}, {
						name: "昨天",
						type: 'line',
						smooth: true,
						data: [0, 10, 20, 15, 5, 10, 6, 8, 1],
					}]
				})
			}
		},
		mounted(){
			this.initChart();
		}
	}
</script>

<style>

</style>