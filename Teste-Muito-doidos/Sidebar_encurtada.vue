<template>
    <div class="app">
      <Sidebar>
        <aside class="menu-lateral">
        <header>
            <div class="menu-lateral-logo">
                <img id="logo-encurtada" src="./img/logo-encurtada.svg" alt="">
            </div>
            <div id="btn-expandir">
                <button id="btn-exp"><img src="./img/ui-icon-arrow-small-right.svg"
                        alt=""></button>
            </div>
        </header>
        <div class="divider"></div>
        <nav>
            <ul class="menu-lateral-lista1">
                <li class="iten-menu ativo">
                    <a href="#">
                        <span class="icon-menu">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10.9996" cy="10.9996" r="7.50313" stroke="#fff" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20.5036 20.5036L16.3048 16.3048" stroke="#fff" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.57916 9.14877H14.364" stroke="#fff" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.57916 12.8503H12.3822" stroke="#fff" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>

                    </a>
                </li>
                <li class="iten-menu"><a href="#">
                        <span class="icon-menu"><svg width="21" height="22" viewBox="0 0 21 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="Activity">
                                    <path id="Path_33966"
                                        d="M5.24481 13.7815L8.23795 9.89137L11.6521 12.5733L14.5812 8.79297"
                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <circle id="Ellipse_741" cx="17.9954" cy="3.20027" r="1.9222" stroke="white"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path id="Path"
                                        d="M12.9245 2.12024H5.65673C2.64529 2.12024 0.778015 4.25296 0.778015 7.2644V15.3468C0.778015 18.3582 2.60868 20.4818 5.65673 20.4818H14.2609C17.2723 20.4818 19.1396 18.3582 19.1396 15.3468V8.30788"
                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </g>
                            </svg></span>

                    </a></li>
                <li class="iten-menu"><a href="#">
                        <span class="icon-menu"><svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.9995 6.99788H3.99663C3.4442 6.99768 2.99641 6.5499 2.99622 5.99747V3.99663C2.99641 3.4442 3.4442 2.99641 3.99663 2.99622H10.9995"
                                    stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M5.24715 14.501H3.74653C3.3322 14.5009 2.99636 14.165 2.99622 13.7507V12.2501C2.99636 11.8357 3.3322 11.4999 3.74653 11.4998H5.24715C5.66148 11.4999 5.99732 11.8357 5.99747 12.2501V13.7507C5.99732 14.165 5.66148 14.5009 5.24715 14.501Z"
                                    stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.22083 13.0005H21.0037" stroke="white" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M5.24715 21.0037H3.74653C3.3322 21.0035 2.99636 20.6677 2.99622 20.2534V18.7528C2.99636 18.3384 3.3322 18.0026 3.74653 18.0024H5.24715C5.66148 18.0026 5.99732 18.3384 5.99747 18.7528V20.2534C5.99732 20.6677 5.66148 21.0035 5.24715 21.0037Z"
                                    stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.22083 19.5031H21.0037" stroke="white" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <circle cx="17.0021" cy="4.9971" r="3.00125" stroke="white" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21.0038 8.99876L19.1238 7.11877" stroke="white" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>

                    </a></li>
                <li class="iten-menu"><a href="#">
                        <span class="icon-menu"><svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.99835 13.0005H10.9996" stroke="white" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M3.99665 8.99876V19.9993C3.99518 20.3521 4.17997 20.6794 4.48274 20.8604C4.78551 21.0413 5.16131 21.0491 5.47127 20.8807C7.10095 19.9913 9.49894 18.6838 9.49894 18.6838C9.49894 18.6838 11.897 19.9923 13.5266 20.8807C13.8366 21.0491 14.2124 21.0413 14.5152 20.8604C14.8179 20.6794 15.0027 20.3521 15.0013 19.9993V8.99876C15.0014 8.46806 14.7906 7.95905 14.4154 7.58379C14.0401 7.20853 13.5311 6.99778 13.0004 6.99792H5.99749C4.89248 6.99792 3.99665 7.89375 3.99665 8.99876Z"
                                    stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M15.0013 15.0012L18.5237 16.923C18.8337 17.0921 19.2099 17.0853 19.5136 16.905C19.8172 16.7248 20.0033 16.3978 20.0033 16.0447V4.99705C20.0035 4.46635 19.7927 3.95735 19.4175 3.58209C19.0422 3.20682 18.5332 2.99607 18.0025 2.99622H11.4998C10.9691 2.99607 10.4601 3.20682 10.0848 3.58209C9.70957 3.95735 9.49882 4.46635 9.49896 4.99705V6.99788"
                                    stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></span>
                    </a></li>
            </ul>
            <ul class="menu-lateral-lista2">
                <li class="iten-menu"><a href="#">
                        <span class="icon-menu"><img src="./img/config-icon.svg" alt=""></span>
                    </a></li>

                <li class="iten-menu"><a href="#">
                        <span class="icon-menu"><img src="./img/exit-icon.svg" alt=""></span>
                    </a></li>
            </ul>
        </nav>
        <div class="divider"></div>
        <a href="#" class="iten-menu-user">
            <span class="icon-menu"><img src="./img/avatar-tranmautritam-2.svg" alt=""></span>
            <!-- <span class="txt-menu">Nome</span> -->
        </a>
    </aside>
    </Sidebar>
      <UserIcon :userIcon="userIcon"></UserIcon>
    </div>
  </template>
  
  <script>
  import Sidebar from './Sidebar.vue'
  import UserIcon from './UserIcon.vue'
  
  export default {
    data() {
      return {
        userIcon: './img/avatar-tranmautritam-2.svg',
      }
    },
  }
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    font-family: "Inter-SemiBold", Helvetica;
    font-weight: 600;
}

