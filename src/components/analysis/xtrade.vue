<template>
	<el-container>
		<el-aside width="200px">
			<div class = "flow-rate">
				<i class= "iconfont icon-jiaoyi"></i>
				<p>交易分析</p>
			</div>
			<el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
				
				<el-menu-item index="1">
					
					<span slot="title"><router-link to = "/xtrade/xtradegeneral">交易概况</router-link></span>
				</el-menu-item>
				<el-menu-item index="2">
					
					<span slot="title"><router-link to = "/xtrade/xcharacter">交易特征</router-link></span>
				</el-menu-item>
				<el-menu-item index="3">
					
					<span slot="title"><router-link to = "/xtrade/xdetail">交易明细</router-link></span>
				</el-menu-item>
			</el-menu>
		</el-aside>
		<!--<el-container>
			<el-header>Header</el-header>
			<el-main>Main</el-main>
			
		</el-container>-->
		<router-view></router-view>
	</el-container>
	<!--<div>hello world</div>-->
</template>

<script>
	export default {
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style scoped="scoped">
	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}
	
	.el-aside {
		background-color: #fff;
		color: #333;
		text-align: center;
		margin: 0 10px 0 0;
		border-radius: 8px;
	}
	
	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}
	
	.el-container {
		/*margin-bottom: 10px;*/
		padding-bottom:50px ;
		/*border: 1px solid red;*/
		overflow: hidden;
	}
	
	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}
	
	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
	.flow-rate{
		height: 128px;
		box-sizing: border-box;
		padding: 40px 0px;
		border-bottom: 1px solid #ededef;
	}
	.flow-rate i{
		margin: 20px 0;
		font-size: 28px;
		color: #4a8cec;
	}
	.flow-rate p{
		font-size: 18px;
		font-weight: 600;
		margin-top: 14px;
	}
</style>