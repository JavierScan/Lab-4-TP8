<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 text-center">
        <h1 class="mb-4">Productos</h1>
        <div class="row"> 
          <div
            v-for="instrumento in instrumentos"
            :key="instrumento.id"
            class="col-12 mb-4"
          >
            <ListaItem :instrumento="instrumento" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListaItem from "../components/ListaItem";
import { ref, onMounted } from "vue";

export default {
  name: "VistaProductosView",
  components: {
    ListaItem,
  },
  setup() {
    const instrumentos = ref([]);

    onMounted(() => {
      fetch("http://localhost:8081/api/instrumentos")
        .then((response) => response.json())
        .then((data) => {
          instrumentos.value = data;
        })
        .catch((error) => console.error(error));
    });

    return {
      instrumentos,
    };
  },
};
</script>

<style scoped>
/* Estilos específicos del componente Productos.vue */
</style>
