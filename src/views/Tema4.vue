<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Sistema de gestión preparaciones magistrales

    .container-100.d-flex.flex-wrap.align-items-center.mb-4.py-3(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-2.svg')})`}"
      style="background-repeat: no-repeat; background-position: top;"
    )
      .col-lg-8.mb-lg-5
        p A continuación, se presenta un mapa donde se pueden observar todos los procesos del establecimiento farmacéutico de forma secuencial, resaltando dónde se encuentra el proceso de preparaciones magistrales.
      .col-lg-4.mx-auto
        img.mb-4.mb-md-auto.mx-auto.me-lg-0(src="@/assets/curso/temas/tema4/img-1.png" style="max-width: 284px")
    
    .titulo-sexto.color-acento-botones.mb-5
      h5 Figura 1
      span.d-block Procesos de los establecimientos farmacéuticos
    
    img(src="@/assets/curso/temas/tema4/img-2.svg")
</template>

<script>
export default {
  name: 'Tema4',
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
