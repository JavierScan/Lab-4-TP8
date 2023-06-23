<template>
  <div v-if="instrumento" class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 text-center">
        <h1>{{ instrumento.instrumento }}</h1>
        <img
          :src="urlImage"
          :alt="instrumento.instrumento"
          class="img-fluid mb-4"
        />
        <p>{{ instrumento.descripcion }}</p>
        <p>Precio: {{ instrumento.precio }}</p>
        <p>
          Costo de envío:
          {{
            instrumento.costoEnvio === "G"
              ? "Envío gratis"
              : `$${instrumento.costoEnvio}`
          }}
        </p>
        <p>Cantidad vendida: {{ instrumento.cantidadVendida }}</p>
        <router-link to="/productos" class="btn btn-primary btn-lg"
          >Volver a la lista</router-link
        >
      </div>
    </div>
  </div>
  <div v-else>Cargando...</div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "DetalleInstrumentoView",
  setup() {
    const instrumento = ref(null);
    const urlImage = ref("");

    const router = useRouter();
    const route = useRoute();
    const id = parseInt(route.params.id); // Convertir id a número

    onMounted(() => {
      fetch(`http://localhost:8081/api/instrumentos/${id}`)
        .then((response) => response.json())
        .then((data) => {
          instrumento.value = data; // Asignar directamente el objeto de instrumento devuelto por la API
        })
        .catch((error) => console.error(error));
    });

    watch(instrumento, (newValue) => {
      if (newValue) {
        if (String(newValue.imagen).indexOf("http") >= 0) {
          urlImage.value = newValue.imagen;
        } else {
          urlImage.value = `/img/${newValue.imagen}`;
        }
      }
    });

    return {
      instrumento,
      urlImage,
    };
  },
};
</script>
