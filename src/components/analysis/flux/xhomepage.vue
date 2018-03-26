<template>
	<el-container>
		<el-header>首页分析</el-header>
		<el-main>
			<div style="" class="main-top">
				<div class="top-left">
					终端：
					<el-select v-model="value" placeholder="全部" style="width: 80px;">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" style="top: 0;">
						</el-option>
					</el-select>
				</div>
				<div class="top-left">
					访客类型:
					<el-select v-model="value1" placeholder="不限" style="width: 80px;">
						<el-option label="新访客" value="1"></el-option>
						<el-option label="老访客" value="1"></el-option>
					</el-select>
				</div>
				<div class="top-left">
					日期：
					<el-select v-model="value2" placeholder="今天" style="width: 80px;">
						<el-option label="今天" value="1"></el-option>
						<el-option label="昨天" value="2"></el-option>
						<el-option label="自然周" value="3"></el-option>
						<el-option label="自然月" value="4"></el-option>
						<el-option label="自定义" value="5"></el-option>
					</el-select>
					<el-date-picker style="width: 200px;" unlink-panels v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
					</el-date-picker>
				</div>
				<div style="float: right;">
					<el-button size="mini">搜索</el-button>
					<el-button size="mini">重置</el-button>
				</div>
			</div>
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="date" label="日期" width="180">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="180">
				</el-table-column>
				<el-table-column prop="address" label="地址">
				</el-table-column>
			</el-table>
		</el-main>

	</el-container>
	<!--<div>hello world</div>-->
</template>

<script>
	export default {
		data() {
			return {
				options: [
					/*{
					          value: '选项1',
					          label: '移动端'
					        },*/
					{
						value: '选项1',
						label: '移动端'
					}, {
						value: '选项2',
						label: 'PC端'
					}, {
						value: '选项3',
						label: 'APP-Andriod'
					}, {
						value: '选项4',
						label: 'APP-IOS'
					}, {
						value: '选项5',
						label: 'WAP'
					}
				],
				tableData: [{
					date: '2016-05-02',
					name: '合计',
					num: '10'
				}, {
					date: '2016-05-04',
					name: '直接来源',
					num: '100'
				}, {
					date: '2016-05-01',
					name: '自然搜索',
					num: '4.00'
				}, {
					date: '2016-05-03',
					name: '付费渠道',
					num: '50000'
				}],
				value: '',
				value1: '',
				value2: '',
				value6: ''
			}
		}
	}
</script>

<style scoped="scoped">
	.el-main {
		background-color: #fff;
		color: #333;
		/*text-align: center;*/
		margin-top: 20px;
		padding: 0;
	}
	
	.el-header {
		font-size: 18px;
		font-weight: 600;
		background-color: #fff;
		color: #333;
		/*text-align: center;*/
		line-height: 60px;
	}
	
	.main-top {
		height: 60px;
		line-height: 60px;
		padding: 0 20px;
	}
	
	.main-top .top-left {
		float: left;
		margin-left: 15px;
	}
</style>