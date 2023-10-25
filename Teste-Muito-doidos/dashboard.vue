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

#main-tela {
    display: flex;
    justify-content: center;
    align-items: center;
}

#main-tela-info {
    margin: 100px 0;
    width: 60%;
    text-align: center;
}
  </style>
  