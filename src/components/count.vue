<template>
	<div id="count">  
    <table cellspacing="0" border="1px">  
      <tr>  
        <th>id</th>  
        <th>name</th>  
        <th>sex</th>  
        <th>age</th>  
      </tr>  
      <tr v-for="user in users">  
        <td>{{user.id}}</td>  
        <td>{{user.Name}}</td>  
        <td>{{user.sex}}</td>  
        <td>{{user.age}}</td>  
      </tr>  
    </table>  
  </div>  
</template>

<script>
	import axios from "axios";  
  
  export default{  
    name:'count',  
    data(){  
      return{  
        users: []//预先创建一个数组，用于存放请求得到的数据  
      }  
    },  
    created(){ //此处用created相当于对前端页面数据进行初始化  
      axios.get("http://localhost/connect.php").then(res=>{  
        this.users=res.data;//获取数据  
        console.log('success');  
        console.log(this.users);  
      })  
    }  
  }  
</script>

<style>
	table{  
    width:600px;   
    height:300px;   
    margin:100px  
  }  
</style>