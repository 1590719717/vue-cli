import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import ElementUi from 'element-ui'

//import HelloWorld from '@/components/HelloWorld'
//登录
//import login from '../components/login.vue'

//import notfound from '../components/404.vue'
//首页组件
import xnav from '../components/navmenu/xnav.vue'
import xhome from '../components/home/xhome.vue'
import xflux from '../components/analysis/xflux.vue'
import xtrade from '../components/analysis/xtrade.vue'
import xgoods from '../components/analysis/xgoods.vue'

//流量子组件
import xgeneral from '../components/analysis/flux/xgeneral.vue'
import xsource from '../components/analysis/flux/xsource.vue'
import xhomepage from '../components/analysis/flux/xhomepage.vue'
//交易子组件
import xtradegeneral from '../components/analysis/trade/xtradegeneral.vue'
import xcharacter from '../components/analysis/trade/xcharacter.vue'
import xdetail from '../components/analysis/trade/xdetail.vue'
//商品子组件
import xgoodsgeneral from '../components/analysis/goods/xgoodsgeneral.vue'
import xeffect from '../components/analysis/goods/xeffect.vue'

Vue.use(Router)
Vue.use(Vuex)
Vue.use(ElementUi)

export default new Router({
	routes: [{
		path: '/',
		component: xnav,
		children: [{
			path: 'xhome',
			name: '首页',
			component: xhome
		}, {
			path: 'xflux',
			name: '流量分析',
			component: xflux,
			children: [{
				path: 'xgeneral',
				component: xgeneral
			}, {
				path: 'xsource',
				component: xsource
			}, {
				path: 'xhomepage',
				component: xhomepage
			}]
		}, {
			path: 'xtrade',
			name: '交易分析',
			component: xtrade,
			children: [{
				path: 'xtradegeneral',
				component: xtradegeneral
			}, {
				path: 'xcharacter',
				component: xcharacter
			}, {
				path: 'xdetail',
				component: xdetail
			}]
		}, {
			path: 'xgoods',
			name: '商品分析',
			component: xgoods,
			children: [{
				path: 'xgoodsgeneral',
				component: xgoodsgeneral
			}, {
				path: 'xeffect',
				component: xeffect
			}]
		}, {
			path: '/',
			redirect: '/xhome'
		}]
	}]
})

