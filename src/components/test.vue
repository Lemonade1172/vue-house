<template>
<div id="app">
	<div class="wrapper">
		<h3>住处房租费用</h3>
		<rentChart></rentChart>
	</div>
	<div class="wrapper">
		<h3>住处的大小</h3>
		<sizeChart></sizeChart>
	</div>
	<div class="wrapper">
		<h3>住处的类型</h3>
		<typeChart></typeChart>
	</div>
	<div class="wrapper">
		<h3>租金占月总收入的比例</h3>
		<percentChart></percentChart>
	</div>
	<div class="wrapper">
		<h3>住处距离工作地方路程</h3>
		<timeChart></timeChart>
	</div>
		
</div>
</template>

<style>
	h3{text-align: center;}
	.wrapper{border-bottom: 1px solid #999999;}
body{margin: auto;padding: 0;}
</style>