// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import App from './App'
import footGuide from './components/footGuide'
import tools from './components/tools'
import question from './components/question'
import showCal from './components/showCal'
import showCharts from './components/showCharts'
import count from './components/count'


import { Bar, Line, Doughnut, Pie} from 'vue-chartjs'

	Vue.component('rentChart', {
	  extends: Bar,
	  mounted () {
	    this.renderChart({
	      labels: ['1000以下', '1000~1500', '1500~2000', '2000~2500', '2500~3000', '3500~4000', '4000~4500','4500~5000','5000以上'],
	      datasets: [
	        {
	          label: '房租费用',
	          backgroundColor: '#f87979',
	          data: [2, 6, 11, 13, 6, 4, 6,2,1,1]
	        }
	      ]
	    }, {responsive: true, maintainAspectRatio: false})
	  }
	})
	Vue.component('sizeChart', {
	  extends: Bar,
	  mounted () {
	    this.renderChart({
	      labels: ['15平以下', '15~25平', '25~35平', '35~50平', '50~70平', '70~90平', '90~110平','110平以上'],
	      datasets: [
	        {
	          label: '住处大小',
	          backgroundColor: '#f87979',
	          data: [1, 13, 8, 2, 4, 1, 2,1]	           
	        }
	      ]
	    }, {responsive: true, maintainAspectRatio: false})
	  }
	})
	Vue.component('typeChart', {
	  extends: Pie,
	  mounted () {
	  	  this.renderChart({
	      labels: ['合租单间', '整租单身公寓', '整租二室', '整租三室', '整租四室', '整租其他'],
	      datasets: [
	        {
	          label: '房屋类型',
	          backgroundColor: '#f87979',
	          data: [17, 8,4, 2, 1, 0],
	          backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ]
	        }
	      ]
	    }, {responsive: true, maintainAspectRatio: false})
	  }
	})
	Vue.component('percentChart', {
	  extends: Doughnut,
	  mounted () {
	    this.renderChart({
	      labels: ['五分之一左右', '三分之一左右', '二分之一左右', '超过二分之一'],
	      datasets: [
	        {
	          label: '租金占月总收入比例',
	          backgroundColor: '#f87979',
	          data: [3, 19, 8, 2],
	          backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ]
	        }
	      ]
	    }, {responsive: true, maintainAspectRatio: false})
	  }
	})
	Vue.component('timeChart', {
	  extends: Pie,
	  mounted () {
	    this.renderChart({
	      labels: ['步行20分钟内', '骑行30分钟内', '地铁30分钟内', '地铁30分钟以上'],
	      datasets: [
	        {
	          label: '住处距离工作地方路程',
	          backgroundColor: '#f87979',
	          data: [2, 6, 11,13],
	          backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ]
	        }
	      ]
	    }, {responsive: true, maintainAspectRatio: false})
	  }
	})


Vue.use(VueRouter)

Vue.prototype.$ajax = axios
Vue.config.productionTip = false
//设置路由
const router = new VueRouter({
	mode:'history',
	routes:[
	{path:"/",component:showCharts,meta:{title: '信息呈现'}},
	{path:"/tools",component:tools,meta:{title: '房贷计算器'}},
	{path:"/question",component:question,meta:{title: '问卷填写'}},
	{name:"showCal",path:"/showCal",component:showCal,meta:{title: '计算结果'}},
	{name:"showCharts",path:"/showCharts",component:showCharts,meta:{title: '信息呈现'}},
	{path:"/count",component:count},
	]
})

/* eslint-disable no-new */
new Vue({
  router,
	template:`
	<div id="app">
	<router-view></router-view>
  </div>
	`
}).$mount('#app')
