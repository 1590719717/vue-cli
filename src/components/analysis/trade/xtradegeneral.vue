<template>
	<el-container>
		<el-header>
			<p>交易概况</p>
			<p>
				<i class="el-icon-warning"></i> 未支付订单
				<span>666666</span>, 未支付客户数
				<span>666666</span>, 未支付金额
				<span>666666</span>
			</p>
			<p @click="refresh"><i class="iconfont icon-shuaxin"></i>刷新</p>
		</el-header>
		<el-main>
			<div class="jy-assume">
				<div class="jy-assume-top">
					<div class="jy-assume-top1">
						交易总览
						<el-select v-model="value" placeholder="全部" size="mini">
							<el-option label="移动端" value="1"></el-option>
							<el-option label="PC端" value="2"></el-option>
							<el-option label="APP-Android" value="3"></el-option>
							<el-option label="APP-iOS" value="4"></el-option>
							<el-option label="WAP" value="5"></el-option>
						</el-select>
					</div>
					<div class="jy-assume-top2">
						<el-select v-model="value2" placeholder="今天" size="mini">
							<el-option label="今天" value="1"></el-option>
							<el-option label="昨天" value="2"></el-option>
							<el-option label="自然周" value="3"></el-option>
							<el-option label="自然月" value="4"></el-option>
							<el-option label="自定义" value="5"></el-option>
						</el-select>
						<el-date-picker size="mini" style="width: 200px;" v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
						</el-date-picker>
					</div>
				</div>
				<div class="jy-assume-mid">
					<div class="jy-assume-mid1">
						<div class="first-div">
							<i class="iconfont icon-xiaoshou"></i>
							<p>销售相关</p>
						</div>
						<div>
							<p>成交金额</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>
						<div>
							<p>支付金额</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>
						<div>
							<p>下单金额</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>
						<div>
							<p>客单价</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>
					</div>
					<div class="jy-assume-mid1 jy-assume-mid2">
						<div class="first-div">
							<i class="iconfont icon-dingdan-chongzhidingdan"></i>
							<p>订单相关</p>
						</div>
						<div>
							<p>成交订单数</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span> <i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>
						<div>
							<p>支付订单数</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>
						<div>
							<p>下单订单数</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>
						<!--<div>
							<p>成交金额</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>-->
					</div>
					<div class="jy-assume-mid1 ">
						<div class="first-div">
							<i class="iconfont icon-liulan"></i>
							<p>浏览相关</p>
						</div>
						<div>
							<p>访客数</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>
						<div>
							<p>浏览量</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>
						<div>
							<p>平均访问时长</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>
						<!--<div>
							<p>成交金额</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>-->
					</div>

				</div>
			</div>
			<div class="jy-tedency">
				<div class="jy-assume-top">
					<div class="jy-assume-top1">
						交易趋势
					</div>
					<div class="jy-assume-top2">
						<p class="tabtarget p3" @click="changeShoww"><i class="iconfont icon-qiehuan"></i>切换指标</p>
						<p class="xiazai p3"><i class="iconfont icon-xiazai"></i>下载</p>
						<el-select v-model="value3" placeholder="今天" size="mini">
							<el-option label="今天" value="1"></el-option>
							<el-option label="昨天" value="2"></el-option>
							<el-option label="自然周" value="3"></el-option>
							<el-option label="自然月" value="4"></el-option>
							<el-option label="自定义" value="5"></el-option>
						</el-select>
						<el-date-picker size="mini" style="width: 200px;" v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
						</el-date-picker>
						<!--<span class="select-ted" @click="changeBool">趋势</span>丨<span class="select-ted" @click="changeBool">列表</span>-->
					</div>
				</div>
				<div class="jy-tedency-mid">
					<div class="jy-tedency-mid1">
						<p>已选：</p>
						<p>
							<span class="select-ted" @click="changeBool">趋势</span>丨<span class="select-ted" @click="changeBool">列表</span>
						</p>

						<!--<p >切换指标</p>-->
						<div class="ted-chart" style="height: 360px; margin-top: 30px;" v-show="bool">
							<!--<div id="tedChart" style="width: 100%; height: 100%;"></div>-->
							<target-chart width="100%" height="100%"></target-chart>
						</div>
						<div v-show="!bool" style="margin-top: 50px;">
							<el-table :data="tableData" v-loading="listLoading" border style="width: 100%; text-align: center; ">
								<el-table-column prop="date" label="日期" width="">
								</el-table-column>
								<el-table-column prop="name" label="姓名" width="">
								</el-table-column>
								<el-table-column prop="address" label="地址">
								</el-table-column>

							</el-table>
							<div class="block">
								<el-pagination style="text-align: right;" @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[3, 6, 9]" :page-size="3" layout="total, sizes, prev, pager, next, jumper" :total="total">
								</el-pagination>
							</div>
						</div>
					</div>

				</div>
			</div>
			<div class="jy-tedency">
				<div class="jy-assume-top">
					<div class="jy-assume-top1">
						流量来源交易概况
					</div>
					<div class="jy-assume-top2">
						<p class="tabtarget p3"><i class="iconfont icon-liuliangtongji"></i> 流量来源</p>
						<p class="tabtarget p3" @click="changeShoww"><i class="iconfont icon-qiehuan"></i>切换指标</p>
						<p class="xiazai p3"><i class="iconfont icon-xiazai"></i>下载</p>
						<el-select v-model="value4" placeholder="今天" size="mini">
							<el-option label="今天" value="1"></el-option>
							<el-option label="昨天" value="2"></el-option>
							<el-option label="自然周" value="3"></el-option>
							<el-option label="自然月" value="4"></el-option>
							<el-option label="自定义" value="5"></el-option>
						</el-select>
						<el-date-picker size="mini" style="width: 200px;" v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
						</el-date-picker>
						<!--<span class="select-ted" @click="changeBool">趋势</span>丨<span class="select-ted" @click="changeBool">列表</span>-->
					</div>
				</div>
				<div class="jy-tedency-mid">
					<div class="jy-tedency-mid1">
						<p>已选：</p>
						<p>
							<span class="select-ted" @click="changeBooler">趋势</span>丨<span class="select-ted" @click="changeBooler">列表</span>
						</p>

						<!--<p >切换指标</p>-->
						<div class="ted-chart" style="height: 360px; margin-top: 30px;" v-show="booler">
							<!--<div id="tedChart" style="width: 100%; height: 100%;"></div>-->
							<resource-chart width="100%" height="100%"></resource-chart>
						</div>
						<div v-show="!booler" style="margin-top: 50px;">
							<el-table :data="tableData" border style="width: 100%; text-align: center; color: black;">
								<el-table-column prop="date" label="日期" width="">
								</el-table-column>
								<el-table-column prop="name" label="姓名" width="">
								</el-table-column>
								<el-table-column prop="address" label="地址">
								</el-table-column>
							</el-table>
							<!--<el-pagination background layout="prev, pager, next" :total="1000" style="margin-top: 5px; text-align: right;">
							</el-pagination>-->
							<div class="block">
								<el-pagination style="text-align: right;" @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[3, 6, 9, 12]" :page-size="3" layout="total, sizes, prev, pager, next, jumper" :total="400">
								</el-pagination>
							</div>
						</div>
					</div>

				</div>
			</div>
			<!--<drag>-->
			<div class="tabNorm" v-show="showw" v-drag="greet" id="drag">
				<div class="norm-header">
					<p>切换指标</p>
					<p @click="changeShoww">
						<i class="el-icon-close"></i>
					</p>
				</div>
				<div class="norm-main">
					<div class="norm-main-top">
						<p class="top-title">选择终端</p>
						<p>
							<el-checkbox-group v-model="checkList">
								<el-checkbox label="所有端"></el-checkbox>
								<el-checkbox label="PC端"></el-checkbox>
								<el-checkbox label="移动端"></el-checkbox>
								<el-checkbox label="APP-Andriod"></el-checkbox>
								<el-checkbox label="APP-IOS"></el-checkbox>
								<el-checkbox label="WAP"></el-checkbox>
								<el-checkbox label="微商城"></el-checkbox>
								<el-checkbox label="触屏机"></el-checkbox>
							</el-checkbox-group>
						</p>
					</div>
					<div class="norm-main-mid">
						<p class="top-title " style="margin-top: 10px;">选择指标</p>
						<div class="about">
							<p>销售相关</p>
							<p>
								<el-checkbox-group v-model="checkList">
									<el-checkbox label="所有端"></el-checkbox>
									<el-checkbox label="PC端"></el-checkbox>
									<el-checkbox label="移动端"></el-checkbox>
									<el-checkbox label="APP-Andriod"></el-checkbox>
									<el-checkbox label="APP-IOS"></el-checkbox>
									<el-checkbox label="WAP"></el-checkbox>
									<el-checkbox label="微商城"></el-checkbox>
									<el-checkbox label="触屏机"></el-checkbox>
								</el-checkbox-group>
							</p>
						</div>
						<div class="about">
							<p>下单相关</p>
							<p>
								<el-checkbox-group v-model="checkList">
									<el-checkbox label="所有端"></el-checkbox>
									<el-checkbox label="PC端"></el-checkbox>
									<el-checkbox label="移动端"></el-checkbox>
									<el-checkbox label="APP-Andriod"></el-checkbox>
									<el-checkbox label="APP-IOS"></el-checkbox>
									<el-checkbox label="WAP"></el-checkbox>
									<el-checkbox label="微商城"></el-checkbox>
									<el-checkbox label="触屏机"></el-checkbox>
								</el-checkbox-group>
							</p>
						</div>
						<div class="about">
							<p>转化相关</p>
							<p>
								<el-checkbox-group v-model="checkList">
									<el-checkbox label="所有端"></el-checkbox>
									<el-checkbox label="PC端"></el-checkbox>
									<el-checkbox label="移动端"></el-checkbox>
									<el-checkbox label="APP-Andriod"></el-checkbox>
									<el-checkbox label="APP-IOS"></el-checkbox>
									<el-checkbox label="WAP"></el-checkbox>
									<el-checkbox label="微商城"></el-checkbox>
									<el-checkbox label="触屏机"></el-checkbox>
								</el-checkbox-group>
							</p>
							<p>

								已选<span>1</span>项，终端和指标最多可选择<span>4</span>项，=终端数*指标数
							</p>
						</div>
					</div>

				</div>
				<div class="norm-foot">
					<el-button size="small">确定</el-button>
					<el-button size="small" @click="changeShoww">取消</el-button>
				</div>
			</div>
			<!--</drag>-->
		</el-main>

	</el-container>
