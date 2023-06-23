<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 text-center">
          <h1>Estamos aquí</h1>
          <p class="lead">
            Encuéntranos en Av. Las Heras y Av. San Martin, Ciudad de Mendoza.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d209.40288004493593!2d-68.83824675011921!3d-32.886372276116525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1681522991151!5m2!1ses-419!2sar"
            width="600" height="600" style="border: 0; margin: auto;"
            loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          <router-link to="/productos" class="btn btn-primary btn-lg mt-3">Ver nuestros productos</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DondeEstamosView',
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente */
  </style>
  