<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/journal">Journal</router-link> |
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/clavier">Clavier</router-link> |
    </nav>
    <router-view/>
</template>
<script>
export default {
    name: 'NavBar',
}
</script>
<style>
    
</style>