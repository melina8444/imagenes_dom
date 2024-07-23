const cardContainer = document.getElementById('card-container');

let tituloPrincipal = document.createElement('h1');
    tituloPrincipal.classList.add('tituloPrincipal');
    tituloPrincipal.textContent = 'Dibujos Animados'
    cardContainer.append(tituloPrincipal)

const creacionVariasCard = (imagen, nombre)=>{

    

    let li = document.createElement('li');
    li.classList.add('card');
    cardContainer.append(li);

    let picture = document.createElement('picture');
    li.append(picture);

    let imag = document.createElement('img');
    imag.classList.add('image_clase');
    imag.src = `img/${imagen}`;
    imag.alt = `${nombre.toLowerCase().replace(" ", "-")}`;
    picture.append(imag);

    let titulo = document.createElement('h3');
    titulo.classList.add('tituloCard');
    titulo.textContent = nombre;
    li.append(titulo)
}

// creacionVariasCard("gato1.png", "gatito1")
// creacionVariasCard("gato3.png", "gatito1")

const imagenes = ['gato_botas.webp','garfield.png','sailor_moon.png'];
const nombres = ['Gato con Botas','Garfield','Sailor Moon'];

for(let i = 0; i < imagenes.length; i++){
    creacionVariasCard(imagenes[i], nombres[i])
}