<template>
	<el-container>
		<el-header>
			<div class="header-left">
				<p>流量分析</p>
				<el-select v-model="value9" value-key="value" placeholder="全部" size="mini" @change="inputText">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" style="top: 0;">
					</el-option>
				</el-select>
			</div>
			<div class="header-right">
				<el-select v-model="value" placeholder="今天" size="mini" @change="changeDay">
					<el-option v-for="a in options1" :key="a.value" :label="a.label" :value="a.value"></el-option>
				</el-select>
				<el-date-picker v-show="booler" :disabled="disable" size="mini" v-model="value7" type="daterange" range-separator="至" :start-placeholder="startTime" :end-placeholder="endTime" :picker-options="pickerOptions1">
				</el-date-picker>
				<el-date-picker v-model="value6" :disabled="disable" type="date" size="mini" v-show="!booler">
				</el-date-picker>
			</div>
		</el-header>
		<el-main>
			<div class="assume">
				流量总揽
			</div>
			<div class="assume-data">
				<div v-for="a in arrData" class="">
					<p>{{a.name}}</p>
					<p>{{a.num}}</p>
					<p>较前日<span><i class="iconfont icon-shuzhishangsheng"></i>{{a.per}}</span></p>
				</div>
			</div>
			<div class="assume">
				流量趋势
				<div class="tablist">
					<!--<span @click="changeBool">趋势</span>丨
					<span @click="changeBool">列表</span>-->
					<i class="iconfont icon-xiazai"></i>下载
				</div>
			</div>
			<div class="list tendency">
				<div>
					<el-form>
						<div class="terminal">
							<div class="terminalContent">
								<p class="terminalText">终端:</p>
								<p class="normText">指标:</p>
							</div>

							<el-checkbox-group v-model="checkList" @change="changeBox" :max="4">
								<el-checkbox label="所有端"></el-checkbox>
								<el-checkbox label="PC端"></el-checkbox>
								<el-checkbox label="移动端"></el-checkbox>
								<el-checkbox label="APP-Andriod"></el-checkbox>
								<el-checkbox label="APP-IOS"></el-checkbox>
								<el-checkbox label="WAP"></el-checkbox>
								<el-checkbox label="微商城"></el-checkbox>
								<div style="margin: 10px;"></div>
								<el-checkbox label="访客数"></el-checkbox>
								<el-checkbox label="浏览量"></el-checkbox>
								<el-checkbox label="跳失率"></el-checkbox>
								<el-checkbox label="人均浏览量"></el-checkbox>
								<el-checkbox label="平均停留时长"></el-checkbox>
							</el-checkbox-group>
						</div>
						<!--<div class="norm">
							指标:
							<el-checkbox-group v-model="checkList" @change="changeBox">
								<el-checkbox label="访客数"></el-checkbox>
								<el-checkbox label="浏览量"></el-checkbox>
								<el-checkbox label="跳失率"></el-checkbox>
								<el-checkbox label="人均浏览量"></el-checkbox>
								<el-checkbox label="平均停留时长"></el-checkbox>
							</el-checkbox-group>
						</div>-->
						<div>
							已选:
							<!--<el-checkbox-group v-model="checkList">
							<el-checkbox label="PC端"></el-checkbox>
							<el-checkbox label="复选框 B"></el-checkbox>
							<el-checkbox label="复选框 C"></el-checkbox>
						</el-checkbox-group>-->
						</div>
					</el-form>
				</div>
				<div class="chart" v-show="bool">
					<!--<div id="myChart" style="width: 100%; height: 100%;"></div>-->
					<div class="tedency-chart">
						<tedency-chart width="100%" height="100%"></tedency-chart>
					</div>

				</div>
			</div>

		</el-main>

	</el-container>
</template>

<script>
	import echarts from "echarts"
	import tedencyChart from '../../echarts/flux/tedency'

	import { format } from '@/assets/plugin/fomattertime'
