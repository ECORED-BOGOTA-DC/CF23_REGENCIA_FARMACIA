<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Conceptos de preparaciones magistrales
    
    p.mb-5(data-aos="fade-right") Existen seis conceptos básicos para comprender las preparaciones magistrales, los cuales son:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul" data-aos="zoom-in")
      .row.justify-content-center(titulo="Preparado magistral")
        .col-lg-8.order-lg-1.order-2
          p Es el preparado o producto farmacéutico para atender una prescripción médica de un paciente individual que requiere de algún tipo de intervención técnica de variada complejidad.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img.mx-auto(src='@/assets/curso/temas/tema3/img-1.svg' style="max-width: 280px" alt="Preparado magistral")
      .row.justify-content-center(titulo="Buenas prácticas de manufactura")
        .col-lg-8.order-lg-1.order-2
          p Son las normas, procesos y procedimientos de carácter técnico que aseguran la calidad de los medicamentos, los cosméticos y las preparaciones farmacéuticas a base de recursos naturales.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img.mx-auto(src='@/assets/curso/temas/tema3/img-2.svg' style="max-width: 407px" alt="Buenas prácticas de manufactura")
      .row.justify-content-center(titulo="Buenas prácticas de elaboración magistral")
        .col-lg-8.order-lg-1.order-2
          p Conjunto de normas, procesos y procedimientos de carácter técnico que aseguran la correcta elaboración y el control de calidad de los medicamentos magistrales y los preparados oficinales.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img.mx-auto(src='@/assets/curso/temas/tema3/img-3.svg' style="max-width: 306px" alt="Buenas prácticas de elaboración magistral")
      .row.justify-content-center(titulo="Droga")
        .col-lg-8.order-lg-1.order-2
          p Es toda sustancia que, introducida al organismo por cualquier vía de administración, produce una alteración del natural funcionamiento del sistema de la persona, siendo susceptible a crear dependencia, ya sea psicológica, física o ambas.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img.mx-auto(src='@/assets/curso/temas/tema3/img-4.svg' style="max-width: 399px" alt="imagen decorativa")
      .row.justify-content-center(titulo="Materia prima")
        .col-lg-8.order-lg-1.order-2
          p Toda sustancia activa o inactiva empleada en la fabricación de un medicamento, que puede permanecer inalterada, modificarse o desaparecer en el transcurso del proceso.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img.mx-auto(src='@/assets/curso/temas/tema3/img-5.svg' style="max-width: 300px" alt="Materia prima")
      .row.justify-content-center(titulo="Principio activo")
        .col-lg-8.order-lg-1.order-2
          p También llamado sustancia activa, es considerada toda sustancia o mezcla de sustancias cuyo objetivo es la fabricación de un medicamento, y que se transforman en el componente activo de este. Dicho componente tiene como objetivo generar una acción metabólica, farmacológica e inmunológica, restaurando, corrigiendo o modificando las funciones fisiológicas o realizar un diagnóstico.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img.mx-auto(src='@/assets/curso/temas/tema3/img-6.svg' style="max-width: 422px" alt="Principio activo")

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.acordion
  .acordion__activo
    background-color: #E4DEF4
</style>
