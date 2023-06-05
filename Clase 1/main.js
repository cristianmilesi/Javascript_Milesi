let dinero = parseInt(prompt("Ingrese la cantidad de dinero a invertir en el plazo fijo")) 
let días = parseInt(prompt("ingrese la cantidad de días de inversión"))

let plazoFijo = 97/100
let gananciaDiaria= (plazoFijo / 365)
let gananciaFinal = dinero * (gananciaDiaria * días)

console.log("La ganancia del Plazo Fijo será de " + gananciaFinal)

let resultado = alert("su ganancia será de $" + gananciaFinal )
