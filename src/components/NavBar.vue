<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/journal">Journal</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/clavier">Clavier</router-link>
    </nav>
    <router-view/>
</template>
<script>
export default {
    name: 'NavBar',
}
</script>
<style>
nav{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 10vw;
    justify-content: center;
    align-items: center;
}
a{
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 2px orange;
    width: 100%;
    text-decoration: none;
    color: black;
    font-size: 24px;
}

</style>