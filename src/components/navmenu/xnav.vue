 <template>
	<div style="width: 100%; background: #f4f4f4;">
		<el-row class="container">
			<div style="width: 1236px; margin: 0 auto; ">
				<el-col :span="24" class="header">
					<el-col :span="4" class="logo">
						<img src="../../assets/images/logo.jpg" />
					</el-col>
					<el-col :span="16">

						<a class="a-item" v-for="a in arr" :id="a.id+ '=='+id" @click="changeBar(a.id)" :class="{'active' :id ==a.id}" >{{a.title}}</a>
						<!--<a href="#/index/xhome" class = "a-item active">首页</a>
					<a href="#/index/xanalysis" class = "a-item">流量分析</a>
					<a href="#/index/xhome" class = "a-item">数据分析</a>
					<a href="#/index/xhome" class = "a-item">商品分析</a>-->

					</el-col>
					<el-col :span="4" class="userinfo">
						<el-dropdown trigger="hover">
							<span class="el-dropdown-link userinfo-inner">{{user}}
								<span class="userimg"><i class="iconfont icon-yonghutouxiang"></i></span>
								<span><i class="el-icon-arrow-down"></i></span>
							</span>
							
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>我的消息</el-dropdown-item>
								<el-dropdown-item>设置</el-dropdown-item>
								<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</el-col>

				</el-col>

			</div>
		</el-row>
		<div style="width: 1236px; margin: 0 auto; ">
			<el-row>
				<el-col :span="24" class="main">
					<router-view></router-view>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				user: "admin",
				arr: [{
					id: 1,
					sign: "xhome",
					second: '',
					title: "首页"
				}, {
					id: 2,
					sign: "xliuliang",
					second: '/xgeneral',
					title: "流量分析"
				}, {
					id: 3,
					sign: "xjiaoyi",
					second: '/xjiaoyigeneral',
					title: "交易分析"
				}, {
					id: 4,
					sign: "xshangpin",
					second: '/xgoodsgeneral',
					title: "商品分析"
				}],
				id: 1
			};
		},
		methods: {
			changeBar: function(id) {
				this.id = id;
				switch(id){
					case 1: this.$router.push('/xhome')
					break;
					case 2: this.$router.push('/xflux/xgeneral')
					break;
					case 3: this.$router.push('/xtrade/xtradegeneral')
					break;
					case 4: this.$router.push('/xgoods/xgoodsgeneral')
					break;
					
				}
				sessionStorage.setItem('id', this.id);
				console.log(id)
			},
		
		},
		mounted(){
			if(!sessionStorage.getItem('id')){
				sessionStorage.setItem('id', 1)
			}
			this.id = sessionStorage.getItem('id')
			console.log(this.id)
		}

	}
</script>

<style scoped="scoped">
	.container {
		background: #5377df;
		width: 100%;
	}
	
	.container .header {
		width: 1236px;
		height: 60px;
	}
	
	.header .logo img {
		display: block;
		margin: 10px 27px;
	}
	
	.header .a-item {
		text-decoration: none;
		color: #b5c4ef;
		font-size: 22px;
		font-weight: 600;
		/*line-height: 60px;*/
		display: inline-block;
		padding: 14px 10px;
		margin: 0 25px;
		cursor: pointer;
	}
	
	.header .active {
		color: #fff;
		border-bottom: 3px solid #ff9000;
	}
	
	.userinfo {
		text-align: right;
		padding-right: 35px;
		float: right;
		line-height: 60px;
	}
	.userinfo span i {
		color: #fff;
	}
	.userinfo-inner {
		cursor: pointer;
		color: #fff;
	}
	
	.userinfo-inner img {
		width: 40px;
		height: 40px;
		border-radius: 20px;
		margin: 10px 0px 10px 10px;
		float: right;
	}
	.userinfo .userimg{
		border-left: 1px solid #a2b1e8;
		padding-left: 12px;
		margin-left: 5px;
	}
	.main {
		margin-top: 30px;
		/*width: 1236px;*/
	}
</style>