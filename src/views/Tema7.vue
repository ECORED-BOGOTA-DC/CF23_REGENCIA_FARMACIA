<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Hallazgos, no conformidades, acciones de mejora preventivas y correctivas

    .d-flex.flex-wrap.align-items-center.mb-5
      .col-lg-8.mb-4.my-lg-auto
        img.m-auto(src="@/assets/curso/temas/tema7/img-1.jpg" style="max-width: 820px")
      .tarjeta.tarjeta-edit-6.p-4.col-lg-4
        p.mb-2 La realización de las auditorías deja como resultado unos hallazgos que indican si lo auditado está conforme o no conforme y, a partir de esos resultados, se implementan acciones de mejora ante lo que no esté conforme, y se procede a tomar medidas correctivas e implementar preventivas para evitar que vuelva a pasar.
    
    .tarjeta.color-secundario.p-3.mb-5.col-xl-10.mx-auto
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema7/img-2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.texto-blanco.mb-1 Procedimiento de elaboración y control
              p.texto-blanco.text-small Para mayor profundización en el tema, se invita al aprendiz a consultar el siguiente documento donde se encontrará un ejemplo de un procedimiento que aplica al proceso descrito.
            .col-sm-auto
              a.boton.color-acento-bottones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    .tarjeta.color-secundario.p-3.mb-5.col-xl-10.mx-auto
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema7/img-2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.texto-blanco.mb-1 Farmacia comunitaria
              p.texto-blanco.text-small Con el fin de profundizar en el tema del proceso de elaboración de una preparación magistral en sus diferentes etapas, se invita al aprendiz a consultar el video Farmacia Comunitaria, ubicado en el material complementario.
            .col-sm-auto
              a.boton.color-acento-bottones.d-flex.justify-content-between(:href="obtenerLink('downloads/prueba.pdf')" target="_blank" style="min-width: 122px")
                span Ver
                i.fas.fa-link
    
    .tarjeta.color-secundario.p-3.mb-5.col-xl-10.mx-auto
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema7/img-2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.texto-blanco.mb-1 Procedimiento de elaboración y control
              p.texto-blanco.text-small Para mayor profundización en el tema, se invita al aprendiz a consultar el siguiente documento donde se encontrará un ejemplo de un procedimiento que aplica al proceso descrito.
            .col-sm-auto
              a.boton.color-acento-bottones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
</template>

<script>
export default {
  name: 'Tema7',
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
.tarjeta-edit-6
  border-radius: 20px
  border-bottom-right-radius: 0
  background-color: #CDEDFC
  margin-left: -4rem
  margin-right: auto
  @media (max-width: 991px)
    margin-left: auto
    border-radius: 20px
</style>
