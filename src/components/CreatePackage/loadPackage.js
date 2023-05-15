export const package1 = {
  package: {
    name: 'Vivi las llanuras y las pampas gauchas',
    location: 'Santa Rosa, La Pampa',
    price: 2000,
    duration: 4,
    img: 'https://www.voydeviaje.com.ar/resizer/GJqFTUyTF_wUyZeVU1Tqz6SwJlQ=/1023x681/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/R6IXCBHJ6JDKDGEO3ACPFULLMA.jpg',
    img2: 'https://conexionshow.com.ar/wp-content/uploads/2020/10/foto-patagonia-3-e1603201306414.jpg',
    img3: 'https://encolombia.com/wp-content/uploads/2013/03/la_pampa_argentina-e1386782008711.jpg',
    img4: '',
    description: `La Pampa invita al visitante a conocer todos sus ambientes naturales, donde el silencio espera a la aventura.
            Aquí los viajeros aventureros podrán disfrutar de actividades turísticas que se desarrollan en ambientes silvestres, en estrecho contacto con la naturaleza, con servicios personalizados, sin perder el énfasis puesto en la conservación de la naturaleza.
            La provincia de La Pampa cuenta con dos centros termales acondicionados especialmente para ofrecer al visitante una gran diversidad de tratamientos terapéuticos, complementados con servicios que facilitan la práctica turístico – recreativa, además de los servicios de spa ofrecidos por dos grandes hoteles de la capital pampeana.
            `,
    quotas: 75,
    dateInit: '12/5/23',
    dateEnd: '12/9/23',
  },
  activities: [
    {
      name: 'Escalada en las Sierras del Parque Nacional Lihué Calel',
      duration: 5,
      img: [
        'https://www.welcomeargentina.com/paseos/parque-nacional-lihuel-calel/lihue-calel-3.jpg',
        'https://www.argentina.gob.ar/sites/default/files/panoramicas_pnlc6.png',
        'https://www.welcomeargentina.com/paseos/parque-nacional-lihuel-calel/lihue-calel-1.jpg',
      ],
      description: `Las serranías de Lihué Calel -o "sierras de la vida", según su traducción- emergen desde la estepa en la zona centro-sur de la provincia de La Pampa, regalando una atractiva topografía que rompe con el llano circundante.

                Especies de flora exclusivas de esta zona, incluyendo desde herbáceas hasta el majestuoso caldén, junto a una gran riqueza de fauna que incluye varias especies amenazadas y una serie de pictografías que atestiguan el paso del hombre por estos sitios miles de años atrás, son sólo algunos de los tesoros que ofrece al público esta área protegida creada en 1976.`,
      typeAct: 'treking',
      price: 250,
    },
    {
      name: 'actividades acuáticas en el Río Colorado',
      duration: 4,
      img: [
        'https://thumbs.dreamstime.com/b/canotaje-en-el-r%C3%ADo-de-colorado-10819661.jpg',
        'https://grandcanyonwest.com/wp-content/uploads/HERO_sm.jpg',
        'https://mds.lapampa.gob.ar/images/noticias/MINISTERIO_1_de_1-21.jpg',
      ],
      description: `escuelita de canotaje, pequeñas islas en las que descender y apreciar la espectacularidad de la naturaleza virgen.
                    La recorrida se puede hacer en canoa, lancha, botes, motos náuticas, etc.`,
      typeAct: 'travel',
      price: 150,
    },
    {
      name: 'Pesca deportiva en las lagunas Don Tomás',
      duration: 4,
      img: [
        'https://patagonia.gob.ar/wp2019/wp-content/uploads/2020/01/Pesca-LA-PAMPA-casa-de-piedra-1920x1440.jpg',
      ],
      description: `Especies como el pejerrey, bagre sapo, tararira o dientudo pueden capturarse en la temporada que se extiende desde principios de noviembre hasta fines de agosto.También es posible capturar ejemplares de carpa común durante todo el año.`,
      typeAct: 'relax',
      price: 370,
    },
    {
      name: 'Turismo rural en Estancia Villaverde',
      duration: 12,
      img: [
        "https://estanciavillaverde.com.ar/info/img/estanciavillaverde_casco2006.jpg",
        "https://www.serargentino.com/public/images/2021/05/phpKVXxuk-1620334683.jpg",
        "https://lomioesviajar.files.wordpress.com/2020/11/53170-cow-cattle-livestock-5717273-1024x682-1.jpg",
      ],
      description: `A cinco minutos de Santa Rosa se ubica la Estancia Villaverde, la primera estancia turística de la provincia que invita a disfrutar de la paz del paisaje pampeano, degustando las más exquisitas comidas caseras elaboradas con productos de su granja.

                Atendida por la familia propietaria, deslumbra por su caso principal y su parque de 30 has en donde se puede disfrutar de su piscina con cascada y solarium.
                
                Además, se puede participar de diversas tareas vinculadas con el agroturismo, como el arreo y encierre de ganado, siembra o cosecha de cereales, yerra, esquila, señalada de hacienda, cabalgatas o realizar excursiones de aventura, safaris fotográficos y observación de aves y fauna, entre otras actividades.`,
      typeAct: 'travel',
      price: 230,
    },
    {
      name: 'Tratamientos termales en las termas de Bernardo Larroudé',
      duration: 5,
      img: [
        'https://media.ambito.com/p/0af13291ff93aec7423187c845507b6c/adjuntos/239/imagenes/039/278/0039278392/1200x675/smart/carpinchosjpeg.jpeg',
        "https://argentinatermal.com.ar/wp-content/uploads/2017/03/termas-spa-1.jpg",
        "https://media.cdn.laarena.com.ar/072022/1658316524383.jpg",
      ],
      description: ` Las termas de Bernardo Larroudé ofrecen piletas con aguas termales. Boxes individuales para baños de inmersión o hidromasajes, gabinetes de masajes, de cosmética, sauna, gimnasio, y yacuzzi; servicios de fangoterapia local y general, tratamiento con algas (filoterapia), masajes, estética facial y corporal, dermatología (psoriasis, acné) para enfermedades reumáticas (artrosis, contracturas musculares, lumbalgias, citalgias) enfermedades vasculares (varices, trastornos circulatorios periféricos, enfermedades cardiacas). Terapias para relajarse y disfrutar, además de distintas actividades deportivas y recreativas caracterizan este entorno natural de 24 ha arboladas.`,
      typeAct: 'relax',
      price: 400,
    },
  ],
  hotel: {
    name: 'Hotel Mercure Santa Rosa',
    location: 'Av Santiago Marzo N 25, Santa Rosa L6300, La Pampa (Argentina)',
    img: [
      'https://cdn.atrapalo.com/hoteles/picture/l/8485/4/2/356839367.jpg',
      'https://cdn.atrapalo.com/hoteles/picture/l/8485/4/2/356839368.jpg',
      'https://cdn.atrapalo.com/hoteles/picture/l/8485/4/2/356839369.jpg',
      'https://cdn.atrapalo.com/hoteles/picture/l/8485/4/2/356839372.jpg',
    ],
    description: `Habitaciones
        Te sentirás como en tu propia casa en una de las 86 habitaciones con aire acondicionado y minibar La conexión a Internet wifi gratis te mantendrá en contacto con los tuyos; también podrás ver tu programa favorito en el televisor con canales por cable El cuarto de baño está provisto de ducha y bañera combinadas y secador de pelo Las comodidades incluyen caja fuerte, escritorio y la posibilidad de solicitar cunas (de pago)
        Servicios de ocio, spa y Premium
        Para tus ratos libres, tienes instalaciones recreativas como bañera de hidromasaje, sauna y piscina al aire libre de temporada a tu disposición
        Para comer
        Prueba deliciosos platos sin moverte de este hotel, que cuenta con un restaurante y ofrece servicio de habitaciones las 24 horas Disfruta de tu bebida favorita en el bar o lounge o en el bar junto a la piscina`,
    stars: 4,
    priceDay: 200,
  },
  resto: [
    {
      name: 'Bodegón Don Cristobal',
      location: '25 de mayo 126 ,Santa Rosa, La Pampa',
      img: [
        'https://media-cdn.tripadvisor.com/media/photo-m/1280/16/e7/63/48/photo0jpg.jpg',
        'https://media-cdn.tripadvisor.com/media/photo-s/16/e7/63/4b/photo3jpg.jpg',
        'https://media-cdn.tripadvisor.com/media/photo-p/0c/9a/fc/22/photo1jpg.jpg',
        'https://img.restaurantguru.com/r09f-meals-Bodegon-Don-Cristobal-2022-10-3.jpg',
      ],
      price: '300',
      description: `"Bodegon don Cristobal, restaurante de comidas típicas y clásicas como las hacían en tu hogar. Recetas de antaño y locales."`,
    },
    {
      name: 'La Rural Restaurante',
      location: 'Avenida Spinetto 551, Santa Rosa 6300 Argentina',
      img: [
        'https://media-cdn.tripadvisor.com/media/photo-s/07/d4/75/fe/la-rural-restaurante.jpg',
        'https://media-cdn.tripadvisor.com/media/photo-s/07/d4/76/7f/la-rural-restaurante.jpg',
      ],
      price: '600',
      description: 'Churrasqueria, parrila',
    },
  ],
  user: {
    userName: 'lucas',
    email: 'nada',
    password: '123456',
    lastName: 'Guere',
    social: true,
    socialRed: 'feisbuh',
  },
};

