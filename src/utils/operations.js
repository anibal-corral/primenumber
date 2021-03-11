const Operations = {};

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


Operations.isPrime=isPrime;
module.exports = Operations;
