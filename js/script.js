/*
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
}); */




// Arrays y bucles



let hobbies = ["Programar", "Entrenar", "Leer", "Escuchar música"];


for (let i = 0; i < hobbies.length; i++) {
    console.log("Hobby #" + (i+1) + ": " + hobbies[i]);
};

hobbies.forEach((hobby, index) => {
    console.log(`Hobby ${index + 1}: ${hobby}`);
});


// Objetos



let persona = {
    nombre: "Duván",
    edad: 15,
    esProgramador: true
};

console.log("Nombre:", persona.nombre);
console.log("Edad", persona.edad);
console.log("¿Es programador?", persona.esProgramador);


// Dinámico con arrays



const listaHobbies = document.getElementById("listaHobbies");

hobbies.forEach((hobby) => {
    let li = document.createElement("li");
    li.textContent = hobby;
    listaHobbies.appendChild(li);
});