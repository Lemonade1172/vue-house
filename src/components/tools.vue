<template>
	<div id="tools">
		
		<div class="tabCon">
			<div class="cur" id="con0">
				<form v-on:submit="showCal">
					<div class="line">
						<p>贷款方式</p>
						<select v-model='type'   class='form-control line-right'>
							<option value='sy'>商业贷款</option>
							<option value='gjj'>公积金贷款</option>
							<option value='zh'>组合贷款</option>
						</select>
					</div>
					<div class="line">
						<p>计算方式</p>
						<select v-model='caltype'   class='form-control line-right'>
							<option value='fj'>按房价总额</option>
							<option value='dk'>按贷款总额</option>
						</select>
					</div>
					<div class="line" v-if="(caltype=='fj')">
						<p>房价总额</p>
						<p>万</p>
						<input v-model='newData.fjtotal'   class='line-right' placeholder="0" />
					</div>
					<div class="line" v-if="(caltype=='fj')">
						<p>贷款比例</p>
						<p>成</p>
						<input v-model='newData.bili'   class='line-right' placeholder="0" />
					</div>
					<div class="line" v-if="(caltype=='dk')">
						<p>贷款总额</p>
						<p>万</p>
						<input v-model='newData.dktotal'   class='line-right' placeholder="0" />
					</div>
					<div class="line" v-if="(type=='zh')"v-on:input="changGjj">
						<p>公积金贷款</p>
						<p>万</p>
						<input v-model='newData.gjjtotal'   class='line-right' placeholder="0" />
					</div>
					<div class="line" v-if="(type=='zh')">
						<p>公积金利率</p>
						<p>%</p>
						<input v-model='newData.gjjlilv'   class='line-right' placeholder="0" />
					</div>
					<div class="line" v-if="(type=='zh')"v-on:input="changSd">
						<p>商业贷款</p>
						<p>万</p>
						<input v-model='newData.sdtotal'   class='line-right' placeholder="0" />
					</div>
					<div class="line" v-if="(type=='zh')">
						<p>商贷利率</p>
						<p>%</p>
						<input v-model='newData.sdlilv'   class='line-right' placeholder="0" />
					</div>
					<div class="line">
						<p>贷款年限</p>
						<p>年</p>
						<input v-model='newData.years'   class='line-right' placeholder="0" />
					</div>
					<div class="line" v-if="(type!='zh')">
						<p>贷款利率</p>
						<p>%</p>
						<input v-model='newData.lilv'   class='line-right' placeholder="0" />
						
					</div>
					<div class="line">
						<p>还款方式</p>
						<select v-model='paytype'   class='form-control line-right'>
							<option value='debj'>等额本金</option>
							<option value='debx'>等额本息</option>
						</select>
					</div>
					<input type="submit" value="计算" />
				</form>
			</div>
			<div id="con1" style="display: none;">
			</div>

		</div>
		<footGuide></footGuide>
	</div>
</template>

<script>
	import footGuide from './footGuide'
	export default {
		name: 'tools',
		data() {
			return {
				newData: {},
				type: 'sy',
				caltype: "dk",
				paytype:"debj"
			}
		},
		components: {
			footGuide
		},
		methods: {
			showCal(e) {
				let Data = this.newData;
			if(Data.years){					
	//				console.log("showCal");
	//				console.log(Data.years);
					//阻止默认刷新事件
					e.preventDefault();
					//路由传值
					this.$router.push({name:"showCal",
					query: {
						type:this.type,caltype:this.caltype,
						fjtotal:Data.fjtotal,years:Data.years,
						bili:Data.bili,dktotal:Data.dktotal,
						gjjtotal:Data.gjjtotal,gjjlilv:Data.gjjlilv,
						sdtotal:Data.sdtotal,sdlilv:Data.sdlilv,
						lilv:Data.lilv,paytype:this.paytype}});
				}
			else{e.preventDefault();
				alert("请填写完善后再进行哦！");}
			},
			changGjj() {
				if(this.caltype=="dk"){
				this.newData.sdtotal=this.newData.dktotal-this.newData.gjjtotal;			
				}
				else if(this.caltype=="fj"){
				this.newData.sdtotal=this.newData.fjtotal*this.newData.bili*0.1-this.newData.gjjtotal;			
				}
			},
			changSd() {
				if(this.caltype=="dk"){
				this.newData.gjjtotal=this.newData.dktotal-this.newData.sdtotal;			
				}
				else if(this.caltype=="fj"){
				this.newData.gjjtotal=this.newData.fjtotal*this.newData.bili*0.1-this.newData.sdtotal;			
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../style/common.scss';
	@import '../style/scss/font-awesome.scss';

	.line {
		
		line-height: 36px;
		width: 100%;
		padding:0 2%;
		float: left;
		border-bottom: 1px solid #EEEEEE;
		p:nth-child(1) {
			width: 30%;
			float: left;
		}
		p:nth-child(2){
			width: 10px;
			margin-right: 16px;
			float: right;
		}
	}
	
	.line-right {
		line-height: 36px;
		margin-right: 5px;
		text-align: right;
		float: right;
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