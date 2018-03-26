<template>
	<el-container>
		<el-header>
			<div class="goods-head-left">
				<p>交易概况</p>
				<p>
					在架商品数：
					<span>666666</span>
				</p>
			</div>
			<div class="jy-assume-top2 goods-head-right">
				<el-select v-model="value2" placeholder="今天" size="mini">
					<el-option label="今天" value="1"></el-option>
					<el-option label="昨天" value="2"></el-option>
					<el-option label="自然周" value="3"></el-option>
					<el-option label="自然月" value="4"></el-option>
					<el-option label="自定义" value="5"></el-option>
				</el-select>
				<el-date-picker size="mini" style="width: 200px;" unlink-panels v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
				</el-date-picker>
			</div>
		</el-header>
		<el-main>
			<div class="jy-assume">
				<div class="jy-assume-top">
					<div class="jy-assume-top1">
						商品总览
						<el-select v-model="value" placeholder="全部" size="mini">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
					<div class="select-spu">
						<p :class="{'active' :id==a.id}" v-for="a in arrSpu" @click="changeTab(a.id)">{{a.name}}</p>
						<!--<p>SKU</p>-->
					</div>
				</div>
				<div class="jy-assume-mid">
					<div class="jy-assume-mid1">
						<div class="first-div">
							<i class="iconfont icon-guanzhu"></i>
							<p>关注浏览</p>
						</div>
						<div>
							<p>被访问商品数</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>
						<div>
							<p>商品曝光率</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>
						<div>
							<p>商品访客数</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>
						<div>
							<p>商品浏览量</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>
					</div>
					<div class="jy-assume-mid1 jy-assume-mid2">
						<div class="first-div">
							<i class="iconfont icon-jiagouwuche"></i>
							<p>加购效果</p>
						</div>
						<div>
							<p>加购商品数</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span> <i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>
						<div>
							<p>加购商品率</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>
						<div>
							<p>加购商品件数</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>
						<div>
							<p>加购客户数</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>
					</div>
					<div class="jy-assume-mid1 ">
						<div class="first-div">
							<i class="iconfont icon-zhuanhuashuai"></i>
							<p>转化效果</p>
						</div>
						<div>
							<p>动销商品数</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>
						<div>
							<p>商品动销率</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>
						<div>
							<p>支付商品件数</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>
						<div>
							<p>支付金额</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>
						<div>
							<p>支付转化率</p>
							<p>888,888</p>
							<p>较前一天 <span>50%</span><i class="iconfont icon-shuzhixiajiang"></i></p>
						</div>
					</div>

				</div>
			</div>
			<div class="jy-tedency">
				<div class="jy-assume-top">
					<div class="jy-assume-top1">
						商品趋势
					</div>
					<div class="select-spu">
						<p :class="{'active' :num==item.num}" v-for="item in arrSpu" @click="changeNum(item.num)">{{item.name}}</p>
						<!--<p>SKU</p>-->
					</div>
					<div class="jy-assume-top2">
						<p class="tabtarget p3" @click="changeShoww"><i class="iconfont icon-qiehuan"></i>切换指标</p>
						<p class="xiazai p3"><i class="iconfont icon-xiazai"></i>下载</p>

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
							<el-table :data="tableData" border style="width: 100%; text-align: center; color: black;">
								<el-table-column prop="date" label="日期" width="" style="color: black;">
								</el-table-column>
								<el-table-column prop="name" label="姓名" width="">
								</el-table-column>
								<el-table-column prop="address" label="地址">
								</el-table-column>

							</el-table>
							<div class="block">
								<el-pagination style="text-align: right;" @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="400">
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
				options: [{
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
				}],
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
				}],
				checkList: [],
				value: '',
				value2: '',
				value6: '',
				bool: true,
				bo: true,
				showw: false,
				cancel: true,
				val: '123',
				id: 1,
				num: 1,
				arrSpu: [{
					id: 1,
					num: 1,
					name: 'SPU',
				}, {
					id: 2,
					num: 2,
					name: 'SKU'
				}]

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
			changeTab: function(id) {
				this.id = id;
			},
			changeNum: function(num) {
				this.num = num;
			},
			greet: function(val) {
				this.val = val
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			}
		},
		mounted() {}
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
	
	.jy-assume {
		/*padding: 10px;*/
	}
	
	.jy-assume-top {
		height: 60px;
		padding: 20px 8px;
		box-sizing: border-box;
		/*border: 1px solid gainsboro;*/
		border-bottom: 1px solid #ededef;
		position: relative;
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
		width: 80px;
		height: 20px;
		margin-left: 15px;
	}
	
	.jy-assume-mid1 {
		overflow: hidden;
		border-bottom: 1px solid #ededef;
	}
	
	.jy-assume-mid1 div {
		float: left;
		margin: 0 30px;
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
		color: #333;
		font-weight: 600;
	}
	/*.jy-assume-mid2 {
		clear: both;
		overflow: hidden;
	}*/
	
	.jy-tedency {
		clear: both;
		/*margin-top: 43px;*/
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
	
	.goods-head-left {
		float: left;
	}
	
	.goods-head-right {
		float: right;
	}
	
	.select-spu {
		width: 142px;
		-webkit-box-sizing: border-box;
		position: absolute;
		top: 15px;
		left: 45%;
		z-index: 10;
	}
	
	.select-spu p {
		float: left;
		width: 70px;
		height: 45px;
		text-align: center;
		-webkit-box-sizing: border-box;
		border: 1px solid #ededef;
		line-height: 45px;
		background: #fbfbfb;
		cursor: pointer;
		/*border-bottom: 0;*/
	}
	
	.select-spu p:nth-of-type(1) {
		border-right: 0;
	}
	
	.select-spu .active {
		/*box-sizing: border-box;*/
		border-top: 3px solid #21a2ff;
		border-bottom-color: #fff;
		background: #fff;
	}
</style>