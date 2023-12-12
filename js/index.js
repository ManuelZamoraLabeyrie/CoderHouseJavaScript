// LA APP SERA UN E-COMMERCE BASADO EN LA GALERIA DE ARTE DE UN AMIGO.

// Variables 

let nombreDos = prompt("Ingrese su nombre");
let nombreTres = prompt("Ingrese su apellido");
alert("Hola Salamin");
confirm("¿Hora de jugar?");

let nombreCompleto = nombreDos + " " + nombreTres
alert("Alto Campeón este tal " + nombreCompleto);

// Constantes
const PRECIO_BASE_OBRA1 = 100;
const PRECIO_BASE_OBRA2 = 150;
const PRECIO_BASE_OBRA3 = 200;

// Variables
let carrito = []; // Array para almacenar las obras seleccionadas
let totalCompra = 0; // Variable para almacenar el total de la compra

// Función para añadir una obra al carrito
function agregarAlCarrito(obra, precioBase) {
carrito.push(obra);
totalCompra += precioBase;
console.log(`${obra} ha sido añadido al carrito. Total: $${totalCompra}`);
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
console.log("Carrito de compras:");
for (let i = 0; i < carrito.length; i++) {
console.log(`- ${carrito[i]}`);
}
console.log(`Total de la compra: $${totalCompra}`);
}

// Opciones de compra
let opcion1 = prompt("Ingrese el nombre de la obra de arte para agregar al carrito:");
agregarAlCarrito(opcion1, PRECIO_BASE_OBRA3);

let opcion2 = prompt("Ingrese el nombre de otra obra de arte para agregar al carrito:");
agregarAlCarrito(opcion2, PRECIO_BASE_OBRA2);

let opcion3 = prompt("Ingrese el nombre de una tercera obra de arte agregar al carrito (si te llevas 3, la ultima tiene descuento):");
agregarAlCarrito(opcion3, PRECIO_BASE_OBRA1);

// Confirmar la compra
let confirmacion = confirm("¿Desea confirmar la compra?");
if (confirmacion) {
mostrarCarrito();
alert(`Compra realizada. Total a pagar: $${totalCompra}`);
} else {
alert("Compra cancelada.");
}