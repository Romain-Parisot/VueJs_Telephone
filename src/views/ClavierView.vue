<template>
    <div class="clavier">
        <h1>Clavier</h1>
        <div class="pad">
            <form @submit.prevent="call">
                <button @click="addnumber(1), namecontact(currentnumber)">1</button>
                <button @click="addnumber(3), namecontact(currentnumber)">3</button>
                <button @click="addnumber(4), namecontact(currentnumber)">4</button>
                <button @click="addnumber(2), namecontact(currentnumber)">2</button>
                <button @click="addnumber(5), namecontact(currentnumber)">5</button>
                <button @click="addnumber(6), namecontact(currentnumber)">6</button>
                <button @click="addnumber(7), namecontact(currentnumber)">7</button>
                <button @click="addnumber(8), namecontact(currentnumber)">8</button>
                <button @click="addnumber(9), namecontact(currentnumber)">9</button>
                <button @click="addnumber(0), namecontact(currentnumber)">0</button>
                <button type="submit">Appeler</button>
            </form>
            <h2>numéro: {{ currentnumber }}</h2>
            <div v-for="contact in contacts" :key="contact.name">
                <div v-if="contact.numero == currentnumber">
                    <p>{{ contact.name }}</p>
                </div>
            </div>
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

        },
        namecontact(currentnumber) {
            this.contacts.forEach(c => {
                    if(c.numero == currentnumber) {
                        return c.name
                    }
                });
        }
    },
    computed: {
        currentnumber() {
            return this.$store.state.currentnumber
        },
        contacts() {
            return this.$store.state.contacts
        }
    }
    
}
</script>
<style>
    .pad{

    }

</style>