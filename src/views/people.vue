<template>
  <div class="container">
    <h1>Listagem de pessoas</h1>
    <ul>
      <div v-for="people in peopleData" :key="people.id">
        <b-button>Button</b-button>
        {{ people.id }} - <strong>{{ people.nome }}</strong> - {{ people.cpf }} - {{ people.dataNascimento }}
      </div>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MyPeople',

  data() {
    return {
      peopleData: [],
    };
  },
  created() {
    this.getDataPeoples()
  },
  methods: {
    getDataPeoples() {
      axios
        .get("http://localhost:3000/pessoas").then((response)=>{
          console.log(response.data)
          this.peopleData = response.data
        }).catch((err)=>{
          console.log(err)
        })
    }
  }
};
</script>
<style scoped>

</style>