<template>
	<div id="question">
		<div class="line">您的填写将为我们的租房分析提供数据基础，感谢您的填写~</div>
		<form v-on:submit="addData">
			<div class="line"id="question1">
				<p>1.请问您现在住处所在杭州哪个区域？</p>
				<label><input type="radio" v-model="area" value="xihu" >西湖</label>
				<label><input type="radio" v-model="area" value="binjiang">滨江</label>
				<label><input type="radio" v-model="area" value="jianggan" >江干</label>
				<label><input type="radio" v-model="area" value="yuhang" >余杭</label>
				<label><input type="radio" v-model="area" value="gongshu" >拱墅</label>
				<label><input type="radio" v-model="area" value="xiacheng" >下城</label>
				<label><input type="radio" v-model="area" value="xiaoshan" >萧山</label>
				<label><input type="radio" v-model="area" value="shangcheng" >上城</label>
				<label><input type="radio" v-model="area" value="xiasha" >下沙</label>			
			</div>
			<div class="line"id="question2">
				<p>2.请问您现在住处房租费用是？</p>
				<label><input type="radio" v-model="rent" value="800" >1000以下</label>
				<label><input type="radio" v-model="rent" value="1200">1000~1500</label>
				<label><input type="radio" v-model="rent" value="1700" >1500~2000</label>
				<label><input type="radio" v-model="rent" value="2200" >2000~2500</label>
				<label><input type="radio" v-model="rent" value="2700" >2500~3000</label>
				<label><input type="radio" v-model="rent" value="3200">3000~3500</label>
				<label><input type="radio" v-model="rent" value="3700" >3500~4000</label>
				<label><input type="radio" v-model="rent" value="4200" >4000~4500</label>
				<label><input type="radio" v-model="rent" value="4700" >4500~5000</label>
				<label><input type="radio" v-model="rent" value="5200" >5000以上</label>
			</div>
			<div class="line"id="question3">
				<p>3.请问您现在住处的大小大概为？</p>
				<label><input type="radio" v-model="size" value="13" >15平以下</label>
				<label><input type="radio" v-model="size" value="20">15~25平</label>
				<label><input type="radio" v-model="size" value="28" >25~35平</label>
				<label><input type="radio" v-model="size" value="40" >35~50平</label>
				<label><input type="radio" v-model="size" value="60" >50~70平</label>
				<label><input type="radio" v-model="size" value="80">70~90平</label>
				<label><input type="radio" v-model="size" value="100" >90~110平</label>
				<label><input type="radio" v-model="size" value="130" >110平以上</label>				
			</div>
			<div class="line"id="question4">
				<p>4.请问您现在住处的类型为？</p>
				<label><input type="radio" v-model="housetype" value="hzdj" >合租单间</label>
				<label><input type="radio" v-model="housetype" value="zzds">整租单身公寓</label>
				<label><input type="radio" v-model="housetype" value="zz21" >整租二室</label>
				<label><input type="radio" v-model="housetype" value="zz31" >整租三室</label>
				<label><input type="radio" v-model="housetype" value="zz32" >整租四室</label>
				<label><input type="radio" v-model="housetype" value="zz41" >整租其他</label>
				
			</div>
			<div class="line"id="question5">
				<p>5.请问您现在租金占月总收入的比例是？</p>
				<label><input type="radio" v-model="percent" value="20" >五分之一左右</label>
				<label><input type="radio" v-model="percent" value="33">三分之一左右</label>
				<label><input type="radio" v-model="percent" value="50" >二分之一左右</label>
				<label><input type="radio" v-model="percent" value="80" >超过二分之一</label>			
			</div>
			<div class="line"id="question6">
				<p>6.请问您现在住处距离工作地方路程为？</p>
				<label><input type="radio" v-model="worktime" value="walk20" >步行20分钟内</label>
				<label><input type="radio" v-model="worktime" value="bike30">骑行30分钟内</label>
				<label><input type="radio" v-model="worktime" value="train30" >地铁30分钟内</label>
				<label><input type="radio" v-model="worktime" value="train60" >地铁30分钟以上</label>			
			</div>
			<input type="submit" value="提交" />
		</form>
		<footGuide></footGuide>
	</div>
</template>

<script>
	import footGuide from './footGuide'
	import axios from "axios"; 
	export default {
		name: 'question',
		data() {
			return {
				area:"",
				rent:"",
				size:"",
				housetype:"",
				percent:"",
				worktime:""
			}
		},
		components: {
			footGuide
		},
		methods: {
			addData(e){
				e.preventDefault();
				if(this.area&&this.rent&&this.size&&this.housetype&&this.percent&&this.worktime){
				axios.post('http://localhost/insertData.php',this.area+'&'+this.rent+'&'+this.size+
				'&'+this.housetype+'&'+this.percent+'&'+this.worktime)
				.then(res=>{console.log(res.data);});
				this.$router.push('/showCharts')
				}
				else{e.preventDefault();
					alert("请勾选完善后再提交哦！")}
			}
		}
		}
</script>

<style lang="scss" scoped>
	@import '../style/common.scss';
	#question2,#question3,#question4,#question5,#question6{ 
		label {
			width:45%;
			display: inline-block; 
		}
	}
	#question{padding: 8px;text-align: left;}
	form {margin-bottom: 32px;}
	.line {
		line-height: 32px;
		width: 100%;
		float: left;
		border-bottom: 1px solid #EEEEEE;
		p:nth-child(1) {
			float: left;
			width: 100%;
		}
	}
	input[type="submit"] {
		background-color: #007AFF;
		width: 100%;
		line-height: 40px;
		border-radius: 5px;
		color: white;
		font-size: 20px;
		letter-spacing: 5px;
		margin-top: 12px;
	}
</style>