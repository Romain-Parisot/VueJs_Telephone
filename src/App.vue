<template>
  <div id="app">
    <NavBar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
	export default {
    name: 'app',
		components: {
      NavBar,
    }
	}
    
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app{
  border: solid 2px orange;
  width: 50vw;
  margin-left: 50%;
  transform: translatex(-50%);
}

nav{
  display: flex;
  flex-direction: column;
}


</style>
