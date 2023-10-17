export default {
  global: {
    componenteFormativo:
      'Sistema de gestión de calidad de magistrales no estériles',
    descripcionCurso:
      'En este componente formativo, se abordan los conocimientos de la competencia preparar productos farmacéuticos magistrales tópicos según prescripción médica y normativa de salud, con el reconocimiento de los hallazgos durante las auditorías y la aplicación de las acciones de mejora continua en el proceso de elaboración de preparaciones magistrales tópicas no estériles, según resultados del proceso de verificación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Sistema de Gestión de la Calidad (SGC)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Conceptos de calidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Conceptos de preparaciones magistrales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Sistema de gestión preparaciones magistrales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Procedimiento y formatos utilizados en el proceso',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Procedimiento del proceso de elaboración de preparados magistrales',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Requisitos área de recepción y almacenamiento de las preparaciones magistrales',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Paquete técnico de producción (<em>Batch Record</em>)',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo:
              'Equipos requeridos para las preparaciones magistrales tópicas no estériles',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Listas de chequeo, auditorías, autoinspección',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo:
          'Hallazgos, no conformidades, acciones de mejora, preventivas y correctivas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/331502_CF23_DU.zip',
      },

      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Sistema de Gestión de la Calidad',
      referencia:
        'Droguería San Carlos. (s. f.). <em>Planeación estratégica droguería San Carlos.</em>',
      tipo: 'PDF',
      descarga:
        '/downloads/Anexo6_CF023_Sistema_de_gestion_de_calidad_drogueria.pdf',
    },
    {
      tema: 'Sistema de Gestión de la Calidad',
      referencia:
        'Organización Internacional de Normalización [ISO]. (2015). <em>ISO-9000:2015. Sistemas de gestión de la calidad — Fundamentos y vocabulario.</em> Plataforma de navegación en línea [OBP]. ',
      tipo: 'Documento <em>Online</em>',
      link: 'https://www.iso.org/obp/ui/es/#iso:std:iso:9000:ed-4:v1:es',
    },
    {
      tema: 'Sistema de Gestión de la Calidad',
      referencia:
        'ICONTEC International. (2015). <em>Sistemas de gestión de la calidad. Requisitos</em> (NTC- ISO 9001).',
      tipo: 'PDF',
      descarga: '/downloads/Anexo7_CF023_NORMA_ISO_9001_2015.pdf',
    },
    {
      tema: 'Sistema de Gestión de la Calidad',
      referencia:
        'Procem Consultores (2018). <em>Principios del Sistema de Gestión de Calidad</em> [Video]. YouTube.',
      tipo: 'Vídeo',
      link: 'https://youtu.be/mGX1jYNElHg',
    },
    {
      tema: 'Sistema de Gestión de la Calidad',
      referencia:
        'Resolución 444 de 2008. [Ministerio de la Protección Social]. Por la cual se adopta el Instrumento de verificación de cumplimiento de Buenas Prácticas de elaboración de preparaciones magistrales y se dictan otras disposiciones. Febrero 12 de 2008.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo8_CF023_Resolucion_444_de_2008.pdf',
    },
    {
      tema: 'Procedimiento y formatos utilizados en el proceso',
      referencia:
        'Savunisevilla. (2014). <em>Farmacia Comunitaria. Paciente. Formulación Magistral y Formación en Atención Farmacéutica.</em> Vídeo 4 [Video]. YouTube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=207Fe-M_5K4',
    },
    {
      tema:
        'Hallazgos, no conformidades, acciones de mejora, preventivas y correctivas',
      referencia:
        'Formato de acciones correctivas, preventivas y de mejora. Ejemplo.',
      tipo: 'Documento Excel',
      descarga:
        '/downloads/OKEst_Anexo3_CF023_GI_F_Acciones_Correctivas_preventivas_y_de_mejora_(Ejemplo).xlsx',
    },
    {
      tema:
        'Hallazgos, no conformidades, acciones de mejora, preventivas y correctivas',
      referencia:
        'Formato de acciones correctivas, preventivas y de mejora (vacío).',
      tipo: 'Documento Excel',
      descarga:
        '/downloads/OKEst_Anexo4_CF023_GI_F_Acciones_Correctivas_preventivas_y_de_mejora_(vacio).xlsx',
    },
    {
      tema:
        'Hallazgos, no conformidades, acciones de mejora, preventivas y correctivas',
      referencia: 'Formato hallazgos de auditorías internas.',
      tipo: 'Documento Excel',
      descarga: '/downloads/OKEst_Anexo5_CF023_Reporte_hallazgos.xlsx',
    },
  ],
  glosario: [
    {
      termino: 'Ciclo PHVA',
      significado: 'Planificar, Hacer, Verificar y Actuar.',
    },
    {
      termino: 'Contexto',
      significado:
        'el contexto está formado por una serie de circunstancias (como el tiempo y el espacio físico) que facilitan el entendimiento de un mensaje.',
    },
    {
      termino: 'Controles en proceso',
      significado:
        'verificaciones que se realizan con el objetivo de comprobar que durante las etapas de ejecución y producción todo se encuentra bajo condiciones controladas.',
    },
    {
      termino: 'Enfoque de procesos',
      significado:
        'es una estrategia de gestión. Cuando los líderes de la organización utilizan un enfoque basado en procesos, significa que gestionan y controlan los procesos que componen sus organizaciones, las interacciones entre estos procesos, y las entradas y salidas que vinculan estos procesos juntos.',
    },
    {
      termino: 'Inalterable',
      significado: 'que no se puede cambiar.',
    },
    {
      termino: 'Incentivo',
      significado:
        'premio o gratificación económica que se le ofrece o entrega a una persona para que trabaje más o consiga un mejor resultado en determinada acción o actividad.',
    },
    {
      termino: 'Indicador',
      significado:
        'dato o información que sirve para conocer o valorar las características y la intensidad de un hecho o para determinar su evolución futura.',
    },
    {
      termino: 'ISO',
      significado:
        'Organización Internacional de Normalización, cuya principal actividad es la elaboración de normas técnicas internacionales.',
    },
    {
      termino: 'Preparado magistral no estéril',
      significado:
        'es una preparación farmacéutica que se puede formular y elaborar en condiciones ambientales controladas, pero no estériles.',
    },
    {
      termino: 'SGC',
      significado: 'Sistema de Gestión de la Calidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'ICONTEC International. (2015). <em>Sistemas de gestión de la calidad.</em> Requisitos (NTC- ISO 9001).',
      link:
        'https://www.icontec.org/eval_conformidad/certificacion-iso-9001-sistema-de-gestion-de-calidad/',
    },
    {
      referencia:
        'Ministerio de Fomento. (2011). <em>Sistema de Gestión de la Calidad según ISO 9001:2000.</em>',
      link: 'https://www.mitma.gob.es/recursos_mfom/iso90012000.pdf',
    },
    {
      referencia:
        'Organización Internacional de Normalización [ISO]. (2015). <em>ISO-9000:2015. Sistemas de gestión de la calidad — Fundamentos y vocabulario.</em> Plataforma de navegación en línea [OBP].',
      link: 'https://www.iso.org/obp/ui/#iso:std:iso:9000:ed-4:v1:es:sec:2.3',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable de equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lina Marcela Ayala Pardo',
          cargo: 'Experta Temática',
          centro: 'Centro de Servicios de Salud - Regional Antioquia.',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital.',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital.',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander.',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital.',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuación instruccional',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmín Rocío Figueroa Pacheco',
          cargo: 'Diseño web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo:
            'Validación de recursos educativos digitales y vinculación al LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