export const package2 = {
  package: {
    name: 'Neuquen propaganda',
    location: 'San Martín de los Andes, Neuquen',
    price: 4100,
    duration: 7,
    img: 'https://wanderlust.com.ar/wp-content/uploads/2018/10/san-martin-de-los-andes-2-640x360.jpg',
    img2: 'https://www.chapelco.com/imagenes/institucional/sm1.jpg',
    img3: 'https://patagonia.gob.ar/wp2019/wp-content/uploads/2022/10/neuquen_caviahue_paisaje_noche_astrofotografia_nikon_D5_005.jpg',
    img4: '',
    description: `Hacia el sur en la zona Lagos de Neuquén, es entorno de increíbles paisajes naturales.  San Martín de los Andes y Villa La Angostura, son sus destacados centros turísticos.  Miles de turistas y familias los eligen atraídas por el encanto de sus altas cumbres de cordillera y centros de nieve, los mismos que en verano dan paso disfrutar la montaña como de sus zonas playa a orillas de ríos y espejos de agua.

        Vas a encontrar una amplia variedad de propuestas para optar todas las formas de aventurarte en el contexto de bosques y parques nacionales, como el Nahuel Huapi y el Lanín, entre otras áreas y localidades de gran belleza, como Junín de los Andes.
         
        En el norte de Neuquén, vas a sorprenderte con el paisaje de valles y volcanes. La reserva natural de Domuyo, de 4.703 m.s.n.m, cuenta con nada menos que la cumbre más alta de la Patagonia y representa un atractivo de gran jerarquía para los montañistas. Pero hay mucho más para quienes disfrutan recorrer y conocer lo más auténtico de las costumbres neuquinas. Chos Malal, principal centro urbano de la zona, y mitad de camino de la mítica Ruta 40 que atraviesa de norte a sur al país. Desde aquí es posible hacer otros circuitos muy próximos como el Parque Provincial Tromen, o bien seguir hacia otros encantadores pueblos y entornos al pie de la Cordillera. Andacollo, Huinganco, Las Ovejas, Varvarco, Manzano Amargo, y la reserva forestal Área Natural Protegida Provincial Lagunas de Epulauquen.
         
        En el centro la Cuenca Neuquina, la estepa de los dinosaurios, es sitio de importantes hallazgos de fósiles de animales y vegetales, reconocido a nivel mundial. Aquí se encuentra la ciudad de Neuquén, capital de la provincia, una de las más importantes de la región patagónica, y zona productiva de viñedos y fruticultura hacia Centenario y San Patricio del Chañar.
         
        Neuquén también es reino del turismo termal, spa y relax. Rodeada de bosques de araucarias, Caviahue-Copahue es un complejo que acoge a los turistas en verano como en invierno para disfrutar el encanto de su centro de esquí como las aguas termales.  En verano, podés vivenciar una experiencia como pocas desde el centro natural de termalismo al pie del volcán Copahue.
         
        Este y otros lugares, como Villa Pehuenia y Moquehue te acercan a bellezas auténticas de la geografía neuquina y a la mística de sus pueblos originarios.`,
    quotas: 75,
    dateInit: '6/14/23',
    dateEnd: '6/21/23',
  },
  activities: [
    {
      name: 'vuelo a vela en el Aero Club de los Andes',
      duration: 5,
      img: [
        'https://latitur.com/uploads/media/cactus_product_tours_by_locals/335.Santihcasa@gmail.com/6290/1644ba4afb8124b2069027eaa5f651707819b32d.jpeg',
        'https://latitur.com/uploads/media/cactus_product_tours_by_locals/335.Santihcasa@gmail.com/6289/thumb_6289_cactus_product_tours_by_locals_large.jpeg',
      ],
      description: `El vuelo en parapente no tiene límites de edad ni sexo, su seguridad es casi total, pero depende de la conciencia del piloto al momento de volar sobre las condiciones climáticas y psicofísicas.
                El tiempo de vuelo puede ser de 5 minutos o de horas, también se pueden recorrer varios kilómetros de distancia.
                `,
      typeAct: 'bike',
      price: 250,
    },
    {
      name: 'Rappel en el cerro Bandurrias',
      duration: 6,
      img: [
        'https://www.interpatagonia.com/paseos/rapel-cerro-bandurrias/rapel-bandurrias-3.jpg',
        'https://www.interpatagonia.com/paseos/rapel-cerro-bandurrias/rapel-bandurrias-2.jpg',
        'https://www.interpatagonia.com/paseos/rapel-cerro-bandurrias/rapel-bandurrias-6.jpg',
        'https://www.interpatagonia.com/paseos/rapel-cerro-bandurrias/rapel-bandurrias-1.jpg',
      ],
      description: `Cuando se trata de nuevas sensaciones, la montaña ofrece un sinfín de oportunidades para quienes se atreven a probar ejercicios deportivos diversos. El cerro Bandurrias, en San Martín de los Andes, es un excelente espacio para tomar contacto con la práctica del rapel, un arte que requiere más maña que fuerza y la dirección de expertos.`,
      typeAct: 'treking',
      price: 150,
    },
    {
      name: 'Aventura en bicicleta de montaña en San Martín de los Andes',
      duration: 5,
      img: [
        'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/dc/90/1a.jpg',
        'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/dc/8f/c1.jpg',
        'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/dc/90/b4.jpg',
      ],
      description: `Pedalea por la Patagonia en esta divertida aventura de medio día en bicicleta de montaña desde San Martín de Los Andes. Tome el Circuito Arrayanes (ruta Cerro Chapelco), con vistas al poderoso Monte Chapelco, el Volcán Lanín y el azul Lago Lácar. Este recorrido para grupos pequeños tiene un máximo de 12 personas y es adecuado para todas las habilidades.`,
      typeAct: 'bike',
      price: 370,
    },
    {
      name: 'Esqui en el fin del mundo (Chapelco)',
      duration: 6,
      img: [
        'https://www.chapelco.com/imagenes/institucional/ski6.jpg',
        'https://www.infocampo.com.ar/wp-content/uploads/2018/07/chapelco.jpg',
        'https://www.welcomeargentina.com/chapelco/img/chapelco.jpg',
        'https://tripin.travel/wp-content/uploads/2017/02/cerro-chapelco-1024x683.jpg',
      ],
      description: `A 20 Km de San Martín de los Andes en Neuquén, Chapelco es uno de los centros invernales más completos de Sudamérica. Se puede practicar esquí alpino, de fondo, snowboard, hacer travesías, circuitos fuera de pista, caminatas con raquetas de nieve y disfrutar de paseos en motos o trineos guiados por perros entre increíbles caminos rodeados de lengas. Chapelco cuenta con 28 pistas distribuidas en 1600 ha. esquiables, con un desnivel de 730 m. Las propuestas gastronómicas en Chapelco abarcan especialidades de la alta cocina patagónica hasta comidas rápidas con sistema de autoservice en los restaurantes de este fascinante complejo invernal.`,
      typeAct: 'travel',
      price: 230,
    },
    {
      name: 'Recorrido en el Parque Nacional Lanín',
      duration: 5,
      img: [
        'https://promociones-aereas.com.ar/wp-content/uploads/2020/10/parque-nacional-lanin-1024x506.jpg',
        'https://larutanatural.gob.ar/panel/public/uploads/rutas-naturales/originals/9d8f301c-d38d-4ab2-af69-e98de25e7162.jpg',
        'https://www.culturademontania.org.ar/Relatos/neuquen_parque_nacional_lanin_2.jpg',
        'https://larutanatural.gob.ar/panel/public/uploads/rutas-naturales/originals/cc80fbc2-8605-451e-b832-4ec0aef6734e.jpg',
      ],
      description: `Además del emblemático e imponente volcán Lanín que con sus 3.776 metros sobre el nivel del mar domina el paisaje, el área protegida incluye unos 24 lagos. Aquí se conserva una importante muestra del Bosque Patagónico y varias especies de plantas exclusivas de la región.

                Entre los árboles representativos se puede citar a la araucaria, el roble pellín y el raulí. Las laderas de las montañas están cubiertas por bosques de lengas y coihues. En las zonas más bajas y húmedas, crece una vegetación más variada y exuberante, la llamada Selva Valdiviana.
                
                La fauna está representada por pumas, zorros y el monito de monte, entre los mamíferos; y el churrín grande, el cóndor, el aguilucho cola rojiza y el fío fío silbón como ejemplos de las aves.`,
      typeAct: 'relax',
      price: '400',
    },
  ],
  hotel: {
    name: 'Rotui Apart Hotel',
    location: 'Perito Moreno 1378, San Martín de los Andes, Argentina',
    img: [
      'https://photos.hotelbeds.com/giata/bigger/13/137187/137187a_hb_a_001.jpg',
      'https://www.ruralesdata-sa.com/cache/ar/alojamientos/rotui/200-2.jpg',
      'https://rotui-apart-residencia-exclusiva.hotelesenpatagonia.com/data/Images/OriginalPhoto/8352/835233/835233905/image-san-martin-de-los-andes-rotui-apart-hotel-residencia-exclusiva-14.JPEG',
      'https://www.interpatagonia.com/plantillas/grandes/469-02Gr.jpg',
    ],
    description: `Rotuí, Apart Hotel en San Martin de los Andes, los invita a disfrutar de una cálida estadía y descubrir nuestra aldea de montaña; ubicado a 200 mts de la avenida principal de la ciudad, una zona estratégica donde la calidez y el murmullo de sus 120 mts de costa de arroyo se mezclan para brindarle un descanso único.`,
    stars: 5,
    priceDay: 2500,
  },
  resto: [
    {
      name: 'El Fondo Parrilla y ahumados',
      location:
        'Avenida San Martin 866 Market el Maiten Local 14, San Martín de los Andes, Argentina',
      img: [
        'https://i0.wp.com/realidadsm.com/wp-content/uploads/2022/04/DSC_7112-940x627.jpg',
        'https://i0.wp.com/realidadsm.com/wp-content/uploads/2022/04/DSC_7129.jpg',
        'https://media-cdn.tripadvisor.com/media/photo-s/18/d0/6a/2a/el-fondo-parrilla-y-ahumados.jpg',
        'https://media-cdn.tripadvisor.com/media/photo-s/18/d0/6a/33/el-fondo-parrilla-y-ahumados.jpg',
      ],
      price: '800',
      description: 'TIPOS DE COMIDA: Parrilla, Sudamericana',
    },
    {
      name: 'Domingo Restaurante',
      location:
        'Teniente Coronel Perez 1056, San Martín de los Andes 8370 Argentina',
      img: [
        'https://media-cdn.tripadvisor.com/media/photo-s/11/70/d5/cb/vista-de-nuestra-casa.jpg',
        'https://media-cdn.tripadvisor.com/media/photo-s/12/22/7b/56/salon.jpg',
        'https://media-cdn.tripadvisor.com/media/photo-s/14/37/e4/32/una-joya-en-san-martin.jpg',
      ],
      price: '700',
      description: 'Apto para vegetarianos, Opciones sin gluten',
    },
    {
      name: 'La Casona',
      location: 'Calle Gral Villegas, 744, San Martín de los Andes Argentina',
      img: [
        'https://media-cdn.tripadvisor.com/media/photo-s/10/b9/2f/07/la-casona-restaurant.jpg',
      ],
      price: '500',
      description: `TIPOS DE COMIDA:
        Internacional, Contemporánea
        Dietas especiales:
        Apto para vegetarianos, Opciones veganas, Opciones sin gluten.
        Telefono: +54 2972 42-7888`,
    },
  ],
  user: {
    userName: 'elias',
    email: 'anda',
    password: '654321',
    lastName: 'gomez',
    social: true,
    socialRed: 'feisbuh',
  },
};

