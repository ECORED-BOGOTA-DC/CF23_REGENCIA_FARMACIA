<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Es indispensable contar con un control de calidad completo y ajustado a la norma para el proceso de la elaboración de preparaciones magistrales no estériles, pues es importante cumplir con los requisitos mínimos de aseguramiento donde lo más importante es prevenir los errores en la medicación ya que está en juego la seguridad del paciente. Por esta razón este componente formativo enfatizó los temas del procedimiento y las actividades de mejora tanto preventivas como correctivas en el proceso de elaboración de preparaciones magistrales tópicas no estériles, atendiendo los resultados del sistema de gestión de calidad. Los temas vistos se pueden observar en el esquema que se expone a continuación:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
