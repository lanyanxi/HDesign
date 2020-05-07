import Vue from 'vue'
import App from './App'
import Json from './Json' //测试用数据

Vue.config.productionTip = false

const msg = (title, icon = 'none', duration = 1500, mask = false) => {
	// 全局统一提示
	if (Boolean(title) === false) {
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}

const loading = (statu, title = '加载中') => {
	// Loading
	if (Boolean(statu) === false) {
		uni.hideLoading();
	} else {
		uni.showLoading({
			title
		});
	}
}

const json = type => {
	// 模拟异步请求数据
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(Json[type]);
		}, 500)
	})
}

Vue.prototype.$api = {
	msg,
	json,
	loading
}

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
