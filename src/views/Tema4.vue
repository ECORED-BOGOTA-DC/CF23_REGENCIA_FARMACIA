<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Sistema de gestión preparaciones magistrales

    .container-100.d-flex.flex-wrap.align-items-center.mb-4.py-3(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-2.svg')})`}"
      style="background-repeat: no-repeat; background-position: top;"
    )
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p A continuación, se presenta un mapa donde se pueden observar todos los procesos del establecimiento farmacéutico de forma secuencial, resaltando dónde se encuentra el proceso de preparaciones magistrales.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4.mx-auto(data-aos="fade-left")
        img.mb-4.mb-md-auto.mx-auto.me-lg-0(src="@/assets/curso/temas/tema4/img-1.png" style="max-width: 284px" alt="imagen decorativa")
    
    .titulo-sexto.color-acento-botones.mb-5(data-aos="fade-right")
      h5 Figura 1.
      span Procesos de los establecimientos farmacéuticos
    img(src="@/assets/curso/temas/tema4/img-2.svg" alt="Esquema que los procesos inmersos en los establecimientos farmacéuticos, distribuidos así: Necesidades de los clientes Proceso estratégico Direccionamiento estratégico Procesos misionales Prestación del servicio Mercadeo y compras Procesos generales Proceso de selección Procesos de adquisición Proceso de recepción Proceso de almacenamiento Proceso de dispensación Preparaciones magistrales no estériles Proceso de distribución Procesos de apoyo Gestión de calidad Administración y gestión del talento humano Financiero Clientes satisfechos")

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
