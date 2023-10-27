<template>
    <div class="container">
      <div class="image-container">
        <img src="logo.jpg" alt="Imagem" class="imagem">
      </div>
      <div class="login-container">
        <h1>Tela de Login</h1>
        <form @submit.prevent="login">
          <label for="email">Email</label>
          <input type="text" id="email" v-model="email" placeholder="Seu email">
          <label for="senha">Senha</label>
          <input type="password" id="senha" v-model="senha" placeholder="Sua senha">
          <button type="submit">Entrar</button>
        </form>
        <div class="links">
          <a href="#">Esqueci minha senha</a>
          <a href="#">Contrato Premium</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        senha: "",
      };
    },
    methods: {
      login() {
        // Lógica para processar o login com this.email e this.senha
      },
    },
  };
  </script>
  
  <style lang="sass" scoped>
@import './login.sass';
</style>