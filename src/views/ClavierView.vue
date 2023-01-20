<template>
    <div class="clavier">
        <h1>Clavier</h1>
        <div class="pad">
            <form @submit.prevent="call">
                <button @click="addnumber(1)">1</button>
                <button @click="addnumber(2)">2</button>
                <button @click="addnumber(3)">3</button>
                <button @click="addnumber(4)">4</button>
                <button @click="addnumber(5)">5</button>
                <button @click="addnumber(6)">6</button>
                <button @click="addnumber(7)">7</button>
                <button @click="addnumber(8)">8</button>
                <button @click="addnumber(9)">9</button>
                <button @click="addnumber(0)">0</button>
                <button type="submit">Appeler</button>
            </form>
            <h2>numéro: {{ currentnumber }}</h2>
        </div>
    </div>
</template>
<script>
export default {
    name: "ClavierForm",
    methods: {
        addnumber(x) {
            this.$store.commit("addnumber", x)
        },
        call() {

        }
    },
    computed: {
        currentnumber() {
            return this.$store.state.currentnumber
        }
    }
    
}
</script>
<style>
    .pad{

    }

</style>