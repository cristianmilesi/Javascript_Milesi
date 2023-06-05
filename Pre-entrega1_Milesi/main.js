//Evaluador de departamentos//
//Objetivo: crear un simulador que permita dar una nota final a partir de los datos ingresados sobre un departamento. En este caso se basa en barrios de la ciudad de Rosario, dando una puntuación por cada item según mi propia desición (preferencia en Centro con 2 habitaciones). Lo ideal sería primero poder pedir las preferencias de busqueda de departamentos del usuario para luego dar una nota cada vez que se ingrese las características de un departamento. También se podría agregar otras variantes como Propietario o Inmoboliaria, Con o Sin cochera, etc. 

let puntaje = 0

//Ingresar la zona del Departamento 

let zona= prompt("Bienvenidx a la evaluadora de departamentos ¿En que barrio se encuentra el departamento? Ingrese una de las siguientes opciones: Centro - Abasto - Norte - Sur - Lourdes - Pichincha") 

validarZona(zona)

// Creé una función para realizar todo el proceso porque me pareció mas ordenado, pero creo podría hacerse sin necesidad de que sea una función
// Primero se valida que el usuario ingresó los datos correctamente y luego se le da una puntuación

function validarZona(zona) {

    while(zona.toLowerCase() != "centro" && zona.toLowerCase() != "abasto" && zona.toLowerCase() != "norte" && zona.toLowerCase() != "norte" && zona.toLowerCase() != "sur" && zona.toLowerCase() != "lourdes" && zona.toLowerCase() != "pichincha"){
        alert ("El barrio seleccionado no coincide con la lista.")
        zona = prompt("Ingrese una de las siguientes opciones: Centro - Abasto - Norte - Sur - Lourdes - Pichincha")
    }

    switch(zona.toLowerCase()){
    case "centro":
        console.log("El barrio seleccionado es Centro")
        puntaje = puntaje + 10
        console.log("El puntaje actual es " + puntaje)
    break;
    case "abasto":
        console.log("El barrio seleccionado es Abasto")
        puntaje = puntaje + 9
        console.log("El puntaje actual es " + puntaje)
    break;
    case "norte":
        console.log("El barrio seleccionado es Norte")
        puntaje = puntaje + 6
        console.log("El puntaje actual es " + puntaje)
    break;
    case "sur":
        console.log("El barrio seleccionado es Sur")
        puntaje = puntaje + 5
        console.log("El puntaje actual es " + puntaje)
    break;
    case "lourdes":
        console.log("El barrio seleccionado es Lourdes")
        puntaje = puntaje + 8
        console.log("El puntaje actual es " + puntaje)
    break;
    case "pichincha":
        console.log("El barrio seleccionado es Pichincha")
        puntaje = puntaje + 7
        console.log("El puntaje actual es " + puntaje)
    break;
    default:
        console.log("El barrio seleccionado no coincide con la lista. Actualice la página y vuelva a ingresar el barrio")
    }
    console.log(`El puntaje actual es ${puntaje}`)
    return puntaje
    
}

let precio = prompt("Ingrese el precio del departamento")

//En este caso se crea una función para validar que el dato sea un número, como se hizo en la afterclass

function validarNumero(num){
    while(isNaN(num)){
        num=parseInt(prompt("¡Atención! Debe ingresar un NÚMERO. Por favor vuelva a ingresar el dato"))
    }
    return num
}

validarNumero(precio)

// Se asigna un puntaje según el precio indicado

if(precio <= 50000){
    console.log("El precio es bajo")
    puntaje = puntaje + 10 
} else if (precio >50000 && precio < 80000){
    console.log("El precio es moderado")
    puntaje = puntaje + 8
} else if(precio > 80000) {
    console.log("El precio es alto")
    puntaje = puntaje + 5 
}else{ 
    console.log("No se ingreso precio")
}

console.log(`El puntaje actual es ${puntaje}`) 

//De la misma manera se hace con la cantidad de dormitorios, primero verifica que sea un número y luego asigna un puntaje

let cantDorm = prompt("Ingrese la cantidad de dormitorios del departamento")

validarNumero(cantDorm)

if(cantDorm <=1){
    puntaje = puntaje + 6
    console.log(`El departamento tiene ${cantDorm} habitación`)
    console.log(`El puntaje actual es ${puntaje}`)
} else if (cantDorm >1 && cantDorm <3) {
    puntaje = puntaje + 8
    console.log(`El departamento tiene ${cantDorm} habitaciones`)
    console.log(`El puntaje actual es ${puntaje}`)
} else if (cantDorm >= 3) {
    puntaje = puntaje + 10 
    console.log(`El departamento tiene ${cantDorm} habitaciones`)
    console.log(`El puntaje actual es ${puntaje}`)
} else {
    console.log("Error en al carga de datos")
}

//La nota fina es un promedio a partir del puntaje total y la cantidad de items ingresados. Si hubiera mas items debería modificarse

let notaFinal = puntaje / 3

console.log(`El puntaje total es de ${puntaje}`)
console.log(`La nota promedio es ${notaFinal}`)

alert(`El departamento ingresado tiene una nota final de ${notaFinal}`)

