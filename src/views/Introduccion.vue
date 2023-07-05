<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .d-flex.flex-wrap.align-items-center.mb-5
      .col-lg-7.pe-lg-4.order-2.order-lg-1
        p En Colombia, se cuenta con una alta gama de medicamentos para atender las necesidades de salud de la población, sin embargo, hay momentos donde no se cuenta con la presentación o formulación específica requerida para tratar la patología del paciente. De esta necesidad, es de donde surgen las preparaciones magistrales estériles y no estériles. 

        p Aunque las preparaciones magistrales no estériles, como su nombre lo indica, no requieren de un ambiente estéril, sí requieren de condiciones ambientales controladas, de manera que su elaboración cumpla y garantice la calidad de estas. Por esta razón, este proceso conlleva realizar un seguimiento de los lineamientos técnicos y acciones de mejora, de tal forma que, en todo momento, se cumpla con el sistema de gestión de calidad para las preparaciones magistrales no estériles.

        p A continuación, se abordan una serie de temas relacionados con la aplicación de acciones de mejora continua en el proceso de elaboración de preparaciones magistrales tópicas no estériles, según resultados del proceso de verificación. 
      .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-auto.mx-auto
        img(src="@/assets/curso/temas/img-1.svg" style="max-width: 432px;")

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