export const package3 = {
  package: {
    name: 'Rio negro, pero en verano ',
    location: 'San Antonio Oeste, Rio negro',
    price: 1900,
    duration: 3,
    img: 'https://viajoconvos.com.ar/wp-content/uploads/2020/12/Las-Grutas.jpg',
    img2: '',
    img3: 'https://www.lasuperdigital.com.ar/wp-content/uploads/2021/12/VERANO-CORDILLERA-001.jpg',
    img4: '',
    description: `El turismo en Río Negro, te espera para vivenciar todo tipo de experiencias entre cordillera y mar. 

        Entre las ciudades turísticas más importantes se encuentra San Carlos de Bariloche. Una ciudad ubicada en un entorno soñando, rodeada de montañas, bosques y el lago Nahuel Huapi. Cuenta con el centro de esquí del Cerro Catedral, uno de los más importantes del hemisferio sur y sede permanente de campeonatos de esquí y snowboard para profesionales y aficionados. Y en verano, son sus playas, lagos y ríos los que adquieren protagonismo junto a la posibilidad de realizar todo tipo de deportes náuticos o jugar al golf. 
        
        Muy cerca podés visitar El Bolsón, una típica comarca andina al pie del cerro Piltriquitrón. Ideal para disfrutar del turismo rural, el turismo aventura, el ecoturismo y como diferencial, opciones para el turismo que busca bienestar y terapias complementarias combinadas con la alimentación orgánica.  
        Los senderos de montaña ofrecen numerosos lugares para recorrer que van serpenteando bosques, arroyos y cascadas. Acá  podés hacer vuelos en parapente, porque es uno de los mejores lugares del país para practicar este deporte.  La Feria Regional es otro ícono del lugar donde para comprar artesanías locales y donde siempre hay espectáculos artísticos y musicales. 
        
        Y qué decir del turismo rural en los valles de Río Negro. Hacedores de una auténtica transformación de la estepa arbustiva en vergeles productivos, con la fruticultura y viñedos que son una auténtico atractivo para conocer en profundidad la cultura y la historia de los pioneros inmigrantes rionegrinos.
        
        En el otro extremo, el mar de aguas transparentes y muy calmas son la opción de las familias que eligen las playas de Las Grutas para pasar el verano. Pero también el Golfo San Matías es ideal para el buceo y avistaje de fauna marina, grandes atractivos para disfrutar en cualquier momento del año.
        
        Si visitás esta provincia, la gastronomía te espera con tentadoras propuestas imperdibles con sello local. La producción de cervezas artesanales, productos orgánicos presentes en la elaboración de platos regionales, ahumados y patés de truchas, ciervo y jabalí, como la variedad de frutos del mar.`,
    quotas: 75,
    dateInit: '10/01/23',
    dateEnd: '10/04/23',
  },
  activities: [
    {
      name: 'Buceo en Las Grutas',
      duration: 5,
      img: [
        'https://patagoniaturistica.com/wp-content/uploads/2021/03/lasgru3jpg.jpg',
        'https://turismo.rionegro.gov.ar/libraries/ImageResize/?src=/files/contenidos/1550172914_buceo-2l-stephenjohnson.jpg',
        'https://informativohoy.com.ar/wp-content/uploads/2018/07/buceo.jpg',
        'https://www.interpatagonia.com/paseos/buceo-en-las-grutas/foto-3.jpg',
      ],
      description: `Los amantes de la vida submarina encuentran en Las Grutas un paseo insuperable para descubrir los secretos que se esconden bajo el mar, no solo para los buzos con experiencia sino también para un público general. Los cascos de barcos hundidos se convierten en atracciones subacuáticas increíbles por toda la biodiversidad que se genera en sus interiores. `,
      typeAct: 'show',
      price: '220',
    },
    {
      name: 'senderismo por el Fuerte Argentino',
      duration: 8,
      img: [
        'https://sayhueque.com/wp-content/uploads/2020/09/hiking-in-torres-del-paine-e1603308807174.jpg',
        'https://www.rionegro.com.ar/wp-content/uploads/2022/02/las-grutas-fuerte-argentino-7.jpg',
        'https://www.tangol.com/Fotos/Tours/expedicion-al-fuerte-argentino_6704_202011020941361.JPG',
        'https://lasgrutasturismo.gob.ar/wp-content/uploads/2020/06/aerea-fuerte-argentino.jpg',
      ],
      description: `Esa meseta que se visualiza al sur desde Las Grutas, invita a descubrir… ¡La Patagonia Templaria! La travesía la realizamos en un legendario convoy de camiones militares todoterreno visitando la Villa de los Pulperos; diversión en los médanos de Piedras Coloradas con trineos de arena y almorzamos un espectacular asado patagónico frente al mar. Luego del postre, reiniciamos el derrotero para explicar en El Sótano cómo y porqué se forman las mareas y, en el Fuerte Argentino, hacemos snorkeling en la Laguna de Loma Blanca, para terminar la tarde escuchando la fabulosa leyenda de los Templarios. ¡Una excursión didáctica y divertida, para todas las edades!.`,
      typeAct: 'travel',
      price: '750',
    },
    {
      name: 'avistamiento de ballenas',
      duration: 3,
      img: [
        'https://lasgrutasturismo.gob.ar/wp-content/uploads/2020/06/avistajes.jpg',
        'https://www.interpatagonia.com/paseos/avistaje-ballenas-las-grutas/avistaje-ballenas-las-grutas-4.jpg',
        'https://www.patagonia.com.ar/media/imagenes/rio_negro/las_grutas/ballenas.jpg',
      ],
      description: ` Numerosos ejemplares de Ballena Franca Austral eligen el Golfo San Matías como un lugar reproductivo en una escala menor en relación a Puerto Madryn. A pesar de ello, año a año el número aumenta y se las puede avistar por el Camino de la Costa que pasa por la playa Las Conchillas en Bahía Creek, Puerto Nuevo, Las Grutas, Sierra Grande y Puerto Lobos.

                Tanto visitantes como pobladores de la región pueden disfrutar de este regalo de la naturaleza desde las playas de la localidad. La danza natural de estos asombrosos animales haciendo sus piruetas en el agua convierte al balneario en un lugar único de observación en Río Negro.
                
                Con largavistas y binoculares desde las playas o embarcándose en alguna excursión, se puede vivir un verdadero espectáculo en vivo y en directo de la diversidad de la fauna marina que siempre es motivo de sorpresa en la zona. Esto es porque se da la posibilidad de observar lobos marinos de uno y de dos pelos y delfines, los que nos deleitan con algún salto.`,
      typeAct: 'relax',
      price: '80',
    },
    {
      name: 'Astroturismo a orillas del Océano cósmico',
      duration: 4,
      img: [
        'https://noticiasnet-s2.cdn.net.ar/st2i1700/2023/01/noticiasnet/images/32/34/323414_fefb9433b3396fe3db612f3f95b63e7264bc5de04c2d2dee8c16bc2eb87d4ea2/sm.jpg',
        'https://turismo.rionegro.gov.ar/files/contenidos/1665783197_tanque-y-cielo-2-copia.png',
        'https://www.rionegro.com.ar/wp-content/uploads/2022/09/Las-Grutas-Estrelas-y-sabores-1.jpg',
      ],
      description: `Ubicacion: Las Grutas.
                                Funciones de Planetario Móvil, observación con telescopios, salidas de Astrofotografía nocturna, charlas, cursos y talleres. Eventos especiales para Complejos y Municipios. Divulgación científica desde el año 2006.`,
      typeAct: 'show',
      price: 300,
    },
  ],
  hotel: {
    name: 'Complejo Tamariscos',
    location: 'Aguada Cecilio 560, Las Grutas 8521 Argentina',
    img: [
      'https://complejotamariscos.com/wp-content/uploads/2019/11/portada-el-complejo-00-1024x768.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/aa/94/complejo-tamariscos.jpg',
      'https://complejo-tamariscos.hotelesenpatagonia.com/data/Images/OriginalPhoto/11769/1176993/1176993619/image-las-grutas-complejo-tamariscos-26.JPEG',
      'https://lasgrutasturismo.gob.ar/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-04-at-12.20.19-1-1024x719.jpeg',
    ],
    description: `Nuestro complejo se compone de modernos departamentos a 50 metros del mar ubicados en planta baja, 1º y 2º piso con vistas al mar y al balneario y dispone de un espacio con múltiples opciones para el ocio y el esparcimiento. Cuenta con dos piscinas de grandes dimensiones con dos niveles de profundidad, para niños y adultos. Además, tiene repartida en toda su expansión una serie de sectores de parrilleros con mobiliario, espacios de césped y decks de madera para solarium que permite el uso simultáneo de las instalaciones entre todos los residentes del complejo. La superficie total del mismo es de 1700 m2 con dos accesos, uno por la calle Aguada Cecilio y otro, por la calle Nahuel Huapi.
                    Telefono: 02920 15-51-3212`,
    stars: 4,
    priceDay: 500,
  },
  resto: [
    {
      name: 'Terra Mare',
      location: 'Adolfo Espinoza esquina con Costanera, Las Grutas 8521 Argentina',
      img: [
        'https://media-cdn.tripadvisor.com/media/photo-s/16/dd/2f/d5/la-spiaggia.jpg',
        'https://media-cdn.tripadvisor.com/media/photo-s/16/8f/a2/af/marisqueria-terra-mare.jpg',
        'https://i2.wp.com/orgasmikcooking.com/wp-content/uploads/2019/08/Calamarata-Terra-E-Mare-3.jpg',
      ],
      price: '250',
      description: `TIPOS DE COMIDA:
            Mariscos, Argentina, Sudamericana
            Comidas:
            Cena, Almuerzo
            CARACTERÍSTICAS:
            Comida para llevar, Asiento, Servicio de mesa`,
    },
  ],
  user: {
    userName: 'marcos',
    email: 'dnaa',
    password: '123654',
    lastName: 'mugica',
    social: true,
    socialRed: 'feisbuh',
  },
};