.menu-lateral {
    position: fixed;
    background: linear-gradient(100deg, rgb(38, 187, 251) 0%, rgb(88, 29, 182) 50.52%, rgb(38, 187, 251) 100%);
    width: 8rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    top: 0;
    left: 0;
}

.menu-lateral header {
    display: flex;
    padding: 10px;
    margin: 20px;
    top: 0;
}

#btn-expandir button,
button>img {

    border-style: none;
    width: 32px;
    height: 32px;

}

/* Esconder texto e mostrar apenas o ícone */
.menu-lateral-lista1 .txt-menu,
.menu-lateral-lista2 .txt-menu,
.menu-lateral-lista1 .icon-menu-2,
.menu-lateral-lista2 .icon-menu-2 {
    display: none;
}


#btn-expandir button {
    background-color: #5135C1;
    position: absolute;
    margin-left: 10px;
    border-radius: 0 8px 8px 0;

    cursor: pointer;
}

.menu-lateral ul {
    list-style: none;

}

.menu-lateral .menu-lateral-lista1 {
    margin-bottom: 320px;
}

ul li.iten-menu a {
    width: 64px;
    height: 64px;
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    margin: 5px 0;
}

ul li.iten-menu a:hover {
    background-color: #fff;

}

.divider {
    height: 1px;
    width: 100%;
    background-color: #fff;
    opacity: 0.1;
}

ul li.iten-menu a .icon-menu>img,
.icon-menu-2>img {
    width: 32px;
    height: 32px;
}

ul li.iten-menu {
    transition: .2s;
}

.iten-menu-user {
    margin-top: 30px;
}

ul li.ativo {
    background-color: #fff;
    border-radius: 16px;
}

.alter {
    display: none;
}

.menu-lateral #logo-expandida {
    display: none;
}

/* ------------------------------------------- */

.menu-lateral.expand {
    width: 256px;
    transition: 0.8s;
}
.menu-lateral.expand header {
    display: flex;
    padding: 10px;
    margin: 20px;
    top: 0;
}

.menu-lateral.expand #btn-expandir button {
    background-color: #5135C1;
    position: absolute;
    margin-top: 15px;
    margin-left: 27px;
    border-radius: 0 8px 8px 0;
    transform: scaleX(-1);
    cursor: pointer;
    transition: 1.2s;

}

.menu-lateral.expand .txt-menu {
    margin-left: 20px;
    margin-right: 24px;
}

ul li.ativo {
    background-color: #5135C1;
    border-radius: 16px;
    opacity: 0.5;
}

ul li.iten-menu:hover {
    background-color: #5135C1;
    color: #5135C1;
    border-radius: 16px;
}
  .app {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
  }
  </style>
  