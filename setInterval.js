let count = 0;

const intervalId = setInterval(() => {
  count += 1;
  console.log(count);
  if (count >= 10) {
    clearInterval(intervalId);
  }
}, 1000);

//RECURSIVIDAD
// function recursiveSum(current, limit) {
//     // Caso base: si el número actual es igual al límite, detiene la recursión
//     if (current >= limit) {
//         return current;
//     } else {
//         // Caso recursivo: suma 1 al número actual y llama a la función recursivamente
//         return recursiveSum(current + 1, limit);
//     }
// }
