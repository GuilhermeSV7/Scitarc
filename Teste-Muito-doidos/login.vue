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
  
  <style scoped>
  :root {
    --gradient: linear-gradient(242deg, #26BBFB -2.75%, #581DB6 51.44%, #26BBFB 104.5%);
}

body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background: var(--gradient);
}

.container {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color:#581DB6 ;
};


.image-container {
    margin-bottom: 20px;
}

.imagem {
    width: 239.503px; /* Largura aumentada */
    height: 90.228px; /* Altura aumentada */
}

.login-container {
    background-color:none;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 0 10px ;
    display: inline-block;
    margin-top: 20px; /* Espaço acima da tela de login */
}

h1 {
    margin: 0;
    color: #333;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

label {
    text-align: left;
    width: 100%;
    margin: 0;
    font-weight: bold;
    color: #ffffff;
}

input {
    width: 315px;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #fffefe;
    border-radius: 8px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

.links {
    margin-top: 20px;
    text-align: center;
}

a {
    text-decoration: none;
    color: #007bff;
    display: block;
    padding: 10px 0;
    border-bottom: 1px solid #007bff;
}

a:last-child {
    border: none;
}

a:hover {
    text-decoration: underline;
}

  </style>
  