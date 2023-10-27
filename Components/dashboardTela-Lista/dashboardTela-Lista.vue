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
            <div class="card-dash" v-for="(card, index) in cards" :key="index">
  
              <div class="card-head">
                <div class="card-head-info">
                  <h2>{{ card.title }}</h2>
                  <span>{{ card.description }}</span>
                </div>
                <img :src="card.image" alt="">
              </div>
  
              <div class="card-btt">
                <button @click="abrirDashboard(index)"><img src="./img/ui-icon-arrow-small-right.svg" alt=""></button>
                <span>Abrir Dashboard</span>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cards: [
          {
            title: "Titulo 1",
            description: "Descrição 1",
            image: "./img/service card/volume.png",
          },
          {
            title: "Titulo 2",
            description: "Descrição 2",
            image: "./img/service card/volume.png",
          },
          {
            title: "Titulo 3",
            description: "Descrição 3",
            image: "./img/service card/volume.png",
          },
          {
            title: "Titulo 4",
            description: "Descrição 4",
            image: "./img/service card/volume.png",
          },
        ],
      };
    },
    methods: {
      criarDashboard() {
        // Lógica para criar um novo dashboard
      },
      abrirDashboard(index) {
        // Lógica para abrir o dashboard com base no índice
      },
    },
  };
  </script>

<style lang="sass" scoped>
@import './dashboard.sass';
</style>
