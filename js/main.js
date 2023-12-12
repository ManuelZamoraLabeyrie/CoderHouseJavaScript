let nombre;
nombre = "Manuel";
console.log (nombre);

let otroNombre = "Ximena"; 
console.log(otroNombre);

let edadDeManuel = 28;
let edadDeXimena = "25";

console.log(typeof edadDeManuel);
console.log(typeof edadDeXimena);

/*
String (entre comillas "")
Numericos (normal)
Booleano (verdadero o falso)
*/

const otraVariable = false;

//console.log(2 + 2)
let sumaDosMasDos = 2 + 2;
console.log(sumaDosMasDos);

let numeroA = 20;
let numeroB = 3;

console.log(numeroA + numeroB);

let nombreDos = prompt("Ingrese su nombre");
let nombreTres = prompt("Ingrese su apellido");
alert("Hola Salamin");
confirm("¿Hora de jugar?");

let nombreCompleto = nombreDos + " " + nombreTres
console.log("Alto Salamin este tal " + nombreCompleto);


/*CLASE 2*/

const numero1 = 2
const numero2 = 3

if(numero1 > numero2){
    console.log("Es mayor")
}

if(numero1 < numero2){
    console.log("Es menor")
}

console.log(numero1!=numero2) 



let opcion;
do{
    opcion =  prompt("Ingrese la operacion que desee realizar (+ - : x) o 0 (cero) para finalizar");
    switch (opcion){
        case "+":
            alert("Ingresaste una suma")
            break;
        case "-":
            alert("Ingresaste una resta")
            break;
        case ":":
            alert("Ingresaste una division")
            break;
        case "x":
            alert("Ingresaste una multiplicacion")
            break;
        case "0":
            alert("Adeu")
            break;
        default:
        alert("Error")
        break;
    }

} while (opcion !== "0")







const TopProductos = ["Banana1","Joker","MacbaNewYorker","AmyWithhouse","CorazonVegetal"]

for(let i = 0; 1 < TopProductos.length; i++){
    console.log("Los Productos más vendidos son: " + TopProductos[i]);
}