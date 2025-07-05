
// Variables
let nombre = "Duván";
const edad = 15;

// Tipos de datos
let esEstudiante = true;
let hobbies = ["Programar", "Entrenar", "Leer"];
let persona = { nombre: "Duván", edad: 15 };

console.log(nombre, edad, esEstudiante, hobbies, persona);

let añoActual = 2025;
let añoNacimiento = 2010;
let calculoEdad = añoActual - añoNacimiento;

if (calculoEdad >= 16) {
    console.log("Tienes 16 años o más");
} else {
    console.log("Tienes menos de 16 años");
};

// Función normal
function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
};

//Función flecha
const despedir = (nombre) => {
    console.log("Chau, " + nombre + "!");
};

saludar("Duván");
despedir("Duván");


const button = document.getElementById("cambiarColorBtn");

button.addEventListener("click", () => {
    document.body.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);
});