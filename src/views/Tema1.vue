<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Sistema de Gestión de la Calidad (SGC)
    
    .container-img-text.col-xl-10.mx-auto.mb-5
      img.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema1/img-1.svg" style="max-width: 388px" alt="imagen decorativa")
      .tarjeta.tarjeta-img-text
        p.mb-0 El SGC es una determinación que toma la empresa como estrategia, con el propósito de documentar todas las actividades y mejorar continuamente su desempeño.

    .container-100.d-flex.flex-wrap.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: bottom right;"
    )
      .col-lg-8
        .bloque-texto-d.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3 Una herramienta de gestión sistemática y transparente, que permite dirigir y evaluar el desempeño del servicio farmacéutico, en términos de calidad y satisfacción social en la prestación de los servicios a su cargo, la cual está enmarcada en los planes estratégicos y de desarrollo de las organizaciones a que pertenece el servicio. El Sistema de Gestión de la Calidad adoptará, en cada servicio, un enfoque basado en los procesos que ofrezca y en las expectativas de los usuarios, destinatarios y beneficiarios de este
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h6.mb-0 (Resolución 1403 de 2007- Artículo 17 Sistema de Gestión de la Calidad).
      .col-lg-4.mx-auto
        img.mb-4.mb-md-auto.mx-auto.me-lg-0(src="@/assets/curso/temas/tema1/img-2.png" style="max-width: 284px" alt="imagen decorativa")

    p.mb-5 La normatividad legal vigente para establecimientos y servicios farmacéuticos requiere que el SGC tenga un enfoque basado en procesos. <b>La Norma ISO 9001 del 2008</b> define dicho enfoque como:

    .d-flex.flex-wrap.mb-5
      .col-lg-8.order-2.order-lg-1.pe-lg-4
        .bloque-texto-d.p-4.mb-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3 Una herramienta de gestión sistemática y transparente, que permite dirigir y evaluar el desempeño del servicio farmacéutico, en términos de calidad y satisfacción social en la prestación de los servicios a su cargo, la cual está enmarcada en los planes estratégicos y de desarrollo de las organizaciones a que pertenece el servicio. El Sistema de Gestión de la Calidad adoptará, en cada servicio, un enfoque basado en los procesos que ofrezca y en las expectativas de los usuarios, destinatarios y beneficiarios de este
            i.fas.fa-quote-right
        p.mb-4 Las Normas ISO 9000, en general, son una agrupación de normas e indicaciones internacionales para la constitución del Sistema de Gestión de la Calidad. Específicamente, la Norma ISO-9001-2015 (cuarta actualización) está centrada en toda la parte administrativa del SGC, es decir, en todos los elementos con los que una empresa debe contar para garantizar un proceder efectivo, que le permita dirigir y estar en mejora continua de sus productos y servicios.
        .cajon.color-secundario.p-4.mb-4.mb-lg-0(style="background-color: #E4DDFA")
          p Cabe aclarar que cada uno de los requisitos planteados en la Norma ISO-9001 aplica para todas las empresas u organizaciones, independientemente del tipo, tamaño y productos y/o servicios proporcionados.
      .col-lg-4.mx-auto.mt-auto.order-1.order-lg-2
        img.mb-4.mb-md-auto.mx-auto.me-lg-0(src="@/assets/curso/temas/tema1/img-3.svg" style="max-width: 373px" alt="imagen decorativa")

    .container-100.d-flex.flex-wrap.mb-5.py-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-2.svg')})`}"
      style="background-repeat: no-repeat; background-position: top;"
    )
      h3 Beneficios del Sistema de Gestión de la Calidad
      p.mb-5 La implementación de un SGC basado en la Norma ISO- 9001, para cualquier organización, trae varios beneficios, como son:
      .d-flex.flex-wrap
        .col-lg-4.mt-auto
          img.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema1/img-4.svg" style="max-width: 402px" alt="imagen decorativa")
        .col-lg-8.ps-lg-4
          .d-flex.flex-wrap.mb-4
            .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
              .tarjeta-numerada.color-acento-contenido.p-5
                .tarjeta-numerada__numero
                  .h2 1
                p.mb-0 Ofrecer productos y servicios de calidad, que satisfagan las necesidades de los clientes, siempre bajo el margen de la normatividad y legalidad aplicables.

            .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
              .tarjeta-numerada.color-acento-contenido.p-5
                .tarjeta-numerada__numero
                  .h2 2
                p Favorecer las oportunidades de incrementar los indicadores de satisfacción de los clientes.
          .d-flex.flex-wrap.mb-4.mb-lg-auto
            .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
              .tarjeta-numerada.color-acento-contenido.p-5
                .tarjeta-numerada__numero
                  .h2 3
                p.mb-0 Adquirir la capacidad de enfrentar todos los riesgos y las oportunidades que estén ligadas con el contexto empresarial y los objetivos de la misma.

            .col-md-6.col-xl.mb-4.mb-xl-0.d-flex
              .tarjeta-numerada.color-acento-contenido.p-5
                .tarjeta-numerada__numero
                  .h2 4
                p Tener la capacidad de demostrar que la empresa está conformada de acuerdo con los requisitos especificados por el SGC.

    h3.mb-4 Enfoque del Sistema de Gestión de la Calidad basado en la norma internacional

    p Como ya se mencionó anteriormente, la Norma ISO-9001 tiene un enfoque a procesos, el cual permite que la empresa pueda planificar cada uno de los procesos que lleva a cabo y sus intersecciones.

    p.mb-5.mb-md-0 Este enfoque de procesos incluye el ciclo PHVA (Planificar, Hacer, Verificar y Actuar), el cual permite a la empresa cerciorarse y garantizar que cada uno de sus procesos cuenta con los recursos necesarios y que se están llevando a cabo adecuadamente, además, determinar las oportunidades de mejora y actuar en consecuencia.

    .container-100.d-flex.flex-wrap.mb-5.py-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-3.svg')})`}"
      style="background-repeat: no-repeat; background-position: center;"
    )
      ImagenInfografica.color-secundario.mx-auto.infografia-edit
        template(v-slot:imagen)
          figure
            img.mx-auto(src="@/assets/curso/temas/tema1/img-5.svg" style="max-width: 402px; filter: drop-shadow(2px 8px 6px #00000010);" alt="ciclo PHVA planificar, hacer, verificar y Actuar")

        .tarjeta.p-3(x="29%" y="29.5%" numero="" style="background-color: #E4DEF4")
          b Actuar
          p Se toman acciones de mejora de desempeño.
        .tarjeta.p-3(x="72%" y="29.5%" numero="" style="background-color: #E4DEF4")
          b Hacer
          p Poner en práctica lo planificado.
        .tarjeta.p-3(x="29%" y="68%" numero="" style="background-color: #E4DEF4")
          b Planificar
          p En este punto, se establecen los objetivos y los recursos, además, se identifican y abordan los riesgos y las oportunidades.
        .tarjeta.p-3(x="72%" y="68%" numero="" style="background-color: #E4DEF4")
          b Verificar
          p Se realiza seguimiento y medición de los procesos, productos, servicios, objetivos, requisitos y actividades planificadas, y se elabora un informe de resultados.

    h3.mb-4 Principios de gestión de la calidad

    p Los principios de gestión de la calidad son aquellos definidos en la Norma ISO-9000 y que toda empresa debe seguir para lograr obtener los mejores resultados. Un Sistema de Gestión de la Calidad puede estar muy bien implementado desde los requisitos de la ISO-9001, pero, si no sigue los principios, sus objetivos de seguro no podrán ser alcanzados.

    p.mb-5 Los siete principios de la gestión de la calidad descritos en la Norma ISO-9000 son:

    TabsC.color-secundario
      .py-3.py-md-4(titulo="Enfoque")
        .row.col-xl-11.mx-auto
          .col-md-5.mb-4.mb-md-0
            h4 Enfoque al cliente
            p La razón de ser de cualquier empresa son los clientes, por lo tanto, es de vital importancia conocer y entender las necesidades de estos, actuales y a futuro, de manera que se puedan ofrecer las soluciones pertinentes al caso e intentar superar sus expectativas. Ante ello, es importante tener presente que las necesidades de los consumidores son cambiantes a medida que pasa el tiempo, lo que conlleva que cada vez el cliente sea más exigente y esté mucho más informado.
          .col-md-7
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/tbc-1.svg' style="max-width: 610px" alt="imagen decorativa")
      .py-3.py-md-4(titulo="Liderazgo")
        .row.col-xl-11.mx-auto
          .col-md-5.mb-4.mb-md-0
            h4 Liderazgo
            p En toda empresa, debe haber líderes que orienten al recurso humano, que creen y mantengan un ambiente laboral óptimo que impulse a todo el equipo de trabajo a buscar el logro de los objetivos de la empresa. El liderazgo es una cadena que involucra a todo el personal, sin excepción, que labora en la empresa.
          .col-md-7
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/tbc-2.svg' style="max-width: 610px" alt="imagen decorativa")
      .py-3.py-md-4(titulo="Compromiso")
        .row.col-xl-11.mx-auto
          .col-md-5.mb-4.mb-md-0
            h4 Compromiso de las personas
            p El buen funcionamiento y logro de objetivos de cualquier organización está en manos del personal que labora en ella, por lo cual, contar con un recurso humano comprometido posibilita el logro de estos. La motivación, <b>los incentivos</b> y los reconocimientos al personal favorecen el compromiso de estos.
          .col-md-7
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/tbc-3.svg' style="max-width: 610px" alt="imagen decorativa")
      .py-3.py-md-4(titulo="Mejora")
        .row.col-xl-11.mx-auto
          .col-md-5.mb-4.mb-md-0
            h4 Mejora
            p La mejora continua debe ser un objetivo <b>inalterable</b> dentro de toda organización.
          .col-md-7
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/tbc-4.svg' style="max-width: 610px" alt="imagen decorativa")
      .py-3.py-md-4(titulo="Decisiones")
        .row.col-xl-11.mx-auto
          .col-md-5.mb-4.mb-md-0
            h4 Toma de decisiones basada en la evidencia
            p Las buenas decisiones solo se pueden tomar cuando se tiene información clara, concisa y veraz; por lo tanto, estas deben estar centradas en el análisis de datos e información obtenida.
          .col-md-7
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/tbc-5.svg' style="max-width: 610px" alt="imagen decorativa")
      .py-3.py-md-4(titulo="Gestión")
        .row.col-xl-11.mx-auto
          .col-md-5.mb-4.mb-md-0
            h4 Gestión de las relaciones
            p Este principio está enfocado en la relación con los proveedores, ya que crear alianzas estratégicas con ellos contribuye a que la empresa sea más competitiva, mejore la productividad y, por ende, aumente la rentabilidad. Las alianzas siempre son benéficas tanto para la empresa como para los proveedores.
          .col-md-7
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/tbc-6.svg' style="max-width: 610px" alt="imagen decorativa")

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.container-img-text
  display: flex
  align-items: center
  img
    position: relative
  .tarjeta-img-text
    padding: 1.5rem
    padding-left: 8rem
    background-color: #F6F6F6
    margin-left: -6rem
  @media (max-width: 768px)
    flex-wrap: wrap
    .tarjeta-img-text
      padding-left: 1.5rem
      margin-left: 0
.bloque-texto-d
  border-top: 0
  &::before
    background-color: #EFFAFE
.infografia-edit
  .img-infografica__item
    &:nth-child(2)
      .img-infografica__item__dot
        &::before
          background-color: #FF9D00
        &::after
          background-color: #FF9D00
    &:nth-child(3)
      .img-infografica__item__dot
        &::before
          background-color: #81D4FA
        &::after
          background-color: #81D4FA
    &:nth-child(4)
      .img-infografica__item__dot
        &::before
          background-color: #15D3EC
        &::after
          background-color: #15D3EC
</style>