//	import { formaterDate } from '@/assets/plugin/format'
	import { selectDate } from '@/assets/plugin/selectdate'
	export default {
		components: {
			tedencyChart
		},
		data() {
			return {
				pickerOptions1: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					}
				},
				options: [

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
				options1: [{
					value: 1,
					label: '今天'
				}, {
					value: 2,
					label: '昨天'
				}, {
					value: 3,
					label: '自然周'
				}, {
					value: 4,
					label: '自然月'
				}, {
					value: 5,
					label: '自定义'
				}],
				value: '',

				value6: '',
				value7: '',
				value9: '',
				startTime: '',
				endTime: '',
				checked: false,
				bool: true,
				booler: false,
				disable: true,
				arrData: [{
					name: '访客数',
					num: '666666',
					per: '20%'
				}, {
					name: '浏览量',
					num: '666666',
					per: '20%'
				}, {
					name: '跳失率',
					num: '70.22%',
					per: '20%'
				}, {
					name: '人均浏览量',
					num: '4.00',
					per: '20%'
				}, {
					name: '平均停留时长',
					num: '120S',
					per: '20%'
				}],
				checkList: [],
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}]
			}
		},
		methods: {
			changeBool: function() {
				this.bool = !this.bool
			},
			inputText(value) {
				let obj = {}
				obj = this.options.find(function(item) {
					return item.value === value
				})
			},
			changeDay(val) {
				/*var options1 = this.options1, value6 = this.value6, booler = this.booler,
					disable = this.disable, startTime = this.startTime, endTime = this.endTime;*/
//					selectDate();
				 selectDate(this.options1, this.value6, this.booler, this.disable, this.startTime, this.endTime, val)
				/*let objDate = {};
				objDate = this.options1.find(function(a) {
					return a.value === val
				})
				if(objDate.value == 1) {
					this.value6 = format(1)
					if(this.booler) {
						this.booler = !this.booler
					}
				}
				if(objDate.value == 2) {
					this.value6 = format(0)
					if(this.booler) {
						this.booler = !this.booler
					}
				}
				if(objDate.value == 3) {
					if(this.booler == "true") {
					} else {
						this.booler = true
					}
					this.disable = true
					this.startTime = formaterDate().getWeekStartDate();
					this.endTime = formaterDate().getWeekEndDate()

				}
				if(objDate.value == 4) {
					if(this.booler == "true") {
					} else {
						this.booler = true
					}
					this.disable = true
					this.startTime = formaterDate().getMonthStartDate()
					this.endTime = formaterDate().getMonthEndDate()

				}
				if(objDate.value == 5) {
					if(this.booler == "true") {

					} else {
						this.booler = true
					}
					this.disable = false
				}*/

			},
			toDay() {
				this.value6 = format()
			},
			changeBox(value) {
				console.log(value)
				console.log(value[value.length - 1])
			}
		},
		mounted() {
			this.toDay()
		}

	}
</script>

<style scoped="scoped">
	.el-container {
		border: 1px solid #ededef;
		border-radius: 8px;
		overflow: hidden;
		/*margin-bottom: 30px;*/
	}
	
	.el-main {
		color: #333;
		padding: 0 45px 30px 45px;
		background: #fff;
	}
	
	.el-header {
		background: #fff;
		height: 70px;
		padding: 18px 35px;
		border-bottom: 1px solid #ededef;
	}
	
	.el-select {
		width: 100px;
		margin-left: 5px;
	}
	
	.header-left {
		float: left;
	}
	
	.header-left p {
		float: left;
		font-size: 18px;
		font-weight: 600;
		border-left: 4px solid #4998fd;
		padding-left: 10px;
		margin-right: 28px;
	}
	
	.header-left .el-select {
		float: left;
	}
	
	.header-right {
		float: right;
	}
	
	.assume {
		font-size: 16px;
		font-weight: 600;
		color: #333;
		margin: 36px 0 26px 0;
	}
	
	.assume .tablist {
		float: right;
		font-size: 14px;
		font-weight: 400;
		cursor: pointer;
		color: #00BFFF;
	}
	/*.assume .tablist span {
		cursor: pointer;
	}*/
	
	.assume-data {
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		border-bottom: 1px solid #ededef;
		padding-bottom: 30px;
	}
	
	.assume-data p:nth-of-type(1) {
		font-size: 18px;
	}
	
	.assume-data p:nth-of-type(2) {
		font-size: 36px;
		margin: 10px 0;
	}
	
	.assume-data p:nth-of-type(3) {
		font-size: 12px;
		color: darkgrey;
	}
	
	.assume-data p:nth-of-type(3) span {
		font-size: 12px;
		color: red;
		margin-left: 5px;
	}
	
	.list {}
	
	.el-checkbox-group {
		display: inline-block;
		margin-left: 15px;
	}
	
	.terminalContent {
		display: inline-block;
		position: relative;
		margin-bottom: 10px;
		/*border: 1px solid red;*/
	}
	
	.terminalText {
		/*position: absolute;*/
		/*top: 0px;*/
	}
	
	.normText {
		margin-top: 10px;
	}
	
	.norm {
		font-size: 14px;
		color: #888;
		margin: 15px 0;
	}
	
	.terminal {
		font-size: 14px;
		color: #888;
	}
	
	.chart {
		position: relative;
		height: 360px;
		margin-top: 35px;
		/*border: 1px solid red;*/
	}
	
	.tedency-chart {
		height: 360px;
		width: 95%;
		top: -92px;
		left: 35px;
		position: absolute;
		/*border: 1px solid black;*/
	}
</style>