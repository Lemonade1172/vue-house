<template>
	<section id="foot_guide">
		<section @click = "gotoAddress('/showCharts')" class="guide_item">
			<span>租售</span>
		</section>
		<section @click = "gotoAddress('/tools')" class="guide_item">
			<span>工具</span>
		</section>
		<section @click = "gotoAddress('/question')" class="guide_item">
			<span>问卷</span>
		</section>
	</section>
</template>

<script>
	export default{
		name:'footGuide',
		methods: {
        	gotoAddress(path){
        		this.$router.push(path)
        	}
        },
	}
</script>

<style lang="scss" scoped>
    @import '../style/mixin';
    

    #foot_guide{
        background-color: #fff;
        position: fixed;
        z-index: 100;
        left: 0;
        right: 0;
        bottom: 0;
        @include wh(100%, 42px);
        display: flex;
        box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
    }
    .guide_item{
    	flex: 1;
    	display: flex;
    	text-align: center;
    	flex-direction: column;
    	align-items: center;		
		span{
			line-height:42px;
			@include sc(.95rem, #666);
		}
    }
   
</style>