</template>

<script>
	import echarts from 'echarts'
	import Vue from 'vue'
	import { trade } from '../../../api/api'
	import targetChart from '../../echarts/trade/target'
	import resourceChart from '../../echarts/trade/resource'
	//	import draggable from 'vuedraggable'
	
	export default {
		components: {
			targetChart,
			resourceChart
		},
		data() {
			return {
				tableData: [],
				checkList: [],
				value: '',
				value2: '',
				value3: '',
				value4: '',
				value6: '',
				bool: true,
				bo: true,
				booler: true,
				showw: false,
				cancel: true,
				valu: '123',
				total: 0,
				currentPage: 1,
				pageSize: 3,
				listLoading: false
			}
		},
		/*components: {
			drag
		},*/
		methods: {
			changeBool: function() {
				this.bool = !this.bool
			},
			changeBo: function() {
				this.bo = !this.bo
			},

			changeShoww: function() {
				this.showw = !this.showw
				console.log(this.showw)
			},
			changeBooler: function() {
				this.booler = !this.booler
			},
			greet: function(valu) {
				this.valu = valu
			},
			handleSizeChange(val) {
				this.pageSize = val
				this.getTrade();
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				this.currentPage = val
				this.getTrade();
				console.log(`当前页: ${val}`);
			},
			refresh() {
				location.reload();
			},
			getTrade() {
				this.tableData = trade;
				this.tableData = this.tableData.slice((this.currentPage-1) * this.pageSize,this.currentPage * this.pageSize)
				this.total = trade.length;
				this.listLoading = true
				let that = this
				setTimeout(function(){
					if(that.tableData) {
						that.listLoading = false
					}
				}, 1000)
				
			}
		},
		mounted() {
			console.log(trade)
			this.getTrade()
		}
	}
