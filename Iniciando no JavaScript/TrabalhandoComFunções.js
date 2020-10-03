function parImp(num) {
    if (num % 2 == 0) {
        return "Par!";
    } else {
        return "Impar!";
    }
}

function fatorial(num) {
    let fat = 1;
    for (let i = 1; i <= num; i++) {
        fat *= i;   
    }
    return fat;
}

function fatorialRecursivo(n, fat = 1) {
    if (n == 1){
        return fat;
    } else {
        return fatorialRecursivo(n-1, fat * n)
    }
}

console.log(parImp(123))
console.log(fatorial(170))
console.log(fatorialRecursivo(170))