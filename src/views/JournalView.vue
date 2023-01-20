<template>
    <div class="journal">
        <h1>Journal</h1>
        <div v-for="journal in journals" :key="journal" class="journaldata">
            <p>{{ journal }}</p>
            <button>Call</button>
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