export const package4 = {
  package: {
    name: 'Chubut unleashed',
    location: 'Dolavon, Chubut',
    price: 3200,
    duration: 6,
    img: 'https://masdigitalsur.com/wp-content/uploads/2020/08/dolavon.jpg',
    img2: '',
    img3: '',
    img4: '',
    description: `Hacia la costa atlántica se destacan varios puntos turísticos. Entre ellos, Puerto Madryn, Capital Nacional del Buceo, y la Península Valdés, sitio del Patrimonio Mundial UNESCO por su gran riqueza en diversidad de especies de fauna costero-marina. Turistas de todo el mundo llegan hasta aquí para ver a la ballena franca austral, protagonista de este escenario natural, donde conviven lobos, elefantes marinos, orcas, delfines. También visitan Punta Tombo, ubicada más al sur, donde se encuentra la colonia de pingüinos, una de las predilectas de los visitantes.

        En Gaiman, cerca de Puerto Madryn, y en Trevelin, ubicado en la cordillera, se preservan tradiciones de la antigua cultura galesa; entre ellas, la celebración de la ceremonia del té, acompañado de otras delicias como la torta galesa, que vale la pena degustar. 
        
        Hacia la cordillera, también se encuentran otros atractivos destinos como la ciudad de Esquel y El Maitén, donde es imperdible hacer un paseo en “La Trochita”, un viejo tren expreso patagónico. Pero también desde Esquel se puede acceder al Parque Nacional Los Alerces, uno de los más bellos del país, declarado Patrimonio Mundial por la UNESCO. En él habitan ciervos autóctonos como el huemul y el pudú, y se encuentra el Alerzal milenario, uno de sus principales atractivos, con árboles de más de dos mil años.
        
        El Hoyo, Epuyén y Cholila, son otras pequeñas perlas turísticas de Chubut. Valles encajonados entre montañas andinas, lagos y ríos cristalinos, con un microclima especial que acompañan el desarrollo de una vida muy tranquila de sus pueblos. La producción de frutas finas, como frambuesas, frutillas, cerezas y grosellas, se suman a la elaboración de conservas y dulces, entre otras propuestas típicas para conocer del agroturismo regional. 
        
        Todos estos lugares invitan a disfrutar entornos naturales y seguros de aventura de todas las formas que donde se puede desarrollar el trekking, montañismo, recorridos en bicicleta, canotaje, rafting o parapente.`,
    quotas: 75,
    dateInit: '12/06/23',
    dateEnd: '12/11/23',
  },
  activities: [
    {
      name: 'Recorrido por las capillas Galesas',
      duration: 3,
      img: [
        'https://turismodolavon.com.ar/wp-content/uploads/2020/11/CAPILLA-CARMEL-UBICACION-URBANA-1024x766.jpg',
        'https://turismodolavon.com.ar/wp-content/uploads/2020/11/capillas2-1024x647.jpg',
        'https://turismodolavon.com.ar/wp-content/uploads/2020/11/CAPILLA-GLAN-ALAW-1024x728.jpg',
      ],
      description: `La construcción de las capillas galesas en el valle tiene gran influencia europea.En los primeros tiempos se construyeron de adobe con techo de carrizo y barro, y posteriormente fue reemplazado por ladrillo cocido unido con barro y asentado sobre cimiento de piedra. El techo era de chapa ondulada de zinc. En general las aberturas, pisos y cielorrasos son de madera de pinotea y techos a dos aguas.
                La religión fue de mucha importancia para mantener la unidad de la colonia, especialmente en los primeros tiempos. Se realizaban cultos, lectura bíblica, escuelitas dominicales para los más pequeños, y reuniones para orar.
                Las capillas se construyeron de manera cercana a cada vecino, procurando que entre cada una de ellas no haya más de 10 km de distancia.
                Si bien con el pasar del tiempo más de una fue destruida y perdida, aún se conservan en pie varias de ellas.
                Capilla Ebenezer
                Data de 1894 y su nombre quiere decir “hasta aquí nos ayudó Jehová”. El actual edificio en realidad corresponde al salon auxiliar o “Vestri”, ya que la capilla en sí se derrumbó en 1899 a consecuencia de una gran inundación.

                Capilla Glan Alaw
                Inaugurada en 1887, es una de las más pequeñas. Tiene cinco metros de frente por diez de largo y cinco de alto. Dada la poca cantidad de feligreses que concurrían, el mobiliario se distribuyó entre las demás capillas.
                A consecuencia de la humedad generada por la napa freática, en 1982 una de las paredes cedió. Actualmente se encuentra restaurada y funcionando.

                Capilla Bethesda
                Su construcción se debió a la separación de una parte de la Congregación Protestante independiente de la vecina capilla de Glan Alaw. Se construyó aproximadamente en 1895, pero pocos años más tarde se resolvió demolerla y construir una mucho más amplia, lo que se realizó en 1903. El edificio tiene 6.80 metros de frente, 10 de largo y una altura de 3.80 metros con techo a dos aguas. Posee un salón auxiliar o”Vestri” que se utiliza para la escuela dominical.
                Además, cada 28 de Julio se congregan vecinos de la zona para celebrar la gesta galesa con el tradicional té.

                Capilla Carmel de Dolavon.
                Fue una de las últimas que se instaló en la colonia, pues se estableció el 14 de noviembre de 1920. Anteriormente, los feligreses se debían trasladar hasta la capilla de Ebenezer. Como no tenían un edificio propio, alquilaron una casa en el pueblo hasta 1925. Luego ese mismo año se compró el edificio perteneciente al molino harinero de Bryn Gwyn, que era utilizado como depósito.
                La capilla mide 10 metros de ancho por 12 metros de fondo y 6 metros de altura

                Capilla metodista Dolavon
                Es la más nueva de las capillas y data del 5 de diciembre de 1965. Cuenta con el edificio principal y dos salas, una para la escuela bíblica y la otra para la escuela dominical. Hay otra sala al fondo que era usada por el grupo de jóvenes. Actualmente sigue funcionando de manera activa.

                Capilla Anglicana San David
                Se construyó en 1891. Era muy pequeña y con poca comodidad y resultó dañada cuando en 1909 un remolino levantó el techo. Fue demolida en 1914 y reconstruida con parte de los materiales de la anterior. Se finalizó su construcción en 1917. El edificio mide 10 metros de largo, 5.50 metros de ancho y 7 metros de altura con techo a dos aguas. Además, cuenta con un campanario de 12 metros con una campana, traída de Gales por Edwin Roberts, que había estado en uso por aproximadamente 300 años.
                `,
      typeAct: 'bike',
      price: '150',
    },
    {
      name: 'visita Chacra Las Piedras',
      duration: 2,
      img: [
        'https://turismodolavon.com.ar/wp-content/uploads/2020/11/DSC_0305_2-1024x683.jpg',
        'https://turismodolavon.com.ar/wp-content/uploads/2020/11/DSC_0330_1-1024x683.jpg',
        'https://turismodolavon.com.ar/wp-content/uploads/2020/11/DSC_0348_2-1024x683.jpg',
        'https://turismodolavon.com.ar/wp-content/uploads/2020/11/DSC_0339_2-1024x683.jpg',
      ],
      description: `A 2 kilómetros de Dolavon y con muy fácil acceso, se encuentra este emprendimiento rural cuyo propietario, el señor Elvio Griffiths, ha construido como lugar de esparcimiento.

                En su chacra produce forraje para engorde vacuno y ovino, pero lo que más invita al viajero a visitarla es el pequeño museo que cuenta con artefactos primitivos, herramientas, flechas, hachas, sobadoras, etc, que pertenecieros a los pueblos originarios de la zona.
                
                También cuenta con herramientas y utensilios de uso doméstico de las primeras épocas de los colonos galeses. La importante colección de objetos se completa con rocas minerales y monedas extranjeras y nacionales, entre otras curiosidades.
                
                Algunos objetos de la colección de Las Piedras se pueden observar en el edificio de La Mercante. 
                `,
      typeAct: 'show',
      price: '1750',
    },
    {
      name: 'conoce la pingüinera de Punta Tombo',
      duration: 7,
      img: [
        'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/3f/46/4f.jpg',
        'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/3f/46/9d.jpg',
        'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/3f/46/a7.jpg',
        'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/3f/46/50.jpg',
      ],
      description: `La Reserva de Punta Tombo es un Área Natural que protege las colonias de pingüinos de Magallanes. La zona es el lugar elegido por los pingüinos para realizar sus nidos y tener a sus pichones. La pingüinera es una franja costera de 3 km. de largo por 600 metros de ancho.

                Para tener en cuenta: Punta tombo cierra de abril a septiembre.
                
                Los pingüinos se pueden observar entre los meses de septiembre y abril, cuando llegan a la costa para reproducirse. En esos meses la colonia Punta Tombo puede llegar albergar hasta 400.000 pingüinos. Durante los meses de invierno (de abril a septiembre) los pingüinos permanecen mar adentro y es por eso que la reserva de Punta Tombo permanece cerrada. Los pingüinos regresan cada año el mismo lugar para para realizar sus nidos.
                
                La pinguinera tiene un centro de visitantes donde los guardafauna brindas charlas y explicaciones. Desde aquí comienza un sendero de 3.500 metros a lo largo de la playa que recorre el hábitat de los pingüinos, se destacan los nidos cavados en la tierra y los ejemplares que con marcha firme y graciosa van y vienen del mar procurando su alimento.
                    
                pinguinera punta tomboPinguinera Punta Tombo
                
                Además de los pingüinos se observan ñandúes, guanacos y maras.`,
      typeAct: 'travel',
      price: '500',
    },
    {
      name: 'treking en Las Bardas',
      duration: 5,
      img: [
        'https://turismodolavon.com.ar/wp-content/uploads/2020/11/trekking-bardas-3.jpg',
        'https://turismodolavon.com.ar/wp-content/uploads/2020/11/trekking-bardas-2.jpg',
        'https://turismodolavon.com.ar/wp-content/uploads/2020/11/DSC_0590.jpg',
        'https://turismodolavon.com.ar/wp-content/uploads/2020/11/DSC_8747.jpg',
      ],
      description: `Una forma diferente de disfrutar los alrededores de Dolavon a pie es el trekking por los miradores de las bardas que lo rodean.

                Estos senderos ofrecen, además de las hermosas vistas panorámicas del pueblo, una iniciativa saludable y diferente de conocer el corazón del valle.
                
                Se sugiere ropa y calzado cómodo y visitar durante el día.`,
      typeAct: 'treking',
      price: '70',
    },
    {
      name: 'visita a la Plaza temática',
      duration: 3,
      img: [
        'https://turismodolavon.com.ar/wp-content/uploads/2020/11/plaza-tematica-1-1024x683.jpg',
        'https://turismodolavon.com.ar/wp-content/uploads/2020/11/PLAZA-TEMATICA-DOLAVON-1-1024x683.jpg',
        'https://turismodolavon.com.ar/wp-content/uploads/2020/11/plaza-tematica2.jpg',
      ],
      description: `En su recorrido se pueden apreciar diferentes monumentos que forman parte de la identidad de cada localidad:

                Dique Florentino Ameghino: Representado por un murallón de piedra que nos recuerda al paisaje donde la represa contiene el agua del río Chubut. Se puede acceder al punto panorámico subiendo las escaleras.
                Gaiman: Se representa el túnel del ferrocarril construido en 1914 con el fin de unir el tendido entre Gaiman y Dolavon.
                Rawson: pequeña réplica del puente del poeta, primer puente de la ciudad capital y que data del año 1918.
                Puerto Madryn: Réplica del monumento al indio Tehuelche, ubicado en el punto histórico y panorámico de la ciudad, conocido como Punta Cuevas. Representa la llegada de los primeros colonos, mientras que los pobladores nativos observan hacia el mar el arribo de los desconocidos.
                Río Chubut: Se representa en forma de arroyo que cruza toda la plaza, naciendo en el murallón del lado oeste y finalizando en el Puente del Poeta. Está cruzado por varios puentes que representan todos los puentes que se encuentran sobre él.
            `,
      typeAct: 'relax',
      price: '150',
    },
  ],
  hotel: {
    name: 'Hotel Pierce',
    location: '28 de Julio n°49, Dolavon, Chubut',
    img: [
      'https://turismodolavon.com.ar/wp-content/uploads/2021/03/DSC_0363_2.jpg',
      'https://turismodolavon.com.ar/wp-content/uploads/2021/03/DSC_0361_2.jpg',
      'https://turismodolavon.com.ar/wp-content/uploads/2021/03/DSC_0371_1.jpg',
      'https://turismodolavon.com.ar/wp-content/uploads/2021/03/DSC_0373_1.jpg',
    ],
    description: `El Hotel Pierce tiene una larga historia en el pueblo. Antiguamente era propiedad de John Pierce que, además de proveer alojamiento, lo alquilaba para casamientos, cumpleaños y otros festejos.
        En aquellos años, el hotel tenía amplias habitaciones, una letrina en el fondo de la propiedad y una serpentina en un galpón donde se calentaba el agua para toda la propiedad.
        Tras un gran trabajo de remodelación, el hotel, ubicado a pocos metros de La Mercante, ofrece 12 habitaciones, Wi-fi, DirecTv, desayuno, almuerzo y cena, aire acondicionado, confitería, cafetería y heladería.
        Y por encima de todo, una excelente atención.
        Telefono: 0280 - 4604627`,
    stars: 2,
    priceDay: 200,
  },
  resto: [
    {
      name: 'Reina Momo',
      location: '25 de Mayo 180, Dolavon, Chubut',
      img: [
        'https://turismodolavon.com.ar/wp-content/uploads/2021/07/1625086200-1024x630.jpg',
        'https://turismodolavon.com.ar/wp-content/uploads/2021/07/1625086270-1024x684.jpg',
        'https://turismodolavon.com.ar/wp-content/uploads/2021/07/1626177706-1-1024x539.jpg',
      ],
      price: '300',
      description: `Reina Momo es un bar cultural y gastronómico. Un espacio para escuchar la mejor música, compartir con amigos y disfrutar las mejores cervezas y tragos

        - Shows de bandas en vivo
        - Noches de Karaoke
        - Transmisión de partidos y streaming de recitales
        - Varietté cultural
        Telefono:  0280 453-4219`,
    },
    {
      name: 'Ty Gerlan',
      location: 'Dolavon, Chubut',
      img: [
        'https://turismodolavon.com.ar/wp-content/uploads/2021/07/ty-gerlan-1024x683.jpg',
        'https://turismodolavon.com.ar/wp-content/uploads/2021/07/DOLAVON-56-1024x683.jpg',
        'https://turismodolavon.com.ar/wp-content/uploads/2021/07/DOLAVON-45-1024x683.jpg',
        'https://turismodolavon.com.ar/wp-content/uploads/2021/07/DOLAVON-44-1024x683.jpg',
      ],
      price: '400',
      description: `Mona Lowisa ofrece el auténtico té galés, herencia pura, donde ya 4 generaciones manufacturan exquisiteces meramente galesas.

        Delicias como pan casero, las “teisen bach” (tortitas hechas a la plancha), los scons y la tradicional torta negra se pueden degustar en su casa de té, situada en la chacra que también se presta como sitio recreativo y de esparcimiento.
        Telefono: 0280 154328352`,
    },
    {
      name: 'El Viejo Molino de Dolavon',
      location: 'Maipú 61, Dolavón, Chubut.',
      img: [
        'https://turismodolavon.com.ar/wp-content/uploads/2020/08/20201226_204935.jpg',
        'https://turismodolavon.com.ar/wp-content/uploads/2020/08/el-molino-3-1024x775.jpg',
        'https://turismodolavon.com.ar/wp-content/uploads/2020/08/el-molino-web-1024x683.jpg',
        'https://turismodolavon.com.ar/wp-content/uploads/2020/08/DSC_0906-1.jpg',
      ],
      price: '700',
      description: `El Viejo Molino tiene un nombre importante en la gastronomía local que hoy  se destaca por una cocina en donde la leña y el horno de barro son los protagonistas.

        Ademas cuenta con fábrica de cerveza artesanal -La Dolavense-, cocina al aire libre, cocktelería de autor y una gintonería con 15 marcas nacionales.
        Lunes: CERRADO
        Martes: CERRADO
        Miércoles: CERRADO
        Jueves: 11:30 - 15:30
        Viernes: 11:30 - 15:30
        Sábado: 11:30 - 15:30, 20:30 - 00:00
        Domingo: 11:30 - 15:30
        --
        Telefono: 0351 626-9542
        `,
    },
  ],
  user: {
    userName: 'damian',
    email: 'adna',
    password: '321456',
    lastName: 'broglia',
    social: true,
    socialRed: 'feisbuh',
  },
};
