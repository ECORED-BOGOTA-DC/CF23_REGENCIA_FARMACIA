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
        img.m-auto(src="@/assets/curso/temas/tema7/img-1.jpg" style="max-width: 820px" alt="Imagen decorativa") 
      .tarjeta.tarjeta-edit-6.p-4.col-lg-4
        p.mb-2 La realización de las auditorías deja como resultado unos hallazgos que indican si lo auditado está conforme o no conforme y, a partir de esos resultados, se implementan acciones de mejora ante lo que no esté conforme, y se procede a tomar medidas correctivas e implementar preventivas para evitar que vuelva a pasar.
    
    .tarjeta.color-secundario.p-3.mb-5.col-xl-10.mx-auto
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema7/img-2.svg" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.texto-blanco.mb-1 Formato hallazgos de auditorías internas.
              p.texto-blanco.text-small Para entender cómo deben ser los formatos para diligenciar, se invita al aprendiz a revisar el documento, ubicado en la sección material complementario.
            .col-sm-auto
              a.boton.color-acento-bottones(:href="obtenerLink('downloads/OKEst_Anexo5_CF023_Reporte_hallazgos.xlsx')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    .tarjeta.color-secundario.p-3.mb-5.col-xl-10.mx-auto
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema7/img-2.svg" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.texto-blanco.mb-1 Formato de acciones correctivas, preventivas y de mejora. Ejemplo.
              p.texto-blanco.text-small Para entender cómo deben ser los formatos para diligenciar, se invita al aprendiz a revisar el documento, ubicado en la sección material complementario.
            .col-sm-auto
              a.boton.color-acento-bottones.d-flex.justify-content-between(:href="obtenerLink('downloads/OKEst_Anexo4_CF023_GI_F_Acciones_Correctivas_preventivas_y_de_mejora_(vacio).xlsx')" target="_blank" style="min-width: 122px")
                span Descargar
                i.fas.fa-file-download
    
    .tarjeta.color-secundario.p-3.mb-5.col-xl-10.mx-auto
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema7/img-2.svg" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.texto-blanco.mb-1 Formato de acciones correctivas, preventivas y de mejora (vacío).
              p.texto-blanco.text-small Para entender cómo deben ser los formatos para diligenciar, se invita al aprendiz a revisar el documento, ubicado en la sección material complementario.
            .col-sm-auto
              a.boton.color-acento-bottones(:href="obtenerLink('downloads/OKEst_Anexo3_CF023_GI_F_Acciones_Correctivas_preventivas_y_de_mejora_(Ejemplo).xlsx')" target="_blank")
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
