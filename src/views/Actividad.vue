<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/falso-verdadero.svg", alt="imagen para actividad de falso y verdadero, Cuestionario")
      .col-12.col-md-8.col-lg-9(data-aos="fade-left")
        .titulo-segundo
          h2 Auditorías y mejora continua en el proceso de elaboración de productos farmacéuticos.
        p.mb-4 Manejar los requisitos mínimos y estándares establecidos en el sistema de gestión de calidad del proceso de elaboración de productos magistrales, con la finalidad de que este sea un proceso de calidad y mejora continua.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Cuestionario
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
