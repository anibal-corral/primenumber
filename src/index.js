/** Este es el archivo que se ejecuta al inicio del proyecto por default
La idea es cumplir con esto:
Realizar un algoritmo que imprima los números primos entre 2 y  un número dado, de forma descendente.
*/

function isPrime(n){
    let max, d, r;
    max = Math.sqrt(n) + 1;
    if (n == 2)     { return (true); }
    if (n % 2 == 0) { return false; }
    for (d = 3; d < max; d += 2) {
        if (n % d == 0) { return false; }
    }
    return (true);
}
//Obtiene los numeros primos de acuerdo a un número dado.
function getPrimeNumbers(n){
console.log("listar numeros primos de " + n);
let primeNumbers =[];
if(n>2){
  //Por caso de negocio, solo considera los mayores a 2.
  for (i = 2; i <= n; i ++) {
      if (isPrime(i)){primeNumbers.push(i);}
  }
}
return primeNumbers;
}

//De acuerdo al numero ingresado por el usuario entonces procedo a obtener los numeros primos.
var args = process.argv.slice(2); //almacena los arugmentos entregados cuando se invoca.
//Asumiendo que se invoca de la siguiente forma:
//node index.js 7 donde 7 es el numero con el cual se requiere trabajar.
var numerosPrimos = getPrimeNumbers(args);
// console.log('Numeros primos: ', numerosPrimos); //Esto lista los numeros primos de forma ordenada ascendente. Lo deje comentado porque no forma parte del caso de negocio
console.log('Numeros primos: ', numerosPrimos.reverse());//Esto es una lista
