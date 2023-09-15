<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Conceptos de calidad
    
    .container-100.d-flex.flex-wrap.mb-5.py-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-2.svg')})`}"
      style="background-repeat: no-repeat; background-position: top;"
    )
      p.mb-5.w-100 A continuación, se definen, desde la Norma ISO-9000, algunos conceptos de calidad que son relevantes para la comprensión de los temas posteriores.

      .d-flex.flex-wrap
        ol.col-lg-8.order-2.order-lg-1.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            p <b>Acciones correctivas:</b> acción para eliminar la causa de una no conformidad y evitar que vuelva a ocurrir. Está acción se toma para prevenir que algo vuelva a ocurrir.
          li 
            .lista-ol--cuadro__vineta
              span 2
            p <b>Acciones de mejora:</b> es una actividad recurrente para mejorar el desempeño. La mejora es un proceso continuo, mediante el uso de hallazgos de la auditoría y de conclusiones de la auditoría, del análisis de los datos, de las revisiones por la dirección u otros medios, y generalmente conduce a una acción correctiva o una acción preventiva.
          li 
            .lista-ol--cuadro__vineta
              span 3
            p <b>Acciones preventivas:</b> es la acción tomada para eliminar la causa de una no conformidad u otra situación potencial no deseable, es decir, esta se toma para prevenir que algo ocurra.
          li 
            .lista-ol--cuadro__vineta
              span 4
            p <b>Auditoría:</b> es un proceso sistemático, independiente y documentado, para obtener evidencias objetivas y evaluarlas de manera objetiva, con el fin de determinar el grado en que se cumplen los criterios de auditoría. Estas pueden ser internas o externas.
          li 
            .lista-ol--cuadro__vineta
              span 5
            p <b>Formato:</b> es el conjunto de las características técnicas y de presentación de un texto, objeto o documento en distintos ámbitos, tanto reales como virtuales.
          
        .mb-5.mb-lg-auto.col-lg-4.mx-auto.mt-auto.order-1.order-lg-2.ps-lg-4
          img(src="@/assets/curso/temas/tema2/img-1.svg" style="max-width: 397px" alt="imagen decorativa")
    
    .d-flex.flex-wrap.mb-4
      .d-flex.flex-wrap
        .mb-5.mb-lg-auto.col-lg-4.mx-auto.mt-auto.pe-lg-4
          img(src="@/assets/curso/temas/tema2/img-2.svg" style="max-width: 397px" alt="imagen decorativa")
        ol.col-lg-8.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 6
            p <b>Gestión de la Calidad:</b> es la gestión con respecto a la calidad, que incluye el establecimiento de políticas de la calidad y los objetivos de la calidad y los procesos para lograr estos objetivos de la calidad a través de la planificación de la calidad, el aseguramiento de la calidad, el control de la calidad y la mejora de la calidad.
          li 
            .lista-ol--cuadro__vineta
              span 7
            p <b>Hallazgo:</b> son los resultados de la evaluación de la evidencia de la auditoría. Estos indican conformidad o no conformidad, además, pueden conducir a la identificación de oportunidades para la mejora o el registro de buenas prácticas.
          li 
            .lista-ol--cuadro__vineta
              span 8
            p <b>Lista de chequeo:</b> son formatos de control, se crean para registrar actividades repetitivas y controlar el cumplimiento de una serie de requisitos o recolectar datos ordenadamente y de forma sistemática.
          li 
            .lista-ol--cuadro__vineta
              span 9
            p <b>No conformidad:</b> es el incumplimiento de un requisito.
          li 
            .lista-ol--cuadro__vineta
              span 10
            p <b>Norma técnica:</b> es un documento que establece, por consenso, y con la aprobación de un organismo reconocido, las condiciones mínimas que debe reunir un producto, proceso o servicio para que sirva al uso al que está destinado. En Colombia, existe la NTC, que es el Organismo Nacional de Normalización de Colombia. Entre sus labores, se destaca la creación de normas técnicas y la certificación de normas de calidad para empresas y actividades profesionales.
          

    .container-100.d-flex.flex-wrap.py-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: bottom;"
    )
      .d-flex.flex-wrap
        ol.col-lg-8.order-2.order-lg-1.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 11
            p <b>Principios de calidad:</b> se derivan de la experiencia colectiva y del conocimiento de los expertos internacionales que participan en el Comité Técnico ISO / TC 176 - Gestión de la calidad y aseguramiento de la calidad, responsable del desarrollo y mantenimiento de las normas ISO 9000. Los principios de gestión de la calidad son premisas que pueden ser utilizados por la alta dirección con el fin de conducir a la organización hacia una mejora en la actividad.
          li 
            .lista-ol--cuadro__vineta
              span 12
            p <b>Procedimiento:</b> forma especificada de llevar a cabo una actividad o un proceso, que puede estar documentado o no.
          li 
            .lista-ol--cuadro__vineta
              span 13
            p <b>Proceso:</b> es un conjunto de actividades mutuamente relacionadas que utilizan las entradas para proporcionar un resultado previsto que se denomina salida, producto o servicio dependiendo del contexto de referencia. Los procesos en una organización generalmente se planifican y se realizan bajo condiciones controladas para agregar valor.
          li 
            .lista-ol--cuadro__vineta
              span 14
            p <b>Protocolo:</b> es un conjunto único de reglas que explican la conducta y los procedimientos correctos que deben seguir los empleados de una organización o empresa.
          li 
            .lista-ol--cuadro__vineta
              span 15
            p <b>Registro:</b> es un documento que presenta resultados obtenidos o proporciona evidencia de actividades realizadas. Los registros pueden utilizarse, por ejemplo, para formalizar la trazabilidad y para proporcionar evidencia de verificaciones, acciones preventivas y acciones correctivas.

          
        .mb-5.mb-lg-auto.col-lg-4.mx-auto.mt-auto.order-1.order-lg-2.ps-lg-4
          img(src="@/assets/curso/temas/tema2/img-3.svg" style="max-width: 397px" alt="imagen decorativa")

</template>

<script>
export default {
  name: 'Tema2',
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
.lista-ol--cuadro
  li
    display: flex
    .lista-ol--cuadro__vineta
      width: 30px
      height: 30px
      min-width: 30px
      display: flex
      align-items: center
      justify-content: center
      border-radius: 50%
      color: black
      font-weight: bold
</style>
