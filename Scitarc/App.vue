<template>
    <div>
      <!-- Outros conteúdos da página -->
      <MenuSidebar />
    </div>
  </template>
  
  <script>
  import MenuSidebar from "@/components/MenuSidebar.vue"; // Importe o componente MenuSidebar
  
  export default {
    components: {
      MenuSidebar, // Registre o componente para usá-lo na visualização
    },
  };
  </script>
  
  <style scoped>
    /* Estilos da página ou componente que contém o MenuSidebar */
  </style>
  