<template>
    <div class="clavier">
        <h1>Clavier</h1>
        <div class="pad">
            <form class="formclavier">
                <div class="clavierrow">
                    <button class="btclavier" @click="addnumber(1)">1</button>
                    <button class="btclavier" @click="addnumber(2)">2</button>
                    <button class="btclavier" @click="addnumber(3)">3</button>
                </div>
                <div class="clavierrow">
                    <button class="btclavier" @click="addnumber(4)">4</button>
                    <button class="btclavier" @click="addnumber(5)">5</button>
                    <button class="btclavier" @click="addnumber(6)">6</button>
                </div>
                <div class="clavierrow">
                    <button class="btclavier" @click="addnumber(7)">7</button>
                    <button class="btclavier" @click="addnumber(8)">8</button>
                    <button class="btclavier" @click="addnumber(9)">9</button>
                </div>
                <div>
                    <button class="btclavier" @click="addnumber(0)">0</button>
                </div>
                <button type="submit" class="appelerbt" @click="call(currentnumber)">Appeler</button>
            </form>
        </div>
        <div class="namenumber">
            <h2>Numéro: {{ currentnumber }}</h2>
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
        call(currentnumber) {
            console.log(currentnumber.length);
            if(currentnumber.length == 10) {
                // récupére la date 
                const date = new Date();
                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();
                let hour = date.getHours();
                let minute = date.getMinutes();
                let currentdate = day + '/' + month + '/' + year + ' à ' + hour + ':' + minute;
                // récupére le nom
                let nom = null
                this.contacts.forEach(c => {
                    if(c.numero == currentnumber) {
                        nom = c.name
                    }
                });
                if(nom==null){
                    nom=currentnumber
                }
                let msg = nom + ' ' + currentdate;
                this.$store.commit("msg", msg)
            }
        
        },
        
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
        display: flex;
        justify-content: center;

    }
    .formclavier{
        display: grid;
        gap: 10px;
    }
    .btclavier{
        width: 40px;
        height: 40px;
        background-color: orange;
    }
    .appelerbt{
        background-color: orange;
    }
    .clavierrow{
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }
    .clavier{
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 40vw;
    }

</style>