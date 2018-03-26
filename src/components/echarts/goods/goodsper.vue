<template>
	<div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
	import echarts from 'echarts'
	export default {
		props: {
			className: {
				type: String,
				default: 'goodsperEchart'
			},
			id: {
				type: String,
				default: 'goodsperEchart'
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
					title: {
//						text: '堆叠区域图'
					},
					tooltip: {
						trigger: 'axis',
						
					},
					
					
					grid: {
						left: '0',
						bottom: '0',
						width: '138px',
						height: '60px',
						containLabel: true
					},
					xAxis: [{
						show:false,
						type: 'category',
						boundaryGap: false,
						data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
					}],
					yAxis: [{
						show: false,
						type: 'value'
					}],
					series: [{
							name: '邮件营销',
							type: 'line',
							stack: '总量',
							smooth: true,
							areaStyle: {
								normal: {
									color: '#edf4fe',
									shadowColor: '#edf4fe'
								}
							},
							lineStyle: {
								normal: {
									color: '#1fa0fe'
								},
								
							},
							data: [1, 3, 9, 20, 15, 8, 5]
						}
					]
				});
				
			}
		},
		mounted(){
			this.initChart();
		}
	}
</script>

<style>

</style>