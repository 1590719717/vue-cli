<template>
	<div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
	import echarts from 'echarts'
	export default {
		props: {
			className: {
				type: String,
				default: 'makeEchart'
			},
			id: {
				type: String,
				default: 'makeEchart'
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
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					legend: {
						orient: 'horizontal',
						bottom: '0',
						data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
					},
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: ['50%', '70%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center'
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '30',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data: [{
								value: 335,
								name: '直接访问'
							},
							{
								value: 310,
								name: '邮件营销'
							},
							{
								value: 234,
								name: '联盟广告'
							},
							{
								value: 135,
								name: '视频广告'
							},
							{
								value: 1548,
								name: '搜索引擎'
							}
						]
					}]
				});

			}
		},
		mounted() {
			this.initChart();
		}
	}
</script>

<style>

</style>