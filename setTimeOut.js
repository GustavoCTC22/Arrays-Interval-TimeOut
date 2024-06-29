// console.log("hola");

// const number = setTimeout(() => {
//   console.log("ejecutando timer");
// }, 3000);
// console.log("hola2");

// // clearTimeout(number);
// console.log("hola3");

// // EventLoop;

// setTimeout(() => console.log("ejecutando timer"), 1500);
// function saludar(nombre = "mundo") {
//   console.log("Hola " + nombre);
// }
// setTimeout(saludar, 1000); // 'Hola mundo' después de 1 segundo

// console.log("Antes de la planificación");
// setTimeout(() => console.log("Tarea programada"), 0);
// console.log("Después de la planificación");
// setTimeout(() => console.log("Tarea programada 2"), 0);
// console.log("Mucho después de la planificación");

//EventLoop
function saludar(nombre = "mundo") {
  console.log("Hola " + nombre);
}
const timerId = setTimeout(() => saludar("ctc"), 1000);

// clearTimeout(timerId);

function saludar(nombre = "mundo") {
  console.log("Hola " + nombre);
}
setTimeout(hola, 1000);

const hola = () => console.log("hola");
