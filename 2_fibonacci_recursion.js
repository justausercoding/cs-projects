function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

function fibsRec(n) {
    let numArray = [];
    let counter = 0;
    while (counter <= n) {
        numArray.push(fibonacci(counter));
        counter++;
    }
    return numArray;
}

// -- Test --
console.log(fibsRec(0));
console.log(fibsRec(2));
console.log(fibsRec(4));
console.log(fibsRec(10));
