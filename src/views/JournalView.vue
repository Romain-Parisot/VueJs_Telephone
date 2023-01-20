<template>
    <div class="journal">
        <h1>Journal</h1>
        <div v-for="journal in journals" :key="journal" class="journaldata">
            <p>{{ journal[0] }}</p>
            <p>{{ journal[1] }}</p>
            <button @click="call(journal[0])">Call</button>
        </div>
    </div>
</template>
<script>
export default {
    name: "JournalPage",
    computed: {
    journals() {
            return this.$store.state.journals
        }
    },
    methods: {
        call(currentnumber) {
            console.log(currentnumber);
            // récupére la date 
            const date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let hour = date.getHours();
            let minute = date.getMinutes();
            let currentdate = day + '/' + month + '/' + year + ' à ' + hour + ':' + minute;
            // récupére le nom
            let nom = currentnumber
            
            this.$store.commit("msg", [nom,currentdate] )
            
        
        },
    }
}
</script>
<style>
    .journal{
        display: flex;
        width: 40vw;
        flex-direction: column;
    }
    .journaldata{
        display: flex;
        padding: 10px;
        justify-content: space-between;
    }
</style>