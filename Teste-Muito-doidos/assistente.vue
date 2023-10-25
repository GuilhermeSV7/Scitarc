<template>
    <div>
      <div id="popup">
        <div class="img-assistente">
          <img src="./img/logo-encurtada.svg" alt="">
        </div>
        <div id="texto-assistente">
          <h6 class="gradient">Assistente AI</h6>
        </div>
        <button id="btt-assistente" @click="expandDiv">
          <img src="./img/angle-up-solid.svg" alt="">
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      expandDiv() {
        // Adicione aqui a lógica para expandir a div ou realizar a ação desejada
      },
    },
  };
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
}

#popup {
    width: 20%;
    height: 60px;
    padding: 5px;
    background: linear-gradient(100deg, rgb(38, 187, 251) 0%, rgb(88, 29, 182) 50.52%, rgb(38, 187, 251) 100%);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* position: fixed; */
    border-radius: 20px 20px 0 0;
}

#texto-assistente {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #fff;
    padding: 10px;
    border-radius: 20px;
    
    color: linear-gradient(20deg, rgb(38, 187, 251) 0%, rgb(88, 29, 182) 50.52%, rgb(38, 187, 251) 100%);
}

#btt-assistente {
    background-color: #fff;
    border-radius: 100%;
    padding: 5px;
    cursor: pointer;
    border: 0;
}

.gradient {

    background-image: linear-gradient(to bottom, rgb(38, 187, 251), rgb(88, 29, 182), rgb(38, 187, 251));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: black;

}

/* -------------------------------- */
#popup .expand{
transition: 1s;
height: 500px;
}
  </style>
  