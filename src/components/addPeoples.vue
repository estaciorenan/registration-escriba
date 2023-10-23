<template>
  <div class="container">
    <h1>Cadastro de pessoa</h1>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="nome" placeholder="Nome">
      <input type="email" v-model="email" placeholder="E-mail">
      <input type="password" v-model="senha" placeholder="Senha">
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  name: 'Peoples',
  data() {
    return {
      nome: "",
      email: "",
      senha: "",
    };
  },
  methods: {
    onSubmit() {
      axios
        .post("/api/pessoas", {
          nome: this.nome,
          email: this.email,
          senha: this.senha,
        })
        .then((response) => {
          // TODO: Recarregar a página
        });
    },
  },
};
</script>