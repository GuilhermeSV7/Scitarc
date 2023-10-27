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
  
  <style lang="sass" scoped>
  //Style do Componente
@import './assistente.sass';
</style>


  