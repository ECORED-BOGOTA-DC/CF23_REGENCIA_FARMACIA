<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Procedimiento y formatos utilizados en el proceso
    
    .d-flex.flex-wrap.align-items-center.mb-5
      .col-lg-7.mb-4.my-lg-auto
        img.m-auto(src="@/assets/curso/temas/tema5/img-1.png" style="max-width: 715px")
      .tarjeta.tarjeta-edit-5.p-4.col-lg-5
        p.mb-2 Las preparaciones magistrales, como cualquier otro medicamento, deben cumplir requisitos de:
        ul.lista-ul--color.mb-2
          li.d-flex.align-items-start
            img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
            p.mb-0.ps-2 Seguridad
          li.d-flex.align-items-start
            img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
            p.mb-0.ps-2 Eficacia
          li.d-flex.align-items-start
            img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
            p.mb-0.ps-2 Calidad
          li.d-flex.align-items-start
            img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
            p.mb-0.ps-2 Identificación correcta
          li.d-flex.align-items-start
            img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
            p.mb-0.ps-2 Información debida
        p.mb-0 Se debe estudiar de manera muy precisa la fórmula médica, identificar si es posible su correcta elaboración, es decir, si existe una validación de la fórmula por parte del químico farmacéutico responsable.
        
    p.mb-5 Para iniciar con el proceso de elaboración se debe cumplir con unos requisitos, que soporten el proceso y permitan que, a través de su correcta aplicación, se dé cumplimiento a las Buenas Prácticas de Elaboración (BPE), que involucran: 

    .d-flex.flex-wrap
      .col-12.col-md-6.col-lg-4.col-xl-3
        .tarjeta-edit-5_1
          span 1
          p.mb-0.text-center Materiales
      .col-12.col-md-6.col-lg-4.col-xl-3
        .tarjeta-edit-5_1
          span 2
          p.mb-0.text-center Áreas
      .col-12.col-md-6.col-lg-4.col-xl-3
        .tarjeta-edit-5_1
          span 3
          p.mb-0.text-center Equipos
      .col-12.col-md-6.col-lg-4.col-xl-3
        .tarjeta-edit-5_1
          span 4
          p.mb-0.text-center Personal idóneo
      .col-12.col-md-6.col-lg-4.col-xl-3
        .tarjeta-edit-5_1
          span 5
          p.mb-0.text-center Materias primas
      .col-12.col-md-6.col-lg-4.col-xl-3
        .tarjeta-edit-5_1
          span 6
          p.mb-0.text-center Equipos
      .col-12.col-md-6.col-lg-4.col-xl-3
        .tarjeta-edit-5_1.mb-0
          span 7
          p.mb-0.text-center Documentación
    Separador

    .titulo-segundo.color-botones
      h2#t_5_1 5.1. Procedimiento del proceso de elaboración de preparados magistrales
    
    p.mb-5 Como todo proceso, las preparaciones magistrales deben tener como base un manual y/o procedimiento y los respectivos documentos que se generan de estos (instructivos, formatos), donde se detalle la siguiente información:


    .container-100.d-flex.flex-wrap.align-items-center.mb-5.py-4(
      style="background: linear-gradient(135deg, rgba(0,188,212,1) 0%, rgba(55,198,228,1) 50%, rgba(129,212,250,1) 100%);"
    )
      .col-lg-11.d-flex.flex-wrap.align-items-center
        .col-lg-5.tarjeta.tarjeta-edit-5_2.p-4.order-2.order-lg-1(style="background-color: #FFFFFF; border-bottom-left-radius: 0")
          ul.lista-ul--color.mb-0
            li.d-flex.align-items-start
              img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
              p.mb-0.ps-2 Nombre del proceso.
            li.d-flex.align-items-start
              img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
              p.mb-0.ps-2 Alcance.
            li.d-flex.align-items-start
              img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
              p.mb-0.ps-2 Responsables.
            li.d-flex.align-items-start
              img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
              p.mb-0.ps-2 Objetivo.
            li.d-flex.align-items-start
              img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
              p.mb-0.ps-2 Glosarios y siglas.
            li.d-flex.align-items-start
              img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
              p.mb-0.ps-2 Contenido (donde se detallan secuencialmente las actividades a realizar en orden).
            li.d-flex.align-items-start
              img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
              p.mb-0.ps-2 Documentos de referencia.
            li.d-flex.align-items-start
              img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
              p.mb-0.ps-2 Registros que se generan.
            li.d-flex.mb-0.align-items-start
              img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
              p.mb-0.ps-2 Anexos (en caso de que apliquen).
        .col-lg-7.order-1.order-lg-2.mb-4.my-lg-auto
          img.m-auto(src="@/assets/curso/temas/tema5/img-1.png" style="max-width: 715px")

    .tarjeta.color-secundario.p-3.mb-5.col-xl-10.mx-auto
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema5/img-4.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.texto-blanco.mb-1 Procedimiento de elaboración y control
              p.texto-blanco.text-small Para mayor profundización en el tema, se invita al aprendiz a consultar el siguiente documento donde se encontrará un ejemplo de un procedimiento que aplica al proceso descrito.
            .col-sm-auto
              a.boton.color-acento-bottones(:href="obtenerLink('downloads/Anexo1_CF023_Procedimiento_de_elaboracion_y_control_de_preparaciones_magistrales.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    .tarjeta.color-secundario.p-3.mb-5.col-xl-10.mx-auto
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema5/img-5.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.texto-blanco.mb-1 Farmacia comunitaria
              p.texto-blanco.text-small Con el fin de profundizar en el tema del proceso de elaboración de una preparación magistral en sus diferentes etapas, se invita al aprendiz a consultar el video Farmacia Comunitaria, ubicado en el material complementario.
            .col-sm-auto
              a.boton.color-acento-bottones.d-flex.justify-content-between(href="https://www.youtube.com/watch?v=207Fe-M_5K4" target="_blank" style="min-width: 122px")
                span Ver
                i.fas.fa-link

    p.mb-5 En el siguiente flujograma, se muestran las etapas del proceso de elaboración de los preparados magistrales, desde la prescripción médica, pasando por las verificaciones de las condiciones locativas, para garantizar la pertinencia con las Buenas Prácticas de Elaboración, controles de calidad, acondicionamiento y dispensación al usuario final.

    .titulo-sexto.color-acento-botones.mb-5
      h5 Figura 2
      span.d-block Flujograma proceso fabricación preparaciones magistrales
    
    img.mb-5(src="@/assets/curso/temas/tema5/img-6.svg")

    p.mb-4 En este recorrido por el proceso de elaboración de las preparaciones se tratarán los siguientes temas:
    ul.lista-ul--color
      li.d-flex.align-items-start
        img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
        p.mb-0.ps-2 Requisitos del área de recepción.
      li.d-flex.align-items-start
        img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
        p.mb-0.ps-2 Requisitos del área de almacenamiento.
      li.d-flex.align-items-start
        img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
        p.mb-0.ps-2 Requisitos del paquete técnico de producción <em>(Batch Record)</em>: orden de producción, despeje de línea inicial, procedimiento de elaboración, producto en proceso, despeje de línea final, lista de chequeo de proceso de llenado, limpieza de equipos.
      li.d-flex.align-items-start
        img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
        p.mb-0.ps-2 Equipos necesarios para el proceso de elaboración.
    
    Separador

    .titulo-segundo.color-botones
      h2#t_5_2 5.2. Requisitos área de recepción y almacenamiento de las preparaciones magistrales
    
    .container-100.d-flex.flex-wrap.align-items-center.mb-5.py-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-2.svg')})`}"
      style="background-repeat: no-repeat; background-position: top;"
    )
      p.mb-5 El área para la recepción de materias primas y materiales de acondicionamiento debe ser independiente del área de fabricación que debe estar identificada y debe contar con las zonas delimitadas de ingresos, cuarentena y material rechazado.
      .col-lg-10.col-xl-6.mx-auto
        .titulo-sexto.color-acento-botones.mb-4
          h5 Figura 3
          span.d-block Área de recepción y almacenamiento
        
        img.mb-5(src="@/assets/curso/temas/tema5/img-7.jpg")
    
    p Los requisitos del área de recepción y almacenamiento de materias primas son:

    .container-100.d-flex.flex-wrap.py-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: bottom;"
    )
      .d-flex.flex-wrap.mb-4
        .col-md-6.col-xl-4.mb-4.d-flex
          .tarjeta-numerada.color-acento-contenido.p-5
            .tarjeta-numerada__numero
              .h2 1
            p.mb-0 El área de almacenamiento de materias primas y material de acondicionamiento debe ser de acceso restringido para personas ajenas al establecimiento; asimismo, debe ser de fácil limpieza, equipado con mobiliario adecuado para este fin, con una separación mínima de 20 cm del suelo y del techo que facilite su limpieza y garantice la protección del polvo y la luz (si aplica).

        .col-md-6.col-xl-4.mb-4.d-flex
          .tarjeta-numerada.color-acento-contenido.p-5
            .tarjeta-numerada__numero
              .h2 2
            p Debe contar con un refrigerador para los productos que requieran refrigeración que incluya un termómetro y los registros de temperatura correspondientes, con sus límites de alerta y de acción.

        .col-md-6.col-xl-4.mb-4.d-flex
          .tarjeta-numerada.color-acento-contenido.p-5
            .tarjeta-numerada__numero
              .h2 3
            p Las áreas destinadas para el almacenamiento de especialidades farmacéuticas deberán estar separadas y ser completamente independientes. 

        .col-md-6.col-xl-4.mb-4.d-flex
          .tarjeta-numerada.color-acento-contenido.p-5
            .tarjeta-numerada__numero
              .h2 4
            p.mb-0 El mobiliario para el resguardo del material de acondicionamiento debe ser adecuado para evitar su contaminación y que se ponga directamente en el piso.

        .col-md-6.col-xl-4.mb-4.d-flex
          .tarjeta-numerada.color-acento-contenido.p-5
            .tarjeta-numerada__numero
              .h2 5
            p Las etiquetas deben estar almacenadas en un lugar protegido de la humedad y de acceso controlado.
            
        .col-md-6.col-xl-4.mb-4.d-none.d-md-flex.ps-4
          img.ms-auto(src="@/assets/curso/temas/tema5/img-8.svg" style="max-width: 295px")
    Separador

    .titulo-segundo.color-botones
      h2#t_5_3 5.3. Paquete técnico de producción <em>(Batch Record)</em>
    
    .d-flex.flex-wrap.mb-5
      img.my-auto.col-lg-4.m-auto(src="@/assets/curso/temas/tema5/img-9.jpg" style="max-width: 428px")
      .col-12.col-lg-4.d-flex.flex-wrap.p-4.py-lg-3(style="background-color: #D3EFFC")
        p En este paquete tan importante dentro del proceso de elaboración de los productos farmacéuticos, es donde se dejan evidencias de todas las etapas necesarias, se consignan registros como: 
        ul.lista-ul--color.mb-0
          li.d-flex.align-items-start
            img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
            p.mb-0.ps-2 Orden de producción.
          li.d-flex.align-items-start
            img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
            p.mb-0.ps-2 Despeje de línea inicial.
          li.d-flex.align-items-start
            img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
            p.mb-0.ps-2 Procedimiento de elaboración.
          li.d-flex.align-items-start
            img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
            p.mb-0.ps-2 Producto en proceso.
          li.d-flex.align-items-start
            img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
            p.mb-0.ps-2 Despeje de línea final.
          li.d-flex.align-items-start
            img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
            p.mb-0.ps-2 Lista de chequeo de proceso de llenado.
          li.d-flex.mb-0.align-items-start
            img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
            p.mb-0.ps-2 Limpieza de equipos.
      img.my-auto.col-lg-4.m-auto(src="@/assets/curso/temas/tema5/img-10.jpg" style="max-width: 428px")
    
    p Cada uno de los lotes que se produzcan de un medicamento, debe tener su propio <em>Batch Record</em> y ser almacenados y controlados por el director técnico responsable del servicio o establecimiento farmacéutico. 

    p.mb-5 En tal sentido, a continuación, se encuentran las definiciones, requisitos y responsables de este proceso:

    .p-4.mb-5(style="background-color: #F6F6F6")
      SlyderA.col-xl-11.mx-auto(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0.order-2.order-md-1
            h4 Definiciones
            ul.lista-ul--color.mb-0
              li.d-flex.align-items-start
                img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                p.mb-0.ps-2 <b><em>Batch Record</em> (BR):</b> registro que contiene la información sobre la producción y el control ejercido en las diferentes etapas de fabricación y/o acondicionamiento de un producto.
              li.d-flex.align-items-start
                img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                p.mb-0.ps-2 <b>Liberación del lote:</b> aprobar y autorizar el lote para su distribución.
              li.d-flex.align-items-start
                img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                p.mb-0.ps-2 <b>Lote origen (LO):</b> lote origen (del material) y/o asignado por el cliente.
              li.d-flex.align-items-start
                img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                p.mb-0.ps-2 <b>Lote interno (LI):</b> lote asignado por producción y gestión.
          .col-md-6.order-1.order-md-2.mb-4.mb-md-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema5/img-12.png' style="max-width: 408px")
        .row
          .col-md-6.mb-4.mb-md-0.order-2.order-md-1
            h4 Definiciones
            ul.lista-ul--color.mb-0
              li.d-flex.align-items-start
                img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                p.mb-0.ps-2 El <em>Batch Record</em> debe ser diligenciado por el personal encargado de cada proceso.
              li.d-flex.align-items-start
                img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                p.mb-0.ps-2 La información debe ser legible, sin enmendaduras y no se deben dejar espacios en blanco. 
              li.d-flex.align-items-start
                img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                p.mb-0.ps-2 Diligenciar cada campo del <em>Batch Record</em> en el momento en que se está realizando el proceso indicado. Los documentos deben llenarse con esfero de tinta negra.
              li.d-flex.align-items-start
                img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                p.mb-0.ps-2 Cuando varias actividades que se ejecuten en una misma hoja del <em>Batch Record</em> ocurren simultáneamente en 2 o más procesos. Se debe contar con una copia de esta en cada proceso que se adjuntará al <em>Batch Record</em>.
              li.d-flex.align-items-start
                img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                p.mb-0.ps-2 Cuando los campos disponibles para diligenciar se agoten en alguna de las hojas. Se debe diligenciar una copia en blanco de la misma hoja. 
              li.d-flex.align-items-start
                img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                p.mb-0.ps-2 El personal encargado debe solicitar a su jefe inmediato el <em>Batch Record</em> para diligenciar inmediatamente le sea entregada la orden de producción.
          .col-md-6.order-1.order-md-2.mb-4.mb-md-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema5/img-13.png' style="max-width: 408px")
        
        .row
          .col-md-6.mb-4.mb-md-0.order-2.order-md-1
            h4 Definiciones
            ul.lista-ul--color.mb-0
              li.d-flex.align-items-start
                img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                p.mb-0.ps-2 <b>Personal operativo:</b> consignar la información completa y correcta, cumpliendo con las buenas prácticas de registro. La última persona encargada del proceso al que es sometido un producto deberá recopilar y entregar el <em>Batch Record</em> a ingeniería de procesos o supervisión de producción.
              li.d-flex.align-items-start
                img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                p.mb-0.ps-2 <b>Supervisión de producción:</b> debe asegurar que la información consignada en el <em>Batch Record</em> esté completa, sea verídica y cumpla con las buenas prácticas de registro, antes de entregarlo al proceso de control de calidad.
              li.d-flex.align-items-start
                img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                p.mb-0.ps-2 <b>Coordinación de planeación:</b> suministrar las órdenes de producción con la información necesaria para el diligenciamiento básico del <em>Batch Record</em>.
              li.d-flex.align-items-start
                img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                p.mb-0.ps-2 <b>Ingeniería de procesos:</b> asegurar que la información consignada en el <em>Batch Record</em> esté completa, verificada y que cumpla con las buenas prácticas de registro, antes de entregarlo al proceso de control de calidad. 
              li.d-flex.align-items-start
                img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                p.mb-0.ps-2 <b>Dirección técnica:</b> revisar y aprobar los <em>Batch Record</em> para la liberación de productos salvaguardados físicamente y compilar su información digitalmente, asegurándose de que se cumplan todas las normas estipuladas. 
          .col-md-6.order-1.order-md-2.mb-4.mb-md-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema5/img-14.png' style="max-width: 408px")

    p.mb-5 Los documentos consignados en el Batch Record, deben guardar un orden lógico relacionado con el proceso productivo. Es importante conocer cada uno de ellos, su estructura y función:

    .tarjeta.tarjeta--gris.p-4
      PasosB.color-secundario
        .row.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-lg-0.pt-4
            h3 Orden de producción
            p Antes de iniciar con el proceso de producción y diligenciamiento del <em>Batch Record</em>, se debe tener como insumo una información importante relacionada con el producto, la cual se detalla en la orden de producción que se genere y que autoriza el inicio de dicha actividad.
            p La información que debe ir en este documento es:
          .col-lg-6
            .p-4(style="background-color: #D6EEF9; border: 2px solid #E8E8E8; font-size: 13px")
              p.text-center.fw-bold Procedimiento 
              p Consecutivo <b style="color: #11B4C9">No. 00000001</b> (programa de producción)
              p Se debe diligenciar:
              ul.lista-ul--color.mb-0
                li.d-flex.align-items-start.mb-1
                  img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                  p.mb-0.ps-2 Fecha de inicio.
                li.d-flex.align-items-start.mb-1
                  img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                  p.mb-0.ps-2 Fecha de finalización <b>(al terminar la producción).</b>
                li.d-flex.align-items-start.mb-1
                  img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                  p.mb-0.ps-2 Fecha de vencimiento del producto.
                li.d-flex.align-items-start.mb-1
                  img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                  p.mb-0.ps-2 Orden de producción del sistema de manejo de inventario (Factory).
                li.d-flex.align-items-start.mb-1
                  img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                  p.mb-0.ps-2 Stock del producto a realizar.
                li.d-flex.align-items-start.mb-1
                  img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                  p.mb-0.ps-2 Descripción del producto.
                li.d-flex.align-items-start.mb-1
                  img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                  p.mb-0.ps-2 Cantidad programada.
                li.d-flex.align-items-start.mb-1
                  img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                  p.mb-0.ps-2 Rendimiento teórico.
                li.d-flex.align-items-start.mb-1
                  img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                  p.mb-0.ps-2 Rendimiento real <b>(al terminar la producción)</b>.
                li.d-flex.align-items-start.mb-1
                  img.pt-1(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 15px")
                  p.mb-0.ps-2 Lote.

        .row.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-lg-0.pt-4
            h3 Asignación lote
            p Cada servicio o establecimiento farmacéutico tendrá su propio método para la determinación y codificación del lote asignado a cada producto elaborado y que lo identificará en todo momento durante la producción de este y su posterior almacenamiento y dispensación al usuario final.
          .col-lg-6
            .p-4(style="background-color: #D6EEF9; border: 2px solid #E8E8E8; font-size: 13px")
              p La primera letra corresponde al año de producción del producto que se relaciona con la palabra complaints, donde cada letra equivale a un año de la década como se muestra a continuación:
              img.mx-auto.mb-3(src="@/assets/curso/temas/tema5/img-15.svg" style="max-width: 340px")
              p La segunda letra hace referencia al mes en el que se produce el producto, cada mes del año equivale a una letra de la palabra stenographic. Como se muestra a continuación:
              img.mx-auto(src="@/assets/curso/temas/tema5/img-16.svg")
        
        .row.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-lg-0.pt-4
            h3 Despeje de línea
            p Esta actividad tiene como objetivo asegurar que el producto y los materiales que van a intervenir en el proceso de fabricación han sido verificados correctamente y que no hay posibilidad de mezcla con productos diferentes o lotes diferentes anteriormente trabajados en línea.
            p Como se puede observar en la tabla, se verifica que no hay presencia de ningún material del producto o documento elaborado anteriormente, que las áreas están despejadas, limpias. Luego, se verifica que la información material del lote a elaborar, al igual que las áreas, cumplan con todos los requisitos para iniciar el nuevo proceso. 
              br
              |En ambos casos, se deja la firma de quien realiza la operación y quien la verifica.
          .col-lg-6
            .p-4(style="background-color: #D6EEF9; border: 2px solid #E8E8E8; font-size: 13px")
              img.mx-auto(src="@/assets/curso/temas/tema5/img-17.svg")

        .row.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-lg-0.pt-4
            h3 Verificación materias primas
            p Es importante verificar las materias primas que van a ser utilizadas para la fabricación de las preparaciones magistrales en lo relacionado con: cantidades, registrar los lotes de cada una en caso de necesitar hacer trazabilidad, fecha de vencimiento para garantizar que son aptas para su uso, y realizar inspección visual para detectar alguna anomalía.  La tabla ilustra un formato de verificación de materia prima.
          .col-lg-6
            .p-4(style="background-color: #D6EEF9; border: 2px solid #E8E8E8; font-size: 13px")
              img.mx-auto(src="@/assets/curso/temas/tema5/img-18.svg")
        
        .row.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-lg-0.pt-4
            h3 Verificación materiales
            p Los materiales a utilizar en el proceso de elaboración de las preparaciones magistrales, como los envases primarios y secundarios, deben ser verificados en cuanto a sus cantidades para garantizar que son los suficientes para la producción, los adecuados para el producto y que no presentan deterioro ni fallas en su apariencia.
          .col-lg-6
            .p-4(style="background-color: #D6EEF9; border: 2px solid #E8E8E8; font-size: 13px")
              img.mx-auto(src="@/assets/curso/temas/tema5/img-19.svg")
        
        .row.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-lg-0.pt-4
            h3 Controles proceso
            p Durante todas las etapas de elaboración del producto, se deben realizar controles a medida que este avanza, con el objetivo de garantizar que dicha actividad se lleva a cabo en condiciones adecuadas y prever cualquier no conformidad que surja. Dichos controles se realizan durante las etapas de llenado y acondicionamiento del producto.
            p Como modelos de formatos para registrar dicha información, se tienen los representados en las tablas:
          .col-lg-6
            .p-4(style="background-color: #D6EEF9; border: 2px solid #E8E8E8; font-size: 13px")
              img.mb-3.mx-auto(src="@/assets/curso/temas/tema5/img-20.svg")
              p Durante intervalos definidos, el personal de producción verifica que el volumen y el peso del producto sea los adecuados según las especificaciones de este, deberá reportar la información en el formato y reporta en caso de que algún resultado se encuentre por fuera de especificaciones.
              .col.d-flex.justify-content-end
                a.boton.color-acento-botones.indicador__container(@click="modal1 = true; mostrarIndicador = false;")
                  span.fw-bold(style="color: black") Ver controles en el proceso
                  .indicador--click(v-if="mostrarIndicador")

        .row.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-lg-0.pt-4
            h3 Controles proceso acondicionamiento
            p En el ejemplo de las tablas, se observan los controles al proceso de acondicionamiento verificando que cumpla con las siguientes características: 
            ul.lista-ul--color.mb-0
              li.d-flex.align-items-start.mb-1
                img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
                p.mb-0.ps-2 Etiqueta correcta y bien situada.
              li.d-flex.align-items-start.mb-1
                img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
                p.mb-0.ps-2 <em>Sticker</em> colocado, si se encuentra bien sellado.
              li.d-flex.align-items-start.mb-1
                img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
                p.mb-0.ps-2 Limpieza exterior.
              li.d-flex.align-items-start.mb-1
                img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
                p.mb-0.ps-2 Presencia del lote y la codificación.
              li.d-flex.align-items-start.mb-1
                img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
                p.mb-0.ps-2 Se observan los intervalos en los cuales se hacen los controles y el reporte del cumplimiento con la letra “C”.
              li.d-flex.align-items-start.mb-1
                img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
                p.mb-0.ps-2 Firma de quien hizo la verificación.
          .col-lg-6
            .p-4(style="background-color: #D6EEF9; border: 2px solid #E8E8E8; font-size: 13px")
              img.mx-auto(src="@/assets/curso/temas/tema5/img-21.svg")
        
        .row.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-lg-0.pt-4
            h3 Controles producto entregado
            ul.lista-ul--color.mb-0
              li.d-flex.align-items-start.mb-1
                img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
                p.mb-0.ps-2 En diferentes fases del proceso de producción, se pueden generar novedades o solicitudes de producto, ya sea que este se encuentre sin procesar, en proceso, terminado, cuarentena o rechazado. Estos movimientos deben ser controlados y monitoreados con el objetivo de conocer el estado actual del producto, controlar el inventario de este, conocer su ubicación y la causa de esa decisión de traslado.
              li.d-flex.align-items-start.mb-1
                img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
                p.mb-0.ps-2 Un ejemplo claro podría ser la elaboración de un preparado magistral que está en fase de cuarentena, de este producto se deben sacar muestras y enviar a control de calidad para que realice las pruebas pertinentes, con el objetivo de verificar si cumple con los parámetros establecidos. Dicho movimiento de las muestras debe quedar registrado en el formato designado para esto.
          .col-lg-6
            p En las tablas, se muestra un ejemplo.
            .p-4(style="background-color: #D6EEF9; border: 2px solid #E8E8E8; font-size: 13px")
              img.mb-3.mx-auto(src="@/assets/curso/temas/tema5/img-22.svg")
              .col.d-flex.justify-content-end
                a.boton.color-acento-botones(@click="modal2 = true;")
                  span.fw-bold(style="color: black") Ampliar
        
        .row.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-lg-0.pt-4
            h3 Conciliación materiales
            p Luego del proceso de aprobación por parte del área de control de calidad, se procede a la realización del proceso de acondicionamiento final, donde se realizan controles externos al producto, como:
            ul.lista-ul--color.mb-0
              li.d-flex.align-items-start.mb-1
                img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
                p.mb-0.ps-2 Errores de impresión en la etiqueta.
              li.d-flex.align-items-start.mb-1
                img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
                p.mb-0.ps-2 Rayones.
              li.d-flex.align-items-start.mb-1
                img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
                p.mb-0.ps-2 Quebrados rotos.
              li.d-flex.align-items-start.mb-1
                img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
                p.mb-0.ps-2 Dimensiones erróneas.
              li.d-flex.align-items-start.mb-1
                img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
                p.mb-0.ps-2 Contaminación.
              li.d-flex.align-items-start.mb-1
                img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
                p.mb-0.ps-2 Golpes, entre otros.
          .col-lg-6
            p La tabla muestra un ejemplo de la información a controlar.
            .p-4(style="background-color: #D6EEF9; border: 2px solid #E8E8E8; font-size: 13px")
              img.mb-3.mx-auto(src="@/assets/curso/temas/tema5/img-23.svg")
              .col.d-flex.justify-content-end
                a.boton.color-acento-botones(@click="modal3 = true;")
                  span.fw-bold(style="color: black") Ampliar
        
        .row.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-lg-0.pt-4
            h3 Formato aprobación
            p Finalmente, el director(a) técnico(a) responsable deberá revisar cada uno de los documentos del <em>Batch Record</em>, verificar que cumplieron con todos los requisitos y dar su aval para que se libere el lote y pase al proceso de almacenamiento, para su posterior dispensación al usuario final.
            p <b>Nota:</b> si durante el proceso existen algunas desviaciones de calidad que no afectan al producto ni al usuario final, el director técnico debe dejar aclarado eso en el <em>Batch Record</em>.
          .col-lg-6
            .p-4(style="background-color: #D6EEF9; border: 2px solid #E8E8E8; font-size: 13px")
              img.mx-auto(src="@/assets/curso/temas/tema5/img-24.svg")

    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .p-4(style="background-color: #D6EEF9; border: 2px solid #E8E8E8; font-size: 13px")
          img.mx-auto(src="@/assets/curso/temas/tema5/img-modal.svg" style="max-width: 300px")
    
    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center
        .p-4(style="background-color: #D6EEF9; border: 2px solid #E8E8E8; font-size: 13px")
          img.mx-auto(src="@/assets/curso/temas/tema5/img-22.svg")
    
    ModalA(:abrir-modal.sync="modal3")
      .row.align-items-center
        .p-4(style="background-color: #D6EEF9; border: 2px solid #E8E8E8; font-size: 13px")
          img.mx-auto(src="@/assets/curso/temas/tema5/img-23.svg")
    
    Separador

    .titulo-segundo.color-botones
      h2#t_5_4 5.4 Equipos requeridos para las preparaciones magistrales tópicas no estériles
    
    .container-100.d-flex.flex-wrap.align-items-center.mb-5.py-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: center;"
    )
      p Para las preparaciones no estériles se requieren equipos e instrumentos, que deben cumplir con requerimientos relacionados con el mantenimiento, limpieza, exactitud y precisión en la medición, ser los adecuados para el tipo de productos, escalas de medición adecuadas.
      p.mb-4 Dentro de los equipos e instrumentos fundamentales, están los siguientes:
      .d-flex.flex-wrap.mb-4.w-100
        .col-lg-6.pe-lg-4.order-2.order-lg-1
          ul.lista-ul--color.mb-0
            li.d-flex.align-items-start.mb-1
              img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
              p.mb-0.ps-2 Mesa antivibratoria
            li.d-flex.align-items-start.mb-1
              img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
              p.mb-0.ps-2 Estanterías
            li.d-flex.align-items-start.mb-1
              img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
              p.mb-0.ps-2 Armarios
            li.d-flex.align-items-start.mb-1
              img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
              p.mb-0.ps-2 Balanzas
            li.d-flex.align-items-start.mb-1
              img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
              p.mb-0.ps-2 Agitadores magnéticos
            li.d-flex.align-items-start.mb-1
              img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
              p.mb-0.ps-2 Estufa
            li.d-flex.align-items-start.mb-1
              img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
              p.mb-0.ps-2 Nevera
            li.d-flex.align-items-start.mb-1
              img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
              p.mb-0.ps-2 pH-metro
            li.d-flex.align-items-start.mb-1
              img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
              p.mb-0.ps-2 Material de vidrio
            li.d-flex.align-items-start.mb-1
              img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
              p.mb-0.ps-2 Baño de calor (baño María)
            li.d-flex.align-items-start.mb-1
              img.pt-1(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 15px")
              p.mb-0.ps-2 Reenvasador
        .col-lg-6.order-1.order-lg-2
          img.mx-auto(src="@/assets/curso/temas/tema5/img-25.svg" style="max-width: 572px")
      p En las siguientes figuras, se podrán visualizar algunos de estos equipos e implementos, sus características y funciones.
    
    .p-4.mb-5(style="background-color: #E8EEFA")
      SlyderA.col-xl-11.mx-auto.py-4(tipo="b")
        .d-flex.flex-wrap
          h4.w-100.text-center.mb-4 Equipos e implementos proceso de producción
          .col-sm-12.col-md-6.col-lg-3.col-xl-2.p-2.mx-auto.d-flex.flex-wrap
            img.w-100.mx-auto(src="@/assets/curso/temas/tema5/i-1.jpg")
            .p-2.w-100(style="background-color: #15D3EC; cursor: pointer;" @click="modalTarjetas = true; indexTarjeta = 0")
              p.fw-bold.mb-0.text-center(style="font-size: 13px") Balanzas de precisión 
          .col-sm-12.col-md-6.col-lg-3.col-xl-2.p-2.mx-auto.d-flex.flex-wrap
            img.w-100.mx-auto(src="@/assets/curso/temas/tema5/i-2.jpg")
            .p-2.w-100(style="background-color: #15D3EC; cursor: pointer;" @click="modalTarjetas = true; indexTarjeta = 1")
              p.fw-bold.mb-0.text-center(style="font-size: 13px") Morteros de vidrio 
          .col-sm-12.col-md-6.col-lg-3.col-xl-2.p-2.mx-auto.d-flex.flex-wrap
            img.w-100.mx-auto(src="@/assets/curso/temas/tema5/i-3.jpg")
            .p-2.w-100(style="background-color: #15D3EC; cursor: pointer;" @click="modalTarjetas = true; indexTarjeta = 2")
              p.fw-bold.mb-0.text-center(style="font-size: 13px") Baño termostático
          .col-sm-12.col-md-6.col-lg-3.col-xl-2.p-2.mx-auto.d-flex.flex-wrap
            img.w-100.mx-auto(src="@/assets/curso/temas/tema5/i-4.jpg")
            .p-2.w-100(style="background-color: #15D3EC; cursor: pointer;" @click="modalTarjetas = true; indexTarjeta = 3")
              p.fw-bold.mb-0.text-center(style="font-size: 13px") Auxiliares de pipeteo 
          .col-sm-12.col-md-6.col-lg-3.col-xl-2.p-2.mx-auto.d-flex.flex-wrap
            img.w-100.mx-auto(src="@/assets/curso/temas/tema5/i-5.jpg")
            .p-2.w-100(style="background-color: #15D3EC; cursor: pointer;" @click="modalTarjetas = true; indexTarjeta = 4")
              p.fw-bold.mb-0.text-center(style="font-size: 13px") Agitadores magnéticos 
          .col-sm-12.col-md-6.col-lg-3.col-xl-2.p-2.mx-auto.d-flex.flex-wrap
            img.w-100.mx-auto(src="@/assets/curso/temas/tema5/i-6.jpg")
            .p-2.w-100(style="background-color: #15D3EC; cursor: pointer;" @click="modalTarjetas = true; indexTarjeta = 5")
              p.fw-bold.mb-0.text-center(style="font-size: 13px") Espátulas 
          .col-sm-12.col-md-6.col-lg-3.col-xl-2.p-2.mx-auto.d-flex.flex-wrap
            img.w-100.mx-auto(src="@/assets/curso/temas/tema5/i-7.jpg")
            .p-2.w-100(style="background-color: #15D3EC; cursor: pointer;" @click="modalTarjetas = true; indexTarjeta = 6")
              p.fw-bold.mb-0.text-center(style="font-size: 13px") Placas calefactoras
          .col-sm-12.col-md-6.col-lg-3.col-xl-2.p-2.mx-auto.d-flex.flex-wrap
            img.w-100.mx-auto(src="@/assets/curso/temas/tema5/i-8.jpg")
            .p-2.w-100(style="background-color: #15D3EC; cursor: pointer;" @click="modalTarjetas = true; indexTarjeta = 7")
              p.fw-bold.mb-0.text-center(style="font-size: 13px") pH-metro
          .col-sm-12.col-md-6.col-lg-3.col-xl-2.p-2.mx-auto.d-flex.flex-wrap
            img.w-100.mx-auto(src="@/assets/curso/temas/tema5/i-9.jpg")
            .p-2.w-100(style="background-color: #15D3EC; cursor: pointer;" @click="modalTarjetas = true; indexTarjeta = 8")
              p.fw-bold.mb-0.text-center(style="font-size: 13px") Lente de aumento
          .col-sm-12.col-md-6.col-lg-3.col-xl-2.p-2.mx-auto.d-flex.flex-wrap
            img.w-100.mx-auto(src="@/assets/curso/temas/tema5/i-10.jpg")
            .p-2.w-100(style="background-color: #15D3EC; cursor: pointer;" @click="modalTarjetas = true; indexTarjeta = 9")
              p.fw-bold.mb-0.text-center(style="font-size: 13px") Termómetros
          .col-sm-12.col-md-6.col-lg-3.col-xl-2.p-2.mx-auto.d-flex.flex-wrap
            img.w-100.mx-auto(src="@/assets/curso/temas/tema5/i-11.jpg")
            .p-2.w-100(style="background-color: #15D3EC; cursor: pointer;" @click="modalTarjetas = true; indexTarjeta = 10")
              p.fw-bold.mb-0.text-center(style="font-size: 13px") Sistema para determinar 
          .col-sm-12.col-md-6.col-lg-3.col-xl-2.p-2.mx-auto.d-flex.flex-wrap
            img.w-100.mx-auto(src="@/assets/curso/temas/tema5/i-12.jpg")
            .p-2.w-100(style="background-color: #15D3EC; cursor: pointer;" @click="modalTarjetas = true; indexTarjeta = 11")
              p.fw-bold.mb-0.text-center(style="font-size: 13px") Alcohómetro

        .d-flex.flex-wrap
          h4.w-100.text-center.mb-4 Material volumétrico para medir desde 100 μl a 1 l
          .col-sm-12.col-md-6.col-lg-3.col-xl-2.p-2.mx-auto.d-flex.flex-wrap
            img.w-100.mx-auto(src="@/assets/curso/temas/tema5/i-13.jpg")
            .p-2.w-100(style="background-color: #15D3EC; cursor: pointer;" @click="modalTarjetas = true; indexTarjeta = 12")
              p.fw-bold.mb-0.text-center(style="font-size: 13px") Pipetas graduadas 
          .col-sm-12.col-md-6.col-lg-3.col-xl-2.p-2.mx-auto.d-flex.flex-wrap
            img.w-100.mx-auto(src="@/assets/curso/temas/tema5/i-14.jpg")
            .p-2.w-100(style="background-color: #15D3EC; cursor: pointer;" @click="modalTarjetas = true; indexTarjeta = 13")
              p.fw-bold.mb-0.text-center(style="font-size: 13px") Pipetas automáticas 
          .col-sm-12.col-md-6.col-lg-3.col-xl-2.p-2.mx-auto.d-flex.flex-wrap
            img.w-100.mx-auto(src="@/assets/curso/temas/tema5/i-15.jpg")
            .p-2.w-100(style="background-color: #15D3EC; cursor: pointer;" @click="modalTarjetas = true; indexTarjeta = 14")
              p.fw-bold.mb-0.text-center(style="font-size: 13px") Probetas
          .col-sm-12.col-md-6.col-lg-3.col-xl-2.p-2.mx-auto.d-flex.flex-wrap
            img.w-100.mx-auto(src="@/assets/curso/temas/tema5/i-16.jpg")
            .p-2.w-100(style="background-color: #15D3EC; cursor: pointer;" @click="modalTarjetas = true; indexTarjeta = 15")
              p.fw-bold.mb-0.text-center(style="font-size: 13px") Matraces aforados
        
        .d-flex.flex-wrap
          h4.w-100.text-center.mb-4 Material diverso
          .col-sm-12.col-md-6.col-lg-3.col-xl-2.p-2.mx-auto.d-flex.flex-wrap
            img.w-100.mx-auto(src="@/assets/curso/temas/tema5/i-17.jpg")
            .p-2.w-100(style="background-color: #15D3EC; cursor: pointer;" @click="modalTarjetas = true; indexTarjeta = 16")
              p.fw-bold.mb-0.text-center(style="font-size: 13px") Vasos de precipitados
          .col-sm-12.col-md-6.col-lg-3.col-xl-2.p-2.mx-auto.d-flex.flex-wrap
            img.w-100.mx-auto(src="@/assets/curso/temas/tema5/i-18.jpg")
            .p-2.w-100(style="background-color: #15D3EC; cursor: pointer;" @click="modalTarjetas = true; indexTarjeta = 17")
              p.fw-bold.mb-0.text-center(style="font-size: 13px") Embudos
          .col-sm-12.col-md-6.col-lg-3.col-xl-2.p-2.mx-auto.d-flex.flex-wrap
            img.w-100.mx-auto(src="@/assets/curso/temas/tema5/i-19.jpg")
            .p-2.w-100(style="background-color: #15D3EC; cursor: pointer;" @click="modalTarjetas = true; indexTarjeta = 18")
              p.fw-bold.mb-0.text-center(style="font-size: 13px") Matraces Erlenmeyer 
          .col-sm-12.col-md-6.col-lg-3.col-xl-2.p-2.mx-auto.d-flex.flex-wrap
            img.w-100.mx-auto(src="@/assets/curso/temas/tema5/i-20.jpg")
            .p-2.w-100(style="background-color: #15D3EC; cursor: pointer;" @click="modalTarjetas = true; indexTarjeta = 19")
              p.fw-bold.mb-0.text-center(style="font-size: 13px") Tamices para polvo
          .col-sm-12.col-md-6.col-lg-3.col-xl-2.p-2.mx-auto.d-flex.flex-wrap
            img.w-100.mx-auto(src="@/assets/curso/temas/tema5/i-21.jpg")
            .p-2.w-100(style="background-color: #15D3EC; cursor: pointer;" @click="modalTarjetas = true; indexTarjeta = 20")
              p.fw-bold.mb-0.text-center(style="font-size: 13px") Vidrio de reloj 
    
    .tarjeta.color-secundario.p-3.mb-5.col-xl-10.mx-auto
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema5/img-26.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.texto-blanco.mb-1 Manual de limpieza y desinfección
              p.texto-blanco.text-small Para el proceso de limpieza y desinfección de áreas y equipos de procesos no estériles, se invita al aprendiz a consultar el siguiente documento.
            .col-sm-auto
              a.boton.color-acento-bottones(:href="obtenerLink('downloads/Anexo2_CF020_Manual_de_limpieza_y_desinfeccion.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    ModalA.modal-tarjeta(:abrir-modal.sync="modalTarjetas")
      .row.align-items-center
        p.fw-bold {{ titlesTarjeta[indexTarjeta] }}
        p {{ descriptionTarjeta[indexTarjeta] }}

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    modalTarjetas: false,
    mostrarIndicador: true,
    indexTarjeta: 0,
    titlesTarjeta: [
      'Balanzas de precisión que pesen desde 1 mg a 2 kg.',
      'Morteros de vidrio y porcelana.',
      'Baño termostático.',
      'Auxiliares de pipeteo y varillas.',
      'Agitadores magnéticos y de hélice.',
      'Espátulas de metal y de goma.',
      'Placas calefactoras.',
      'pH-metro.',
      'Lente de aumento.',
      'Termómetros.',
      'Sistema para determinar el punto de fusión (PF).',
      'Alcohómetro.',
      'Pipetas graduadas.',
      'Pipetas automáticas y puntas para volúmenes de ml.',
      'Probetas.',
      'Matraces aforados.',
      'Vasos de precipitados.',
      'Embudos.',
      'Matraces Erlenmeyer.',
      'Vidrio de reloj y pesasustancias.',
      'Tamices para polvo fino, grueso y muy grueso.',
    ],
    descriptionTarjeta: [
      'Disponen de un plato que puede ir protegido por paredes de vidrio, sobre este se pone el objeto a pesar en el interior del recipiente adecuado. El peso aparecerá en la pantalla digital.',
      'Tienen forma de cuenco y cuentan con un pico en el borde para el desalojo de su contenido. La mano o pistilo sirven para pulverizar, realizar mezclas, homogeneizar y amasar.',
      'Llevan en su interior una resistencia eléctrica que calienta el agua hasta una temperatura prefijada por un termostato. Pueden disponer de algún mecanismo que remueva el agua para que el calentamiento sea homogéneo.',
      'Los pipeteadores o auxiliares de pipeteo se utilizan acoplados a las pipetas manuales. Si sirven de un émbolo para realizar la aspiración de los líquidos. Las varillas de vidrio para agitar son tubos de vidrio macizos de diferentes tamaños; se utilizan para realizar mezclas.',
      'Sirven para acelerar la mezcla de los componentes de una disolución. En los agitadores magnéticos se introducen imanes en las disoluciones para que se mezclen correctamente los componentes.',
      'Su finalidad es separar fracciones de sólido o recoger distintos tipos de productos acabados en formulación magistral.',
      'Constan de una superficie que proporciona calor seco para concentrar las disoluciones, evaporar disolventes o simplemente alcanzar una temperatura adecuada para un procedimiento de elaboración determinado. Pueden llevar agitación incorporada. En la imagen, se ve una placa de calefactores con agitación.',
      'Sirve para medir la concentración de hidrogeniones de una solución. El pH-metro mide la diferencia de potencial que originan los iones hidrógeno (H+) de la solución problema con respecto a la solución de referencia.',
      'Sirve para aumentar el tamaño de la imagen de la muestra que se quiere estudiar. Una vez colocada esta debajo de la lente, se mira a través de los oculares para apreciar el aumento del tamaño de esta y detalles que a simple vista pasan desapercibidos.',
      'Tubo capilar en cuya parte inferior se encuentra un depósito lleno de mercurio. Al calentarse, el mercurio asciende por el capilar, marcando la temperatura.',
      'El ensayo de PF está muy extendido en los laboratorios. Se utiliza para identificar materias primas pulverulentas y para conocer su grado de pureza, pues en una sustancia pura el cambio de estado de sólido a líquido es rápido y la temperatura permanece constante durante todo el proceso.',
      'Dispositivo de laboratorio, semejante a un densímetro, graduado en grados alcohólicos que indica de forma cuantitativa la riqueza en alcohol de un líquido o disolución.',
      'Tubos huecos de vidrio, cuya finalidad es trasvasar volúmenes exactos de un recipiente a otro. Disponen de una graduación que nos indica los volúmenes que podemos recoger. Se utilizan con auxiliares de pipeteo.',
      'Disponen de un émbolo que se manipula con el dedo pulgar, el cual permite que el líquido sea aspirado o expulsado. En la parte final de la pipeta automática, se coloca una punta de plástico, que se introduce en el líquido para aspirarlo. Después de la expulsión de la muestra líquida, la punta se desecha.',
      'Recipientes graduados en forma de tubo y con distintas capacidades. Llevan una base de apoyo y un pico en el borde que facilitan el vertido del líquido. Se utilizan para medir volúmenes con un grado de aproximación bastante alto al volumen exacto.',
      'Recipientes de distintos volúmenes, con cuello estrecho y cuerpo ancho. En el cuello, tienen la señal de aforo, que indica dónde debe llegar la parte inferior del menisco que forma el líquido con las paredes del cuello. Se utiliza para preparar disoluciones de concentraciones perfectamente conocidas.',
      'Recipientes de boca y cuerpo ancho. En su pared, aparece una escala graduada aproximada, ya que no se usa para realizar mediciones exactas, sino para distintas operaciones de laboratorio, como preparar disoluciones, contener productos líquidos, etc.',
      'De distintos tamaños, forma cónica y pico largo, y biselado o corto, según se utilicen para líquidos o polvos, respectivamente.',
      'Con fondo plano y ancho, cuello corto y distintas capacidades. Sirven para diluir reactivos y preservar las salpicaduras procedentes de reacciones químicas que se produzcan en su interior.',
      'Pueden ser de vidrio o plástico. Se utilizan para pesar sólidos y pueden tener diferentes tamaños.',
      'Formados por un bastidor al que se sujetan una serie de hilos entrecruzados de acero, nailon o bronce. Los tamices se clasifican por la abertura de malla, que no es más que la distancia entre dos hilos continuos.',
    ],
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
.tarjeta-edit-5_1
  position: relative
  width: 80%
  display: flex
  justify-content: center
  align-items: center
  min-height: 73px
  background-color: #E6F4FF
  margin: auto
  margin-bottom: 3rem
  &::after
    content: ''
    position: absolute
    border-left: 20px solid #E6F4FF
    border-right: 20px solid transparent
    border-top: 36px solid transparent
    border-bottom: 36px solid transparent
    right: -40px
  &::before
    content: ''
    position: absolute
    border-left: 20px solid transparent
    border-right: 20px solid #90C9F8
    border-top: 36px solid transparent
    border-bottom: 36px solid transparent
    left: -40px
  p
    font-size: 18px
    font-weight: bold
    padding-left: 2rem
    position: relative
    z-index: 1
  span
    position: absolute
    top: -21px
    left: -20px
    width: 57px
    height: 57px
    display: flex
    font-size: 24px
    font-weight: bold
    align-items: center
    justify-content: center
    background-color: #00BCD4
    color: white
.tarjeta-edit-5_2
  margin-right: -4rem
  margin-left: auto
  position: relative
  @media (max-width: 991px)
    margin-right: 0
.slyder-a
  .slyder-a__tipo-b
    .slyder-a__bullets
      .slyder-a__bullets__item
        background-color: #F9D7A0
        border: none
      .slyder-a__bullets__item--active
        background-color: #FF9D00
.modal-tarjeta
  .modal-a__content
    max-width: 450px
    background-color: #EAE3FF
    border-radius: 0
    padding-right: 2rem !important
    padding-left: 2rem !important
    .modal-a__close-btn
      right: 0
      top: 0
      width: 35px
      height: 35px
      background-color: #FF9D00
      border-radius: 0
</style>
