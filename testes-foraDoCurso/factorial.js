function factorial(num){
    if(num === 1 || num === 0){
        return 1;
    }
    return num * (factorial(num - 1));
}

console.log(factorial(5)); //120
console.log(factorial(2)); //2
console.log(factorial(10)); //3628800
console.log(factorial(0)); //1