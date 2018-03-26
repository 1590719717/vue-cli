<template>
	<div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
	import echarts from 'echarts'
	export default {
		props: {
			className: {
				type: String,
				default: 'coreEchart'
			},
			id: {
				type: String,
				default: 'coreEchart'
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
			initChart(){
				this.chart = echarts.init(document.getElementById(this.id));
				this.chart.setOption({
					title: [{
					right: '10',
				}],
				tooltip: {
					trigger: 'axis'
				},
				
				xAxis: [{
					//show: false,
					data: ['01-10', '01-11', '01-12', '01-13','01-14', '01-15', '01-16', '01-17', '01-18', '01-19', '01-20', '01-21', '01-22', '01-23', '01-24']
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
					data: [5, 15, 30, 10, 3, 1, 6, 8, 1, 6, 9, 10, 15, 25, 3]
				}, {
					name: "昨天",
					type: 'line',
					smooth: true,
					data: [0, 10, 20, 15, 5, 10, 6, 8, 1, 8, 12, 15, 6, 9, 7],
				}]
				})
			}
		},
		mounted(){
			this.initChart()
		}
	}
</script>

<style>
</style>