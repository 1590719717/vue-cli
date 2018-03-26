<template>
	<div>
		<div class="g-center login-page" @keyup.enter="login">
			<el-form class="login-form">
				<h1 class="main-title"><a>Login</a></h1>
				<p class="des">Frontend access control framework based Vue</p>
				<el-form-item>
					<el-input :autofocus="true" placeholder="请输入账号" v-model="username">
						<template slot="prepend"><i class="el-icon-mobile-phone"></i></template>
					</el-input>
				</el-form-item>
				<el-form-item>
					<el-input placeholder="请输入密码" type="password" v-model="password">
						<template slot="prepend"><i class="el-icon-info"></i></template>
					</el-input>
				</el-form-item>
				<el-form-item>
					<el-button style="width:100%" @click.native="login" type="primary" :loading="isBtnLoading"><a href="#/">{{btnText}}</a></el-button>
				</el-form-item>
				
			</el-form>
		</div>
		<a href = "#/xhome" @click="output">登录</a>
	</div>
</template>

<script>
	import axios from 'axios'
	import CryptoJs from 'crypto-js'
	import * as util from '../assets/util.js'
	
	const requestLogin = params => {
		let words = CryptoJs.enc.Utf8.parse(params.password)
		let base64 = CryptoJs.enc.Base64.stringify(words)
		params.words = base64;
		
		return axios.get(`http://rap2api.taobao.org/app/mock/224/GET/web`, {params})
	}
	
	export default {
		data() {
			return {
				username: '',
				password: '',
				isBtnLoading: false
			}
		},
		computed: {
			btnText() {
				if(this.isBtnLoading){
					return "登录中...";
				}else{
					return "登录";
				}
			}
		},
		methods: {
			login() {
				var vm = this;
				if(!vm.username){
					vm.$message.error("请填写用户名！");
					return;
				}
				if(!vm.password){
					vm.$message.error("请填写密码！");
					return;
				}
				
				let loginParams = {name: vm.username, password: vm.password};
				vm.isBtnLoading = true;
				
				requestLogin(loginParams).then(res=>{
					vm.isBtnLoading = false;
					if(res.data.token){
						util.session('token', res.data);
						vm.$emit('login', vm.$router.currentRoute.query.from);
					}else {
						return Promise.reject({
							message: "登录异常"
						});
					}
				}).catch(util.catchError)
				
			},
			output(){
				console.log(1)
			}
		},
		created() {
			sessionStorage.clear();
		}
	};
	
	
	
	
</script>

<style scoped="scoped">
	#app {
		display: table;
		width: 100%;
	}
	
	.main-title {
		text-align: center;
	}
	
	.des {
		text-align: center;
		color: #999;
		margin-bottom: 2em;
	}
	
	.login-form {
		width: 400px;
		margin: 13% auto 0;
	}
	
	.login-page {
		background: #fff;
	}
</style>