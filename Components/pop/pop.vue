<template>
    <div id="popup">
      <div class="headpopup">
        <h4>Criar Dashboard</h4>
        <button @click="closePopup"><img style="height: 24px;" src="./img/xmark-solid.svg" alt=""></button>
      </div>
      <h1>Escolha um título</h1>
      <input type="text" v-model="dashboardTitle" placeholder="Meu Dashboard">
      <button id="btt-confirm" @click="createDashboard"><label>Criar Dashboard</label></button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dashboardTitle: "Meu Dashboard", // Valor padrão para o input
      };
    },
    methods: {
      closePopup() {
        // Lógica para fechar o popup
      },
      createDashboard() {
        // Lógica para criar um dashboard com this.dashboardTitle
      },
    },
  };
  </script>
  
  <style lang="sass" scoped>
@import './pop.sass';
</style>