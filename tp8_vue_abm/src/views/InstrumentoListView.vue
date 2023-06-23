<template>
  <div>
    <h1 class="mb-4">LISTA DE INSTRUMENTOS</h1>
    <div class="mb-4 d-flex justify-content-start">
      <button class="btn btn-primary" @click="handleAdd">Agregar</button>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>Instrumento</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Imagen</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="instrumento in instrumentos" :key="instrumento.id">
          <td>{{ instrumento.instrumento }}</td>
          <td>{{ instrumento.marca }}</td>
          <td>{{ instrumento.modelo }}</td>
          <td>{{ instrumento.imagen }}</td>
          <td>{{ instrumento.precio }}</td>
          <td>
            <button class="btn btn-primary" @click="handleUpdate(instrumento)">
              Editar
            </button>
            <button class="btn btn-danger" @click="handleDelete(instrumento)">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="selectedInstrumento || isAdding" class="modal">
      <div class="modal-content">
        <h2>
          {{
            selectedInstrumento ? "Editar Instrumento" : "Agregar Instrumento"
          }}
        </h2>
        <InstrumentoFormView
          @add="handleAddInstrumento"
          @update="handleUpdateInstrumento"
          @cancel="handleCancelInstrumento"
          :instrumento="selectedInstrumento || null"
          :isAdding="isAdding"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import InstrumentoFormView from "./InstrumentoFormView.vue";

export default {
  name: "InstrumentoListView",
  components: {
    InstrumentoFormView,
  },
  data() {
    return {
      instrumentos: [],
      selectedInstrumento: null,
      isAdding: false,
    };
  },
  mounted() {
    this.fetchInstrumentos();
  },
  methods: {
    async fetchInstrumentos() {
      const response = await axios.get(
        "http://localhost:8081/api/instrumentos"
      );
      this.instrumentos = response.data;
    },
    handleAdd() {
      this.selectedInstrumento = null;
      this.isAdding = true;
    },
    handleUpdate(instrumento) {
      this.selectedInstrumento = { ...instrumento };
      this.isAdding = false;
    },
    async handleDelete(instrumento) {
      await axios.delete(
        `http://localhost:8081/api/instrumentos/${instrumento.id}`
      );
      this.fetchInstrumentos();
    },
    async handleAddInstrumento(instrumento) {
      try {
        const response = await axios.post(
          "http://localhost:8081/api/instrumentos",
          instrumento
        );
        this.isAdding = false;
        this.fetchInstrumentos();
      } catch (error) {
        console.error("Error al agregar el instrumento:", error);
      }
    },
    async handleUpdateInstrumento(instrumento) {
      try {
        const response = await axios.put(
          `http://localhost:8081/api/instrumentos/${instrumento.id}`,
          instrumento
        );
        this.selectedInstrumento = null;
        this.isAdding = false;
        this.fetchInstrumentos();
      } catch (error) {
        console.error("Error al actualizar el instrumento:", error);
      }
    },
    handleCancelInstrumento() {
      this.selectedInstrumento = null;
      this.isAdding = false;
    },
  },
};
</script>
<style>
/* Estilos CSS opcionales para el componente */
.add-button-container {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-dialog {
  width: 400px;
}

.modal-content {
  background-color: white;
  padding: 20px;
}
</style>
