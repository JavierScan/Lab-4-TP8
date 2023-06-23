<template>
  <form @submit.prevent="handleSubmit" class="container">
    <div class="mb-3">
      <label for="instrumento" class="form-label">Instrumento:</label>
      <input
        v-model="formInstrumento.instrumento"
        type="text"
        class="form-control"
        required
      />
    </div>
    <div class="mb-3">
      <label for="marca" class="form-label">Marca:</label>
      <input
        v-model="formInstrumento.marca"
        type="text"
        class="form-control"
        required
      />
    </div>
    <div class="mb-3">
      <label for="modelo" class="form-label">Modelo:</label>
      <input
        v-model="formInstrumento.modelo"
        type="text"
        class="form-control"
        required
      />
    </div>
    <div class="mb-3">
      <label for="imagen" class="form-label">Imagen:</label>
      <input
        v-model="formInstrumento.imagen"
        type="text"
        class="form-control"
        required
      />
    </div>
    <div class="mb-3">
      <label for="precio" class="form-label">Precio:</label>
      <input
        v-model="formInstrumento.precio"
        type="number"
        class="form-control"
        required
      />
    </div>
    <div class="mb-3">
      <button type="submit" class="btn btn-primary">
        {{ isAdding ? "Agregar" : "Actualizar" }}
      </button>
      <button type="button" class="btn btn-secondary" @click="handleCancel">
        Cancelar
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "InstrumentoFormView",
  props: {
    instrumento: {
      type: Object,
      default: null,
    },
    isAdding: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      formInstrumento: {
        id: 0,
        instrumento: "",
        marca: "",
        modelo: "",
        imagen: "",
        precio: 0,
      },
    };
  },
  mounted() {
    if (this.instrumento) {
      this.formInstrumento = { ...this.instrumento };
    }
  },
  methods: {
    handleSubmit() {
      if (this.isAdding) {
        this.$emit("add", this.formInstrumento);
      } else {
        this.$emit("update", this.formInstrumento);
      }
    },
    handleCancel() {
      this.$emit("cancel");
    },
  },
};
</script>
