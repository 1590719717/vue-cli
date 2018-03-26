<template>
	<el-container>
		<el-aside width="200px">
			<div class = "flow-rate">
				<i class= "iconfont icon-liuliangtongji"></i>
				<p>流量分析</p>
			</div>
			<el-menu default-active="1" class="el-menu-vertical-demo" >
				
				<el-menu-item index="1">
					<span slot="title" ><a href = "#/xflux/xgeneral">流量概况</a></span>
				</el-menu-item>
				<el-menu-item index="2">
					<span slot="title"><a href= "#/xflux/xsource">来源分析</a></span>
				</el-menu-item>
				<el-menu-item index="3">
					<span slot="title"><a href = "#/xflux/xhomepage">首页分析</a></span>
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
	.el-container{
		margin-bottom: 30px;
	}
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
		margin:0 10px;
		padding: 0 18px;
		border-radius: 8px;
		
	}
	
	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}
	
	body>.el-container {
		margin-bottom: 40px;
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