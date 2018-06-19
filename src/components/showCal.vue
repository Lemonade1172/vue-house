<template>
<div id="showCal">
	<div class="tabList">
		<i @click="back()" class="fa fa-2x fa-angle-left" style="float: left;margin-left: 5px;"></i>
		<ul class="change-tab">
			<li>计算结果</li>
		</ul>
	</div>
	<div class="title"style="margin-top: 32px;">还款数据摘要</div>
	<div class="line">
		<p>还款方式</p>
		<select v-model='paytype'   class='form-control line-right'>
			<option value='debj'>等额本金</option>
			<option value='debx'>等额本息</option>
		</select>
	</div>
	<div class="line">
		<p>贷款总额</p>
		<p>万</p>
		<div class="line-right">{{dktotal}}</div>
	</div>
	<div class="line">
		<p>利息总额</p>
		<p>万</p>
		<div class="line-right">{{totalLixi}}</div>
	</div>
	<div class="line">
		<p>累计还款总额</p>
		<p>万</p>
		<div class="line-right">{{totalPay}}</div>
	</div>
	<div class="line" v-if="(paytype=='debx')">
		<p>月均还款</p>
		<p>元</p>
		<div class="line-right">{{bxPlayPermonth}}</div>
	</div>
	<div class="line"v-if="(paytype=='debj')">
		<p>月最高还款</p>
		<p>元</p>
		<div class="line-right">{{bjPlayMostmonth}}</div>
	</div>
	<div class="line"v-if="(paytype=='debj')">
		<p>月递减还款数</p>
		<p>元</p>
		<div class="line-right">{{bjSubPay}}</div>
	</div>
	<div class="line">
		<p>还款月数</p>
		<p>月</p>
		<div class="line-right">{{months}}</div>
	</div>
</div>
</template>

<script>
	
	export default {
		name: 'showCal',
	data(){
		return {
			gjjtotal:this.$route.query.gjjtotal,
			gjjlilv:(this.$route.query.gjjlilv/1200),
			sdtotal:this.$route.query.sdtotal,
			sdlilv:(this.$route.query.sdlilv/1200),
			fjtotal:this.$route.query.fjtotal,
			caltype:this.$route.query.caltype,
			bili:this.$route.query.bili,
			months:this.$route.query.years*12,
			type:this.$route.query.type,
			monthlilv:(this.$route.query.lilv/1200),
			paytype:this.$route.query.paytype
			
		}
	},
	methods:{
		back(){
        window.history.go(-1);
	   },
	   bxPlaymonth(total,monthlilv){
		return ((total*10000*monthlilv*Math.pow((1+monthlilv),this.months))/(Math.pow((1+monthlilv),this.months)-1)).toFixed(0);  	
	   },
	   bjPlaymonth(total,monthlilv){
		return (total*10000/this.months+(total*10000*monthlilv)).toFixed(0);
	   },
	   bjSub(total,monthlilv){
	   	return ((total*10000/this.months)*monthlilv).toFixed(0);
	   },
	   bjLixi(total,monthlilv){
		return ((total*10000*(this.months+1)*monthlilv/2)/10000).toFixed(1);
	   }
	},
	computed:{
		bxPlayPermonth:function(){
			if(this.type=="zh"){	
				console.log("bxzh");
				return (parseFloat(this.bxPlaymonth(this.gjjtotal,this.gjjlilv))+parseFloat(this.bxPlaymonth(this.sdtotal,this.sdlilv)));				
			}
			else{
				if(this.caltype=="dk"){
				return this.bxPlaymonth(this.dktotal,this.monthlilv);
				}
				else if(this.caltype=="fj"){
				return this.bxPlaymonth(this.fjtotal*this.bili*0.1,this.monthlilv);
				}
			}
		},
		dktotal:function(){
			if(this.caltype=="dk"){
			return this.$route.query.dktotal;
			}
			else if(this.caltype=="fj"){
			return this.fjtotal*this.bili*0.1;
			}
		},
		bxtotalPay:function(){
			return ((this.bxPlayPermonth*this.months)/10000).toFixed(1);
		},
		bxtotalLixi:function(){
			return (this.bxtotalPay-this.dktotal).toFixed(1);
		},
		bjPlayMostmonth:function(){
			if(this.type=="zh"){
				console.log("bjzh");
				return (parseFloat(this.bjPlaymonth(this.gjjtotal,this.gjjlilv))+parseFloat(this.bjPlaymonth(this.sdtotal,this.sdlilv)));								
			}
			else{
				if(this.caltype=="dk"){
				return	this.bjPlaymonth(this.dktotal,this.monthlilv);
				}
				else if(this.caltype=="fj"){
				return this.bjPlaymonth(this.fjtotal*this.bili*0.1,this.monthlilv)
				}
			}
		},
		bjSubPay:function(){
			if(this.type=="zh"){
				console.log("bjzh");
				return (parseFloat(this.bjSub(this.gjjtotal,this.gjjlilv))+parseFloat(this.bjSub(this.sdtotal,this.sdlilv)));								
			}
			else{
				if(this.caltype=="dk"){
				return this.bjSub(this.dktotal,this.monthlilv);
				}
				else if(this.caltype=="fj"){
				return this.bjSub(this.fjtotal*this.bili*0.1,this.monthlilv);
				}
			}
		},
		bjtotalLixi:function(){
			if(this.type=="zh"){
				console.log("bjzh");
				return (parseFloat(this.bjLixi(this.gjjtotal,this.gjjlilv))+parseFloat(this.bjLixi(this.sdtotal,this.sdlilv)));								
			}
			else{
			if(this.caltype=="dk"){
			return this.bjLixi(this.dktotal,this.monthlilv);
			}
			else if(this.caltype=="fj"){
			return this.bjLixi(this.fjtotal*this.bili*0.1,this.monthlilv);
			}}
		},			
		bjtotalPay:function(){
			return parseFloat(this.bjtotalLixi)+parseFloat(this.dktotal);
		},
		totalLixi:function(){
			if(this.paytype=="debj")
			return this.bjtotalLixi;
			if(this.paytype=="debx")
			return this.bxtotalLixi;
		},
		totalPay:function(){
			if(this.paytype=="debj")
			return this.bjtotalPay;
			if(this.paytype=="debx")
			return this.bxtotalPay;
		}
	}
	}
</script>

<style lang="scss" scoped>
	@import '../style/common.scss';
	@import '../style/scss/font-awesome.scss';

	.tabList {
		position: fixed;
		z-index: 100;
		left: 0;
		top: 0;
		width: 100%;
		margin-bottom: 32px;
		line-height: 32px;
		height: 1.95rem;
		background-color: #f9f9f9;
		li {
			width: 100%;
			text-align: center;
		}
	}
	.title{
		background-color: #dde3ff;
		height: 32px;
		line-height: 32px;
		font-size: 14px;
		padding-left: 4px;
	}
	.line {
		line-height: 32px;
		width: 100%;
		float: left;
		border-bottom: 1px solid #EEEEEE;
		p:nth-child(1) {
			width: 35%;
			float: left;
		}
		p:nth-child(2){			
			color: #999;
			width: 10px;
			margin-right: 16px;
			float: right;
		}
	}
	.line-right {
		margin-right: 5px;
		text-align: right;
		color: #999;
		float: right;
	}
</style>