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
  
  <style scoped>
  html {
    height: 100%;
    width: 100vw;
    background-color: #E4E4E4;
}

main {

    padding: 20px;
    height: 95vh;
}

#tela-inicial {
    background-color: #fff;
    margin-left: 10rem;
    height: 100%;
    border-radius: 20px;
}

#header-tela {
    padding: 20px;
}

#header-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

#header-info button {
    background: linear-gradient(160deg, rgb(38, 187, 251) 0%, rgb(88, 29, 182) 50.52%, rgb(38, 187, 251) 100%);
    color: #fff;
    padding: 15px 40px;
    border-style: none;
    border-radius: 20px;
}

#main-tela-info {
    display: flex;
    justify-content: left;
    align-items: center;
    flex-wrap: wrap;
    /* margin: 100px 0; */
    padding: 30px;
}
  </style>
  