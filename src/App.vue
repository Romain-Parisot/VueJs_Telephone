<template>
  <NavBar />
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
  border: solid 2px orange;
  width: 50vw;
  height: 70vh;
  margin-left: 50%;
  transform: translateX(-50%);
  display: flex;
}


</style>