</script>

<style scoped="scoped">
	.el-container {
		background: #fff;
		border-radius: 8px;
		overflow: hidden;
		border: 1px solid #ededef;
	}
	
	.el-main {
		background-color: #fff;
		color: #333;
		padding: 0 35px;
		position: relative;
	}
	
	.el-header {
		background-color: #fff;
		font-size: 18px;
		font-weight: 600;
		color: #000;
		height: 80px;
		/*box-sizing: border-box;*/
		padding: 20px 35px;
		border-bottom: 1px solid #ededef;
	}
	
	.el-header p {
		display: inline-block;
	}
	
	.el-header p:nth-of-type(1) {
		font-size: 18px;
		font-weight: 600;
		border-left: 4px solid #4998fd;
		padding-left: 10px;
		margin-right: 16px;
	}
	
	.el-header p:nth-of-type(2) {
		font-size: 14px;
		font-weight: 400;
		color: #888;
	}
	
	.el-header p:nth-of-type(2) i {
		font-size: 17px;
		color: #ffba03;
	}
	
	.el-header p:nth-of-type(2) span {
		color: #fe0000;
		font-size: 12px;
	}
	
	.el-header p:nth-of-type(3) {
		float: right;
		font-size: 12px;
		color: #4799ff;
		cursor: pointer;
	}
	
	.el-header p:nth-of-type(3) i {
		font-size: 12px;
		margin-right: 5px;
	}
	
	.jy-assume {
		/*padding: 10px;*/
	}
	
	.jy-assume-top {
		height: 45px;
		padding: 8px;
		box-sizing: border-box;
		/*border: 1px solid gainsboro;*/
		border-bottom: 1px solid #ededef;
	}
	
	.jy-assume-top .jy-assume-top1 {
		float: left;
		font-size: 16px;
		font-weight: 600;
		padding-left: 10px;
	}
	
	.jy-assume-top .jy-assume-top2 {
		float: right;
		/*line-height: 10px;*/
	}
	
	.el-select {
		width: 100px;
		height: 20px;
		margin-left: 15px;
	}
	
	.jy-assume-mid1 {
		overflow: hidden;
		border-bottom: 1px solid #ededef;
	}
	
	.jy-assume-mid1 div {
		float: left;
		margin: 0 40px;
		padding: 30px 0;
		/*text-align: center;*/
	}
	
	.jy-assume-mid1 .first-div {
		background: #fbfbfb;
		width: 140px;
		margin-left: 0;
		text-align: center;
	}
	
	.jy-assume-mid1 .first-div i {
		font-size: 42px;
	}
	
	.jy-assume-mid1 .first-div p {
		margin-top: 13px;
	}
	
	.jy-assume-mid1 div p:nth-of-type(2) {
		margin: 10px 0;
		font-size: 25px;
		font-weight: 500;
		color: #333;
	}
	
	.jy-assume-mid1 div p:nth-of-type(3) {
		font-size: 12px;
		color: #888;
		/*color: black;*/
	}
	
	.jy-assume-mid1 div p:nth-of-type(3) i {
		color: #FF0000;
	}
	
	.jy-assume-mid1 div p span:nth-of-type(1) {
		/*margin-right: 15px;*/
	}
	/*.jy-assume-mid2 {
		clear: both;
		overflow: hidden;
	}*/
	
	.jy-tedency {
		clear: both;
		margin-top: 43px;
	}
	
	.p3 {
		display: inline-block;
		font-size: 13px;
		color: #4a98fd;
		cursor: pointer;
	}
	
	.select-ted {
		font-size: 12px;
		cursor: pointer;
	}
	
	.jy-tedency-mid1 {
		padding: 15px 20px;
	}
	
	.jy-tedency-mid1 p {
		font-size: 14px;
		color: black;
	}
	
	.jy-tedency-mid1 p:nth-of-type(1) {
		float: left;
	}
	
	.jy-tedency-mid1 p:nth-of-type(2) {
		float: right;
		/*color: deepskyblue;*/
		cursor: pointer;
	}
	
	.tabNorm {
		width: 550px;
		position: absolute;
		top: 600px;
		left: 25%;
		z-index: 9999999;
		border: 1px solid #ededef;
		background: #fff;
	}
	
	.norm-header {
		height: 45px;
		background: #f2f2f2;
		line-height: 45px;
		padding: 0 10px;
		border-bottom: 1px solid #ededef;
	}
	
	.norm-header p:nth-of-type(1) {
		float: left;
		font-size: 14px;
		font-weight: 600;
		color: black;
	}
	
	.norm-header p:nth-of-type(2) {
		float: right;
		font-size: 24px;
	}
	
	.norm-main {
		padding: 20px 15px;
	}
	
	.top-title {
		font-size: 14px;
		font-weight: 600;
		margin-bottom: 10px;
		color: black;
	}
	
	.about p:nth-of-type(1) {
		font-size: 14px;
		color: grey;
		font-weight: 600;
		margin: 10px 0;
	}
	
	.about p:nth-of-type(3) {
		margin: 15px 0;
	}
	
	.about p:nth-of-type(3) span {
		color: red;
		margin: 0 5px;
	}
	
	.norm-foot {
		text-align: center;
		margin-bottom: 15px;
	}
	
	.block {
		margin-top: 30px;
	}
</style>