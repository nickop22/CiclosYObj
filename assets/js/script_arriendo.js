const propiedades_arriendo =[
    {
        nombre: 'arriendo1',
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
        nombre: 'arriendo2',
        src: 'https://http2.mlstatic.com/D_NQ_NP_892280-MLC51530216072_092022-O.webp',
        titulo: 'Casa Terrible de Chica',
        descripcion: 'En Paine venden esto, deberian darles vergüenza',
        ubicacion: 'Paine',
        habitaciones: 2,
        bano: '1',
        costo: 2000,
        smoke:true,
        pets: true,
        },
    {
        nombre: 'arriendo3',
        titulo: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con ubicacion',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: '3',
        bano: '3',
        costo: '4500',
        smoke: false,
        pets: true,
    },
    {
        nombre: 'arriendo4',
        titulo: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2',
        bano: '2',
        costo: '2000',
        smoke: false,
        pets: true,
    },
    {
        nombre: 'arriendo5',
        titulo: 'Espectacular Casa Rodante',
        src: 'https://chileautos.pxcrush.net/chileautos/cars/private/ox3ajh5lgux6wtqgk04c0oh3.jpg?pxc_method=fitfill&pxc_bgtype=self&height=725&width=1087',
        descripcion: 'Solo enganchala a la Nave y nos fuimos de vacaciones !',
        ubicacion: 'Guardada en galpón hasta que llegue un comprador',
        habitaciones: '1',
        bano: '1',
        costo: '40500',
        smoke: false,
        pets: false,
    },
    {
        nombre: 'arriendo6',
        titulo: 'Casa Antigua en buen sector',
        src: 'https://www.engelvoelkers.com/images/4f7d4bf6-8dbc-4414-8e2d-0bc579bfe35a/casa-en-arriendo-pe%C3%B1uelas-a-jpg',
        descripcion: 'Privilegiado sector de la Florida. Casa bien mantenida',
        ubicacion: 'Caminata al cielo, La Florida RM',
        habitaciones: '3',
        bano: '2',
        costo: '7500',
        smoke: false,
        pets: true,
    },
    {
        nombre: 'arriendo7',
        titulo: 'CASA NO DISPONIBLE',
        src: 'https://www.lorcacorredores.cl/wp-content/uploads/2021/03/1_4_casa_arriendo_ciudad_de_los_valles.jpg',
        descripcion: 'barrio nuevo en Peñalolen, cerca a condominio y supermercados',
        ubicacion: 'Las pircas, Peñalolen',
        habitaciones: '3',
        bano: '3',
        costo: '3000',
        smoke: true,
        pets: true,
    },
    
]
function generateCardsArriendo() {
    const container = document.getElementById('cardContainerArriendo');
    for (const propiedad of propiedades_arriendo) {
        let smokeText = propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar';
        let petsText = propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas';
        let smokeClass = propiedad.smoke ? 'text-success' : 'text-danger';
        let petsClass = propiedad.pets ? 'text-success' : 'text-danger';
        let smokeIcon = propiedad.smoke ? '<i class="fa-solid fa-smoking"></i>' : '<i class="fa-solid fa-ban-smoking"></i>';
        let petsIcon = propiedad.pets ? '<i class="fas fa-paw"></i>' : '<i class="fas fa-ban"></i>';

        const cardHTML= `
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
    }contador++
  }
generateCardsArriendo();