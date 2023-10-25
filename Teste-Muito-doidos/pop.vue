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
  
  <style scoped>
  body {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    background-color: #1E1E1E;
}

#popup h1 {
    margin: 0 0 20px;
    display: block;
}

#popup {
    background-color: #fff;
    padding: 20px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    border-radius: 40px;
}

.headpopup {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
}

.headpopup button {
    background: none;
    border: none;
    cursor: pointer;
}

#popup input {
    padding: 15px;
    border-radius: 10px;
    border: 2px solid #6C5DD3;
    width: 80%;
}

#btt-confirm {
    padding: 20px;
    border-radius: 30px;
    width: 90%;
    margin-top: 20px;
    border: none;
    color: #fff;
    background: linear-gradient(110deg, rgb(38, 187, 251) 0%, rgb(88, 29, 182) 50.52%, rgb(38, 187, 251) 100%);
}
  </style>
  