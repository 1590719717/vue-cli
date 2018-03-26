<template>
	<div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
	import echarts from 'echarts'
	export default {
		props: {
			className: {
				type: String,
				default: 'userEchart'
			},
			id: {
				type: String,
				default: 'userEchart'
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
						x: 'left',
						bottom: '0',
						data: ['老用户', '新用户']
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
								name: '老用户'
							},
							{
								value: 310,
								name: '新用户'
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