const students = ["Lucy", "Vanessa", "Liz", "Ariane", "Leidy"];
const pokemon = { id: "1", name: "pikachu", type: "Electric", power: 40 };
// console.log(students[0]);

//copia de un arreglo
const copia = [...students];
//copia de un objeto
const copy = { ...pokemon };

//METODOS DE ARREGLO

// Ejercicio 1: Agregar Elementos
// 1. Crea un arreglo vacío llamado `numeros`.
// 2. Usa el método `push` para agregar los números 1, 2 y 3 al arreglo.
const numeros = [];
console.log(numeros);
// numeros.push(1);
// numeros.push(2);
// numeros.push(3);
for (let i = 1; i <= 3; i++) {
  numeros.push(i);
}
console.log(numeros);

// Ejercicio 2: Eliminar Elementos
// 1. Crea un arreglo llamado `colores` con los valores "rojo", "verde" y "azul".
// 2. Usa el método `pop` para eliminar el último elemento del arreglo.
const colores = ["rojo", "verde", "azul"];
colores.pop();
console.log(colores);

// Ejercicio 3: Acceder a Elementos
// 1. Crea un arreglo llamado `frutas` con los valores "manzana", "banana" y "cereza".
// 2. Accede al segundo elemento del arreglo y guárdalo en una variable llamada `segundaFruta`.
const frutas = ["manzana", "banana", "cereza"];
const segundaFruta = frutas[1];
console.log(segundaFruta);
// Ejercicio 4: Encontrar la Longitud
// 1. Crea un arreglo llamado `animales` con los valores "perro", "gato", "conejo" y "tortuga".
// 2. Usa la propiedad `length` para encontrar la cantidad de elementos en el arreglo y guárdalo en una variable llamada `numeroDeAnimales`.
const animales = ["perro", "gato", "conejo", "tortuga"];
const numeroDeAnimales = animales.length;
console.log("animales:", animales);
console.log("numeroDeAnimales", numeroDeAnimales);
// Ejercicio 5: Eliminar el Primer Elemento
// 1. Crea un arreglo llamado `paises` con los valores "España", "Francia", "Italia" y "Alemania".
// 2. Usa el método `shift` para eliminar el primer elemento del arreglo.
const paises = ["España", "Francia", "Italia", "Alemania"];
console.log(paises);
paises.shift(1);
console.log(paises);
// Ejercicio 6: Agregar Elementos al Inicio
// 1. Crea un arreglo llamado `ciudades` con los valores "Madrid" y "Barcelona".
// 2. Usa el método `unshift` para agregar "Valencia" al inicio del arreglo.
const ciudades = ["Madrid", "Barcelona"];
ciudades.unshift("Valencia");
console.log(ciudades);
// Ejercicio 7: Combinar Arreglos
// 1. Crea dos arreglos: `frutas1` con los valores "manzana" y "banana", y `frutas2` con los valores "cereza" y "uva".
// 2. Usa el método `concat` para combinar ambos arreglos en uno nuevo llamado `todasLasFrutas`.
const frutas1 = ["manzana", "banana"];
const frutas2 = ["cereza", "uva"];
const todasLasFrutas = frutas1.concat(frutas2);
console.log(todasLasFrutas);
// Ejercicio 8: Ordenar Elementos
// 1. Crea un arreglo llamado `numeros` con los valores 3, 1, 4 y 2.
// 2. Usa el método `sort` para ordenar los números en orden ascendente.
const numeros2 = [3, -1, 4, -2, -9, 10, 15, 30];
numeros2.sort((a, b) => console.log(a, b));
numeros2.sort((a, b) => a - b);

// console.log(numeros2);
// Ejercicio 9: Invertir el Orden de los Elementos
// 1. Crea un arreglo llamado `letras` con los valores "a", "b", "c" y "d".
// 2. Usa el método `reverse` para invertir el orden de los elementos en el arreglo.

// Ejercicio 10: Encontrar el Índice de un Elemento
// 1. Crea un arreglo llamado `nombres` con los valores "Ana", "Luis", "Juan" y "Pedro".
// 2. Usa el método `indexOf` para encontrar el índice de "Juan" en el arreglo y guárdalo en una variable llamada `indiceDeJuan`.

//=====================================================================================
// Ejercicio 1: Filtrar Elementos
// 1. Crea un arreglo llamado `numeros` con los valores 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
// 2. Usa el método `filter` para crear un nuevo arreglo con solo los números pares.
[1, 2, 3, 4, 5, 6].filter((ele) => ele % 2 == 0);

// Ejercicio 2: Mapear Elementos
// 1. Crea un arreglo llamado `numeros` con los valores 1, 2, 3, 4, 5.
// 2. Usa el método `map` para crear un nuevo arreglo donde cada número esté multiplicado por 2.

// Ejercicio 3: Reducir un Arreglo
// 1. Crea un arreglo llamado `numeros` con los valores 1, 2, 3, 4, 5.
// 2. Usa el método `reduce` para encontrar la suma de todos los números en el arreglo.

// Ejercicio 4: Encontrar un Elemento
// 1. Crea un arreglo llamado `personas` con objetos que representen personas. Cada objeto debe tener propiedades `nombre` y `edad`.
// 2. Usa el método `find` para encontrar la primera persona que tenga más de 30 años.

// Ejercicio 5: Comprobar una Condición
// 1. Crea un arreglo llamado `edades` con los valores 18, 22, 25, 30, 35, 40.
// 2. Usa el método `some` para comprobar si al menos una de las edades es mayor de 30.

// Ejercicio 6: Comprobar Todas las Condiciones
// 1. Crea un arreglo llamado `edades` con los valores 18, 22, 25, 30, 35, 40.
// 2. Usa el método `every` para comprobar si todas las edades son mayores de 18.

// Ejercicio 7: Aplanar un Arreglo
// 1. Crea un arreglo llamado `arregloAnidado` con los valores [1, [2, 3], [4, [5, 6]]]
// 2. Usa el método `flat` para aplanar el arreglo en un solo nivel.

// Ejercicio 8: Eliminar Elementos Duplicados
// 1. Crea un arreglo llamado `numerosDuplicados` con los valores 1, 2, 2, 3, 4, 4, 5.
// 2. Usa el método `filter` y `indexOf` para crear un nuevo arreglo sin elementos duplicados.

// Ejercicio 9: Transformar Arreglo de Objetos a Arreglo de Valores
// 1. Crea un arreglo llamado `usuarios` con objetos que representen usuarios. Cada objeto debe tener propiedades `nombre` y `email`.
// 2. Usa el método `map` para crear un nuevo arreglo con solo los nombres de los usuarios.

// Ejercicio 10: Ordenar Arreglo de Objetos
// 1. Crea un arreglo llamado `productos` con objetos que representen productos. Cada objeto debe tener propiedades `nombre` y `precio`.
// 2. Usa el método `sort` para ordenar los productos por precio de menor a mayor.
