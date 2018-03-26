// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './styles/reset.css'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './styles/swiper.min.css'


import VueAwesomeSwiper from 'vue-awesome-swiper'
//import 'swiper/dist/css/swiper.css'
//import './assets/elementindex'
Vue.use(ElementUi)
Vue.use(VueAwesomeSwiper)



Vue.directive("drag", {
		bind: function(el, binding) {
			let oDiv = el;
//			let self = this;
			oDiv.onmousedown = function(e) {
				let disX = e.clientX - oDiv.offsetLeft;
				let disY = e.clientY - oDiv.offsetTop;
				document.onmousemove = function(e) {
					let l = e.clientX - disX;
					let t = e.clientY - disY;
					oDiv.style.left = l + "px";
					oDiv.style.top = t + "px";
				};
				document.onmouseup = function() {
					document.onmousemove = null
				}
			}
		}
	})



Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
