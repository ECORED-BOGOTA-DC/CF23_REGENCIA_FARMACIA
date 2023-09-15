<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Conceptos de preparaciones magistrales
    
    p.mb-5 Existen seis conceptos básicos para comprender las preparaciones magistrales, los cuales son:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Preparado magistral")
        .col-md-7.mb-4.mb-md-0
          p Es el preparado o producto farmacéutico para atender una prescripción médica de un paciente individual que requiere de algún tipo de intervención técnica de variada complejidad.
        .col-md-5
          figure
            img.mx-auto(src='@/assets/curso/temas/tema3/img-1.svg' style="max-width: 280px" alt="Preparado magistral")
      .row(titulo="Buenas prácticas de manufactura")
        .col-md-7.mb-4.mb-md-0
          p Son las normas, procesos y procedimientos de carácter técnico que aseguran la calidad de los medicamentos, los cosméticos y las preparaciones farmacéuticas a base de recursos naturales.
        .col-md-5
          figure
            img.mx-auto(src='@/assets/curso/temas/tema3/img-2.svg' style="max-width: 407px" alt="Buenas prácticas de manufactura")
      .row(titulo="Buenas prácticas de elaboración magistral")
        .col-md-7.mb-4.mb-md-0
          p Conjunto de normas, procesos y procedimientos de carácter técnico que aseguran la correcta elaboración y el control de calidad de los medicamentos magistrales y los preparados oficinales.
        .col-md-5
          figure
            img.mx-auto(src='@/assets/curso/temas/tema3/img-3.svg' style="max-width: 306px" alt="Buenas prácticas de elaboración magistral")
      .row(titulo="Droga")
        .col-md-7.mb-4.mb-md-0
          p Es toda sustancia que, introducida al organismo por cualquier vía de administración, produce una alteración del natural funcionamiento del sistema de la persona, siendo susceptible a crear dependencia, ya sea psicológica, física o ambas.
        .col-md-5
          figure
            img.mx-auto(src='@/assets/curso/temas/tema3/img-4.svg' style="max-width: 399px" alt="imagen decorativa")
      .row(titulo="Materia prima")
        .col-md-7.mb-4.mb-md-0
          p Toda sustancia activa o inactiva empleada en la fabricación de un medicamento, que puede permanecer inalterada, modificarse o desaparecer en el transcurso del proceso.
        .col-md-5
          figure
            img.mx-auto(src='@/assets/curso/temas/tema3/img-5.svg' style="max-width: 300px" alt="Materia prima")
      .row(titulo="Principio activo")
        .col-md-7.mb-4.mb-md-0
          p También llamado sustancia activa, es considerada toda sustancia o mezcla de sustancias cuyo objetivo es la fabricación de un medicamento, y que se transforman en el componente activo de este. Dicho componente tiene como objetivo generar una acción metabólica, farmacológica e inmunológica, restaurando, corrigiendo o modificando las funciones fisiológicas o realizar un diagnóstico.
        .col-md-5
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
