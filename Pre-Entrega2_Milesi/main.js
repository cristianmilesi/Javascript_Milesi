// Simulador de tienda online de artículos para mascótas
//En este simulador se va a ofrecer la posibilidad de cargar datos y elegir diferentes tipos de medallas para perros y gatos, teniendo en cuenta modelo, color y tamaño. Además se dará la opción de hacer una medalla personalizada donde se podrá poner el nombre de la mascota. Según la selección se establecerá el precio. 

//Creación de clase constructora MEDALLAS//

class Medalla{
    constructor(modeloM, colorM, tamañoM, precioM, idM){
       this.modelo = modeloM,
       this.color = colorM,
       this.tamaño = tamañoM,
       this.precio = precioM, 
       this.id = idM
    }

    mostrarInfoMedalla(){
        console.log(`La medalla ingresada tiene el modelo ${this.modelo} de tamaño ${this.tamaño} y color ${this.color} Su precio es de ${this.precio}`)
     }
}

// Creo algunas medallas para ingresar al catálogo //

const medalla1 = new Medalla("Hueso", "rojo", "grande", 400, 1)

const medalla2 = new Medalla("Pez", "verde", "mediano", 300, 2)

const medalla3 = new Medalla("Circulo", "azul", "pequeño", 200, 3) 

//Creación de Catálogo
const catalogoMedallas = []
catalogoMedallas.push(medalla1, medalla2, medalla3)

//Ver Catálogo

function verCatalogo(array){
    console.log(`Nuestro catalogo disponible es el siguiente: `)
    for(let medalla of array){
       console.log(`Modelo: ${medalla.modelo} - Color: ${medalla.color} - Tamaño: ${medalla.tamaño} - Precio: ${medalla.precio} - ID: ${medalla.id}`)
    }
}


//Agregar nueva medalla al catálogo
function agregarMedalla(){
   let modeloIngresado = prompt("Ingrese el modelo de medalla (Hueso / Pez / Circulo)")
   let colorIngresado = prompt("Ingrese el color de la medalla")
   let tamañoIngresado = prompt("Ingrese el tamaño de la medalla (grande / mediana / pequeña)")
   let precioIngresado = parseInt(prompt("Ingrese el precio de la medalla"))

   const medallaNueva = new Medalla(modeloIngresado, colorIngresado, tamañoIngresado, precioIngresado, catalogoMedallas.length+1)
   //pusheamos al array:
   catalogoMedallas.push(medallaNueva)
   
}

//Quisiera hacer dos cosas a futuro:
//1- Agregar una función que calcule el precio automáticamente a partir del tamaño de la medalla
//2- Hacer que al ingresar los datos se compruebe si son correctos antes de ingresarlos al catálogo

//Eliminar una medalla del catálogo

function eliminarMedalla(array){
   verCatalogo(array)
   let eliminarID = parseInt(prompt("Ingrese el id que desea eliminar"))
   let arrayID = array.map(medalla => medalla.id)
   console.log(arrayID)

   let indice = arrayID.indexOf(eliminarID)
   console.log(indice)

   array.splice(indice, 1)
   verCatalogo(array)
}

//Hacer una lista de medallas según el modelo ingresado 

function buscarPorModelo(array){
   let modeloBusqueda = prompt("Ingrese el modelo de medalla que está buscando")
   let busqueda = array.filter(
      (medalla) => medalla.modelo.toLowerCase() == modeloBusqueda.toLowerCase()
   )
   if(array.length == 0){
      console.log(`El modelo de medalla ${autorBusqueda} no existe en nuestro catalogo`)
   }else{
      verCatalogo(busqueda)
   }
}

//Hacer una lista de medallas según el color ingresado

function buscarPorColor(array){
   let colorBusqueda = prompt("Ingrese el color de medalla que está buscando")
   let busqueda = array.filter(
      (medalla) => medalla.color.toLowerCase() == colorBusqueda.toLowerCase()
   )
   if(array.length == 0){
      console.log(`El color de medalla ${autorBusqueda} no existe en nuestro catalogo`)
   }else{
      verCatalogo(busqueda)
   }
}

//Ordenar las medallas según el precio
function ordenarPorPrecio(array){
   //copia del array original, para aplicar sort y no modificar estanteria
   const porPrecio = [].concat(array)
   console.log(porPrecio)
   //de forma ascendente por el atributo precio
   porPrecio.sort((a,b) => a.precio - b.precio)
   verCatalogo(porPrecio)
}

//Menu principal 

function menu(){
   let salirMenu = false
   do{
   let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
      1 - Agregar Medalla
      2 - Borrar Medalla
      3 - Consultar catálogo
      4 - Buscar por modelo
      5 - Buscar por color
      6 - Ordenar por precio
      0 - Salir del menu`))
      switch(opcionIngresada){
         case 1:
            agregarMedalla()  
         break
         case 2:
            eliminarMedalla(catalogoMedallas)
         break
         case 3:
            verCatalogo(catalogoMedallas)
         break
         case 4:
            buscarPorModelo(catalogoMedallas)
         break
         case 5:
            buscarPorColor(catalogoMedallas)
         break
         case 6:
            ordenarPorPrecio(catalogoMedallas)
         break            
         case 0:
            console.log(`Muchas gracias por utilizar nuestra aplicación. ¡Saludos!`)
            salirMenu = true
         break   
         default:
            console.log("Opción no válida, ingrese alguna opción del MENÚ")
         break
      }
   }while(!salirMenu)
}

menu() 