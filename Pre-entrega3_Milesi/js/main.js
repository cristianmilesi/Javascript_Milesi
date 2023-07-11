//Captura de DOM//
let catalogoDiv = document.getElementById("catalogoDiv")
let verCatalogo = document.getElementById("verCatalogo")
let ocultarCatalogo = document.getElementById("ocultarCatalogo")
let agregarProductoBtn = document.getElementById("agregarProductoBtn")
let tipoProductoIngresado = document.getElementById("tipoProductoInput")
let modeloProductoIngresado = document.getElementById("modeloProductoInput")
let colorProductoIngresado = document.getElementById("colorProductoInput")
let botonAgregarAlCatálogo = document.getElementById("botonAgregarAlCatálogo")

let modeloIngresado = document.getElementById("modeloInput")
let colorIngresado = document.getElementById("colorInput")
let cantidadIngresado = document.getElementById("cantidadInput")
let comprarMedalla = document.getElementById("medallasBtn")
let comprarBandana = document.getElementById("bandanasBtn")
let comprarCollar = document.getElementById("collaresBtn")
let botonFinalizar = document.getElementById("botonFinalizarCompra")

let carrito = []


//Class//

class Producto{
    constructor(tipoP, modeloP, colorP, precioP, idP){
       this.tipo = tipoP
       this.modelo = modeloP,
       this.color = colorP,
       this.precio = precioP, 
       this.id = idP
    }

    mostrarInfoProducto(){
        console.log(`El producto ingresado es un/a ${this.tipo} del modelo ${this.modelo} de color ${this.color} Su precio es de ${this.precio} y su ID ${this.idM}`)
     }
}

// Creo algunos productos para ingresar al catálogo //

const producto1 = new Producto("Medalla", "Hueso grande", "naranja", 300, 1)
const producto2 = new Producto("Medalla", "Pez", "verde", 300, 2)
const producto3 = new Producto("Medalla", "Circulo", "azul", 300, 3)
const producto4 = new Producto("Collar", "Grande", "naranja", 500, 4)
const producto5 = new Producto("Bandana", "Mediana", "rosa", 400, 5)

//Creación de Catálogo


const catalogoProductos = []
catalogoProductos.push(producto1, producto2, producto3, producto4, producto5) 

//Funciones//

//Ver Catálogo
function verCatalogoConsola(array){
    console.log(`Nuestro catalogo disponible es el siguiente: `)
    for(let producto of array){
       console.log(`Tipo: ${producto.tipo} Modelo: ${producto.modelo} - Color: ${producto.color} - Precio: ${producto.precio} - ID: ${producto.id}`)
    }
}

function mostrarCatalogo(array) {
    verCatalogoConsola(array)

    catalogoDiv.innerHTML = ``
    for(let producto of array) {
        let otroProducto = document.createElement("div")
        otroProducto.className = "col-12 my-2 bg-white align-items-center "
        otroProducto.innerHTML = `<p>Tipo: ${producto.tipo} Modelo: ${producto.modelo} - Color: ${producto.color} - Precio: ${producto.precio} - ID: ${producto.id}</p>`
        catalogoDiv.appendChild(otroProducto)
    }
}

function agregarProducto(array){
    let tipoIngresado = document.getElementById("tipoProductoIngresado")
    let modeloIngresado = document.getElementById("modeloProductoIngresado")
    let colorIngresado = document.getElementById("colorProductoIngresado")
    let precioProducto = () => {
        if(tipoIngresado.value === "Medalla") {
            return 300
        } else if (tipoIngresado.value = "Collar"){
            return 500
        } else (tipoIngresado.value = "Bandana");{
            return 400
        }
    }
    console.log(precioProducto)
    
    //arriba capturamos toda la etqieta input, necesitamos el valor
    const productoNuevo = new Producto(tipoIngresado.value, modeloIngresado.value, colorIngresado.value, precioProducto, array.length+1)
    //pusheamos al array:
    array.push(productoNuevo)
    //setear en el storage el array con el libro
    localStorage.setItem("catalogo", JSON.stringify(array))
    mostrarCatalogo(array)
    
    // //resetear el form
    // autorIngresado.value = ""
    // tituloIngresado.value = ""
    // precioIngresado.value = ""
 }




//Eventos//
verCatalogo.addEventListener("click", ()=>{
   mostrarCatalogo(catalogoProductos)
})

ocultarCatalogo.onclick = () => {
    catalogoDiv.innerHTML = ``
}



// A futuro voy a intentar agregar también la opción de otros elementos // 
comprarBandana.addEventListener("click", ()=>{
    console.log("Botón de Comprar Bandana funciona")
})

comprarCollar.addEventListener("click", ()=>{
    console.log("Botón de Comprar Collar funciona")
})

// Prueba para saber si funciona el evento
// modeloIngresado.addEventListener("change", ()=> {
//     let valorModeloIngresado = modeloIngresado.value
//     console.log(`El modelo ingresado es ${valorModeloIngresado}`)
// })

// botonFinalizar.addEventListener("click", ()=> {
//     agregarAlCarrito(carrito) })

botonAgregarAlCatálogo.addEventListener("click", ()=> {
    agregarProducto(catalogoProductos)
})
