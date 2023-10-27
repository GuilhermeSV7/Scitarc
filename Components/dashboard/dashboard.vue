<template>
    <div>
      <div id="tela-inicial">
        <div id="header-tela">
          <div id="header-info">
            <h1>Dashboard</h1>
            <button @click="criarDashboard">Criar Dashboard</button>
          </div>
          <hr>
        </div>
  
        <div id="main-tela">
          <div id="main-tela-info">
            <img src="./img/icon-dash.png" alt="">
            <h5>Você não possui nenhum dashboard, Clique no botão "Criar Dashboard" para começar</h5>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      criarDashboard() {
        // Lógica para criar um novo dashboard
      },
    },
  };
  </script>
  
  <style lang="sass" scoped>
@import './dashboard.sass';
</style>