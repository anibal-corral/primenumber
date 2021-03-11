/** Este es el archivo que se ejecuta al inicio del proyecto por default
La idea es cumplir con esto:
Realizar un algoritmo que imprima los números primos entre 2 y  un número dado, de forma descendente.
*/
const numberservice=require('./services/numberservice.js');
//De acuerdo al numero ingresado por el usuario entonces procedo a obtener los numeros primos.
var args = process.argv.slice(2); //almacena los arugmentos entregados cuando se invoca.
//Asumiendo que se invoca de la siguiente forma:
//node index.js 7 donde 7 es el numero con el cual se requiere trabajar.
var numerosPrimos = numberservice.getPrimeNumbers(args);
// console.log('Numeros primos: ', numerosPrimos); //Esto lista los numeros primos de forma ordenada ascendente. Lo deje comentado porque no forma parte del caso de negocio
console.log('Numeros primos: ', numerosPrimos.reverse());//Esto es una lista
