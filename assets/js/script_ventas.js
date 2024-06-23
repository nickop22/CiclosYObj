const propiedades_venta = [
    {
    nombre: 'casa1',
    titulo: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    bano: '4',
    costo: 5000,
    smoke: false,
    pets: true
    },
    {
    nombre: 'casa2',
    titulo: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    bano: '1',
    costo: 1200,
    smoke: true,
    pets: true  
    },
    {
    nombre: 'casa3',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    titulo: 'Penthouse de lujo con terraza panorámica',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    bano: '3',
    costo: 4500,
    smoke: false,
    pets: false,
    },
    {
    nombre: 'casa4',
    src: 'https://www.chilevision.cl/chilevision/site/artic/20181227/imag/foto_0000000120181227120911/casas_en_la_playa_en_yucatan_2712.jpg',
    titulo: 'Casa de la playa',
    descripcion: 'Casa bonita en la playa',
    ubicacion: 'cartajena',
    habitaciones: 5,
    bano: '3',
    costo: 3000,
    smoke: true,
    pets: true
    },
    {
    nombre: 'casa5',
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20140314/231923/m_wm_2020061550392390010.jpg',
    titulo: 'Casa de fosforo',
    descripcion: 'casa sin brillo pero moderna',
    ubicacion: 'ChitCureo',
    habitaciones: 5,
    bano: '3',
    costo: 4000,
    smoke: false,
    pets: true,
    },
    {
    nombre: 'casa6',
    src: 'https://www.bienesonline.com/chile/photos/amplia-casa-familiar-en-venta-santiago-CAV1160691605886792-228.jpg',
    titulo: 'Casa en Pudahuel',
    descripcion: 'Casa en sector privilegiado de la comuna de Pudahuel, a pasos de autopista y de toda la chachara cerca de alli',
    ubicacion: 'Pudahuel Alto Alto',
    habitaciones: 5,
    bano: '3',
    costo: 30000,
    smoke: false,
    pets: true
    },
    {
    nombre: 'casa7',
    src: 'https://cf.chilepropiedades.cl/imagenes/publicacion/venta/casa/santiago/1/8b2a721b085744ac8e8eb99024c91b78.jpeg',
    titulo: 'Casa cerca del Boric',
    descripcion: 'Casa en Barrio Yungay cerca de mi Presi',
    ubicacion: 'Santiago Centro',
    habitaciones: 4,
    bano: '1',
    costo: 3000,
    smoke: false,
    pets: false,
    },
    {
    nombre: 'casa8',
    src: 'https://http2.mlstatic.com/D_NQ_NP_892280-MLC51530216072_092022-O.webp',
    titulo: 'Casa Terrible de Chica',
    descripcion: 'En Paine venden esto, deberian darles vergüenza',
    ubicacion: 'Paine',
    habitaciones: 2,
    bano: '1',
    costo: 2000,
    smoke:true,
    pets: true,
    }]
function generateCardsVenta() {
    const container = document.getElementById('cardContainerVentas');
    var counter = 0
    for (const propiedad of propiedades_venta) {
        let smokeText = propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar';
        let petsText = propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas';
        let smokeClass = propiedad.smoke ? 'text-success' : 'text-danger';
        let petsClass = propiedad.pets ? 'text-success' : 'text-danger';
        let smokeIcon = propiedad.smoke ? '<i class="fa-solid fa-smoking"></i>' : '<i class="fa-solid fa-ban-smoking"></i>';
        let petsIcon = propiedad.pets ? '<i class="fas fa-paw"></i>' : '<i class="fas fa-ban"></i>';

        const cardHTML = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${propiedad.src}" class="card-img-top" alt="img propiedad venta"/>
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.titulo}</h5>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                        <p>
                            <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                            <i class="fas fa-bath"></i> ${propiedad.bano} Baños
                        </p>
                        <p><i class="fas fa-dollar-sign"></i> $${propiedad.costo}</p>
                        <p class="${smokeClass}">
                            ${smokeIcon} ${smokeText}
                        </p>
                        <p class="${petsClass}">
                            ${petsIcon} ${petsText}
                        </p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    }
  }

generateCardsVenta();