const operations=require('../utils/operations.js');//Importar la clase que tiene la logica

const NumberService={};

function getPrimeNumbers(n){
  console.log("listar numeros primos de " + n);
let primeNumbers =[];
  if(n>2){
    //Por caso de negocio, solo considera los mayores a 2.
    for (i = 2; i <= n; i ++) {
        if (operations.isPrime(i)){primeNumbers.push(i);}
    }
  }
  return primeNumbers;
}

NumberService.getPrimeNumbers = getPrimeNumbers;
module.exports= NumberService;
