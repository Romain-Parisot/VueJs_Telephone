<template>
  <div class="contact">
    <h1>Contact</h1>
    <form @submit.prevent="ajoutContact">
      <input type="text" placeholder="Name..." v-model="this.formContact.name">
      <input type="number" placeholder="Numero..." v-model="this.formContact.numero">
      <button type="submit">Ajouter</button>
    </form>
    <div class="error_div">
      <span v-if="this.formContact.name.length < 2 && error" class="error">Le nom du contact doit contenir au moins 3 caractére</span>
      <span v-if="this.contacts.find((contact) => contact.name == this.formContact.name)" class="error">Vous avez déjà enregistrer un contact avec ce nom</span>
      <span v-if="this.formContact.numero > 1000000000 || this.formContact.numero < 999999999 && error" class="error">Le numéro de téléphone doit contenir 10 chiffres</span>
    </div>
    <div v-for="contact in contacts" :key="contact.name">
      <div class="contactdisplay">
        <h2>{{ contact.name }}</h2>
        <h2 class="numerocontact">{{ contact.numero }}</h2>
        <button @click="call(contact.name)">Call</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactForm",
  computed: {
    contacts() {
            return this.$store.state.contacts
        }
  },
  data() {
        return {
            formContact: {
                error: false,
                name: "",
                numero: ''
            },
        };
    },
    methods: {
        ajoutContact() {
            if (this.formContact.name.length < 2) {
              this.error = true;
              return;
            }
            if (this.formContact.numero > 10000000000 || this.formContact.numero < 999999999){
              this.error = true;
              return;
            }
            if (this.contacts.find((contact) => contact.name == this.formContact.name)){
              return;
            }
            this.$store.commit('ajoutContact', this.formContact)

            this.error = false;

            this.formContact = {
                name: "",
                numero: ''
            };
        },
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
    },
  
}
</script>
<style>
  .error{
    color: red;
  }
  .error_div{
    display: flex;
    flex-direction: column;
  }
  .contact{
    width: 40vw;
  }
  .contactdisplay{
    display: flex;
    border-bottom: solid 2px orange;
    justify-content: space-between;
    padding: 10px;
  }
  .numerocontact{
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: grey;
  }

</style>
