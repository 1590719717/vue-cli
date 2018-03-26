<template>
	<el-container>
		<el-header>
			<div class="header-left">
				来源分析
				<el-select v-model="value" placeholder="全部">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>

			</div>
			<div class="header-right">
				<el-select v-model="value" placeholder="今天">
					<el-option label="今天" value="1"></el-option>
					<el-option label="昨天" value="2"></el-option>
					<el-option label="自然周" value="3"></el-option>
					<el-option label="自然月" value="4"></el-option>
					<el-option label="自定义" value="5"></el-option>
				</el-select>
				<el-date-picker unlink-panels v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
				</el-date-picker>
			</div>
		</el-header>
		<el-main>
			<div>
				<p>指标:</p>
				<el-checkbox-group v-model="checkList" :min="0" :max="6">
					<el-checkbox label="访客数"></el-checkbox>
					<el-checkbox label="浏览量"></el-checkbox>
					<el-checkbox label="跳失率"></el-checkbox>
					<el-checkbox label="人均浏览量"></el-checkbox>
					<el-checkbox label="新访客数"></el-checkbox>
					<el-checkbox label="平均停留时长"></el-checkbox>
					<el-checkbox label="下单金额" style="margin-left: 0;"></el-checkbox>
					<el-checkbox label="下单客户数"></el-checkbox>
					<el-checkbox label="下单转化率"></el-checkbox>
					<el-checkbox label="支付金额"></el-checkbox>
					<el-checkbox label="支付客户数"></el-checkbox>
					<el-checkbox label="支付转化率"></el-checkbox>
				</el-checkbox-group>
				<p style="font-size: 12px; color: red; margin-top: 33px; margin-left: 20px;">最多选择6个指标</p>
			</div>
			<el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
				<el-table-column type="expand" width="80">
				</el-table-column>
				<el-table-column prop="date" label="渠道" width="100">
				</el-table-column>
				<el-table-column prop="name" label="访客" sortable width="100">
				</el-table-column>
				<el-table-column prop="num" label="浏览量" sortable :formatter="formatter">
				</el-table-column>
				<el-table-column prop="num" label="跳失率" sortable :formatter="formatter">
				</el-table-column>
				<el-table-column prop="num" label="人均浏览量" sortable :formatter="formatter">
				</el-table-column>
				<el-table-column prop="num" label="新访客数" sortable :formatter="formatter">
				</el-table-column>
				<el-table-column prop="num" label="平均停留时长" sortable :formatter="formatter">
				</el-table-column>
				<el-table-column  label="操作" width= "80">
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
				value6: '',
				checkList: []
			}
		},
		methods: {
			formatter(row, column) {
				return row.num;
			}
		}

	}
</script>

<style scoped="scoped">
	.el-main {
		background-color: #fff;
		color: #333;
		padding: 30px 10px;
		border: 1px solid gainsboro;
		border-top: 0;
		/*text-align: center;*/
		/*line-height: 160px;*/
	}
	
	.el-header {
		background-color: #fff;
		color: #333;
		/*text-align: center;*/
		line-height: 60px;
		border: 1px solid gainsboro;
	}
	
	.el-main p {
		float: left;
		margin-right: 20px;
	}
	
	.header-left {
		float: left;
	}
	
	.header-right {
		float: right;
	}
	
	.el-select {
		width: 100px;
		margin-left: 5px;
	}
	
	.el-checkbox-group {
		float: left;
		width: 700px;
		padding: 0;
		line-height: 25px;
	}
</style>