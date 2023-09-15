<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Listas de chequeo, auditorías, autoinspección

    .container-100.d-flex.flex-wrap.align-items-center.mb-5.py-3(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-2.svg')})`}"
      style="background-repeat: no-repeat; background-position: top;"
    )
      .col-lg-7.mb-lg-5.ms-auto
        p Las auditorías internas o autoinspecciones son realizadas por la propia empresa, con el fin de revisar el cumplimiento de los estándares de calidad, y constituyen la base para la declaración de conformidad de la empresa.

        p El procedimiento de auditoría se realiza mediante una lista de chequeo, que permite verificar el cumplimiento de una serie de requisitos dentro de la empresa.

      .col-lg-4.mx-auto.mx-lg-0
        img.mb-4.mb-md-auto.mx-auto.me-lg-0(src="@/assets/curso/temas/tema6/img-1.png" style="max-width: 284px" alt="Imagen decorativa")

</template>

<script>
export default {
  name: 'Tema6',
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

<style lang="sass"></style>
