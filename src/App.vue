<template>
  <div id="app">
 		<footGuide></footGuide>
  </div>
</template>

<script>
import footGuide from './components/footGuide'
import tools from './components/tools'

export default {
  name: 'App',
  components: {
    footGuide,
    tools
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
