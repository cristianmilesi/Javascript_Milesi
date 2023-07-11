//Captura de DOM//
let catalogoDiv = document.getElementById("catalogoDiv")
let verCatalogo = document.getElementById("verCatalogo")
let comprarMedalla = document.getElementById("medallasBtn")
let comprarBandana = document.getElementById("bandanasBtn")
let comprarCollar = document.getElementById("collaresBtn")

let carrito = []


//Class//
class Medalla{
    constructor(modeloM, colorM, precioM, idM){
       this.modelo = modeloM,
       this.color = colorM,
       this.precio = precioM, 
       this.id = idM
    }

    mostrarInfoMedalla(){
        console.log(`La medalla ingresada tiene el modelo ${this.modelo} de color ${this.color} Su precio es de ${this.precio}`)
     }
}

// Creo algunas medallas para ingresar al catálogo //

const medalla1 = new Medalla("Hueso grande", "Naranja", 400, 1)
const medalla2 = new Medalla("Pez", "verde", 300, 2)
const medalla3 = new Medalla("Circulo", "azul", 300, 3) 

//Creación de Catálogo
const catalogoMedallas = []
catalogoMedallas.push(medalla1, medalla2, medalla3) 


//Funciones//

//Ver Catálogo
function verCatalogo(array){
    console.log(`Nuestro catalogo disponible es el siguiente: `)
    for(let medalla of array){
       console.log(`Modelo: ${medalla.modelo} - Color: ${medalla.color} - Precio: ${medalla.precio} - ID: ${medalla.id}`)
    }
}

function agregarAlCarrito(){
    carrito.push(producto) //cambiar por lo que corresponda//
    console.log(carrito)
}

function mostrarCatalogo(catalogoMedallas) {
catalogoDiv.innerHTML = ``
for(let medalla of catalogoMedallas) {
    let nuevaMedalla = document.createElement("p")
    nuevaMedalla.innerHTML = `<p>Modelo: ${medalla.modelo} - Color: ${medalla.color} - Precio: ${medalla.precio} - ID: ${medalla.id}</p>`
}
}




//Eventos//

`

comprarMedalla.addEventListener("click", ()=>{
    console.log(`Se agregó ${producto} al carrito`)
    agregarAlCarrito(producto) //Cambiar producto por el objeto correspondiente//

})

comprarBandana.addEventListener("click", ()=>{
    console.log("Botón de Comprar Bandana funciona")
})

comprarCollar.addEventListener("click", ()=>{
    console.log("Botón de Comprar Collar funciona")
})
