<template>
  <div class="card">
    <div class="row no-gutters">
      <div class="col-md-3">
        <router-link :to="`/instrumentos/${instrumento.id}`">
          <img :src="urlImage" class="card-img" :alt="instrumento.instrumento" />
        </router-link>
      </div>
      <div class="col-md-9">
        <div class="card-body">
          <h5 class="card-title">
            <router-link :to="`/instrumentos/${instrumento.id}`" class="text-decoration-none text-dark">
              {{ instrumento.instrumento }}
            </router-link>
          </h5>
          <p class="card-text">{{ instrumento.descripcion }}</p>
          <p class="card-text">${{ instrumento.precio }}</p>
        </div>
        <div class="card-footer">
          <router-link :to="`/instrumentos/${instrumento.id}`" class="btn btn-primary float-right">
            Ver Detalles
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListaItem',
  props: {
    instrumento: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      urlImage: '',
    };
  },
  watch: {
    instrumento: {
      immediate: true,
      handler(newValue) {
        if (newValue) {
          if (String(newValue.imagen).indexOf('http') >= 0) {
            this.urlImage = newValue.imagen;
          } else {
            this.urlImage = `/img/${newValue.imagen}`;
          }
        }
      },
    },
  },
};
</script>

<style scoped>
/* Estilos específicos del componente ListaItem.vue */
</style>
