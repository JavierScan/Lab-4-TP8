<template>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/donde-estamos" class="nav-link">Donde Estamos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/productos" class="nav-link">Productos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin-productos" class="nav-link">Administrar</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: "NavBar"
  };
  </script>
  
  <style>
  /* Estilos del componente NavBar */
  </style>
  